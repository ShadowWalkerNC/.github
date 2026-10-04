# P06 additional source surfaces — 2026-10-04

49 previously omitted TypeScript/TSX/Kotlin/SQL files captured at the existing pinned KitchenKit/RecipeOS commits; all Git blob hashes verified, zero fetch/integrity failures. Source inventory is now KitchenKit64 + RecipeOS112 =176 captured files. No runtime, applied-schema or mobile acceptance is inferred. Other configuration/docs/assets remain in omittedPaths; inventory is not yet exhaustive.

## Newly visible acceptance obligations

| Source surface | Authoritative pinned evidence | Migration obligation and current evidence |
| --- | --- | --- |
| Android navigation | RecipeOS app/src/main/java/com/example/ui/MainNavigation.kt | Seven literal Compose destinations: recipes, recipe_detail/{recipeId}, add_edit_recipe/{recipeId}, pantry, grocery, prep, prep_detail/{prepId}. Feature/data parity NOT RUN. Existing 33-path KitchenKit web comparison does not cover Android. |
| Android local persistence | app/src/main/java/com/example/data/AppDatabase.kt and Entities.kt | Room declares version4, exportSchema=false, seven entities: Recipe, RecipeIngredient, PantryItem, GroceryItem, RatioBlueprint, PrepList, PrepTask. Local integer identities, defaults, relationships and quantities need explicit conversion/roundtrip evidence; do not equate this store to Supabase. Actual installed DB/data unknown. |
| Android upgrade safety | app/src/main/java/com/example/MainActivity.kt:37-41 | Source declares fallbackToDestructiveMigration(dropAllTables=true). This is a preservation/rollback risk, not authorization to invoke the fallback or proof existing data was lost. Obtain/export local data and migration history before moving or upgrading. |
| Expo screens | mobile/app/(auth)/login.tsx; mobile/app/(tabs)/index.tsx, pantry.tsx, prep.tsx, scale.tsx, scan.tsx; mobile/app/recipe/[id].tsx | Seven screen files and three layout files captured. Auth/camera/recipe/prep/scale parity, offline behavior and platform acceptance NOT RUN. File existence is source evidence only. |
| Mobile data operations | mobile/lib/queries.ts, supabase.ts, types.ts | Supabase query/mutation hooks captured; inventory records literal tables. Domain authority, RLS, tenant binding, error/retry and side-effect parity still require service-contract tests. |
| Mobile recipe OCR | mobile/app/(tabs)/scan.tsx:17-42; supabase/functions/ocr-recipe/index.ts:58-74 | Camera capture sends a base64 image and session token to the OCR edge function, then inserts the returned recipe. Function verifies user through auth.getUser before calling OpenAI. Provider cost, camera consent, failure handling, payload/schema validation, ownership and target parity NOT RUN. Do not add an SDK/provider or bypass auth to reproduce it. |
| Web request boundary | web/middleware.ts | Delegates request to updateSession with declared matcher. This adds source-level auth scope beyond component guards; target request/session equivalence NOT RUN. |
| Seed datasets/configuration | newly captured seed SQL and TS config | Inputs are source snapshots only. Seeds were not applied; project/runtime/deployment configuration remains separately inventoried. |

## Consequence for P06

Keep the existing KitchenKit calculations/UI convergence evidence bounded to those actual files. RecipeOS absorption remains incomplete until Android/Expo/local persistence/OCR obligations are explicitly accepted, migrated through contracts or owner-deferred. No source retirement, archive, schema application, feature copy or provider mutation performed.

Next: add these obligations to the Prep source feature/data contract map, resolve web auth containment separately, and verify real consumers against the pinned source. Preserve the Kotlin implementation while its independent lifecycle/platform requirements are assessed; no language rewrite is justified by this capture.
