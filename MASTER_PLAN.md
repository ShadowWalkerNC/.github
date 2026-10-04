# Master Blueprint v4.0 — execution map
Owner: ShadowWalkerNC. The owner's supplied 137-section Master Blueprint v4.0 is the canonical strategic specification. This file is its compact execution map, not a replacement full-text specification.

Priorities: ForgeSatchel, CulinaryOS, MuseLab; then BibleDesk, Dominion and Cheezies Gourmet. Mercury supports communications. ShorelineOps remains separate for clinical dining. Labs and references stay outside the default active view.

Run phases in order: baseline → classification → governance → ForgeSatchel foundation → MuseLab → CulinaryOS foundation → gradual module migrations → cleanup → providers → agents → automation → simulated hardware → XR → mature organizations. Use [phase contracts](phases/README.md), [portfolio](portfolio/PORTFOLIO.yaml), [migration matrix](migrations/MIGRATION_MATRIX.yaml), [ADRs](decisions/README.md) and [SDK decisions](sdk-decisions/README.md).

Requirements first; reuse before custom code; no rewrite without a documented blocker; no new repository without an independent boundary. Preserve history, working behavior, source rollback and unrelated edits. API/domain services own business logic; MCP/SDK/extensions adapt contracts. Git holds durable facts, SQLite operational state, provider APIs external truth. Production adoption and consequential mutations require the recorded gates.

AI sequence: current phase → target identity/instructions/status → affected files → relevant standards. Analyze, execute allowed actions, verify, update durable state and hand off. Never infer destructive permission or skip an exit gate.

ForgeSatchel product-specific refinement: owner-supplied Master Development Blueprint v2.0 (2026-10-04), accepted in [ADR-0011](decisions/ADR-0011-forgesatchel-desktop-first-v2.md). Desktop-first/Suites/Context/Intelligence/Guard/Care supersede conflicting Forge targets; this does not replace portfolio v4 phase order or approval gates. New V1 acceptance remains pending; see [execution delta](execution/FORGE_V2_IMPLEMENTATION_DELTA.md).
