# Restructuring verification

Date: 2026-11-01 · Owner: ShadowWalkerNC · Library: 1.0.0.
Applies to this restructuring; not product runtime acceptance.

- PASS: `npm ci --ignore-scripts` on Node.js 24 / Linux.
- PASS: `npm test`: 24 behavioral and negative tests. Covers fresh/repeat adoption,
  read-only preview, offline integrity versus pinned-source verification, upgrade
  selection/override preservation, explicit preset removal, modified managed
  files, malformed locks, symlinks, concurrent edits, missing inputs/source,
  incorrect source/target origins, permissions, dirty targets, and default-branch
  protection in proposal requests.
- PASS: real committed-source CLI smoke against an isolated fixture: preview
  made no target writes, apply installed six files, check verified pinned source,
  and repeat upgrade produced zero changes.
- PASS: `npm run validate`: 34 public repository observations, all 108 historical
  rows reconciled, 30 selectable policies, and 240 sanitized archived files.
  Relative links/anchors, active schemas, IDs/references, policy metadata,
  compatibility entry points, workstation-path exclusions, and absence of a
  scheduled enrollment workflow checked.
- PASS: private-identity audit against historical explicitly private repository
  names, including published filenames and archived JSON keys. No current-tree
  matches remain. This is not proof that arbitrary future text is public-safe;
  publication review is still necessary. Prior Git history remains unchanged.
- PASS: existing product manifest schema and legacy manifest template preserved
  byte-for-byte. No product repository or external consumer was migrated.
- PASS: initial hosted Linux checks. Initial Windows checks exposed short-path
  spelling differences; target-root validation now compares filesystem identity
  (device/inode), retaining rejection of nested checkout paths. A fresh hosted
  Linux/Windows run verifies the fix on the PR.
- PASS: `npm audit` after pinning AJV 8.20.0: no reported vulnerabilities at
  verification time. The affected older dependency is no longer installed.
- NOT RUN: live cross-repository adoption workflow or real project rollout.
  Proposal behavior is exercised against fixture checkouts and mocked GitHub
  responses; a scoped token and a named project are needed for a real proposal.
- NOT RUN: product builds, deployments, clinical/payment/production acceptance.

## Review-sensitive compatibility changes

Old registry exports and phase contracts are now historical pointers, not runtime
contracts. Consumers of those exports must explicitly choose a suitable new
source; the public index is not a drop-in operational replacement. Private
identity-bearing URLs are intentionally withheld rather than republished.
Historical bytes remain available at the archive's recorded base Git commit.

No release tag is created. Adoption can select this PR's reviewed source commit
with library version 1.0.0; release tagging remains a separate owner action.
