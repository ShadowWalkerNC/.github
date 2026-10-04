# SDK-0009 — ACP v1 client
Disposition: REVISIT (owner-selected protocol target; install evaluation pending).
Requirement: connect generic coding agents without embedding each provider into Core.
Candidate scope: ForgeSatchel Agent Runtime adapter. Alternatives: existing CLI/session adapters and native MSP for Muse-specific capabilities.
Verified 2026-10-04: official TypeScript SDK stable entry point is ACP v1; v2 requires experimental import and is draft. [Primary source](https://github.com/agentclientprotocol/typescript-sdk).
License: repository displays Apache2.0; exact pinned package/transitive review pending. Costs: underlying agent/provider cost NOT VERIFIED. Offline: depends on selected agent; protocol support does not establish offline model availability.
Removal: keep transport types inside adapter and retain Forge-owned task/result/permission semantics. Next: version pin, permission/cancellation/stream/reconnect tests and compatibility evidence before installation/adoption. No SDK installed.
