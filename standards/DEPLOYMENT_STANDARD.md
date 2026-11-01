# Deployment Standard

Owner: ShadowWalkerNC · Version: 1.0.0 · Applies to: explicitly adopted project scope.
Canonical location: `standards/DEPLOYMENT_STANDARD.md`.

Treat hosting as a separate system. Map build/config/env/database/network/runtime before changing application code. Start provider adapters read-only; production deploy/rollback/domain/env writes require applicable explicit authorization. Capture commit, previous configuration, restoration steps and relevant live route/data checks. Provider SUCCESS and process health alone are not application or DB acceptance.
