# ShadowWalkerNC Architectural Decision Log

Consolidated Architectural Decision Records (ADRs), Rationale, Alternatives, and Approvals  
Repository: ShadowWalkerNC/.github  
Date: October 17, 2026  
Status: Authoritative Decision Registry  

---

## 1. Summary of Architectural Decision Records

| ADR ID | Decision Title | Status | Primary Rationale | Alternatives Considered |
| :--- | :--- | :--- | :--- | :--- |
| **ADR-0001** | ForgeSatchel as Control Plane | Accepted | Single local developer control plane managing workspaces, tasks, and machine authority. | Fragmented standalone CLI tools or monolithic web dashboard. |
| **ADR-0002** | CulinaryOS Monorepo | Accepted | Consolidate restaurant modules incrementally into Turborepo (`apps`, `modules`, `packages`). | Dozens of uncoordinated micro-repositories with duplicate dependencies. |
| **ADR-0003** | Muse-First R&D through MuseLab | Accepted | Strategic experimentation needs an isolated incubator to prevent production dependency sprawl. | Testing experimental models and agent loops inside production applications. |
| **ADR-0004** | Local-First Canonical State | Accepted | Machine state and developer authority reside locally; offline development is 100% viable. | Cloud-only state stores requiring persistent internet connectivity. |
| **ADR-0005** | Provider Abstraction Architecture | Accepted | Abstract model providers (Gemini, Anthropic, Meta) behind standard interfaces to prevent vendor lock-in. | Hardcoding direct vendor SDK calls across business logic. |
| **ADR-0006** | Shared Agent State & Private Context | Accepted | Shared ledger for multi-agent coordination; private working memory per agent. | Uncontrolled global agent state leading to context pollution. |
| **ADR-0007** | CulinaryOS Data Ownership | Accepted | Standardized data schemas with tenant keys; zero cross-tenant leakage. | Fragmented schema definitions across individual restaurant modules. |
| **ADR-0008** | ShorelineOps Separate Repository | Accepted | Clinical dining and healthcare dietetics have life-critical HIPAA, allergen, and IDDSI boundaries. | Merging ShorelineOps directly into the CulinaryOS Core commercial database. |
| **ADR-0009** | SDK Adoption Gate | Accepted | Require strict licensing, maintenance, and isolation evidence before adopting external SDKs. | Adopting unvetted third-party npm/pip packages indiscriminately. |
| **ADR-0010** | GitHub Organization Timing | Accepted | Defer creating new GitHub organizations until production revenue and team scaling justify overhead. | Prematurely fragmenting single-developer repos into multiple empty organizations. |
| **ADR-0011** | ForgeSatchel Desktop-First V2 | Accepted | Prioritize the developer workstation with Progressive TUI/GUI; hardware companion nodes follow. | Pi-first or phone-primary architecture before desktop maturity. |
| **ADR-0012** | Canonical 6-Tier Ecosystem Structure | Accepted | Reconcile all 45 projects under 6 explicit tiers: Developer Intelligence, CulinaryOS Suite, Independent Products, Client Projects, Shared Engineering, Platform Operations. | Leaving repos in ad-hoc directory layouts without clear ownership or boundary rules. |

---

## 2. ADR-0012 Deep Dive: Canonical 6-Tier Ecosystem Restructuring

### Context and Problem Statement
Over several years of rapid development, 39 GitHub repositories and multiple local workspaces accumulated across Desktop, Documents, and OneDrive. Some repositories were archived, others were forks, and several projects had overlapping capabilities (e.g., RecipeOS, KitchenKit, CulinaryOps). A unified, authoritative architecture was needed to govern boundaries, prevent circular dependencies, and eliminate duplicate engineering effort.

### Decision
Establish the canonical 6-tier hierarchy:
1. `01-developer-intelligence`: ForgeSatchel, JOSH, MuseLab, ShadowHelicon, Muse SDKs, AI orchestration.
2. `02-culinaryos-suite`: CulinaryOS Core, ShorelineOps, KitchenKit, CulinaryOps, Plated, Post-Pilot, Restaurant Intelligence.
3. `03-independent-products`: Mercury, Sigil, BibleDesk, Dominion, Emergency-CAD, EMSCAD, MosaicBit, prayer-atlas, ASCILINE-2.0.
4. `04-client-and-business-projects`: Cheezies Gourmet, Ryan's Website, The Wilted Rose, Northern Fixin's, Seasons Bar & Grille.
5. `05-shared-engineering`: Schemas, standards, ScriptC native compiler, reusable MCP packages, shared configs.
6. `06-platform-operations`: Governance repository (.github), portfolio showcase, security models, CI/CD automation.

### Consequences & Non-Negotiables
- Logical Ownership: The hierarchy governs architectural ownership and integration contracts; it does not force every repository into one physical monorepo.
- Clinical Boundaries: ShorelineOps remains strictly isolated from CulinaryOS Core database connections.
- Control Plane vs Intelligence Engine: ForgeSatchel owns machine state and authority; JOSH owns fast System 1 deterministic intent routing. Neither subsumes the other.
- Fail-Closed Security: Unconfigured or unreachable authorization hooks always fail closed to manual human confirmation.
