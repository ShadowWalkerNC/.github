import { plan, apply, git, sha256 } from './adoption.mjs';
export async function githubApi(token, method, path, body) {
  if (!token) throw new Error('ORG_BOOTSTRAP_TOKEN is required for PR proposals');
  const response = await fetch(`https://api.github.com${path}`, { method, headers: { authorization: `Bearer ${token}`, accept: 'application/vnd.github+json', 'x-github-api-version': '2022-11-28', ...(body ? { 'content-type': 'application/json' } : {}) }, body: body ? JSON.stringify(body) : undefined });
  if (!response.ok) throw new Error(`GitHub ${method} failed (${response.status}); check selected repository permissions`);
  return response.json();
}
export async function propose(opts, { api = (method, path, body) => githubApi(process.env.ORG_BOOTSTRAP_TOKEN, method, path, body), run = git } = {}) {
  if (!/^ShadowWalkerNC\/[A-Za-z0-9_.-]+$/.test(opts.repo ?? '') || opts.repo.toLowerCase() === 'shadowwalkernc/.github') throw new Error('Proposal requires an explicitly selected owned product repository');
  // Permission and base checks precede local mutations, branch creation, and pushes.
  const meta = await api('GET', `/repos/${opts.repo}`);
  if (!meta.permissions?.push || meta.archived || meta.disabled || meta.full_name.toLowerCase() !== opts.repo.toLowerCase()) throw new Error('Unauthorized or unavailable target repository');
  if (!/^[A-Za-z0-9_./-]+$/.test(meta.default_branch) || meta.default_branch.startsWith('-')) throw new Error('Invalid default branch');
  const base = await api('GET', `/repos/${opts.repo}/git/ref/heads/${meta.default_branch}`);
  const result = plan(opts);
  if (run(result.target, 'status', '--porcelain').trim()) throw new Error('Proposal requires a clean target checkout');
  if (run(result.target, 'rev-parse', 'HEAD').trim() !== base.object.sha) throw new Error('Proposal checkout must match current default-branch head');
  if (!result.changes.length) return { unchanged: true };
  const branch = `standards/v${result.lock.libraryVersion}-${result.lock.sourceCommit.slice(0, 8)}-${sha256(JSON.stringify(result.lock.selection)+JSON.stringify(result.lock.overrides)).slice(0, 8)}`;
  if (branch === meta.default_branch) throw new Error('Refusing default-branch write');
  run(result.target, 'switch', '-c', branch);
  apply(result);
  run(result.target, 'add', '--', ...result.changes.map(c => c.path));
  run(result.target, '-c', 'user.name=standards-bot', '-c', 'user.email=standards-bot@users.noreply.github.com', 'commit', '-m', `chore: adopt standards ${result.lock.libraryVersion}`);
  run(result.target, 'push', 'origin', `HEAD:refs/heads/${branch}`);
  const pr = await api('POST', `/repos/${opts.repo}/pulls`, { title: `chore: adopt standards ${result.lock.libraryVersion}`, head: branch, base: meta.default_branch, body: `Explicitly selected standards bundle pinned to ${result.lock.sourceCommit}.\n\nExisting project instructions and local overrides are preserved. Review selected guidance and scope before merging. No stack migration, deployment, permission change, or other project rollout is included.\n\nVerify with the local standards check command. This automation does not merge or enable auto-merge.` });
  return { url: pr.html_url, branch };
}
