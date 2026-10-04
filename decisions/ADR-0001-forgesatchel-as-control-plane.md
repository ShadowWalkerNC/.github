# ADR-0001 — ForgeSatchel as control plane
Status: accepted strategic intent; implementation pending
Owner: ShadowWalkerNC
Date: 2026-10-03

## Requirement and context
A single developer interface must reduce fragmented portfolio context.

## Decision
Extend ForgeSatchel as the local-first control plane. Keep core registry, task state, permissions, events and indexing small; place provider logic in adapters.

## Alternatives and consequences
Direct provider tools remain available. Reuse existing ForgeSatchel source before introducing services; the MVP excludes production mutations, XR and distributed state.

## Evidence and execution gate
Accepted by the owner's canonical Master Blueprint v4.0, sections 15–20, 121. This record documents that supplied decision; it does not certify implementation or authorize gated mutations.
See [current phase](../execution/CURRENT_PHASE.yaml), [portfolio](../portfolio/PORTFOLIO.yaml), and [migration matrix](../migrations/MIGRATION_MATRIX.yaml). Complete applicable phase checks before implementation.
