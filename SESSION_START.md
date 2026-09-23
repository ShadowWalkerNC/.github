# SESSION_START — Lightweight Handshake v3.0

> Canonical location: `ShadowWalkerNC/.github/SESSION_START.md`
> Load order: `AGENTS.md` → `AGENT_DISPATCH.md` → this file → Tier 1/2 context
> as classified. Do NOT preload UPA or agent files.

## Start (no ceremony)

State two lines and begin — do not wait for confirmation:

```
PROJECT: [repo] · SCOPE: [1 sentence] · RISK: [LOW/MEDIUM/HIGH/CRITICAL]
CACHE: [loaded|missing — assumptions: …] · AGENTS: [none|list] · PLAN: [skip|short|full]
```

Optional context the user may paste (all fields optional):

```
PROJECT: [repo name]  SCOPE: [goal, 1–2 sentences]  OUT OF SCOPE: [optional]
```

Derive the rest from repo + cache + `git status`. Ask only blocking
product/business questions.

## Standing rules

1. Plan by risk (skip / short / full). No mandatory written plan for trivial work.
2. One logical change per commit. Show the message; wait for approval before
   **pushing**. Never push on silence. Never expose secrets/PII.
3. Docs follow code by relevance: update the doc entry that describes the
   changed behavior, not a fixed list of files.
4. Destructive DB/infra work needs a migration/rollback plan first.

## Close (3–6 lines, plus handoff when switching agents)

```
DONE: [bullets]  VERIFIED: [checks run]  DECISIONS: [durable, if any]
OPEN/NEXT: [items]  CACHE: [updated PROJECT_CACHE.md | no durable change]
```

*Version: 3.0 | Author: ShadowWalkerNC*
