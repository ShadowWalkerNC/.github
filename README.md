# ShadowWalkerNC/.github

Universal AI agent system, process standards, UPA framework, and session bootstrap for all ShadowWalkerNC repositories.

---

## What This Repo Is

This is the **brain of the ShadowWalkerNC AI development system**. Every AI agent (Perplexity, Claude, Codex, Cursor, Copilot, Windsurf) operating in any ShadowWalkerNC project reads from this repo before doing anything. It defines identity, load order, instruction hierarchy, engineering standards, and the full team of specialist agents.

---

## System Architecture

```
AGENTS.md                        ← START HERE (auto-loaded by coding agents)
│   Constitutional rules
│   6-tier instruction hierarchy
│   Injection protection
│
SESSION_START.md                 ← Session handshake protocol
│   Context block format
│   Four Laws
│   Never-Do List
│   Agent Handoff Block
│
AGENT_DISPATCH.md                ← Universal router
│   Always-active vs. on-demand agent split
│   Activation matrix (17 task types)
│   Load budget per session mode
│   Conflict resolution matrix
│   Escalation routing
│
UPA_V1.md                        ← Framework backbone
│   21-phase universal workflow
│   26 discipline roles
│   Full engineering, security, UX, DB, AI standards
│
upa.skill                        ← Condensed skill-loader format (YAML + prose)
│
UPA_LIGHT_MODE.md                ← Fast-track workflow for small changes
UPA_ESCALATION_CHECKLIST.md     ← Triggers and procedure: Light → Full UPA
│
agents/
├── AGENT_COHERENCE.md            ← ALWAYS ACTIVE — long-session integrity
├── AGENT_SECURITY.md             ← ALWAYS ACTIVE — security review on all code
├── AGENT_DOCS.md                 ← ALWAYS ACTIVE — documentation on all changes
├── AGENT_ARCHITECT.md            ← on-demand — Enterprise Architect + Systems Engineer
├── AGENT_ENGINEER.md             ← on-demand — Principal + Frontend + Backend Engineer
├── AGENT_AI.md                   ← on-demand — AI/ML Engineer
├── AGENT_DATABASE.md             ← on-demand — Database Architect
├── AGENT_DEVOPS.md               ← on-demand — DevOps + SRE + Cloud Architect
├── AGENT_QA.md                   ← on-demand — QA + Performance Engineer
├── AGENT_UX.md                   ← on-demand — UX/UI Designer + Accessibility
├── AGENT_PRODUCT.md              ← on-demand — Product + Project Manager
└── AGENT_BUSINESS.md             ← on-demand — Marketing + SEO + Finance + Legal
│
templates/
└── AGENTS.md                     ← Template for project repo AGENTS.md files
│
profile/
└── README.md                     ← Public GitHub org profile
```

---

## How to Start a Session

1. Copy the Session Context Block from `SESSION_START.md`.
2. Fill in every field.
3. Paste as the first message to your agent.
4. The agent loads all files, confirms dispatch, and waits for your go-ahead.

---

## How to Add This System to a New Project Repo

1. Copy `templates/AGENTS.md` to the project repo root.
2. Fill in the project identity, stack, structure, and project-specific rules.
3. Any coding agent working in that repo will auto-load the project `AGENTS.md`, which extends this system.

---

## Agent Load Order (Every Session)

```
1.  AGENTS.md
2.  SESSION_START.md
3.  AGENT_DISPATCH.md
4.  UPA_V1.md
5.  agents/AGENT_COHERENCE.md     (always)
6.  agents/AGENT_SECURITY.md      (always)
7.  agents/AGENT_DOCS.md          (always)
8.  On-demand agents per matrix   (per task type + load budget)
9.  UPA_LIGHT_MODE.md             (if applicable)
10. UPA_ESCALATION_CHECKLIST.md   (keep active)
11. Repo-local AGENTS.md          (project overrides)
12. ARCHITECTURE.md + TODO.md     (project context)
```

---

## Veto Authority

| Agent | Can Block |
|---|---|
| SECURITY | Any auth, privacy, or trust boundary violation |
| COHERENCE | Any work when goal drift or context exhaustion is detected |
| QA | Any release without passing tests or performance targets |
| DATABASE | Any migration that risks data loss or corruption |
| DEVOPS | Any deployment without rollback plan or observability |
| UX | Any WCAG 2.1 AA accessibility violation |

---

*Author: ShadowWalkerNC · Last updated: June 27, 2026*
