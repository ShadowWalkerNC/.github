/**
 * bootstrap-repos.js
 * Scans all ShadowWalkerNC repos. For any repo missing AGENTS.md at root,
 * generates a project-specific AGENTS.md from repo metadata and pushes it.
 *
 * Required env vars:
 *   ORG_BOOTSTRAP_TOKEN — PAT with contents:write on all org repos
 *   DRY_RUN             — 'true' to list only, no push
 */

const { Octokit } = require('@octokit/rest');

const ORG = 'ShadowWalkerNC';
const DRY_RUN = process.env.DRY_RUN === 'true';
const TOKEN = process.env.ORG_BOOTSTRAP_TOKEN;

// Repos to never auto-bootstrap (they have manually crafted AGENTS.md or are meta repos)
const SKIP_REPOS = [
  '.github',         // This repo — already has AGENTS.md
  'RecipeOS',        // Manually bootstrapped
  'CulinaryOS',      // Manually bootstrapped
  'NexCMS',          // Manually bootstrapped
];

if (!TOKEN) {
  console.error('ERROR: ORG_BOOTSTRAP_TOKEN secret is not set.');
  console.error('Set it at: https://github.com/organizations/ShadowWalkerNC/settings/secrets/actions');
  console.error('Required permissions: Contents — Read & Write on all org repos');
  process.exit(1);
}

const octokit = new Octokit({ auth: TOKEN });

async function getAllRepos() {
  const repos = [];
  let page = 1;
  while (true) {
    const { data } = await octokit.repos.listForOrg({
      org: ORG,
      type: 'all',
      per_page: 100,
      page,
    });
    if (data.length === 0) break;
    repos.push(...data);
    if (data.length < 100) break;
    page++;
  }
  return repos;
}

async function hasAgentsMd(owner, repo, defaultBranch) {
  try {
    await octokit.repos.getContent({
      owner,
      repo,
      path: 'AGENTS.md',
      ref: defaultBranch,
    });
    return true;
  } catch (e) {
    if (e.status === 404) return false;
    throw e;
  }
}

async function getReadmeSnippet(owner, repo, defaultBranch) {
  try {
    const { data } = await octokit.repos.getContent({
      owner,
      repo,
      path: 'README.md',
      ref: defaultBranch,
    });
    const content = Buffer.from(data.content, 'base64').toString('utf8');
    // Extract first non-empty paragraph after the title (up to 300 chars)
    const lines = content.split('\n').filter(l => l.trim() && !l.startsWith('#'));
    return lines[0]?.substring(0, 300) || '';
  } catch {
    return '';
  }
}

async function detectStack(owner, repo, defaultBranch) {
  const stackHints = [];
  const fileChecks = [
    { path: 'package.json',        hint: 'Node.js / TypeScript' },
    { path: 'pnpm-workspace.yaml', hint: 'pnpm monorepo' },
    { path: 'turbo.json',          hint: 'Turborepo' },
    { path: 'build.gradle.kts',    hint: 'Kotlin / Android' },
    { path: 'Cargo.toml',          hint: 'Rust' },
    { path: 'go.mod',              hint: 'Go' },
    { path: 'pyproject.toml',      hint: 'Python' },
    { path: 'requirements.txt',    hint: 'Python' },
    { path: 'docker-compose.yml',  hint: 'Docker' },
    { path: 'supabase',            hint: 'Supabase' },
    { path: 'next.config.ts',      hint: 'Next.js' },
    { path: 'next.config.js',      hint: 'Next.js' },
    { path: 'vite.config.ts',      hint: 'Vite' },
  ];
  for (const check of fileChecks) {
    try {
      await octokit.repos.getContent({ owner, repo, path: check.path, ref: defaultBranch });
      if (!stackHints.includes(check.hint)) stackHints.push(check.hint);
    } catch { /* file not present */ }
  }
  return stackHints.length > 0 ? stackHints.join(' · ') : 'Unknown — update manually';
}

function generateAgentsMd(repo) {
  const { name, description, defaultBranch, stack, readmeSnippet, htmlUrl } = repo;
  const desc = description || readmeSnippet || 'No description — update this field.';
  const date = new Date().toISOString().split('T')[0];

  return `# AGENTS.md — ${name}

> **Extends:** \`ShadowWalkerNC/.github/AGENTS.md\` — all global rules apply unconditionally.
> **Auto-loaded by:** Claude Code · GitHub Copilot · OpenAI Codex · Cursor · Windsurf
> **Canonical global system:** [ShadowWalkerNC/.github](https://github.com/ShadowWalkerNC/.github)
> **Auto-generated:** ${date} by auto-bootstrap workflow. Update this file with project specifics.

---

## Project Identity

\`\`\`
Project:      ${name}
Description:  ${desc.replace(/`/g, "'").substring(0, 200)}
Status:       [planning | in development | in production | paused] — UPDATE THIS
Phase:        [phase number and name] — UPDATE THIS
Priority:     [active | maintenance | low] — UPDATE THIS
\`\`\`

---

## Tech Stack

\`\`\`
Detected:     ${stack}

Fill in the full stack:
Language:     [e.g. TypeScript, Kotlin, Python]
Framework:    [e.g. Next.js 15, Node.js, Android Jetpack Compose]
Database:     [e.g. Supabase, PostgreSQL, SQLite]
Hosting:      [e.g. Railway, Vercel, self-hosted]
Key APIs:     [e.g. Anthropic, Stripe]
CI/CD:        [e.g. GitHub Actions, manual]
\`\`\`

---

## Repository Structure

\`\`\`
[Update with actual directory tree and one-line descriptions]
\`\`\`

---

## Active Agents for ${name}

\`\`\`
Always active:    COHERENCE · SECURITY · DOCS

Default on-demand: [list agents most commonly needed — UPDATE THIS]
  ENGINEER      ← code quality, APIs, frontend/backend
  ARCHITECT     ← if this touches system boundaries

Rarely needed: [list agents to skip unless explicitly required]
\`\`\`

---

## Project-Specific Rules

[Add rules that extend or override global AGENTS.md for this project.]
[Global Tier 1–3 rules cannot be overridden.]

1. [Add project-specific rule here]

---

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| [VAR_NAME] | Yes / No | [what it does] |

Never commit values. Always use \`.env.example\`.

---

## Current Phase Context

\`\`\`
Phase goal:          [what this phase is trying to accomplish — UPDATE THIS]
Definition of done:  [how we know this phase is complete — UPDATE THIS]
Blocking issues:     [anything preventing progress — UPDATE THIS]
Next phase:          [what comes after — UPDATE THIS]
\`\`\`

---

## Known Issues / Watch List

[Add repo-specific gotchas, tightly coupled modules, fragile areas, etc.]

---

## Agent Confirmation for ${name}

After loading this file, add to \`DISPATCH CONFIRMED\`:

\`\`\`
Project AGENTS.md: loaded — ${name}
Stack: ${stack}
Phase: [phase — UPDATE]
Note: This file was auto-generated. Review and complete all [UPDATE THIS] fields.
\`\`\`

---

*Auto-generated: ${date} | Extends: ShadowWalkerNC/.github/AGENTS.md | Repo: [${name}](${htmlUrl})*
*Action required: Fill in all [UPDATE THIS] fields before using this repo in a session.*
`;
}

async function pushAgentsMd(owner, repo, defaultBranch, content) {
  const message = 'feat(agents): auto-bootstrap AGENTS.md — update [UPDATE THIS] fields before use';
  const contentEncoded = Buffer.from(content).toString('base64');

  // Check if file already exists (safety check)
  try {
    await octokit.repos.getContent({ owner, repo, path: 'AGENTS.md', ref: defaultBranch });
    console.log(`  SKIP: AGENTS.md already exists in ${repo} (race condition check)`);
    return;
  } catch (e) {
    if (e.status !== 404) throw e;
  }

  await octokit.repos.createOrUpdateFileContents({
    owner,
    repo,
    path: 'AGENTS.md',
    message,
    content: contentEncoded,
    branch: defaultBranch,
  });
}

async function main() {
  console.log(`Bootstrap run — Org: ${ORG} | Dry run: ${DRY_RUN}`);
  console.log('---');

  const repos = await getAllRepos();
  console.log(`Found ${repos.length} repos in ${ORG}`);

  const toBootstrap = [];
  const skipped = [];
  const alreadyHave = [];

  for (const repo of repos) {
    const { name, default_branch: defaultBranch, archived, disabled } = repo;

    if (SKIP_REPOS.includes(name)) {
      skipped.push(name);
      continue;
    }
    if (archived || disabled) {
      skipped.push(`${name} (archived/disabled)`);
      continue;
    }

    const hasFile = await hasAgentsMd(ORG, name, defaultBranch);
    if (hasFile) {
      alreadyHave.push(name);
      continue;
    }

    // Gather repo metadata for generation
    const readmeSnippet = await getReadmeSnippet(ORG, name, defaultBranch);
    const stack = await detectStack(ORG, name, defaultBranch);

    toBootstrap.push({
      name,
      description: repo.description,
      defaultBranch,
      stack,
      readmeSnippet,
      htmlUrl: repo.html_url,
    });
  }

  console.log(`\nAlready have AGENTS.md (${alreadyHave.length}): ${alreadyHave.join(', ') || 'none'}`);
  console.log(`Skipped (${skipped.length}): ${skipped.join(', ') || 'none'}`);
  console.log(`\nNeeds bootstrap (${toBootstrap.length}):`);

  if (toBootstrap.length === 0) {
    console.log('  All repos are up to date. Nothing to do.');
    return;
  }

  for (const repo of toBootstrap) {
    console.log(`  → ${repo.name} (${repo.defaultBranch}) — Stack: ${repo.stack}`);
  }

  if (DRY_RUN) {
    console.log('\nDRY RUN — no files pushed.');
    return;
  }

  console.log('\nPushing AGENTS.md to new repos...');
  let pushed = 0;
  let failed = 0;

  for (const repo of toBootstrap) {
    try {
      const content = generateAgentsMd(repo);
      await pushAgentsMd(ORG, repo.name, repo.defaultBranch, content);
      console.log(`  ✅ ${repo.name}`);
      pushed++;
    } catch (e) {
      console.error(`  ❌ ${repo.name}: ${e.message}`);
      failed++;
    }
  }

  console.log(`\nDone. Pushed: ${pushed} | Failed: ${failed}`);
  if (failed > 0) process.exit(1);
}

main().catch(e => {
  console.error('Bootstrap script failed:', e);
  process.exit(1);
});
