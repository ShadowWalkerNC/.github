# ForgeSatchel v2 product baseline — execution delta

Owner update adopted 2026-10-04. All 75 source sections retained in the canonical ForgeSatchel product document; requirement index/hash in FORGE_V2_RECONCILIATION.json. Embedded chat content references are historical placeholders, not usable citations or verified dependencies. Portfolio v4 remains governing portfolio strategy; current execution phase remains bounded P05.

Existing evidence: local TypeScript CLI/HTTP/TUI/browser project explorer, registry/relationship queries, SQLite task/handoff store and bounded FTS docs cache. Earlier 70-test P03 acceptance is historical and covers that foundation only. No fresh computer onboarding, desktop distribution, suite installation, full workspace isolation, vault, native SDK adapters or device network acceptance exists.

## Implementation sequence

1. Preserve current P05 work and its exit gates. Update product documentation now; no Forge application rewrite.
2. Define provider-neutral task packet/result/authority contracts; preserve existing task identifiers/state and CLI. Specify explicit execution classes and capability negotiation.
3. Model Suite availability versus project environment pins; implement dry-run setup planning before installing anything. App & Cloud and AI & Agents are first; other Suites deferred.
4. Build Guard/Workspace containment, container runtime and secret-reference boundaries before agent execution. V1 includes containers: verify isolated file/process/network grants, setup failure recovery and project runtime pins on a clean supported machine. A CLI fallback does not replace this required boundary. Existing in-process extensions are trusted-host code, not a workspace sandbox. Emergency stop needs session ownership and cancellation evidence.
5. Evaluate Strands package choice, ACP v1 and Muse MSP SDK in separate decision records; use controlled MuseLab experiments before production adoption. All three adapters are required V1 deliverables, including one conventional model provider. Existing CLI fallback preserves work during development/provider failures, but does not satisfy these adapter exit criteria.
6. Implement desktop onboarding/UI and Care diagnostics, then safe repair/backup/restore. Never silently upgrade a project's runtime with Forge. Fresh-machine and restore failure scenarios are required acceptance evidence.
7. Provider reads first: GitHub/Vercel/Cloudflare plus one initial Railway or Render integration. Each needs explicit scoped connection/read/error acceptance, including stale metadata and provider failure. Section67's signature GitHub/Muse/Vercel scenario does not replace Section66's Cloudflare and Railway/Render requirements. Railway CLI installation alone does not prove integration. Both providers remain supported portfolio candidates; first V1 adapter selection is still unresolved by implementation evidence.
8. Prove the V1 end-to-end scenario. Only then add optional Pi Node/hardware, deeper personalization, distributed routing and community extension verification.

## Compatibility decisions

- Desktop is primary; Pi failure cannot prevent local Git/build/index/task operations.
- Reuse existing code through stable interfaces; no repository creation or target-layout rewrite.
- forge.project.json remains portfolio identity until a recorded .forge compatibility/migration decision. Suite/environment configuration can be separate without duplicating identity.
- Uppercase product permission categories are display/contract targets, not grants; keep secret.read/write, deploy/admin/destructive/financial/clinical distinctions.
- New navigation is target UX, not evidence current dashboard has been redesigned.
- All SDK installs, security permission changes, production actions and purchases retain existing gates.

## Research checked against primary sources

Strands distinguishes a fully assembled harness from the underlying Harness SDK; exact adapter package is not yet selected. TypeScript SDK currently requires Node22+ and repository license is Apache2.0. [Official repository](https://github.com/strands-agents/harness-sdk).

ACP stable entry point is v1; experimental v2 is explicitly draft. [Official TypeScript SDK](https://github.com/agentclientprotocol/typescript-sdk).

Muse's SDK controls MSP sessions, requires Node20+ and remains pre1.0 Developer Preview. [Official Muse SDK](https://github.com/meta-models/muse-code-sdk). These checks establish documentation claims, not installed compatibility, cost, safety or production acceptance.

Next Antigravity task: source-only requirements/acceptance review of this delta and ADR-0011. No duplicate implementation, provider calls or product edits. Existing independent P05 review remains available.
