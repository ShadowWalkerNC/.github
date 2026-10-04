# ADR-0004 — Local-first canonical state
Status: accepted strategic intent; implementation pending
Owner: ShadowWalkerNC
Date: 2026-10-03

## Requirement and context
Offline work and recoverability require durable, inspectable sources of truth.

## Decision
Use Git-tracked docs/manifests for durable facts, SQLite for local operational state and provider APIs for external truth. Optional encrypted sync may mirror state.

## Alternatives and consequences
Avoid a custom distributed database. Cached provider data needs timestamps, retention and stale markers; a successful cache read is not live verification.

## Evidence and execution gate
Accepted by the owner's canonical Master Blueprint v4.0, sections 19–23, 130. This record documents that supplied decision; it does not certify implementation or authorize gated mutations.
See [current phase](../execution/CURRENT_PHASE.yaml), [portfolio](../portfolio/PORTFOLIO.yaml), and [migration matrix](../migrations/MIGRATION_MATRIX.yaml). Complete applicable phase checks before implementation.
