# ADR-0005 — Provider abstraction architecture
Status: accepted strategic intent; implementation pending
Owner: ShadowWalkerNC
Date: 2026-10-03

## Requirement and context
Capabilities must remain replaceable across model, agent and hosting vendors.

## Decision
Define versioned capability contracts and provider adapters. Domain services own business behavior; adapters translate provider operations.

## Alternatives and consequences
Avoid one repository per adapter while small. Start provider visibility read-only; production writes and secrets remain approved operations.

## Evidence and execution gate
Accepted by the owner's canonical Master Blueprint v4.0, sections 26–33, 55–58. This record documents that supplied decision; it does not certify implementation or authorize gated mutations.
See [current phase](../execution/CURRENT_PHASE.yaml), [portfolio](../portfolio/PORTFOLIO.yaml), and [migration matrix](../migrations/MIGRATION_MATRIX.yaml). Complete applicable phase checks before implementation.
