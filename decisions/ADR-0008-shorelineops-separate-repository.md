# ADR-0008 — ShorelineOps separate repository
Status: accepted strategic intent; implementation pending
Owner: ShadowWalkerNC
Date: 2026-10-03

## Requirement and context
Clinical dining has specialized safety, deployment and potential compliance boundaries.

## Decision
Keep ShorelineOps separate as CulinaryOS Healthcare / Senior Living, integrating through authenticated APIs, SDKs, events, MCP and documented contracts.

## Alternatives and consequences
Avoid undocumented direct database coupling. General-purpose automation must not bypass clinical authorization or deterministic safety controls.

## Evidence and execution gate
Accepted by the owner's canonical Master Blueprint v4.0, sections 5, 73. This record documents that supplied decision; it does not certify implementation or authorize gated mutations.
See [current phase](../execution/CURRENT_PHASE.yaml), [portfolio](../portfolio/PORTFOLIO.yaml), and [migration matrix](../migrations/MIGRATION_MATRIX.yaml). Complete applicable phase checks before implementation.
