# CulinaryOS Suite: Canonical Architecture & Product Boundaries

Architecture, Data Isolation, and Capability Mapping for the CulinaryOS Suite  
Repository: ShadowWalkerNC/.github  
Date: October 17, 2026  
Status: Authoritative Domain Specification  

---

## 1. Corporate & Ecosystem Structure

The CulinaryOS Suite encompasses all commercial foodservice, culinary management, hospitality intelligence, and clinical dietary technology within the ShadowWalkerNC organization.

### The Two Strategic Pillars:
1. **CulinaryOS Core**: The commercial restaurant operations platform designed for restaurants, food trucks, ghost kitchens, bars, and catering groups.
2. **ShorelineOps**: The specialized healthcare and senior-living clinical dining operations platform designed for assisted living facilities, nursing homes, and hospital foodservice.

```text
               CulinaryOS Corporate Umbrella
                             |
       +---------------------+---------------------+
       |                                           |
CulinaryOS Core                               ShorelineOps
(Commercial Operations)                  (Healthcare & Clinical)
- Kitchen Display (KDS)                  - Resident Nutrition Profiles
- Point of Sale (POS)                    - Allergen Safety Matrix
- Recipe & Prep Scaling                  - IDDSI Dysphagia Consistency
- Inventory & Food Cost                  - Clinical Dining Compliance
- Labor & Scheduling                     - Therapeutic Diet Orders
- Marketing & Web                        - HIPAA & Audit Traceability
       |                                           |
       +----------------- REST / Events -----------+
               (Strict Database Isolation)
```

---

## 2. ShorelineOps Clinical Isolation & Governance (ADR-0008)

ShorelineOps is not merely a "flavor" or "white-label" of CulinaryOS. It addresses life-critical clinical dietetics where errors can lead to medical emergencies (e.g., choking from incorrect IDDSI food texture or anaphylaxis from unmonitored allergens).

### Strict Boundary Rules:
1. Separate Database & Tenants: ShorelineOps maintains its own PostgreSQL database with dedicated Row Level Security (RLS) tenant isolation (Migration 032). It never shares raw database credentials or connection pools with CulinaryOS Core.
2. Clinical Privacy & HIPAA: Resident health information (PHI/ePHI), medical diagnoses, and therapeutic diet prescriptions remain within the ShorelineOps security boundary.
3. Integration via Contract: ShorelineOps interacts with general culinary modules (e.g., base ingredient databases, standard vendor catalogs) exclusively over authenticated REST APIs or event buses using versioned schemas.
4. Independent Deployment: ShorelineOps releases follow rigorous clinical validation testing (207-test suite) and cannot be destabilized by fast-moving commercial restaurant feature releases.

---

## 3. Capability Mapping to CulinaryOS Core

CulinaryOS Core is structured as a Turborepo monorepo at `C:\Users\white\Documents\GitHub\CulinaryOS`. Distinct capabilities discovered across previously fragmented repositories map cleanly into its modular architecture:

| Domain Capability | Source Project | Target Monorepo Location | Status & Implementation Mechanism |
| :--- | :--- | :--- | :--- |
| **Preparation & Mise en Place** | KitchenKit | `modules/prep` | Ratio Blueprint Engine and station prep lists ported into shared modules; accessible via `prep-mcp`. |
| **Recipes & Scaling** | KitchenKit & RecipeOS | `packages/recipes` | Mathematical unit conversion, recipe yield calculation, and allergen tagging; accessible via `recipe-mcp`. |
| **Operations & Labor** | CulinaryOps | `modules/operations` | Shift scheduling, labor-to-sales ratios, food cost analytics, and vendor invoice parsing; 6 Supabase MCP tools. |
| **Web & Storefront** | Plated | `apps/web-storefront` | React/Supabase CMS engine for public restaurant websites, menus, and ordering pages. |
| **Marketing Automation** | Post-Pilot | `modules/marketing` | AI social post generation and automated publishing via Meta Graph API for promotions and specials. |
| **Restaurant Intelligence** | CulinaryOS Addons (`culinaryos-intelligence`) | `packages/intelligence` | 12 operational skills (HACCP SOPs, waste analytics, menu margin, temperature checks) with deterministic policy gating. |

---

## 4. Client and Brand Personas

The suite validates its capabilities against authentic commercial operations:

1. **Cheezies Gourmet (`ShadowWalkerNC/cheezies-gourmet`)**:
   - Persona: Active commercial food-truck business.
   - Validation Scope: Square POS integration, real-time inventory par depletion, mobile customer ordering, and service worker offline reliability.
2. **The Wilted Rose**:
   - Persona: Upscale personal chef and boutique catering business.
   - Validation Scope: Custom event tasting menus, high-margin recipe costing, prep list sequencing, and private client invoicing.
3. **Northern Fixin's**:
   - Persona: Regional quick-service food truck and catering concept.
   - Validation Scope: High-volume rapid order throughput, commissary prep tracking, and food cost control.
4. **Seasons Bar & Grille**:
   - Persona: Full-service multi-station restaurant and bar.
   - Validation Scope: Table management, kitchen display system (KDS) routing, bar inventory depletion, and split shift labor scheduling.

---

## 5. Verification and Quality Gates

Before any capability is declared fully consolidated into CulinaryOS Core:
1. Regression Verification: The 207-test CulinaryOS test suite must pass with 0 failures.
2. Parity Verification: Mathematical outputs from the ported module (e.g., recipe scaling yield) must match the source implementation down to the microgram.
3. Operational Simulation: The daily operations simulation runner (`scripts/simulate_day.py` / `simulate_day.mjs`) must successfully complete a simulated 24-hour service cycle without database deadlocks or data corruption.
