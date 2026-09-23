# ShadowWalkerNC/.github

Classifier-first universal AI system for all ShadowWalkerNC repos.
Portable across Codex, Gemini/Antigravity, Claude, Copilot, Cursor, Windsurf.

## How it works

```
INTENT → NORMALIZE → CLASSIFY → LOAD MINIMUM CONTEXT → ANALYZE
  → PLAN (by risk) → EXECUTE → VERIFY → AUDIT (changed scope) → CACHE
```

- LOW + LOCAL + confident → fast path: inspect → change → verify. No UPA,
  no extra agents, no written plan.
- HIGH/CRITICAL (arch, auth, security, migration, deploy, breaking API,
  cross-system, destructive) → escalates to `upa/UPA_V1.md` + routed experts
  + rollback planning + heavy audit.

## Files

```
AGENTS.md                 ← START HERE — compact control plane (Tier 0)
AGENT_DISPATCH.md         ← risk-based router (no always-active agents)
SESSION_START.md          ← 2-line start, short close (no ceremony)
BOOT.md                   ← manual bootstrap for agents without auto-load
upa/UPA_V1.md             ← deep/escalation framework (HIGH/CRITICAL only)
upa/UPA_LIGHT_MODE.md     ← optional helper, not a gate
upa/UPA_ESCALATION_CHECKLIST.md ← optional helper, not a gate
agents/                   ← 12 specialists, all on-demand (ENGINEER UX DATABASE
│                           DEVOPS SECURITY QA ARCHITECT AI PRODUCT BUSINESS
│                           DOCS COHERENCE)
templates/AGENTS.md       ← project AGENTS.md (identity + rules + cache pointer)
templates/PROJECT_CACHE.md← durable project facts (stack, map, decisions, issues)
templates/SESSION_CONTEXT.md ← optional paste-in bootstrap
```

Context tiers: 0 = AGENTS.md + request · 1 = project cache + `git status` ·
2 = affected files/tests · 3 = deps/logs/history · 4 = broad analysis (rare).

## New project setup

1. Copy `templates/AGENTS.md` → repo root, fill in identity/commands/map/rules.
2. Copy `templates/PROJECT_CACHE.md` → repo root, fill in stack/decisions/issues.
3. Agents auto-load the project `AGENTS.md`, which extends this system.

## Token savings (estimate)

Old boot forced ~12 files every session (AGENTS + SESSION_START + DISPATCH +
UPA_V1 ~19KB + COHERENCE/SECURITY/DOCS + LIGHT + ESCALATION + ARCH + TODO):
roughly 45–60KB of context before any work. New boot for a LOW task is
AGENTS.md (~8KB) + DISPATCH (~3KB) + project cache (~1–2KB) + affected files —
roughly 12–15KB, a ~70% reduction. MEDIUM adds one agent file (~5KB).
HIGH/CRITICAL loads UPA (~19KB) + ≤3 agents — i.e. the old cost, but only when
justified. Output savings come from no ceremony blocks, no mandatory multi-agent
panels, no fixed 4-file doc updates, and audits scoped to changed code.

## Vetoes (only when that agent is loaded)

SECURITY: trust boundaries · DATABASE: lossy migrations · DEVOPS: unsafe
releases · UX: WCAG 2.1 AA · QA: untested releases · ARCHITECT: system design.

*Author: ShadowWalkerNC · v3.0*
