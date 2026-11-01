# Api Standard

Owner: ShadowWalkerNC · Version: 1.0.0 · Applies to: explicitly adopted project scope.
Canonical location: `standards/API_STANDARD.md`.

Domain services own business validation. Web, CLI, SDK, MCP and extensions use the same authoritative behavior. Version meaningful contracts; validate external input, authenticate and authorize before side effects/replays, define failure and idempotency semantics. Breaking changes need deprecation/migration notes and consumer contract checks.
