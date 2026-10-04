# P04 / MUSE-001 bounded execution plan
Status: proposed execution contract; current phase remains planning until activation.

Verified CLI: Muse Code 1.4.2 (1.4.2-R4684.1), not the older skill's 1.4.0. exec help supports workspace, prompt-file, JSONL events, maximum model steps/output bytes, disabling web/foreign personal context, default approval/sandbox. No installation or settings change needed. --trust-workspace is not required to run exec and does not replace isolation.

Scope: existing C:/Users/white/Documents/GitHub/MuseAiBots/experiments/MUSE-001 only, plus relevant STATUS/ROADMAP/ARCHITECTURE/manifest/handoff updates after verification. Preserve nine untracked governance files and unborn Git state. No commits, pushes, repo rename, SDK installation or production promotion.

Codex implementation:
- small Node-standard-library harness, fixtures and independent hidden acceptance checks;
- experiment README, hypothesis, results/benchmarks and explicit decision;
- baseline failing fixture verification before an agent run; successful-reference acceptance; regression/failure containment;
- per-run isolated scratch directory, narrow task prompt, allowed file list, timeout and observed changed-file inventory;
- record runtime/version, fixture hash, result, test/build status, latency and retry/rework; tokens/cost unknown if not observed;
- keep verifier/reference outside agent-editable scratch;
- validate saved results and preserve all raw artifacts without secrets/private reasoning.

Muse run design: existing CLI with --workspace pointing to generated scratch, --prompt-file, --json, --max-model-steps, --max-tool-output-bytes, --disable-web-tools and --no-foreign-personal-context. Keep default sandbox/approval; do not use yolo, disable-approval, disable-sandbox or allow-workspace-switch. Default denial or unsupported sandbox remains BLOCKED, not fake agent failure or justification to expand permissions. Meta coding run requires working existing auth; never inspect/copy plaintext credentials. Echo/offline runner checks do not demonstrate Muse coding ability.

Antigravity's separate benchmark specification informs task selection/decision thresholds; Codex does not duplicate it. If that assignment has no claimed/running worker, its status remains available. Implementation contract activation is separate from external repository rename approval.

Exit: every executed experiment records hypothesis, actual implementation, measured results and decision. A validated local experiment does not automatically become an adopted production capability. P04 remote rename remains separately gated.

