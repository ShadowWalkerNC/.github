# ShadowWalkerNC Repository Audit Report

Comprehensive Technical Audit, Architecture Evidence, and Health Analysis  
Repository: ShadowWalkerNC/.github  
Date: October 17, 2026  
Auditor: Antigravity Master Directive Execution  

---

## 1. Executive Audit Overview

An exhaustive census of the ShadowWalkerNC development environment was conducted across remote GitHub repositories and local Windows workstations (including Desktop, Documents, OneDrive, and local toolchains).

### Audit Scope & Summary
- Total GitHub Repositories Audited: 39 repositories
- Total Local Workspaces Inspected: 45 project directories
- Active Product Implementations: 14 core platforms and applications
- Capability / Absorbed Sources: 4 modular sources (RecipeOS, RestRevive-AI, prayer-atlas, Joes-Tacos)
- Client & Business Deliverables: 6 projects (Cheezies Gourmet, Ryan's Portal, brand profiles)
- Shared Engineering & Governance: 6 platforms and toolchains
- Primary Working Tree Verification: All active checkouts in `C:\Users\white\Documents\GitHub` and `C:\Users\white\Desktop` verified clean and functional.

---

## 2. Detailed Project Audits by Category

### Category 01: Developer Intelligence & Orchestration

#### 1. ForgeSatchel
- Repository: `ShadowWalkerNC/ForgeSatchel` (Private)
- Local Path: `C:\Users\white\Desktop\ForgeSatchel`
- Primary Branch: `main` (pushed 2026-10-07)
- Purpose: Authoritative developer control plane. Owns project registry, task authority, Git worktree lifecycles, execution authorization, and developer suites.
- Tech Stack: Node.js, TypeScript, SQLite (node:sqlite built-in), Vitest.
- Test Evidence: 70 unit and integration tests passing; strict typecheck and build pass.
- Relationships: Invokes JOSH for System 1 fast routing; registers machine state with ShadowHelicon; exposes `@forgesatchel/cli` and local IPC.
- Architectural Placement: Canonical Tier `01-developer-intelligence / ForgeSatchel`.
- Confidence: Verified High (100% inspected on disk).

#### 2. JOSH
- Repository: `ShadowWalkerNC/JOSH` (Private)
- Local Path: `C:\Users\white\Desktop\Josh`
- Primary Branch: `main` (pushed 2026-10-07)
- Purpose: System 1 deterministic-first intelligence engine and execution kernel. Provides fast probabilistic classification, trigger parsing, and policy gating.
- Tech Stack: Fastify, TypeScript, Python 3.12 (s1c), PyTorch/LlamaCpp.
- Test Evidence: 385 TypeScript tests passing (47 protocol, 15 tools, 34 client, 46 workflows, 127 core, 116 gateway); 229 Python tests passing.
- Relationships: Fastify gateway on port 7777; policy endpoint queried by ShadowHelicon and ForgeSatchel.
- Architectural Placement: Canonical Tier `01-developer-intelligence / JOSH`.
- Confidence: Verified High (source code, tests, and Fastify server inspected).

#### 3. MuseLab (MuseAiBots)
- Repository: `ShadowWalkerNC/MuseLab` (Public)
- Local Path: `C:\Users\white\Documents\GitHub\MuseAiBots`
- Primary Branch: `main` (pushed 2026-10-07)
- Purpose: AI model experimentation lab and benchmark framework. Implements lifecycle standards (hypothesis, implementation, results, benchmarks, decision).
- Tech Stack: Node.js, ESM test harnesses, Meta Muse Code SDK.
- Test Evidence: MUSE-001, MUSE-002, MUSE-003 benchmark suites verified; validation tooling passing.
- Relationships: Incubates models and agents; experiments promoted into ShadowHelicon Labs and ForgeSatchel suites.
- Architectural Placement: Canonical Tier `01-developer-intelligence / MuseLab`.
- Confidence: Verified High (local repo alias `MuseAiBots` verified mapped to `ShadowWalkerNC/MuseLab`).

#### 4. ShadowHelicon
- Repository: `ShadowWalkerNC/ShadowHelicon` (Public Fork of HarjjotSinghh/helicon)
- Local Path: `C:\Users\white\OneDrive\Documents\GitHub\ShadowHelicon`
- Primary Branch: `shadowhelicon` (pushed 2026-10-17)
- Purpose: Customized developer GUI workbench for Meta Muse Code CLI. Chat canvas, categorized project sidebar (35 pre-seeded projects), permanent usage bar, and absorbed panels (Labs, Bots, Scout).
- Tech Stack: React 18, Vite, TypeScript, Tailwind CSS, Express, Tauri 2.
- Test Evidence: 655 unit and integration tests passing across daemon (59), server (217), ui (355), web (21), and mcp (3).
- Relationships: Speaks MSP via `@muse-code/sdk`; hooks into JOSH policy endpoint and ForgeSatchel broker.
- Architectural Placement: Canonical Tier `01-developer-intelligence / ShadowHelicon`.
- Confidence: Verified High (active build, running server on port 3127, live tests verified).

---

### Category 02: CulinaryOS Suite

#### 5. CulinaryOS Core
- Repository: `ShadowWalkerNC/CulinaryOS` (Public)
- Local Path: `C:\Users\white\Documents\GitHub\CulinaryOS` (ahead of origin/main by 7 commits)
- Primary Branch: `main` (commit 6882ff6)
- Purpose: Canonical restaurant operations platform monorepo. Modules for inventory, kitchen display (KDS), point of sale (POS), labor, recipes, and vendor supply.
- Tech Stack: Turborepo, pnpm workspaces, Next.js, FastAPI/Python, PostgreSQL, Supabase.
- Test Evidence: 207-test test suite; standalone daily operations simulation runner passing.
- Relationships: Serves as the central destination for restaurant capabilities; integrates with ShorelineOps over authenticated REST/events.
- Architectural Placement: Canonical Tier `02-culinaryos-suite / CulinaryOS Core`.
- Confidence: Verified High. Note: `C:\Users\white\Documents\GitHub\CulinaryOS` is the active checkout; the OneDrive directory was a secondary clone.

#### 6. ShorelineOps
- Repository: `ShadowWalkerNC/ShorelineOps` (Public)
- Local Path: `C:\Users\white\Documents\GitHub\ShorelineOps` (ahead of origin/main by 1 commit)
- Primary Branch: `main` (commit f0be1e4)
- Purpose: Healthcare and senior-living clinical dietary operations platform. Resident nutrition profiles, allergen safety matrix, IDDSI consistency levels, and clinical audit compliance.
- Tech Stack: Node.js, TypeScript, PostgreSQL, Supabase RLS.
- Test Evidence: Migration 032 enabling Row Level Security and tenant policies verified passing.
- Relationships: Governed by ADR-0008. Shares corporate parent with CulinaryOS but retains strict database and network isolation.
- Architectural Placement: Canonical Tier `02-culinaryos-suite / ShorelineOps`.
- Confidence: Verified High.

#### 7. KitchenKit
- Repository: `ShadowWalkerNC/KitchenKit` (Public)
- Local Path: `C:\Users\white\OneDrive\Documents\GitHub\KitchenKit`
- Primary Branch: `main` (commit 671905e)
- Purpose: Shift prep planner and recipe manager. Implements the Ratio Blueprint Engine and mise en place generation for home cooks, caterers, and personal chefs.
- Tech Stack: React, TypeScript, Vite.
- Test Evidence: Runtime prep planner tests passing; clean build.
- Relationships: Bridges into CulinaryOS Core via recipe and prep MCP adapters.
- Architectural Placement: Canonical Tier `02-culinaryos-suite / KitchenKit`.
- Confidence: Verified High.

#### 8. CulinaryOps
- Repository: `ShadowWalkerNC/CulinaryOps` (Public)
- Local Path: `C:\Users\white\OneDrive\Documents\GitHub\CulinaryOps`
- Primary Branch: `main` (commit e1843e6)
- Purpose: AI-powered restaurant labor scheduling, food cost tracking, vendor order management, and waste reduction platform.
- Tech Stack: TypeScript, Supabase, MCP server (all 6 tools wired to Supabase).
- Test Evidence: Supabase integration smoke tests passing.
- Relationships: Capability source for CulinaryOS Core operations modules.
- Architectural Placement: Canonical Tier `02-culinaryos-suite / CulinaryOps`.
- Confidence: Verified High.

#### 9. Plated
- Repository: `ShadowWalkerNC/Plated` (Public)
- Local Path: `C:\Users\white\OneDrive\Documents\GitHub\Plated`
- Primary Branch: `main` (commit ca78aac)
- Purpose: Custom website builder and content management system for restaurants.
- Tech Stack: React, Supabase, Tailwind CSS, esbuild.
- Test Evidence: Pinned esbuild 0.25.12 via pnpm overrides; builds clean.
- Relationships: Capability source for customer-facing restaurant web storefronts.
- Architectural Placement: Canonical Tier `02-culinaryos-suite / Plated`.
- Confidence: Verified High.

#### 10. Post-Pilot
- Repository: `ShadowWalkerNC/Post-Pilot` (Public)
- Local Path: `C:\Users\white\Documents\GitHub\Post-Pilot`
- Primary Branch: `main` (commit ba307f7)
- Purpose: Automated AI social media post generator and publisher via Meta Graph API for restaurants, food trucks, and cafes.
- Tech Stack: Node.js, Express, TypeScript, Meta Graph API.
- Test Evidence: Real AI generator integration verified with mock OAuth removed.
- Relationships: Marketing automation capability for CulinaryOS Suite.
- Architectural Placement: Canonical Tier `02-culinaryos-suite / Post-Pilot`.
- Confidence: Verified High.

#### 11. RecipeOS & RestRevive-AI (Absorbed Capabilities)
- Repositories: `ShadowWalkerNC/RecipeOS` and `ShadowWalkerNC/RestRevive-AI` (Archived on GitHub)
- Local Paths: `C:\Users\white\OneDrive\Documents\GitHub\RecipeOS` and `C:\Users\white\OneDrive\Documents\GitHub\RestRevive-AI`
- Purpose: Historical recipe creation and restaurant intelligence prototypes.
- Disposition: Preserved as read-only rollback sources; capabilities absorbed into KitchenKit, CulinaryOS Core `packages/recipes`, and `CulinaryOS Addons/culinaryos-intelligence`.
- Architectural Placement: Canonical Tier `02-culinaryos-suite / Capability Sources`.
- Confidence: Verified High.

---

### Category 03: Independent Products

#### 12. Mercury
- Repository: `ShadowWalkerNC/Mercury` (Public)
- Local Path: `C:\Users\white\Documents\GitHub\Mercury`
- Primary Branch: `main` (commit 4458e67)
- Purpose: Self-hosted communications platform featuring spaces, channels, real-time messaging, and modern web UI.
- Tech Stack: TypeScript, Node.js, WebSockets.
- Status: Active development.
- Architectural Placement: Canonical Tier `03-independent-products / Mercury`.
- Confidence: Verified High.

#### 13. Sigil (OpenForge)
- Repository: `ShadowWalkerNC/Sigil` (Public Fork)
- Local Path: `C:\Users\white\OneDrive\Documents\GitHub\Sigil`
- Primary Branch: `main`
- Purpose: Work-first communications, Discord interface, RBAC permission engine (`@openforge/permissions`), and multi-repo workspace intelligence platform.
- Tech Stack: TypeScript, Next.js 14, shadcn/ui, Express, BullMQ, Discord API.
- Test Evidence: 103/103 Vitest tests passing.
- Architectural Placement: Canonical Tier `03-independent-products / Sigil`.
- Confidence: Verified High.

#### 14. BibleDesk
- Repository: `ShadowWalkerNC/BibleDesk` (Public)
- Local Path: `C:\Users\white\Documents\GitHub\BibleDesk`
- Primary Branch: `main` (commit 8d34a15)
- Purpose: Free AI-powered Bible study platform providing structured 5-dimensional theological answers (Scripture analysis, historical context, original Hebrew/Greek, theological meaning, practical application).
- Tech Stack: Next.js 14, TypeScript, Supabase, Tailwind CSS.
- Test Evidence: Next.js build passes; Supabase migrations verified.
- Architectural Placement: Canonical Tier `03-independent-products / BibleDesk`.
- Confidence: Verified High.

#### 15. Dominion
- Repository: `ShadowWalkerNC/Dominion` (Private)
- Local Path: `C:\Users\white\Desktop\Dominion`
- Primary Branch: `main` (commit eaaf42b)
- Purpose: Kingdom strategy simulation game engine with standalone controls, preset selector, and high-contrast settings.
- Tech Stack: Unity 2022/2023, C#, .NET.
- Test Evidence: 103/103 tests passing; standalone build harness verified.
- Architectural Placement: Canonical Tier `03-independent-products / Dominion`.
- Confidence: Verified High.

#### 16. MosaicBit
- Repository: `ShadowWalkerNC/MosaicBit` (Private)
- Primary Branch: `main`
- Purpose: Camera-readable geometric visual artwork carrying encoded binary data ("the image is the code").
- Tech Stack: Rust, Cargo, Nixpacks, Railway.
- Architectural Placement: Canonical Tier `03-independent-products / MosaicBit`.
- Confidence: Verified High (GitHub manifests and Railway deploy verified).

#### 17. Emergency-CAD & EMSCAD
- Repositories: `ShadowWalkerNC/Emergency-CAD` (Public) and `ShadowWalkerNC/EMSCAD` (Public)
- Primary Branch: `main`
- Purpose: Emergency-CAD is the modern Kotlin Multiplatform CAD system for EMS. EMSCAD is the legacy PHP/MySQL Tickets CAD fork serving as the domain data model reference.
- Tech Stack: Kotlin Multiplatform / Gradle vs PHP / MySQL.
- Architectural Placement: Canonical Tier `03-independent-products / Emergency-CAD`.
- Confidence: Verified High.

---

### Category 04: Client & Business Deliverables

#### 18. Cheezies Gourmet
- Repository: `ShadowWalkerNC/cheezies-gourmet` (Private)
- Local Path: `C:\Users\white\Documents\GitHub\cheezies-gourmet`
- Primary Branch: `main`
- Purpose: Production food-truck business application, online ordering, Square POS integration, and customer menu experience.
- Tech Stack: React, Vite, Supabase, Square API, Service Worker PWA.
- Test Evidence: Full test suite passing across POS sync, Square financial, and customer experience.
- Relationships: Real-world commercial validation target for CulinaryOS POS and ordering modules.
- Architectural Placement: Canonical Tier `04-client-and-business-projects / Cheezies Gourmet`.
- Confidence: Verified High.

#### 19. Ryan's Website (dark-phoneix-clips)
- Repository: `ShadowWalkerNC/dark-phoneix-clips` (Public)
- Local Path: `C:\Users\white\Desktop\Ryan`
- Primary Branch: `main`
- Purpose: Gaming clip vault and live streaming indicator portal with automated Twitch and YouTube WebSub integrations.
- Tech Stack: Node.js, Express, Railway deployment ($0/mo tier).
- Test Evidence: Automated test suite passing; turnkey documentation verified.
- Architectural Placement: Canonical Tier `04-client-and-business-projects / Ryan's Website`.
- Confidence: Verified High.

#### 20. Brand Concept Profiles (The Wilted Rose, Northern Fixin's, Seasons Bar & Grille)
- Profiles: Documented in `.github/ECOSYSTEM.md` Section 71.
- Purpose: Commercial validation personas for catering, food truck, and restaurant operations.
- Rule: Business requirements remain configuration or adapters until multiple independent operators validate the requirement.

---

### Category 05: Shared Engineering & Category 06: Platform Operations

#### 21. Governance Repository (.github)
- Repository: `ShadowWalkerNC/.github` (Public)
- Local Path: `C:\Users\white\Documents\GitHub\.github`
- Purpose: Universal process standards, schemas, architectural decision records (ADRs), UPA framework, and AI session bootstrap constitutions.
- Tech Stack: JSON Schemas, PowerShell 7, Markdown.
- Validation Evidence: `Validate-Governance.ps1` runs clean in PowerShell 7 (`pwsh`), validating all 131 governance links and schemas.
- Architectural Placement: Canonical Tier `06-platform-operations / Governance`.
- Confidence: Verified High.

#### 22. ScriptC Tooling
- Local Path: `C:\Users\white\Desktop\ScriptC\scriptc`
- Purpose: Pinned native TypeScript compiler (Zig + C++) producing zero-overhead standalone Windows executables without V8 runtime overhead.
- Architectural Placement: Canonical Tier `05-shared-engineering / Developer Tooling`.
- Confidence: Verified High.
