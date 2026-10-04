# api standard
Domain services own business validation. Web, CLI, SDK, MCP and extensions use the same authoritative behavior. Version meaningful contracts; validate external input, authenticate and authorize before side effects/replays, define failure and idempotency semantics. Breaking changes need deprecation/migration notes and consumer contract checks.

Related: [phase contract](../execution/CURRENT_PHASE.yaml), [architecture decisions](../decisions/README.md), [handoff standard](AI_HANDOFF_STANDARD.md).
