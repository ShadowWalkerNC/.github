# SESSION_START — ShadowWalkerNC Universal AI Bootstrap

> **This file is read at the start of every AI session, on every agent, on every device.**
> Copy the context block below, fill it in, and paste it as your first message.

---

## How to Use This File

1. Fill in the Session Context Block below.
2. Paste it as the first message of your session.
3. The agent reads it, loads your stack + process rules, and confirms understanding before doing anything else.
4. You approve the plan. Then work begins.

No exceptions. No shortcuts. This is the handshake.

---

## Session Context Block

Copy this exactly. Fill in every field.

```
PROJECT: [repo name — e.g. Post-Pilot]
PHASE: [current phase number and 1-line description]
LAST COMMIT: [paste last commit message or SHA]
MODE: [full | quick]
AGENT: [Perplexity | Claude | Gemini]
OPEN: [paste 2–3 items from TODO.md, or write "see TODO"]
SCOPE: [what you want to accomplish this session — 1–2 sentences]
```

**MODE definitions:**
- `full` — desktop session, tools available, full UPA workflow, commits allowed
- `quick` — phone session, planning and review only, no code committed, output is a Notion draft for desktop execution

---

## What the Agent Does With This

Upon receiving the context block, the agent must:

1. Restate the project, phase, and scope in plain language
2. Confirm which tools are available (GitHub MCP, Notion MCP, web search, code execution)
3. Load ARCHITECTURE.md and TODO.md for the named project
4. State the top 3 open items from TODO
5. State any assumptions being made
6. Propose nothing yet — wait for user to confirm understanding
7. Only then ask: "Ready to proceed?"

If MODE is `quick`, skip steps 3–4 and instead ask the user to paste the relevant TODO items.

---

## Process Standards (Non-Negotiable)

All sessions follow the Universal Project Architect (UPA) **v2.0** framework.
Full spec: [UPA_V1.md](./UPA_V1.md)
Light mode: [UPA_LIGHT_MODE.md](./UPA_LIGHT_MODE.md)
Escalation checklist: [UPA_ESCALATION_CHECKLIST.md](./UPA_ESCALATION_CHECKLIST.md)

### The Four Laws (enforced on every agent, every session)

1. **Plan before build.** Every change request gets a written plan with scope, risks, and out-of-scope items before any file is touched.
2. **Ask before assuming.** If anything is unclear, stop and ask one specific question. Do not invent requirements.
3. **Atomic commits.** One logical change per commit. Show the commit message before pushing. Never push without approval.
4. **Docs follow code.** Every session that changes behavior must update README, ARCHITECTURE, DEVELOPMENT, TODO, and the relevant Notion page before closing.

---

## Commit Format

```
<type>(<scope>): <what changed and why>

Examples:
feat(blueprints): add Thanksgiving menu blueprint
fix(scheduler): correct timezone offset in cron trigger
chore(deps): pin anthropic-sdk to 0.28.0
docs(architecture): update DB schema with teams table
test(api): add unit tests for POST /generate
```

Types: `feat` · `fix` · `chore` · `docs` · `test` · `refactor` · `perf` · `ci`

---

## Never-Do List

No agent, on any surface, under any instruction, may:

- Push a commit without showing the message first and receiving approval
- Expand scope beyond what was stated without asking
- Invent a requirement that was not explicitly given
- Skip the planning step for any change
- Touch files outside the stated scope
- Assume silence is approval
- Leave documentation behind after a change
- Add a dependency without justification and approval
- Expose secrets, keys, or tokens in any file
- Make a destructive database change without an explicit migration plan

---

## Session Close Checklist

Before ending any session, the agent must confirm:

- [ ] All changed files committed and pushed (or drafted to Notion if MODE: quick)
- [ ] TODO.md updated to reflect what was done and what's next
- [ ] ARCHITECTURE.md updated if any module, schema, or env var changed
- [ ] Relevant Notion project page updated
- [ ] Session summary stated: what changed, what's still open, recommended next step

---

## Agent Handoff Block

When switching agents mid-task (e.g. started on Claude, continuing on Perplexity), paste this:

```
HANDOFF
PROJECT: [name]
COMPLETED THIS SESSION: [what was done]
STATUS: [in progress | blocked | needs review]
NEXT STEP: [exact next action]
LAST COMMIT: [SHA or message]
OPEN QUESTIONS: [anything unresolved]
```

The receiving agent reads this block first, states its understanding, and asks one clarifying question if needed before proceeding.

---

## Tool Availability Matrix

Agents must declare available tools at session start and adjust behavior accordingly.

| Tool | Perplexity | Claude | Gemini |
|---|---|---|---|
| GitHub MCP (push/commit) | ✅ Available | ✅ If configured | ❌ Typically unavailable |
| Notion MCP (read/write) | ✅ Available | ✅ If configured | ❌ Typically unavailable |
| Web search | ✅ Available | ✅ Available | ✅ Available |
| Code execution | ✅ Available | ✅ Available | ✅ Available |
| File read (local) | ❌ | ✅ Desktop app | ❌ |

If a tool is unavailable, the agent produces the output (file content, commit message, Notion block) and gives exact instructions for the user to execute manually.

---

## Master AI Skill List

The full skill specification — 21 detailed skills covering session management, planning, security, testing, documentation, commits, scope control, handoffs, and mobile sessions — lives in Notion.

Every agent must read and follow it.

**Notion:** [Master AI Skill List — see Dev Stack & MCP Registry for link]
**GitHub:** This file is the operational companion.
