# P05 additive event contract plan
Requirement: blueprint sections69/84/85 — typed/versioned events, stable contracts and contract testing. Existing DomainEvent has numeric version/generic payload; seven existing payload interfaces can be reused without guessing new domain fields.

Scope: packages/shared/src/types/event-contracts.ts (new), packages/shared/src/types/index.ts (one additive export), tests/architecture/event-contracts.test.mjs and event-contract-types.ts (new), docs/architecture/event-contracts.md plus foundation catalog metadata. Preserve all dirty UI/auth/payment/PostgreSQL/replay/source files.

Implementation: reuse existing seven payload interfaces in a discriminated V1 envelope; pure structural validator rejects unknown wires/version/payload and mismatched trusted tenant context. No database/provider actions; validator not wired into live broker/routes. Reserved/unmapped catalog events remain explicitly unsupported, not silently coerced. Existing wire strings and DomainEvent stay compatible.

Validation: runtime tests for each supported payload, malformed nested fields/unknown version/inherited fields/tenant mismatch; strict type assertions for wire-payload discrimination; isolated compiler emit/build plus Node import smoke. Independent Antigravity pasted-source review. Existing application/provider acceptance NOT RUN.

Risk audit: avoid duplicating business rules; validate structure rather than pricing/clinical/payment logic. Tenant matching is not authentication/authorization proof. Parser/validator accepts data only and does not grant actor permissions. No changes to existing broker handlers. Rollback: remove additive files and single export, preserve old types. Expected bounded review/implementation context about6k–10k tokens, not calibrated cost. No new dependencies, pipeline task, installs, permissions or deployment.
