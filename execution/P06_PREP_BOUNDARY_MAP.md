# P06-A source/data/auth boundary map
Pinned sources and file/line/blob evidence:execution/P06_PREP_SOURCE_INVENTORY.json. Captured64KitchenKit and112RecipeOSfiles;all captured Git blob hashes verified. This is source evidence only, not applied schema/runtime certification. Omitted paths are explicitly listed.

| Source feature/data | Proposed authoritative target | Required migration decision/acceptance |
| --- | --- | --- |
| KitchenKit recipes/ingredients/ratios, RecipeOS recipes/recipe_steps/recipe_ingredients/categories/ratio_blueprints | Prep recipes; reuse current ratio-engine where semantics match | Preserve distinct ratio-weight versus servings/string quantity representations; explicit conversion/version contract and roundtrip fixtures before data moves. |
| KitchenKit prep_plans/prep_plan_items; RecipeOS prep_tasks/prep_lists | Prep tasks/production planning | Preserve plan identity, status/history, completion side effects and concurrency; tenant binding verified server-side. |
| KitchenKit par_levels(current_stock), RecipeOS pantry/pantry_items | Core inventory; Prep consumes contracts | Separate stock authority from Prep desired pars/production needs. Completion stock decrement must go through Core inventory contract/idempotent event; never duplicate stock writers. |
| Source profiles/auth.users/user-owned access and public recipe visibility | Core identity/auth plus Prep access policy | Map verified user to restaurant tenant/membership or explicitly supported personal library; no fabricated tenant/default universal tenant. Preserve public/private rules with negative authorization tests. |
| KitchenKit MCP recipe/prep service-key operations | MCP adapter -> owning API/domain | Inventory every tool; retain input/output/errors and remove privileged DB bypass only after owning endpoint parity. No new service-key permissions. |
| RecipeOS Next APIs/CLI/MCP Bearer API key headers | Versioned owning API + thin clients | Header generation is not verified authentication. Source auth.getUser/session behavior versus key headers must be checked endpoint-by-endpoint. |
| Source deployment/workflows | Preserve current providers during gradual migration | KitchenKit declares Vercel, RecipeOS declares Render; actual project/domain/env-name/applied schema state unknown. No source retirement or provider changes. |

RecipeOS contains V1__core_schema.sql and V1__initial_schema.sql plus two V2 variants with overlapping/divergent declarations (e.g.profiles,recipes,pantry/prep lists). Actual applied sequence unknown. KitchenKit has V001–V009 with RPC/trigger security and stock decrement fixes. Never apply or concatenate these migrations into CulinaryOS. Data mapping must start from confirmed applied schema/version and backups, then incremental reversible migration.

Product decision before data cutover:how personal/home-cook and public-library records map to restaurant tenants. This does not block pure engine source parity planning. No default mapping is assumed.

Remaining full source checklist:source tests/native/mobile completeness, license grant, releases/issues/PRs refresh, real deployments/domains/DB applied versions, source auth/API negative behavior and actual target feature parity. Tree/source declarations alone cannot close these gates. No P06 feature migration is started.


Additional Android/Expo/Room/OCR obligations are recorded in execution/P06_ADDITIONAL_SURFACES.md; these were outside the earlier selected web capture and are not covered by the calculation/UI parity evidence.

