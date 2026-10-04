# ADR-0002 — CulinaryOS monorepo
Status: accepted strategic intent; implementation pending
Owner: ShadowWalkerNC
Date: 2026-10-03

## Requirement and context
Restaurant modules overlap but need explicit domain and deployment boundaries.

## Decision
Consolidate CulinaryOS incrementally into apps, modules, domain, packages and services. Preserve working behavior and Python where justified.

## Alternatives and consequences
Independent source repos remain rollback sources until feature parity, contracts and integration checks pass. No whole-app rewrite or immediate repository retirement.

## Evidence and execution gate
Accepted by the owner's canonical Master Blueprint v4.0, sections 59–72. This record documents that supplied decision; it does not certify implementation or authorize gated mutations.
See [current phase](../execution/CURRENT_PHASE.yaml), [portfolio](../portfolio/PORTFOLIO.yaml), and [migration matrix](../migrations/MIGRATION_MATRIX.yaml). Complete applicable phase checks before implementation.
