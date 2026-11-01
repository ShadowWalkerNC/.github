import { readFileSync, readdirSync, existsSync, lstatSync } from 'node:fs';
import { resolve, relative, dirname, join } from 'node:path';
import { validateSchema } from './adoption.mjs';
const read = p => readFileSync(p, 'utf8');
function files(root, at = root) { return readdirSync(at, { withFileTypes: true }).flatMap(e => ['.git','node_modules'].includes(e.name) || e.isSymbolicLink() ? [] : e.isDirectory() ? files(root, join(at,e.name)) : [relative(root, join(at,e.name)).replaceAll('\\','/')]); }
function unique(values, label) { if (new Set(values).size !== values.length) throw new Error(`Duplicate ${label}`); }
export function anchors(text) {
  const counts = new Map();
  return new Set([...text.matchAll(/^#{1,6}\s+(.+)$/gm)].map(m => {
    const id = m[1].toLowerCase().replace(/[^\p{L}\p{N}\s_-]/gu, '').trim().replace(/\s/g, '-');
    const n = counts.get(id) ?? 0; counts.set(id, n+1); return n ? `${id}-${n}` : id;
  }));
}
export function validateTree(root) {
  root = resolve(root); const all = files(root); const active = all.filter(p => !p.startsWith('archive/2026-11-01/'));
  const json = p => JSON.parse(read(join(root,p)));
  for (const p of all.filter(p => p.endsWith('.json'))) json(p);
  const catalog = json('library.json'); validateSchema('library.schema.json',catalog);
  const index = json('portfolio/index.json'); validateSchema('public-index.schema.json',index);
  const map = json('portfolio/reconciliation.json'); validateSchema('reconciliation.schema.json',map);
  unique(index.entries.map(e=>e.id),'portfolio ID'); unique(index.entries.map(e=>e.repository.toLowerCase()),'repository');
  unique(map.rows.map(e=>`${e.source}:${e.sourceId}`),'reconciliation source ID');
  unique(map.rows.map(e=>`${e.source}:${e.sourcePosition}`),'reconciliation position');
  const ids = new Set(index.entries.map(e=>e.id));
  const mapped = new Set();
  for (const row of map.rows) {
    if (row.disposition==='included-public') { if (!ids.has(row.targetId)) throw new Error('Unknown reconciliation target'); mapped.add(row.targetId); }
    else if (row.targetId!==null || !/^withheld-\d+$/.test(row.sourceId)) throw new Error('Withheld identity disclosed');
  }
  for (const id of ids) if (!mapped.has(id)) throw new Error('Unmapped public index entry');
  for (const source of Object.keys(map.sourceCounts)) if ((map.rows.filter(e=>e.source===source).length!==map.sourceCounts[source] || map.rows.filter(e=>e.source===source).some(e=>e.sourcePosition > map.sourceCounts[source]))) throw new Error('Reconciliation count mismatch');
  for (const e of index.entries) {
    if (e.url !== `https://github.com/${e.repository}` || !e.evidence.length || !e.observations.length) throw new Error('Invalid evidence/repository reference');
  }
  const transfer = [...catalog.core,...Object.values(catalog.standards),...Object.values(catalog.playbooks),...Object.values(catalog.presets)];
  unique(transfer,'catalog path');
  for (const p of transfer) {
    if (!/^(core|standards|playbooks|presets)\/[A-Za-z0-9_.-]+\.md$/.test(p) || !existsSync(join(root,p))) throw new Error(`Missing/unsafe catalog entry: ${p}`);
    const text=read(join(root,p));
    if (!text.includes('Owner:') || !/Version:/.test(text) || !/Applies to:|Status: reusable preset library/.test(text)) throw new Error(`Missing policy metadata: ${p}`);
  }
  let links=0;
  for (const p of active.filter(p=>p.endsWith('.md'))) {
    const raw=read(join(root,p)); const text=raw.replace(/```[\s\S]*?```/g,'');
    if ((raw.match(/^```/gm)??[]).length%2) throw new Error(`Unclosed code fence: ${p}`);
    for (const m of text.matchAll(/\]\(([^)]+)\)/g)) {
      let href=m[1]; if (/^https?:|^mailto:/i.test(href)) continue;
      if (/^[a-z]+:/i.test(href)) throw new Error(`Forbidden link scheme: ${p}`);
      const [part, anchor]=href.split('#'); const dest=resolve(dirname(join(root,p)),decodeURIComponent(part));
      if (relative(root,dest).startsWith('..') || !existsSync(dest)) throw new Error(`Broken local link: ${p} -> ${href}`);
      const destRel=relative(root,dest).replaceAll('\\','/');
      if (anchor && dest.endsWith('.md') && !anchors(read(dest)).has(decodeURIComponent(anchor))) throw new Error(`Broken anchor: ${p} -> ${href}`);
      const pointer=raw.startsWith('# Historical entry point');
      if (destRel.startsWith('archive/2026-11-01/') && !pointer && !p.startsWith('archive/')) throw new Error(`Active navigation loads archive: ${p}`);
      if (!pointer && !p.startsWith('archive/') && dest.endsWith('.md') && read(dest).startsWith('# Historical entry point')) throw new Error(`Active navigation uses superseded entry: ${p} -> ${href}`);
      links++;
    }
  }
  const archive=json('archive/index.json'); unique(archive.files.map(e=>e.original),'archive original path');
  for (const item of archive.files) if (!existsSync(join(root,item.snapshot))) throw new Error(`Missing archived entry: ${item.original}`);
  const compatibility=['README.md','AGENTS.md','BOOT.md','AGENT_DISPATCH.md','SESSION_START.md','standards/DESIGN_AND_CODE_BIBLE.md'];
  for (const path of compatibility) if (!existsSync(join(root,path))) throw new Error(`Missing published entry: ${path}`);
  // Scan the entire published tree, including sanitized snapshots. Do not print offending values.
  for (const p of all) {
    const text=read(join(root,p));
    if (/(?:file:\/\/\/|\b[A-Za-z]:[\\/](?:Users|Documents|Desktop)[\\/]|\/Users\/[^/\s]+\/|\/home\/[^/\s]+\/)/i.test(text)) throw new Error(`Workstation path in published content: ${p}`);
  }
  const workflow=read(join(root,'.github/workflows/auto-bootstrap.yml'));
  if (/\bschedule\s*:|\bcron\s*:/.test(workflow) || !workflow.includes('workflow_dispatch:')) throw new Error('Automatic project enrollment is forbidden');
  return { status:'PASS', publicRepositories:index.entries.length, reconciledRows:map.rows.length, selectedPolicies:transfer.length, localLinks:links, archivedFiles:archive.files.length };
}
