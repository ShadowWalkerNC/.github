---
name: agent-dispatch
description: Universal Agent Router — tells any AI agent which specialist files to load, in what order, and under what conditions. This is the first file any agent reads after SESSION_START.md.
metadata:
  author: ShadowWalkerNC
  version: "1.0"
---

# AGENT_DISPATCH — Universal Agent Router

> **Read this file first.** After `SESSION_START.md`, this is your routing table. It tells you which agent files to load, when to load them, and how to combine them for multi-discipline tasks.
>
> **Canonical location:** `ShadowWalkerNC/.github/AGENT_DISPATCH.md`

---

## 1. How to Use This File

1. Read `SESSION_START.md` and complete the session handshake.
2. Read this file.
3. Identify the task type(s) from the Activation Matrix below.
4. Load ALL listed agent files for the identified task type(s).
5. Each loaded agent reviews from its domain. No agent is skipped.
6. Conflicts between agents are surfaced, not suppressed.
7. Proceed through the UPA workflow with all active agents engaged.

**You do not load one file. You load every file relevant to the task.**

---

## 2. Agent File Index

| File | Role | Domain |
|---|---|---|
| `agents/AGENT_ARCHITECT.md` | Enterprise Architect + Systems Engineer | System design, integration, tech alignment, infrastructure |
| `agents/AGENT_ENGINEER.md` | Principal Engineer + Frontend + Backend | Code quality, APIs, state, client/server logic |
| `agents/AGENT_AI.md` | AI/ML Engineer | Model selection, prompt engineering, inference, evaluation |
| `agents/AGENT_DATABASE.md` | Database Architect | Schema, indexing, migrations, data integrity |
| `agents/AGENT_DEVOPS.md` | DevOps / SRE + Cloud Architect | CI/CD, deployment, observability, reliability |
| `agents/AGENT_SECURITY.md` | Security Engineer | Auth, trust boundaries, STRIDE, hardening |
| `agents/AGENT_QA.md` | QA Engineer + Performance Engineer | Testing strategy, defect management, latency, throughput |
| `agents/AGENT_UX.md` | UX/UI Designer + Accessibility Specialist | Journeys, IA, WCAG 2.1 AA, visual hierarchy |
| `agents/AGENT_PRODUCT.md` | Product Manager + Project Manager | Scope, roadmap, schedule, milestones, risks |
| `agents/AGENT_DOCS.md` | Technical Writer | Docs architecture, runbooks, changelogs, clarity |
| `agents/AGENT_BUSINESS.md` | Marketing + SEO + Financial + Legal + Customer Advocate | Positioning, cost, compliance, user retention |

---

## 3. Activation Matrix

Each row is a task type. Load every agent marked ✅ for that task.

| Task Type | ARCH | ENG | AI | DB | DEVOPS | SEC | QA | UX | PROD | DOCS | BIZ |
|---|---|---|---|---|---|---|---|---|---|---|---|
| **New project / greenfield** | ✅ | ✅ | — | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Feature development** | ✅ | ✅ | — | ✅ | — | ✅ | ✅ | ✅ | ✅ | ✅ | — |
| **Bug fix** | — | ✅ | — | — | — | ✅ | ✅ | — | — | ✅ | — |
| **Hotfix / critical patch** | — | ✅ | — | — | ✅ | ✅ | ✅ | — | ✅ | ✅ | — |
| **AI / prompt engineering** | ✅ | ✅ | ✅ | — | — | ✅ | ✅ | — | ✅ | ✅ | — |
| **Database change / migration** | ✅ | ✅ | — | ✅ | ✅ | ✅ | ✅ | — | ✅ | ✅ | — |
| **API design / new endpoint** | ✅ | ✅ | — | ✅ | — | ✅ | ✅ | — | ✅ | ✅ | — |
| **UI / UX work** | — | ✅ | — | — | — | — | ✅ | ✅ | ✅ | ✅ | — |
| **Security audit** | ✅ | ✅ | — | ✅ | ✅ | ✅ | ✅ | — | — | ✅ | — |
| **Performance audit** | ✅ | ✅ | — | ✅ | ✅ | — | ✅ | — | — | ✅ | — |
| **Code review / PR review** | ✅ | ✅ | — | ✅ | ✅ | ✅ | ✅ | ✅ | — | ✅ | — |
| **DevOps / CI/CD / infra** | ✅ | — | — | — | ✅ | ✅ | ✅ | — | ✅ | ✅ | — |
| **Documentation** | — | ✅ | — | ✅ | — | — | — | — | ✅ | ✅ | — |
| **Architecture review** | ✅ | ✅ | — | ✅ | ✅ | ✅ | — | ✅ | ✅ | ✅ | — |
| **Business / product planning** | ✅ | — | — | — | — | — | — | ✅ | ✅ | — | ✅ |
| **Launch / release readiness** | ✅ | ✅ | — | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Full audit** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |

---

## 4. Multi-Agent Execution Rules

### 4.1 Review authority
- Every loaded agent reviews decisions in its domain.
- No agent may override another without stating a conflict and justification.
- `AGENT_SECURITY.md` and `AGENT_QA.md` hold veto authority over unsafe or untested changes.
- `AGENT_ARCHITECT.md` holds final say on system coherence conflicts.

### 4.2 Conflict resolution
1. State the conflict explicitly: "[Agent A] recommends X. [Agent B] recommends Y."
2. Show the trade-off between both positions.
3. Make a recommendation with justification.
4. Flag for user decision if trade-off is significant.

### 4.3 Output format for multi-agent tasks
When multiple agents are active, structure output as:
```
## [DISCIPLINE] Review
[findings, recommendations, risks from that discipline]
```
One section per active agent discipline. Not one wall of text.

### 4.4 Minimum active agents
No task runs with fewer than 2 agents active. Every task has at minimum:
- The domain expert for the work being done.
- `AGENT_SECURITY.md` for any code change.
- `AGENT_DOCS.md` for any change that affects behavior.

---

## 5. Escalation Routing

If `UPA_ESCALATION_CHECKLIST.md` triggers during any task:
1. Stop immediately.
2. Load `AGENT_ARCHITECT.md` if not already active.
3. Load `AGENT_SECURITY.md` if not already active.
4. Load `AGENT_PRODUCT.md` if not already active.
5. Re-run Phase 0–6 of the UPA workflow with all three agents engaged.
6. Do not resume build until user approves the revised plan.

---

## 6. Mode Routing

| Session Mode | Agents to Load |
|---|---|
| `full` — desktop, tools available | Full activation per matrix above |
| `quick` — phone, planning only | `AGENT_PRODUCT.md` + `AGENT_ARCHITECT.md` only. No code. Output to Notion draft. |
| `audit` — review existing system | `AGENT_ARCHITECT.md` + `AGENT_SECURITY.md` + `AGENT_QA.md` + `AGENT_DOCS.md` |
| `hotfix` — critical production fix | `AGENT_ENGINEER.md` + `AGENT_SECURITY.md` + `AGENT_DEVOPS.md` + `AGENT_QA.md` |
| `onboard` — new project setup | All agents. Full UPA Phase 0–13 before any file is created. |

---

## 7. File Load Order

Always load in this order:

```
1. SESSION_START.md
2. AGENT_DISPATCH.md  (this file)
3. UPA_V1.md          (framework backbone)
4. Agent files per Activation Matrix (in order listed in index above)
5. UPA_LIGHT_MODE.md  (if Light Mode applies)
6. UPA_ESCALATION_CHECKLIST.md (keep active throughout session)
```

---

*Version: 1.0 | Author: ShadowWalkerNC | Canonical: `ShadowWalkerNC/.github/AGENT_DISPATCH.md`*
