# AGENTS.md — [PROJECT NAME]

> Extends: `ShadowWalkerNC/.github/AGENTS.md` — global control plane applies.
> Project file = Tier 1 cache + project rules. Keep compact; details live in
> `PROJECT_CACHE.md`, `ARCHITECTURE.md`, `TODO.md`.
> Auto-loaded by: Claude Code · Codex · Gemini/Antigravity · Copilot · Cursor · Windsurf

## Identity

```
Project: [name] — [one sentence: what it is, what problem it solves]
Status: [planning | in development | in production | paused] · Phase: [n — name]
Stack: [language + framework] · DB: [or "none"] · Hosting: [or "none"]
```

## Commands

```
Install: […]  Dev: […]  Build: […]  Test: […]  Lint/Typecheck: […]
```

## Map

```
[src/… ← …]  [routes/… ← …]  [supabase/migrations/ ← …]  [public/ ← …]
Key files: ARCHITECTURE.md (design) · TODO.md (open work) · PROJECT_CACHE.md (durable facts)
```

## Project rules (only what global AGENTS.md doesn't cover)

- [e.g. All /supabase migrations need DATABASE review before push.]
- [e.g. Components follow /src/components/ui/ — no new design tokens.]
- [e.g. API routes require auth middleware.]

Global Tier 1–2 rules (hierarchy, vetoes, push approval) cannot be overridden here.

## Cache pointer

Durable facts → `PROJECT_CACHE.md` (stack detail, decisions, known issues,
recent changes). This file stays short; the cache carries the weight.
