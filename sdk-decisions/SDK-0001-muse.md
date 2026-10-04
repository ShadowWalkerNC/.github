# SDK-0001 — Muse
Disposition: REVISIT
Status: evaluation pending; no new adoption approved
Owner: ShadowWalkerNC
Date: 2026-10-03

Requirement: Coding-agent, model, connector and device requirements must be evaluated separately.
Candidate evaluation scope: ForgeSatchel/MuseLab.
Alternatives: Existing CLI adapters and direct APIs; avoid broad SDK installation.
Lock-in/removal: keep a capability adapter boundary; define data/contract export and dependency removal before adopting. Exact portability is not yet evaluated.
License/commercial restrictions: NOT VERIFIED; inspect the exact version and official terms before an adoption recommendation.
Pricing/cost: NOT VERIFIED; record current pricing, expected workload and maintenance cost before adoption.
Local/offline: NOT VERIFIED for this SDK; the Forge core must remain locally usable.
Next: compare against the existing internal solution/dependency, measure reliability/performance where claimed, then record ADOPT/OPTIONAL/REJECT/REVISIT with evidence under [SDK adoption policy](../standards/SDK_ADOPTION_STANDARD.md).

Existing source declarations are inventory observations, not fresh adoption decisions. This record installs nothing.

2026-10-04 product update: native Muse MSP adapter is an owner-selected Forge target; adoption/install gate remains unresolved. Official TypeScript SDK drives MSP sessions, requires Node20+ and is pre1.0 Developer Preview. [Official SDK source](https://github.com/meta-models/muse-code-sdk). Exact pinned package, license/transitives, pricing, session permissions/isolation/cancellation and compatibility still need evaluation. Existing Muse CLI remains available and quota-blocked experiment evidence is preserved.
