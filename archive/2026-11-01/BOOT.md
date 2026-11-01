> **Historical snapshot — 2026-11-01.** Sanitized reference only. Not current instructions, authority, or product acceptance. See the archive README.

# Bootstrap

> For agents that do not auto-load `AGENTS.md`. If your agent already loaded it,
> skip this file — classify and begin.

Load in order, lowest tier first, stop when sufficient:

```
http[local-path-redacted]
http[local-path-redacted]
http[local-path-redacted]
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


## Portfolio startup
For portfolio work, follow [AGENTS.md](AGENTS.md) and [execution/CURRENT_PHASE.yaml](execution/CURRENT_PHASE.yaml), then [AI_SHARED_LEDGER.md](AI_SHARED_LEDGER.md). The new [MASTER_PLAN.md](MASTER_PLAN.md) execution map sits above existing UPA/agents without replacing them.
