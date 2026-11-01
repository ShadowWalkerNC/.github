# Extension Standard

Owner: ShadowWalkerNC · Version: 1.0.0 · Applies to: explicitly adopted project scope.
Canonical location: `standards/EXTENSION_STANDARD.md`.

Keep provider-specific behavior outside Forge Core. Extensions declare versioned type, capabilities, permissions and lifecycle. Do not trust provider/device code by default; constrain project and secret access. Prefer monorepo packages while small. Validate adapter contracts and define disable/removal behavior.
