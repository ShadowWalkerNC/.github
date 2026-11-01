# Security Standard

Owner: ShadowWalkerNC · Version: 1.0.0 · Applies to: explicitly adopted project scope.
Canonical location: `standards/SECURITY_STANDARD.md`.

Use explicit read/write/execute/git.write/publish/deploy/admin/secret.read/secret.write/financial/clinical/system/destructive permissions. No agent/provider/device is inherently trusted. Keep secrets outside Git, authenticate and authorize before durable side effects, bind retries to authorized identity/context and preserve domain safety invariants. High-risk mutations require applicable authorization; critical operations need recovery and independent verification where practical.
