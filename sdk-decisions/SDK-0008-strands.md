# SDK-0008 — Strands adapter
Disposition: REVISIT (owner-preferred architecture; exact package/install evaluation pending).
Requirement: reuse a model-independent agent loop while Forge retains task/context/permission/evidence authority.
Allowed candidate scope: ForgeSatchel adapter and bounded MuseLab evaluation; not portfolio-wide installation.
Alternatives: existing CLI/native coding agents; evaluate assembled harness versus SDK before selecting package.
Verified 2026-10-04: official repository documents Python/TypeScript, model portability, MCP/hooks/structured output/limits/tracing. Assembled harness and underlying SDK are distinct; TypeScript SDK Node22+; Apache2.0 repository license. [Primary source](https://github.com/strands-agents/harness-sdk).
Cost: provider and maintenance workload NOT VERIFIED; no free-inference claim. Lock-in/removal: isolate adapter dependency/types; export Forge-owned packets/evidence. Offline: Forge local core stays usable; chosen model/runtime offline support NOT VERIFIED. Security: harness is not a host sandbox; prove containment separately.
Next: select/pin exact package, inspect transitive license/supply chain and defaults, test cancellation/budgets/context/privacy/provider swap before adoption approval. No package installed.
