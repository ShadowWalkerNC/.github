# Task classification

Owner: ShadowWalkerNC · Version: 1.0.0 · Applies to: explicitly adopted project scope.
Canonical location: `core/TASK_CLASSIFICATION.md`.

Classify scope and risk using affected behavior, not urgency or file count.
Low risk: copy, isolated style, small reversible fixes. Use a targeted check.
Medium risk: feature or contract-preserving multi-file changes. Plan briefly and
run related integration/type/build checks. High risk: auth, breaking contracts,
migrations, production, cross-system effects. Define failure/recovery, review
boundaries, and obtain applicable authorization. Destructive/irreversible work
needs a recovery strategy. Do not let these categories invent approvals or waive
existing requirements. Load optional specialist guidance only when it helps.
