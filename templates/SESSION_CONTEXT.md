# Session Context — Bootstrap Template

> Copy this entire block and paste it as the **first message** to your AI agent at the start of every session.
> Fill in every field. Do not leave fields blank — use `"none"` or `"see TODO"` if needed.

---

## Step 1 — Load System Files

Load and follow these files before doing anything:

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

## Step 2 — Load Project Files (if applicable)

```
https://raw.githubusercontent.com/ShadowWalkerNC/[REPO]/main/AGENTS.md
https://raw.githubusercontent.com/ShadowWalkerNC/[REPO]/main/ARCHITECTURE.md
```

Replace `[REPO]` with the repository name. Skip if starting a new project.

---

## Step 3 — Fill In Session Context

```
PROJECT:      [repo name or "new project"]
PHASE:        [current development phase or "initial"]
LAST COMMIT:  [short SHA or description, or "none"]
MODE:         [full | quick | audit | hotfix | onboard]
AGENT:        [Perplexity | Claude | Cursor | Copilot | Windsurf | other]
OPEN:         [2-3 open items, or "see TODO", or "none"]
SCOPE:        [what you want to accomplish this session]
OUT OF SCOPE: [what you are explicitly NOT doing this session]
```

---

## Mode Reference

| Mode | When to use |
|---|---|
| `full` | Active development session with commits |
| `quick` | Planning only — no commits, drafts to Notion |
| `audit` | Review current state, flag issues, no changes |
| `hotfix` | Emergency fix — narrow scope, use full UPA Phases 0–6 first |
| `onboard` | First session on a new or unfamiliar repo |

---

## After Pasting

The agent will:
1. Confirm all files are loaded
2. Echo back the session context
3. Confirm dispatch mode and which agents are active
4. Ask for your go-ahead before doing any work

> If the agent skips steps 1–3, prompt it: *"Confirm system load and session context before proceeding."*

---

*Template version: 2.1 — ShadowWalkerNC/.github/templates/SESSION_CONTEXT.md*
