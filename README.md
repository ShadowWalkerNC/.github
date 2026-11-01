# ShadowWalkerNC Standards Library

Reusable engineering guidance, optional design presets, and a public-safe
portfolio index. **Version 1.0.0** · Owner: ShadowWalkerNC.

## Use the library

Start with [working agreements](core/WORKING_AGREEMENTS.md), then choose the
[standards](standards/README.md) and [playbook](playbooks/README.md) needed for the
actual task. The [Design and Code Bible](standards/DESIGN_AND_CODE_BIBLE.md)
retains its canonical URL. Design applies only to the project and scope the owner
names. Neither a library update nor a merge adopts anything across the portfolio.

The [portfolio index](portfolio/README.md) holds identities and evidence links.
Product instructions, permissions, task state, and verification belong in each
product repo. The [historical archive](archive/README.md) is for reference only.

## Adopt in a project

Use Node.js 24 LTS. In a local checkout of this library, run `npm ci`.
Select a reviewed library Git commit and its matching version; no release tag is
created by this restructuring. A later tag may be used through `--ref v1.0.0`.

```sh
node scripts/standards.mjs preview --source . --ref <full-commit-sha> --version 1.0.0 --target /path/to/project --repo owner/project --scope "Named feature" --standards ARCHITECTURE_STANDARD,TESTING_STANDARD --playbooks bug-fix
node scripts/standards.mjs apply --source . --ref <full-commit-sha> --version 1.0.0 --target /path/to/project --repo owner/project --scope "Named feature" --standards ARCHITECTURE_STANDARD,TESTING_STANDARD --playbooks bug-fix
node scripts/standards.mjs check --target /path/to/project --repo owner/project
```

Both library and target must be Git checkouts with matching GitHub origins.
The target must match the exact named repository.
Preview prints proposed file additions/removals and unified diffs without writing
in the target. Apply is an explicit local action. It adds a managed link block to
AGENTS.md, preserving existing content and newline style. Selected Markdown is copied under
`.standards/`; the lock records source commit, scope, selections, and checksums. Bundle-local Git attributes
keep managed content at LF across operating systems. Symlink
paths and edited/untracked conflicting managed files are rejected before writing.

Select design with `--preset operational`, `reading`, `hospitality`, or `creative`.
No preset is selected by default. Use `--overrides docs/project-design.md` to
reference an existing project-local document; the tool never edits overrides.

Upgrade uses the same options as apply, with `upgrade` as the command. When
selection flags are omitted it preserves the installed selections and overrides;
explicit empty values clear a selection. Review the diff and commit in the target.
Do not edit managed files directly; use overrides and upgrades instead.

Offline `check` verifies bundle integrity and pin format. Add `--source <library-checkout>`
to verify every bundled file against the pinned Git object. Checksums alone do not
prove source authenticity; review the source commit before adoption. Missing or
inaccessible source objects fail without target writes. Existing Forge/product
manifests are neither read nor changed by adoption.

For remote proposals, manually dispatch **Propose standards adoption** with an
explicit owned target repository, scope, version and source ref. It opens a branch/PR,
never writes to a default branch, never merges, and never enrolls other projects.
The workflow needs `ORG_BOOTSTRAP_TOKEN` scoped to the selected target with contents
and pull-request write permission. Missing credentials/permissions fail the run.

## Maintain the library

```sh
npm ci
npm test
npm run validate
```

See [verification evidence](docs/VERIFICATION.md) and
[maintenance and migration](docs/MAINTENANCE.md) for authority, release rules,
compatibility, and historical reconciliation. Catalog selections are defined by
`library.json`; add guides there so adoption and validation share one source.
PR checks run read-only on Linux and Windows. Dependencies are locked.

No real product rollout, runtime policy engine, history rewrite, release tag,
production operation, or retrospective product certification is part of this change.
