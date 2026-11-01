# Library maintenance and migration

Owner: ShadowWalkerNC · Version: 1.0.0 · Applies to: this library and its release process.
Canonical location: `docs/MAINTENANCE.md`.

## Authority map

Root AGENTS.md governs work in this repo within platform/owner instructions.
Core agreements supply adopted defaults. Standards and playbooks apply only when
selected. The Bible governs named project design scope. Product-local docs own
execution permissions/state and acceptance. The portfolio index owns public
identity and dated evidence references. Archive text has no active authority.

## Migration and unresolved claims

Archive index.json maps the original published paths to a sanitized dated snapshot.
Root reports, historical registries, phase records, UPA and old decisions remain
reachable through compatibility pointers. Their contradictory completion and
permission claims are historical and unverified here. Archiving a decision does
not certify or revoke a product-specific decision; its applicability must be
confirmed in that product. Active library rules no longer load any phase/ledger.

The portfolio reconciliation preserves every historical input row. Categories
and lifecycle conflicts stay unverified. Existing product manifests retain their
schema and legacy template unchanged. Old registry exports are deprecated historical pointers, not
schema-compatible replacements: external consumers must explicitly migrate to
the new public index only if that suits their purpose. No consumer was rolled out.

## Releases and adoption

library.json defines the library version, source repository, and selectable files.
Use semantic versions: patch clarifies, minor adds compatible guides, major changes
adoption or incompatible expectations. Individual policies may have independent
versions (the Bible is 1.1.0). Update changelog/catalog and checks together. Review
a PR before tagging a release; this change does not publish a tag. Adoption records
the reviewed immutable commit, not a moving branch. Do not reuse release versions
for different contents. Existing adopters remain pinned until an upgrade PR.

## Privacy and automation

No workstation paths, private identities without approval, secrets, product test
totals, or current operational ledgers belong in the active index. The snapshot is
sanitized; originals remain in prior Git history. This is not history erasure or
a claim that historic content never became public. Review new public evidence.

PR CI has read-only contents permission and no cross-repo credentials. Manual
proposal automation checks the exact owned target and write permission before
creating a branch, then opens a PR. It never merges or writes default branches.
No schedule, automatic enrollment, product rollout, or scheduled upgrade is enabled.

Private identity-bearing historical paths are intentionally not republished.
The archive map uses opaque paths plus original-path SHA-256 values for those
entries; originals remain recoverable at the recorded base Git commit.
