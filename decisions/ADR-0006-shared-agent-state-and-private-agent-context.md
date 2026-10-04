# ADR-0006 — Shared agent state and private agent context
Status: accepted strategic intent; implementation pending
Owner: ShadowWalkerNC
Date: 2026-10-03

## Requirement and context
Agents need transferable task evidence without reconstructing conversations.

## Decision
Share task scope, ownership, decisions, changed files, checks, blockers and next action in canonical project state. Keep per-agent context private.

## Alternatives and consequences
Never store private reasoning. Coordinate path ownership before parallel edits. Multi-agent execution needs approval; ledger entries do not dispatch agents.

## Evidence and execution gate
Accepted by the owner's canonical Master Blueprint v4.0, sections 43–45, 88. This record documents that supplied decision; it does not certify implementation or authorize gated mutations.
See [current phase](../execution/CURRENT_PHASE.yaml), [portfolio](../portfolio/PORTFOLIO.yaml), and [migration matrix](../migrations/MIGRATION_MATRIX.yaml). Complete applicable phase checks before implementation.
