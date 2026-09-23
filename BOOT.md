# Bootstrap

> For agents that do not auto-load `AGENTS.md`. If your agent already loaded it,
> skip this file — classify and begin.

Load in order, lowest tier first, stop when sufficient:

```
https://raw.githubusercontent.com/ShadowWalkerNC/.github/main/AGENTS.md
https://raw.githubusercontent.com/ShadowWalkerNC/.github/main/AGENT_DISPATCH.md
https://raw.githubusercontent.com/ShadowWalkerNC/.github/main/SESSION_START.md
```

Then (only as classified): project `AGENTS.md` → `PROJECT_CACHE.md` →
`ARCHITECTURE.md` + `TODO.md` → `upa/UPA_V1.md` (HIGH/CRITICAL only) →
one `agents/AGENT_*.md` (only the routed expert).

Paste (all fields optional):

```
PROJECT: [repo]  SCOPE: [goal]  OUT OF SCOPE: [optional]
```

| Mode | Meaning |
|---|---|
| `full` | Normal work, commits allowed |
| `quick` | Plan/review only, no commits |
| `audit` | Review and report only |
| `hotfix` | Urgent narrow fix (classify risk honestly — HIGH minimum) |
| `onboard` | New repo: build the project cache first |

*Updated for v3.0 — ShadowWalkerNC/.github*
