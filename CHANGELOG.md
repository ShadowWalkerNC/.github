# Changelog — ShadowWalkerNC/.github

All notable changes to the ShadowWalkerNC AI agent system are recorded here.
Format: `[version] — date — summary`

---

## [2.1] — June 28, 2026

### Reorganized
- Moved `UPA_V1.md`, `UPA_LIGHT_MODE.md`, `UPA_ESCALATION_CHECKLIST.md`, `upa.skill` → `upa/` subfolder
- Updated all canonical location references inside moved files

### Updated
- `README.md`: added BOOT.md to Agent Load Order (step 4), added UPA File Hierarchy table, updated architecture tree to reflect `upa/` folder and `templates/SESSION_CONTEXT.md`, fixed last-updated date
- `BOOT.md`: updated all UPA file URLs to new `upa/` paths, updated date

### Added
- `CHANGELOG.md` (this file): system version history
- `templates/SESSION_CONTEXT.md`: standalone fill-in session bootstrap, identical context block to `SESSION_START.md` but self-contained for new project onboarding

---

## [2.0] — June 27, 2026

### Initial structured release
- `AGENTS.md`: Constitutional rules, 6-tier instruction hierarchy, injection protection
- `SESSION_START.md`: Session handshake protocol — Context Block, Four Laws, Never-Do List, Agent Handoff Block
- `AGENT_DISPATCH.md`: Universal router — 17-task activation matrix, load budget per mode, conflict resolution, escalation routing
- `UPA_V1.md`: 21-phase workflow, 26 discipline roles, full engineering/security/UX/DB/AI standards
- `upa.skill`: Condensed YAML+prose skill-loader version of UPA
- `UPA_LIGHT_MODE.md`: Fast-track workflow for small, low-risk changes
- `UPA_ESCALATION_CHECKLIST.md`: Scope/data/security/infrastructure/architecture escalation triggers
- `BOOT.md`: Copy-paste session bootstrap with file URLs, context block, mode reference
- `agents/`: 12 specialist agent files (3 always-active, 9 on-demand)
- `templates/AGENTS.md`: Project repo AGENTS.md template
- `profile/README.md`: Public GitHub org profile

---
