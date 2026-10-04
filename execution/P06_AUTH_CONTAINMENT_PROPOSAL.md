# P06 first application slice — proposed auth containment
Status:reviewable proposal,not activated. Current APP-P06-PARITY permits staging tests/evidence only.

Evidence:all33captured KitchenKit UI paths already present in target;6same normalized AST,27changed. Existing target apps/kitchenkit/src/components/auth/RequireAuth.tsx unconditionally renders children. AuthContext substitutes mockSession after no configuration,empty getSession or logout/auth change;provider supplies mockUser fallback. This is source evidence of a UI login bypass,not proof database/server authorization is bypassed or deployed behavior.

Requirement:preserve real source authentication before claiming Prep feature migration parity. Do not overwrite existing target additions or alter role/permission policy.

Proposed exact product paths:
- apps/kitchenkit/src/context/AuthContext.tsx:real session/user only;null remains unauthenticated;configured client errors finish loading with explicit unavailable/error state;logout must not create a mock session.
- apps/kitchenkit/src/components/auth/RequireAuth.tsx:loading state,then real-session requirement and redirect to existing login;no unconditional render.
- apps/kitchenkit/src/lib/supabase.ts:represent unavailable client honestly;no nonnull assertion pretending absent configuration is configured. Preserve environment variable names;do not read/change their values.
- targeted tests for no config/no session/logout/session/error;canonical STATUS/ARCHITECTURE and ledger/handoff only.

Preserve browser/API/DB/data/provider settings,existing routes,React/Vite stack and richer target feature pages. Do not introduce new packages or demo roles. If demo operation is required,it must be an explicit isolated mode with no real credential/data writes;this slice does not invent or activate that mode.

Acceptance:unauthenticated/no-config/logout never renders protected children or impersonates a user;valid session still works;loading/error terminate predictably;targeted tests,typecheck/build and focused login/browser checks pass. Source-level tests alone cannot establish actual backend/RLS security. Record NOTRUN where missing hosted/configured acceptance.
Rollback:preserve exact before hashes/snapshots of three source files;revert only this authored diff if regressions occur. Never discard other agents' work. No deployment,secret modification,permission grants,push or DB mutation.

Separate blockers:KitchenKit hooks use plan_id while pinned SQL declares prep_plan_id;actual target applied schema unknown,so no column fix proposed without evidence. Fraction/percentage/formula compatibility is separately documented;existing target callers stay unchanged. Personal/user-to-tenant mapping remains a decision before data cutover. RecipeOS model/native/mobile inventory and live parity remain incomplete.

Activation request covers this three-file application auth-containment slice plus targeted tests/docs only. It does not activate the rest of P06 or source retirement.
