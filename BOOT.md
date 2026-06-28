# 🚀 Agent Session Bootstrap

> This repository follows the **Universal Project Architect (UPA)** workflow.
> Every AI session must load these files before planning or making changes.

---

## 📦 Core System Files

Load and follow these files before responding:

```
https://raw.githubusercontent.com/ShadowWalkerNC/.github/main/AGENTS.md
https://raw.githubusercontent.com/ShadowWalkerNC/.github/main/SESSION_START.md
https://raw.githubusercontent.com/ShadowWalkerNC/.github/main/AGENT_DISPATCH.md
https://raw.githubusercontent.com/ShadowWalkerNC/.github/main/upa/UPA_V1.md
https://raw.githubusercontent.com/ShadowWalkerNC/.github/main/upa/UPA_LIGHT_MODE.md
https://raw.githubusercontent.com/ShadowWalkerNC/.github/main/upa/UPA_ESCALATION_CHECKLIST.md
https://raw.githubusercontent.com/ShadowWalkerNC/.github/main/agents/AGENT_COHERENCE.md
https://raw.githubusercontent.com/ShadowWalkerNC/.github/main/agents/AGENT_SECURITY.md
https://raw.githubusercontent.com/ShadowWalkerNC/.github/main/agents/AGENT_DOCS.md
```

---

## 🗂️ Session Context Block

Fill this in and paste it after the file list above:

```
PROJECT:      [repo name]
PHASE:        [current phase]
LAST COMMIT:  [SHA or description]
MODE:         [full | quick | audit | hotfix | onboard]
AGENT:        [Perplexity | Claude | Cursor | Copilot]
OPEN:         [2-3 open items or "see TODO"]
SCOPE:        [what you want this session]
OUT OF SCOPE: [what you are not doing]
```

---

## 📁 Required Repo Files

Every project must have these files before active development begins:

| File | Purpose |
|---|---|
| `AGENTS.md` | Repo-specific agent instructions |
| `ARCHITECTURE.md` | System design and structure |
| `PROJECT_PLAN.md` | Phases, milestones, and roadmap |
| `TODO.md` | Active work and open items |
| `README.md` | User-facing overview and entry point |

---

## ⚙️ Mode Reference

| Mode | When to use |
|---|---|
| `full` | Active development session with commits |
| `quick` | Planning only — no commits, draft to Notion |
| `audit` | Review current state, flag issues |
| `hotfix` | Emergency fix, narrow scope only |
| `onboard` | First session on a new or unfamiliar repo |

---

## 📱 iPhone Shortcut

Save this as a text replacement:
- **Shortcut:** `;upa`
- **Expands to:** The full file list + session context block above

> Settings → General → Keyboard → Text Replacement → tap +

---

## 🔗 Per-Project Add-On

For repo-specific sessions, also load:

```
https://raw.githubusercontent.com/ShadowWalkerNC/[REPO]/main/AGENTS.md
https://raw.githubusercontent.com/ShadowWalkerNC/[REPO]/main/ARCHITECTURE.md
```

Replace `[REPO]` with the repo name.

---

*UPA v2.0 — Updated June 28, 2026 — ShadowWalkerNC/.github*
