# P06-A initial findings and next bounded scope
Source refs verified live:KitchenKit adf48ac99e48d25c21ec47dfe0409cfd56548227;RecipeOS419040f6479802127e875845ecde5cf144486a99. Full nontruncated trees202/241entries captured. Selected instruction/manifests/routes/engine/MCP contents pinned under baseline/p06-prep; no clone/new product repository or source modifications.

KitchenKit has recipe CRUD/detail, par levels, prep planner/history, protected dashboard and authentication UI. Hooks operate directly on Supabase recipes/ingredients/prep_plans/prep_plan_items. Separate recipe/prep MCPs use database service credentials. Nine source SQL migrations are listed; applied schema/production deployment and full RLS compatibility remain unknown.

CulinaryOS already contains ratio-engine and prep-engine. Source bytes differ. Prep functions buildShiftPrep/projectBatchSize appear retained; getMiseEnPlace adds undefined-to-zero fallback and target exports labels. Target ratio-engine is substantially expanded; never replace it wholesale with the smaller source. Need original-function AST/fixture parity, import/type compatibility and target consumer coverage before accepting reuse.

RecipeOS has different relational recipes/category/recipe_ingredients data and Next API handlers. Sample scaling uses shared/ratio-engine and base/target servings; convert route has different units/conversion semantics. Do not map it by name to KitchenKit ratio recipes. Mobile/native surfaces and CLI/MCP must be inventoried, not silently discarded.

First proposed execution slice AFTER bounded contract activation: parity harness for existing KitchenKit pure ratio/prep functions against target engines, with pinned fixtures and strict types. No database/UI/MCP cutover in that slice. Cases:stock below/equal/above par;zero/fractional/negative stock inputs as observed compatibility, explicit waste/default factor;duplicate ingredient names;optional units;empty recipes;target weights and failure semantics;NaN/infinite inputs documented rather than silently hardened. Independent review must identify any difference before feature movement. No results claimed; NOT RUN.

Then map missing UI/data/API features to Prep ownership with tenant binding, authenticated server endpoints, event compatibility, rollback and acceptance. Preserve current direct-DB source functionality until owning API parity is verified; do not carry service-role bypass into new MCP interfaces. Stop at source retirement/DB/production/permission gates.

Rollback for first tests-only slice:remove added fixtures/harness; existing source and deployed state unchanged. Later migration rollback requires explicit source/data/deployment restoration and window before any retirement.

Next inventory work:remaining source hooks/pages/shared ratio engine/schema/auth/helpers, all tool schemas/routes, workflow/deployment declarations and tests. Environment variable names only; no secret values. Current inventory is partial and no migration execution is activated.

Independent review:Antigravity source-only session82225 completed. Confirmed namespace/type/barrel changes and potential nullish fallback behavior; suggested parity cases. Missing scaled keys must first be shown reachable in actual scaleRecipe (do not invent a mocked business difference). Review is not runtime acceptance. See ANTIGRAVITY_P06_PREP_REVIEW.txt.
