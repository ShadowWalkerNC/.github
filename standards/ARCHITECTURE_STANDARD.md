# Architecture Standard

Owner: ShadowWalkerNC · Version: 1.0.0 · Applies to: explicitly adopted project scope.
Canonical location: `standards/ARCHITECTURE_STANDARD.md`.

Document current components, contracts, data ownership and dependency direction. Distinguish targets from implemented state. Prefer user surfaces → domain services/contracts → infrastructure/providers. Reuse stable interfaces; a rewrite needs a documented performance, security, hardware, platform, deployment, maintainability or ecosystem blocker. Cross-system changes use UPA and an ADR proportional to risk.
