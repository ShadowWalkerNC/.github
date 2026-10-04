# P05 read-only foundation preflight
P04 remains current; this is inspection/planning under pending P05 allowed_actions. No CulinaryOS product/ledger edits, tests, migrations, installs or deployment were performed.

Evidence: P05_READONLY_BOUNDARY_INVENTORY.json captures current HEAD/branch/change list, workspace globs and app/package manifests. Existing pnpm workspaces cover apps/*, packages/*, CLI, MCP and mobile. Ten app directories and numerous domain-oriented engines already exist. Directory names/manifests do not establish feature completeness.

Preserve current boundaries:
- POS/KDS/admin/web/server and existing marketing/ops/kitchenkit/recipeos app surfaces.
- Existing auth/db/event-bus/shared/types/UI/SDK and domain engine packages.
- Uncommitted PostgreSQL/auth/payment/offline work; Supabase and native PostgreSQL coexist.
- Local product ledger records H2a replay work. This is an ownership warning, not proof of a live agent process. No overlap permitted without current owner reconciliation.

Proposed P05 sequence after P04 exit and bounded activation:
1. Inspect existing API/event/SDK/MCP contracts and actual imports, not names alone.
2. Map canonical data ownership against existing implementation; record gaps without moving data.
3. Define typed/versioned events and contract homes by extending existing packages where sound.
4. Document app->module/domain->infrastructure direction and targeted import checks.
5. Add content-bearing foundation boundaries only where necessary; preserve existing app routes and engines. Do not create empty directories or rewrite for naming consistency.
6. Validate affected contracts/builds against preserved before-state. No source migrations until P06 parity/rollback plans.

NOT VERIFIED: current build/test health, live DB transition parity, provider deployments, complete data ownership, package feature parity, import direction enforcement. Previous product test results are historical and cannot establish these checks.
