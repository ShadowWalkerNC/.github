# ADR-0011 — ForgeSatchel desktop-first product baseline
Status: accepted strategic intent from owner-supplied ForgeSatchel Master Development Blueprint v2.0, 2026-10-04. Implementation acceptance remains separate.

The existing developer computer is primary. Raspberry Pi Forge Node is an optional hardware/edge companion; distributed Forge Network follows desktop maturity. Core owns machine state, authority and jobs. Josh is System-1 classification/ranking only, and cannot grant permissions or orchestrate machine state.

Forge Context owns retrieval/indexing. Forge Intelligence exposes provider-neutral task/evidence contracts with separate model-runtime, generic ACP agent-runtime and specialized Muse MSP adapters. Prefer an existing open-source agent loop; isolate Strands types behind an adapter. Provider failure must preserve projects and permit explicit alternatives.

Suites express developer capabilities, while project environments independently pin runtimes/dependencies. Complete Lab makes Suites available on demand; it does not install everything. Guard owns identity/permission/privacy/isolation policy. Care owns installation, health, repair, updates, rollback and encrypted recovery. These are product responsibilities, not an instruction to create separate services or repositories.

User navigation becomes Home, Projects, Build, Devices, Services, AI, Activity and Settings, with technical detail available progressively. Substantial operations expose plan, authorization, progress, verification, partial failure and recovery. Required V1 proof is fresh-machine install → selected Suites → connected services → clone → bounded coding task → tests/build → preview → reviewed diff, with optional approved cloud preview.

The signature flow is necessary but not sufficient: section66's container runtime, Strands/Muse/ACP adapters, conventional model provider, Vault/Care/Suites and GitHub/Vercel/Cloudflare plus Railway or Render each require explicit acceptance. Existing CLI fallback cannot substitute for required V1 adapters or isolation.

This supersedes conflicting Forge-specific phone/PWA-first, Pi-primary or uniform-harness targets. It does not replace portfolio v4 priorities, data ownership, phase sequence, clinical/payment boundaries or approval gates. P03 historical foundation acceptance does not prove the broader new V1.

Preserve current implementation. Resolve the optional .forge/project.yaml versus forge.project.json source-of-truth question before writing competing identities. Map new UI permission classes to existing fine-grained controls without broadening grants. Exact SDK/package selection, licenses, costs, isolation and rollback need decision evidence before install/adoption. No runtime permissions, provider mutations, purchases or deployments follow from this ADR.

Canonical product text: C:/Users/white/Desktop/ForgeSatchel/docs/FORGE_MASTER_BLUEPRINT_V2.md. Reconciliation evidence: [FORGE_V2_RECONCILIATION.json](../execution/FORGE_V2_RECONCILIATION.json).
