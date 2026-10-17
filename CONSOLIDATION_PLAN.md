# ShadowWalkerNC Consolidation & Capability Migration Plan

Consolidation, Absorption, Extraction, Retention, and Retirement Specifications  
Repository: ShadowWalkerNC/.github  
Date: October 17, 2026  
Governing Standard: Evidence Before Abstraction; Vertical Proof Before Horizontal Expansion  

---

## 1. Principles of Consolidation

1. Never consolidate based on name similarity alone: Every consolidation decision is backed by code inspection, interface contracts, and runtime requirements.
2. Preserve working history and rollback sources: Old repositories are never deleted blindly. Source repositories remain immutable rollback references until parity verification passes.
3. Keep clinical and client data strictly isolated: ShorelineOps and client-specific databases (e.g., Cheezies Gourmet) never share raw database connections with CulinaryOS Core.
4. Favor modular capability absorption over repository sprawl: Standalone capabilities (prep planning, recipe calculations, marketing post generation) become canonical modules within CulinaryOS Core while preserving standalone tool viability where justified.

---

## 2. Consolidation & Capability Mapping Matrix

| Capability Source | Destination Target | Placement Type | Capabilities Preserved | Migration & Parity Status | Rollback Strategy |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **KitchenKit** | `CulinaryOS/modules/prep` & `packages/recipes` | Module & Package | Ratio Blueprint Engine, mise en place builder, prep list generation | Maintained standalone for caterers; bridged via MCP into CulinaryOS | Standalone KitchenKit checkout preserved |
| **RecipeOS** | `KitchenKit` & `CulinaryOS/packages/recipes` | Absorbed Source | Recipe scaling, ingredient databases, unit conversions | Archived on GitHub; source code completely captured in monorepo | Source repository preserved in archive state |
| **CulinaryOps** | `CulinaryOS/modules/operations` | Module | Labor scheduling, food cost tracking, vendor orders, waste logging | 6 Supabase MCP tools wired; parity tests passing | Standalone CulinaryOps checkout preserved |
| **Plated** | `CulinaryOS/apps/web-storefront` | App Module | Custom restaurant website builder, drag-and-drop CMS, Supabase auth | Standalone Vite/React app preserved; customer web engine isolated | Plated checkout preserved |
| **Post-Pilot** | `CulinaryOS/modules/marketing` | Module | Automated AI social media post generator, Meta Graph API publishing | Standalone Node service operational; exposed as marketing skill | Post-Pilot repository preserved |
| **RestRevive-AI** | `CulinaryOS Addons/culinaryos-intelligence` | Extension / Addon | AI operations auditing, HACCP SOPs, menu margin analysis, waste analytics | Fully absorbed into `culinaryos-intelligence` skills router | RestRevive-AI archive preserved |
| **EMSCAD** | `Emergency-CAD/reference` | Reference Archive | Tickets CAD PHP data schemas, dispatch workflow models, incident codes | Domain data model reference for modern Kotlin Multiplatform CAD | EMSCAD repository preserved |
| **Benjamins & Joe's Tacos** | `CulinaryOS/apps/web-storefront/templates` | Template Examples | Static demo designs, layout tokens, menu presentations | Demo assets extracted into storefront template gallery; repos archived | Source repositories archived |

---

## 3. Detailed Migration Specifications

### 3.1 Migration Plan: KitchenKit to CulinaryOS Core
- Source: `C:\Users\white\OneDrive\Documents\GitHub\KitchenKit`
- Destination: `CulinaryOS/packages/recipes` and `CulinaryOS/modules/prep`
- Capabilities to Preserve:
  1. The Ratio Blueprint Engine (mathematical ingredient scaling based on base ratios).
  2. Mise en place generation (station-by-station preparation sequencing).
  3. Kitchen prep list aggregation from expected guest covers.
- Migration Steps:
  1. Extract pure TypeScript calculation routines from `KitchenKit/src/core/ratio` into `packages/recipes/src/ratio.ts`.
  2. Map prep list data models to the canonical Supabase schema in `CulinaryOS/supabase/migrations`.
  3. Provide `prep-mcp` and `recipe-mcp` interfaces in `CulinaryOS/mcp/` so agents and external clients invoke the same underlying engine.
  4. Retain KitchenKit as a lightweight standalone web tool for personal chefs without forcing a full CulinaryOS deployment.
- Verification Criteria:
  - Unit tests verifying exact yield calculation across standard culinary ratios (roux, vinaigrette, bread percentages).
  - Standalone daily operations simulation passing in CulinaryOS Core.
- Rollback Strategy: Revert module imports to use local mock fallbacks; KitchenKit repository remains intact and fully functional.

### 3.2 Migration Plan: CulinaryOps to CulinaryOS Core
- Source: `C:\Users\white\OneDrive\Documents\GitHub\CulinaryOps`
- Destination: `CulinaryOS/modules/operations`
- Capabilities to Preserve:
  1. Shift scheduling engine and labor cost percentage calculation against projected sales.
  2. Food cost tracking against vendor invoice history.
  3. Waste tracking log with root-cause categorization (spoilage, over-prep, line drop).
- Migration Steps:
  1. Port the 6 Supabase MCP tool handlers from `CulinaryOps/src/mcp` into `CulinaryOS/mcp/operations`.
  2. Unify the Supabase migration tables under `CulinaryOS/supabase/migrations` using standard UUID tenant keys.
  3. Expose operational metrics via Turborepo shared UI widgets in `CulinaryOS/packages/ui`.
- Verification Criteria:
  - 100% test pass on labor schedule generation and food cost margin alerts.
  - Zero disruption to existing Supabase table schemas.
- Rollback Strategy: Re-point local MCP configuration to standalone `CulinaryOps` instance.

### 3.3 Migration Plan: Post-Pilot to CulinaryOS Suite
- Source: `C:\Users\white\Documents\GitHub\Post-Pilot`
- Destination: `CulinaryOS/modules/marketing` (or dedicated microservice)
- Capabilities to Preserve:
  1. Food and beverage prompt engineering templates tailored to restaurant specials.
  2. Meta Graph API token management and automated scheduled publishing to Instagram and Facebook.
- Migration Steps:
  1. Wrap Post-Pilot's generator inside a standard MCP tool (`marketing_generate_post`, `marketing_publish_post`).
  2. Store OAuth tokens securely in encrypted environment vaults (never in client-side storage or plain SQLite).
  3. Integrate marketing calendar into the CulinaryOS operator dashboard.
- Verification Criteria:
  - Verified test generation with zero mock bypasses.
  - Correct error handling for expired access tokens.
- Rollback Strategy: Keep Post-Pilot deployable independently as a dedicated Node/Express container on Railway or Render.

### 3.4 Migration Plan: Restaurant Intelligence Addon
- Source: `C:\Users\white\Desktop\CulinaryOS Addons\culinaryos-intelligence`
- Destination: `CulinaryOS/packages/intelligence`
- Capabilities to Preserve:
  1. 12 operational skills (recipe costing, prep-list, ordering suggestions, inventory-par, menu-margin, haccp-sop, production-forecast, waste-analysis, shift-handoff, temps-review, event-planning).
  2. Deterministic policy engine (`approvals.ts`, `audit.ts`, `permissions.ts`, `redact.ts`).
  3. Fastify/Express intelligence router.
- Migration Steps:
  1. Execute `scripts/install-to-culinaryos.ps1` to link the intelligence addon into CulinaryOS Core.
  2. Mount the skills router under `CulinaryOS/api/v1/intelligence`.
  3. Wire the skills into JOSH System 1 for subconscious triage.
- Verification Criteria:
  - 12/12 skill tests passing; policy redaction tests passing.
- Rollback Strategy: Disable extension manifest in `CulinaryOS/extensions/`.

---

## 4. Repository Disposition Summary

| Disposition | Repositories | Action |
| :--- | :--- | :--- |
| **Retain (Active)** | ForgeSatchel, JOSH, MuseLab, ShadowHelicon, CulinaryOS, ShorelineOps, KitchenKit, CulinaryOps, Plated, Post-Pilot, Mercury, Sigil, BibleDesk, Dominion, MosaicBit, Emergency-CAD, Cheezies Gourmet, dark-phoneix-clips, .github, portfolio | Active maintenance; continuous feature development; strictly enforced standards. |
| **Absorbed (Read-Only Rollback)** | RecipeOS, RestRevive-AI, prayer-atlas source | Preserved in archived/read-only state on GitHub; working code absorbed into active platforms. |
| **Supporting / Reference** | EMSCAD (Tickets CAD), ShadowRealm, openDAW, ASCILINE-2.0, BedrockOps, node-minecraft-protocol, ShieldBot, Unity-MC, open-saas, openship, playhtml, playwright | Preserved as specialized domain references, upstream forks, or protocol libraries; no active refactoring required. |
| **Candidate for Formal Archive** | Benjamins, Joes-Tacos | Legacy demo websites whose templates have been cataloged; ready for formal GitHub archive after user signoff. |
