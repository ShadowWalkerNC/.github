# P05 contract boundary map — read-only
Current phase remains P04. No product edits or execution acceptance.

| Boundary | Current source evidence | P05 implication |
|---|---|---|
| Shared event shapes | packages/shared/src/types/events.ts defines DomainEvent/eventType/version/tenantId/payload | Reuse canonical shape; do not duplicate contracts in a new package by default |
| Event-bus types | packages/event-bus/src/types.ts re-exports shared contracts | Preserve dependency direction and single source of truth |
| Event transport/storage | event-bus broker imports Supabase and writes domain_events | Provider transition must preserve delivery/handler/storage semantics; parity unknown |
| SDK | packages/sdk/src/index.ts uses Hono API/baseUrl/tenant config | Preserve existing API adapter; do not add another SDK |
| MCP POS | pos-server calls /v1/orders and item/send endpoints | Business implementation stays behind API; inspect remaining MCP surfaces before broad certification |
| MCP inventory | inventory-server calls /v1/pantry | Existing route/domain mapping must be reconciled with canonical inventory ownership |
| Adapter auth | MCP shared headers Bearer token plus X-Tenant-Id; SDK supports x-internal-key and bearer | Compare server auth/caller expectations and tests before any normalization; no live compatibility claim |

Wire names include pos:order:created and recipeos:* etc. Keep them compatible until a versioned migration/ADR provides old/new mapping and deprecation. Blueprint display names must not silently become wire-protocol rewrites.

Canonical proposed data owners remain Core: orders/payments/config/baseinventory; Prep: recipes/prep; Ops: labor/vendors/purchasing/waste; Marketing: campaigns/publishing; Web: websitecontent/themes; Intelligence: recommendations; ShorelineOps: clinicaldining. This is strategic ownership, not evidence current tables/imports already enforce it.

Next bounded checks: actual domain consumers and imports, payload-version dispatch semantics, tenant-auth parity across SDK/MCP callers, data ownership matrix, and isolated contract negative tests. Current scopes/active replay work must be reconciled before edits. Build/contract tests NOT RUN for this planning artifact.
