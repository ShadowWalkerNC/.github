> **Historical snapshot — 2026-11-01.** Sanitized reference only. Not current instructions, authority, or product acceptance. See the archive README.

# security standard
Use explicit read/write/execute/git.write/publish/deploy/admin/secret.read/secret.write/financial/clinical/system/destructive permissions. No agent/provider/device is inherently trusted. Keep secrets outside Git, authenticate and authorize before durable side effects, bind retries to authorized identity/context and preserve domain safety invariants. High-risk mutations require owner approval; critical operations need recovery and independent verification where practical.

Related: [phase contract](../execution/CURRENT_PHASE.yaml), [architecture decisions](../decisions/README.md), [handoff standard](AI_HANDOFF_STANDARD.md).
