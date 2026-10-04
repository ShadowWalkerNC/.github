# deployment standard
Treat hosting as a separate system. Map build/config/env/database/network/runtime before changing application code. Start provider adapters read-only; production deploy/rollback/domain/env writes require explicit approval. Capture commit, previous configuration, restoration steps and relevant live route/data checks. Provider SUCCESS and process health alone are not application or DB acceptance.

Related: [phase contract](../execution/CURRENT_PHASE.yaml), [architecture decisions](../decisions/README.md), [handoff standard](AI_HANDOFF_STANDARD.md).
