# extension standard
Keep provider-specific behavior outside Forge Core. Extensions declare versioned type, capabilities, permissions and lifecycle. Do not trust provider/device code by default; constrain project and secret access. Prefer monorepo packages while small. Validate adapter contracts and define disable/removal behavior.

Related: [phase contract](../execution/CURRENT_PHASE.yaml), [architecture decisions](../decisions/README.md), [handoff standard](AI_HANDOFF_STANDARD.md).
