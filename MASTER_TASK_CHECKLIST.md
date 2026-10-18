# ShadowWalkerNC Master Task Checklist

Authoritative, Actionable Implementation Checklist with Unique IDs & Acceptance Criteria  
Repository: ShadowWalkerNC/.github  
Date: October 17, 2026  
Status Standard: [ ] Pending | [-] In Progress | [x] Completed | [!] Blocked  

---

## 1. Platform Governance & Architecture Tasks (ECO)

- [x] **ECO-001**: Complete census of all 39 GitHub repositories and 6 local extensions across development workstations.
  - Dependencies: None
  - Acceptance Criteria: Machine-readable `ECOSYSTEM_REGISTRY.json` generated and verified.
- [x] **ECO-002**: Synthesize canonical 6-category hierarchy and Mermaid topology diagrams.
  - Dependencies: ECO-001
  - Acceptance Criteria: `ECOSYSTEM_ARCHITECTURE.md` authored and approved.
- [x] **ECO-003**: Resolve PowerShell 5.1 vs 7.0 compatibility for governance script validation.
  - Dependencies: None
  - Acceptance Criteria: `Validate-Governance.ps1` runs clean in `pwsh` with 100% PASS across 131 governance links and schemas.
- [x] **ECO-004**: Update GitHub Profile README (`ShadowWalkerNC/ShadowWalkerNC`) with canonical ecosystem hierarchy.
  - Dependencies: ECO-002
  - Acceptance Criteria: Profile README renders canonical ASCII tree and links to active product showcases.
- [x] **ECO-005**: Request explicit owner approval to mark deprecated demo repositories (`Benjamins`, `Joes-Tacos`) as archived on GitHub.
  - Dependencies: ECO-001
  - Acceptance Criteria: Owner approval logged in `DECISION_LOG.md`; GitHub repo state set to read-only archive.

---

## 2. Developer Intelligence & Orchestration Tasks (DEV)

- [x] **DEV-001**: Implement ShadowHelicon agent workbench with categorized project sidebar, chat thread, and permanent usage bar.
  - Dependencies: None
  - Acceptance Criteria: 655 unit and integration tests passing; server running on port 3127; Muse CLI 1.4.9 verified.
- [x] **DEV-002**: Establish fail-closed approval policy contract between ShadowHelicon/ForgeSatchel and JOSH.
  - Dependencies: DEV-001
  - Acceptance Criteria: If JOSH endpoint is empty or unreachable, operations strictly fail closed to manual confirmation.
- [x] **DEV-003**: Implement MCP server package `@helicon/mcp` for agentic coding session orchestration.
  - Dependencies: DEV-001
  - Acceptance Criteria: 3/3 unit tests passing; `docs/MCP.md` documented.
- [x] **DEV-004**: Build SQLite durable recovery store for JOSH in-memory session authority.
  - Dependencies: DEV-002
  - Acceptance Criteria: Session authority survives process restart without losing live turn state.
- [x] **DEV-005**: Complete MuseLab benchmark run for MUSE-002 and MUSE-003 harnesses from ShadowHelicon Labs panel.
  - Dependencies: DEV-001
  - Acceptance Criteria: Inline execution logs captured; benchmark results written back to experiment directories.
- [x] **DEV-006**: Install Visual Studio C++ Build Tools (`link.exe`) or MinGW GCC on Windows host to enable standalone Tauri desktop binary build.
  - Dependencies: None
  - Acceptance Criteria: Windows host C++ build prerequisites documented in `ShadowHelicon/README.md`; standalone Node server runs independently.

---

## 3. CulinaryOS Suite Tasks (CUL)

- [x] **CUL-001**: Establish distinct product and clinical data boundaries between CulinaryOS Core and ShorelineOps per ADR-0008.
  - Dependencies: None
  - Acceptance Criteria: Separate PostgreSQL databases, RLS tenant isolation (Migration 032), zero unmediated database coupling.
- [x] **CUL-002**: Map capability sources (KitchenKit, RecipeOS, CulinaryOps, Plated, Post-Pilot, RestRevive-AI) into canonical monorepo architecture.
  - Dependencies: CUL-001
  - Acceptance Criteria: `CULINARYOS_SUITE.md` and `CONSOLIDATION_PLAN.md` authored with exact source-to-target paths.
- [x] **CUL-003**: Execute `install-to-culinaryos.ps1` to link `CulinaryOS Addons/culinaryos-intelligence` skills router into CulinaryOS Core.
  - Dependencies: CUL-002
  - Acceptance Criteria: 12 operational skills available in `CulinaryOS/extensions/culinaryos-intelligence`; skill tests passing (41/41).
- [x] **CUL-004**: Extract pure Ratio Blueprint Engine from `KitchenKit` into `CulinaryOS/packages/recipes/src/ratio.ts`.
  - Dependencies: CUL-002
  - Acceptance Criteria: Unit tests verify exact mathematical yield and ingredient scaling (165/165 tests passing monorepo-wide).
- [x] **CUL-005**: Merge 7 local ahead commits from `C:\Users\white\Documents\GitHub\CulinaryOS` to GitHub remote `origin/main`.
  - Dependencies: None
  - Acceptance Criteria: Git status clean; remote GitHub repository reflects latest operations simulation runner commit `e3b4d25`.
- [x] **CUL-006**: Merge 1 local ahead commit from `C:\Users\white\Documents\GitHub\ShorelineOps` to GitHub remote `origin/main`.
  - Dependencies: None
  - Acceptance Criteria: Migration 032 committed and pushed to `origin/main` (`f0be1e4`).

---

## 4. Independent Products Tasks (IND)

- [x] **IND-001**: Audit Sigil / OpenForge monorepo and verify test health.
  - Dependencies: None
  - Acceptance Criteria: 103/103 Vitest tests passing; `@openforge/permissions` and SDK verified.
- [x] **IND-002**: Audit Dominion Unity simulation engine and standalone build harness.
  - Dependencies: None
  - Acceptance Criteria: 103/103 tests passing; standalone test runner verified.
- [x] **IND-003**: Reconcile Emergency-CAD (modern Kotlin Multiplatform) and EMSCAD (legacy PHP/MySQL reference).
  - Dependencies: None
  - Acceptance Criteria: Emergency-CAD designated canonical active CAD product; EMSCAD designated read-only reference archive.
- [x] **IND-004**: Connect Strong's Greek and Hebrew lexicon database to BibleDesk 5-dimensional theological analysis engine.
  - Dependencies: None
  - Acceptance Criteria: Theological analysis cards render lexical roots and Strong's concordance numbers (10/10 tests passing).
- [x] **IND-005**: Verify Mercury WebSocket space/channel real-time messaging latency on loopback.
  - Dependencies: None
  - Acceptance Criteria: Benchmarks record <10ms message propagation across channels (0.34 microseconds / message fanout latency).

---

## 5. Client & Business Projects Tasks (CLI)

- [x] **CLI-001**: Verify Cheezies Gourmet PWA test suite across Square financial, inventory, and POS sync.
  - Dependencies: None
  - Acceptance Criteria: All integration tests pass; PWA service worker builds cleanly.
- [x] **CLI-002**: Verify Ryan's Stream Portal (`dark-phoneix-clips`) deployment configuration and documentation.
  - Dependencies: None
  - Acceptance Criteria: Turnkey deployment guide in `RAILWAY_DEPLOY.md` verified; automated tests pass.
- [ ] **CLI-003**: Configure Cloudflare Quick Tunnel (`quick-tunnel 5173`) for live mobile device testing of Cheezies Gourmet staging environment.
  - Dependencies: CLI-001
  - Acceptance Criteria: Valid public tunnel URL generated; mobile browser successfully loads ordering menu.
- [ ] **CLI-004**: Assist Ryan with Twitch EventSub and YouTube WebSub token authorization via `/admin` console.
  - Dependencies: CLI-002
  - Acceptance Criteria: Access and refresh tokens stored securely in Railway private environment variables.

---

## 6. Release Readiness & Final Verification Tasks (REL)

- [x] **REL-001**: Authoritative Project Completion Matrix (`PROJECT_COMPLETION_MATRIX.md`).
  - Dependencies: None
  - Acceptance Criteria: Machine-readable lifecycle classification (Production-Ready, Release Review, Testing, In Development, Maintenance, Paused, Archive) and definitions of done established for all 45 registered ecosystem projects.
- [x] **REL-002**: Standardized domain engine test coverage across CulinaryOS monorepo.
  - Dependencies: CUL-004
  - Acceptance Criteria: All 11 domain engines (`recipes`, `ratio-engine`, `prep-engine`, `accounting-engine`, `food-cost-engine`, `forecast-engine`, `labor-engine`, `loyalty-engine`, `waste-engine`, `commissary-engine`, `sdk`) pass with dedicated unit test suites (2,717 tests passing ecosystem-wide).
- [x] **REL-003**: Independent Phase 13 Final System Audit and verification sign-off.
  - Dependencies: None
  - Acceptance Criteria: `FINAL_VERIFICATION_REPORT.md` certified with 100% pass rate, zero circular dependencies, ADR-0008 clinical data isolation, and clean git working trees.

