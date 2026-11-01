> **Historical snapshot — 2026-11-01.** Sanitized reference only. Not current instructions, authority, or product acceptance. See the archive README.

# ADR-0007 — CulinaryOS data ownership
Status: accepted strategic intent; implementation pending
Owner: ShadowWalkerNC
Date: 2026-10-03

## Requirement and context
Consolidation must not introduce hidden cross-module database ownership.

## Decision
Core owns orders, payments, configuration and base inventory; Prep recipes/prep; Ops labor/vendors/purchasing/waste; Marketing campaigns/publishing; Web content/themes; Intelligence recommendations. ShorelineOps owns resident clinical dining.

## Alternatives and consequences
Use APIs and typed/versioned events across boundaries. Map existing schemas before migration; target ownership does not prove current database implementation.

## Evidence and execution gate
Accepted by the owner's canonical Master Blueprint v4.0, sections 62–70. This record documents that supplied decision; it does not certify implementation or authorize gated mutations.
See [current phase](../execution/CURRENT_PHASE.yaml), [portfolio](../portfolio/PORTFOLIO.yaml), and [migration matrix](../migrations/MIGRATION_MATRIX.yaml). Complete applicable phase checks before implementation.
