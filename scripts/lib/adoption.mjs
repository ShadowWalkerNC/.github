import { readFileSync, writeFileSync, existsSync, lstatSync, statSync, realpathSync, mkdirSync, renameSync, unlinkSync, rmdirSync, mkdtempSync, rmSync } from 'node:fs';
import { resolve, dirname, relative, join, posix, isAbsolute } from 'node:path';
import { tmpdir } from 'node:os';
import { execFileSync, spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import Ajv from 'ajv';
import { fileURLToPath } from 'node:url';
const root = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const ajv = new Ajv({ allErrors: true, strict: true });
export const sha256 = s => createHash('sha256').update(s).digest('hex');
export const START = '<!-- shadowwalker-standards:start -->';
export const END = '<!-- shadowwalker-standards:end -->';
const LOCK = '.standards/lock.json';
export function validateSchema(name, data) {
  const validate = ajv.compile(JSON.parse(readFileSync(join(root, 'schemas', name), 'utf8')));
  if (!validate(data)) throw new Error(`${name}: ${ajv.errorsText(validate.errors)}`);
}
export function git(cwd, ...args) {
  try { return execFileSync('git', ['-C', cwd, ...args], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], maxBuffer: 8 * 1024 * 1024 }); }
  catch { throw new Error(`Git source/target operation failed: ${args[0]}. Check checkout, ref, and access.`); }
}
export function normalizeRepository(url) {
  const m = /^(?:https:\/\/github\.com\/|git@github\.com:|ssh:\/\/git@github\.com\/)([^/\s]+\/[^/\s]+?)\/?$/.exec(url.trim());
  return m ? m[1].replace(/\.git$/, '').toLowerCase() : null;
}
export function safePath(p) {
  if (typeof p !== 'string' || !p || p.includes('\\') || p.includes('\0') || isAbsolute(p) || p.split('/').some(x => !x || x === '.' || x === '..') || !/^[A-Za-z0-9_./-]+$/.test(p)) throw new Error('Unsafe managed path');
  return p;
}
function checkedPath(target, p) {
  safePath(p);
  let current = target;
  for (const part of p.split('/')) {
    current = join(current, part);
    if (existsSync(current) || (() => { try { lstatSync(current); return true; } catch { return false; } })()) {
      const st = lstatSync(current);
      if (st.isSymbolicLink()) throw new Error(`Symlink path rejected: ${p}`);
      if (current !== join(target, p) && !st.isDirectory()) throw new Error(`Non-directory ancestor: ${p}`);
    }
  }
  return join(target, p);
}
function targetInfo(target, repo) {
  if (!target || !repo || !/^[A-Za-z0-9][A-Za-z0-9_.-]*\/[A-Za-z0-9_.-]+$/.test(repo)) throw new Error('Explicit --target and --repo owner/name are required');
  const path = realpathSync(resolve(target));
  // Windows short aliases, drive-letter case, and Git path spelling may differ.
  // Compare the resolved directory's filesystem identity instead of its spelling.
  const requested = statSync(path, { bigint: true });
  const checkout = statSync(git(path, 'rev-parse', '--show-toplevel').trim(), { bigint: true });
  if (requested.dev !== checkout.dev || requested.ino !== checkout.ino) throw new Error('Target must be the checkout root');
  if (normalizeRepository(git(path, 'remote', 'get-url', 'origin')) !== repo.toLowerCase()) throw new Error('Unauthorized repository: target origin does not match --repo');
  checkedPath(path, LOCK); checkedPath(path, 'AGENTS.md');
  return path;
}
function readMaybe(path) { return existsSync(path) ? readFileSync(path, 'utf8') : null; }
function integration(lock) { return `${START}\nAdopted ShadowWalkerNC standards ${lock.libraryVersion} at ${lock.sourceCommit}.\nRead [.standards/README.md](.standards/README.md). Project-local instructions and\nexplicit owner direction govern; the bundle supplies selected defaults only.\n${END}`; }
function getBlock(text) {
  const start = text.indexOf(START); const end = text.indexOf(END);
  if (start < 0 && end < 0) return null;
  if (start < 0 || end < start || text.indexOf(START, start + START.length) >= 0 || text.indexOf(END, end + END.length) >= 0) throw new Error('Malformed/duplicate managed AGENTS block');
  return text.slice(start, end + END.length);
}
function validateLock(lock) {
  validateSchema('adoption.schema.json', lock);
  if (!lock.managedFiles.length) throw new Error('Empty managed file list');
  const paths = new Set();
  for (const f of lock.managedFiles) {
    safePath(f.path);
    if (!f.path.startsWith('.standards/') || f.path === LOCK || paths.has(f.path)) throw new Error('Invalid/duplicate managed file');
    if (f.sourcePath !== null) safePath(f.sourcePath);
    paths.add(f.path);
  }
  for (const p of lock.overrides) { safePath(p); if (p.startsWith('.standards/') || p === 'AGENTS.md' || p === '.git' || p.startsWith('.git/')) throw new Error('Overrides must be separate project-local documents'); }
}
function installed(target, repo) {
  const text = readMaybe(checkedPath(target, LOCK));
  const agents = readMaybe(checkedPath(target, 'AGENTS.md')) ?? '';
  if (!text) { if (getBlock(agents)) throw new Error('Managed AGENTS block exists without lock'); return { lock: null, agents }; }
  const lock = JSON.parse(text); validateLock(lock);
  if (lock.targetRepository.toLowerCase() !== repo.toLowerCase()) throw new Error('Lock target repository mismatch');
  for (const f of lock.managedFiles) {
    const content = readMaybe(checkedPath(target, f.path));
    if (content === null || sha256(content) !== f.sha256) throw new Error(`Locally modified/missing managed file: ${f.path}`);
  }
  const block = getBlock(agents);
  if (!block || sha256(block.replaceAll('\r\n', '\n')) !== lock.integrationSha256 || block.replaceAll('\r\n', '\n') !== integration(lock)) throw new Error('Locally modified/missing managed AGENTS block');
  for (const p of lock.overrides) if (!existsSync(checkedPath(target, p)) || !lstatSync(join(target, p)).isFile()) throw new Error(`Missing override: ${p}`);
  return { lock, agents };
}
function selection(catalog, opts, old) {
  const choose = (key) => opts[key] === undefined ? old?.selection[key] ?? [] : opts[key];
  const s = { core: catalog.core, standards: choose('standards'), playbooks: choose('playbooks'), preset: opts.preset === undefined ? old?.selection.preset ?? null : opts.preset || null };
  for (const type of ['standards', 'playbooks']) {
    if (!Array.isArray(s[type]) || new Set(s[type]).size !== s[type].length) throw new Error(`Invalid ${type} selection`);
    for (const id of s[type]) if (!Object.hasOwn(catalog[type], id)) throw new Error(`Unknown ${type}: ${id}`);
    s[type] = [...s[type]].sort();
  }
  if (s.preset && !Object.hasOwn(catalog.presets, s.preset)) throw new Error('Unknown design preset');
  if (s.standards.includes('DESIGN_AND_CODE_BIBLE') && !s.preset) throw new Error('Design Bible adoption requires an explicit --preset');
  return s;
}
export function loadSource(opts) {
  if (!opts.source || !opts.ref || !opts.version || !/^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)$/.test(opts.version) || !/^[A-Za-z0-9][A-Za-z0-9_./-]*$/.test(opts.ref)) throw new Error('Explicit --source, valid --ref and semantic --version are required');
  const source = realpathSync(resolve(opts.source));
  const commit = git(source, 'rev-parse', '--verify', `${opts.ref}^{commit}`).trim();
  if (!/^[a-f0-9]{40}$/.test(commit)) throw new Error('Unsupported Git object format');
  const read = p => git(source, 'show', `${commit}:${safePath(p)}`);
  const catalog = JSON.parse(read('library.json')); validateSchema('library.schema.json', catalog);
  if (normalizeRepository(git(source, 'remote', 'get-url', 'origin')) !== catalog.repository.toLowerCase()) throw new Error('Source origin does not match library repository');
  if (catalog.version !== opts.version) throw new Error('Library version does not match pinned source');
  for (const p of [...catalog.core, ...Object.values(catalog.standards), ...Object.values(catalog.playbooks), ...Object.values(catalog.presets)]) {
    safePath(p); if (!/^(core|standards|playbooks|presets)\/[A-Za-z0-9_.-]+\.md$/.test(p)) throw new Error('Catalog path outside library');
  }
  return { source, commit, read, catalog };
}
function bundle(src, s, overrides, repo, scope) {
  const selected = [...s.core, ...s.standards.map(x => src.catalog.standards[x]), ...s.playbooks.map(x => src.catalog.playbooks[x])];
  if (s.preset) selected.push(src.catalog.standards.DESIGN_AND_CODE_BIBLE, src.catalog.presets[s.preset]);
  const paths = [...new Set(selected)].sort(); const files = new Map();
  files.set('.standards/.gitattributes', { content: '* text eol=lf\n', sourcePath: null });
  for (const path of paths) {
    let content = src.read(path);
    content = content.replace(/\]\(([^)]+)\)/g, (match, href) => {
      if (/^[a-z]+:|^#/i.test(href)) return match;
      const [part, anchor] = href.split('#'); const resolved = posix.normalize(posix.join(posix.dirname(path), part));
      if (paths.includes(resolved)) return match;
      return `](https://github.com/${src.catalog.repository}/blob/${src.commit}/${resolved}${anchor ? '#'+anchor : ''})`;
    });
    files.set(`.standards/${path}`, { content, sourcePath: path });
  }
  const links = paths.map(p => `- [${p}](${p})`).join('\n');
  const extras = overrides.length ? '\nProject-local overrides (not managed):\n'+overrides.map(p => `- [${p}](../${p})`).join('\n')+'\n' : '';
  files.set('.standards/README.md', { sourcePath: null, content: `# Adopted standards\n\nTarget: ${repo}\nScope: ${scope}\nLibrary: ${src.catalog.version}\nSource: https://github.com/${src.catalog.repository}/tree/${src.commit}\n\nSelected guidance only. Platform and owner instructions govern; no permissions\nor product adoption beyond the named scope are granted by this bundle.\n\n${links}\n${extras}\nRun check to verify local integrity; use --source to verify pinned Git provenance.\n` });
  return files;
}
export function plan(opts) {
  const target = targetInfo(opts.target, opts.repo);
  const old = installed(target, opts.repo);
  if (opts.requireInstalled && !old.lock) throw new Error("Upgrade requires an installed bundle");
  const src = loadSource(opts); const s = selection(src.catalog, opts, old.lock);
  const scope = opts.scope === undefined ? old.lock?.scope : opts.scope;
  if (typeof scope !== "string" || !scope.trim() || scope.length > 400 || /[\r\n]/.test(scope)) throw new Error("Explicit --scope is required for fresh adoption");
  const overrides = opts.overrides === undefined ? old.lock?.overrides ?? [] : opts.overrides;
  if (!Array.isArray(overrides) || new Set(overrides).size !== overrides.length) throw new Error('Invalid overrides');
  const files = bundle(src, s, overrides, opts.repo, scope);
  const lock = { schemaVersion: 1, targetRepository: opts.repo, scope, libraryVersion: src.catalog.version, sourceRepository: src.catalog.repository, sourceCommit: src.commit, selection: s, overrides, managedFiles: [...files].map(([path, f]) => ({ path, sourcePath: f.sourcePath, sha256: sha256(f.content) })), integrationSha256: '' };
  lock.integrationSha256 = sha256(integration(lock)); validateLock(lock);
  for (const p of overrides) if (!existsSync(checkedPath(target, p)) || !lstatSync(join(target, p)).isFile()) throw new Error(`Missing override: ${p}`);
  const block = getBlock(old.agents);
  const newline = old.agents.includes('\r\n') ? '\r\n' : '\n';
  const nextBlock = integration(lock).replaceAll('\n', newline);
  const agents = block ? old.agents.replace(block, nextBlock) : old.agents + (old.agents && !old.agents.endsWith('\n') ? newline : '') + newline + nextBlock + newline;
  files.set(LOCK, { content: JSON.stringify(lock, null, 2)+'\n', sourcePath: null });
  files.set('AGENTS.md', { content: agents, sourcePath: null });
  const oldPaths = new Set([...(old.lock?.managedFiles.map(f => f.path) ?? []), ...(old.lock ? [LOCK] : [])]);
  const changes = [];
  for (const [path, f] of files) {
    const current = readMaybe(checkedPath(target, path));
    if (path !== 'AGENTS.md' && current !== null && !oldPaths.has(path)) throw new Error(`Unmanaged file conflict: ${path}`);
    if (current !== f.content) changes.push({ path, before: current, after: f.content });
  }
  for (const path of oldPaths) if (!files.has(path)) changes.push({ path, before: readMaybe(checkedPath(target, path)), after: null });
  return { target, repo: opts.repo, changes, lock };
}
export function diff(changes) {
  const temp = mkdtempSync(join(tmpdir(), 'standards-diff-'));
  try { return changes.map((c, i) => {
    const a = join(temp, `${i}-before`), b = join(temp, `${i}-after`);
    writeFileSync(a, c.before ?? ''); writeFileSync(b, c.after ?? '');
    const result = spawnSync('git', ['diff', '--no-index', '--no-ext-diff', '--', a, b], { encoding: 'utf8' });
    if (result.error || result.status > 1) throw new Error('Cannot generate preview diff');
    return `${c.before === null ? 'ADD' : c.after === null ? 'REMOVE' : 'UPDATE'} ${c.path}\n${result.stdout.replaceAll(a.replaceAll('\\','/'), `a/${c.path}`).replaceAll(b.replaceAll('\\','/'), `b/${c.path}`)}`;
  }).join('\n'); } finally { rmSync(temp, { recursive: true, force: true }); }
}
export function apply(result) {
  // Recheck the complete plan before any writes to catch concurrent changes/symlinks.
  for (const c of result.changes) if (readMaybe(checkedPath(result.target, c.path)) !== c.before) throw new Error(`Concurrent change: ${c.path}`);
  const written = []; const createdDirs = new Set();
  function ensureDir(path) { if (existsSync(path)) return; ensureDir(dirname(path)); mkdirSync(path); createdDirs.add(path); }
  try {
    for (const c of result.changes) {
      const path = checkedPath(result.target, c.path);
      if (c.after === null) unlinkSync(path);
      else { ensureDir(dirname(path)); const temp = `${path}.standards-tmp-${process.pid}`; if (existsSync(temp)) throw new Error('Temporary path conflict'); try { writeFileSync(temp, c.after, { flag: 'wx' }); renameSync(temp, path); } finally { if (existsSync(temp)) unlinkSync(temp); } }
      written.push(c);
    }
  } catch (error) {
    for (const c of written.reverse()) { const path = checkedPath(result.target, c.path); if (c.before === null) { if (existsSync(path)) unlinkSync(path); } else writeFileSync(path, c.before); }
    for (const dir of [...createdDirs].reverse()) { try { rmdirSync(dir); } catch {} }
    throw error;
  }
  return result.changes.length;
}
export function check(opts) {
  const target = targetInfo(opts.target, opts.repo); const { lock } = installed(target, opts.repo);
  if (!lock) throw new Error('No adoption lock installed');
  if (opts.source) {
    const result = plan({ target, repo: opts.repo, source: opts.source, ref: lock.sourceCommit, version: lock.libraryVersion, standards: lock.selection.standards, playbooks: lock.selection.playbooks, preset: lock.selection.preset, overrides: lock.overrides, scope: lock.scope });
    if (result.changes.length) throw new Error('Pinned source does not match installed bundle/lock');
  }
  return { sourceVerified: Boolean(opts.source), managedFiles: lock.managedFiles.length };
}
