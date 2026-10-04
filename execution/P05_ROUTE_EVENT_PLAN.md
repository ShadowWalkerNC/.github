# P05 active route event contracts
Requirement: define contracts for four active route wires already cataloged outside EventType: table merged/transferred/assistance and reservation seated. Existing route producers remain unchanged.

Scope: existing additive event-contracts.ts map/validator, architecture runtime/type assertion tests, new source-derived route parity test, foundation metadata/docs only. No original events.ts or application/auth changes.

Preserve source values: nullable table_id; optional/explicit-undefined transfer orderId and managerId; optional/explicit-undefined assistance note; empty fromServerId supported by current producer. Nested reservation tenant_id must agree with envelope tenant. No new financial/manager authorization policy.

Parity: parse seven actual mock/live producer payload objects with existing TypeScript AST, evaluate only an allowlisted data-expression subset against fixture context; never execute route code or connect DB. Tests cover serialized/unserialized payloads, malformed fields and type narrowing. Run shared typecheck/isolated emit/import and dependency guard. Antigravity independent pasted-source review.

Risk/rollback: pure additive contracts; no consumer adoption. Unsupported/dormant wires remain explicit. Remove new four mappings/fixtures to roll back without modifying route/state. Bounded expected context about6k–10k tokens, not calibrated usage. Existing P05 scope covers this stage; no installs/new permissions/deployment/migration.
