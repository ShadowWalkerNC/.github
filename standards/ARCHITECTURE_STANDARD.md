# architecture standard
Document current components, contracts, data ownership and dependency direction. Distinguish targets from implemented state. Prefer user surfaces → domain services/contracts → infrastructure/providers. Reuse stable interfaces; a rewrite needs a documented performance, security, hardware, platform, deployment, maintainability or ecosystem blocker. Cross-system changes use UPA and an ADR proportional to risk.

Related: [phase contract](../execution/CURRENT_PHASE.yaml), [architecture decisions](../decisions/README.md), [handoff standard](AI_HANDOFF_STANDARD.md).
