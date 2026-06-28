# UPA Light Mode — Fast-Track Workflow

> **Use when:** scope is small, well-understood, and low-risk. Single-file changes, copy edits, minor config updates, hotfixes on known issues.
> **Do not use when:** architecture is affected, DB schema changes, new integrations, security-sensitive changes, or anything touching more than 3 files.
> **Gate owner:** AGENT_COHERENCE confirms Light Mode eligibility before this workflow begins. If COHERENCE is not active, default to full UPA.

---

## Light Mode is Blocked In

- `hotfix` mode — use full UPA Phases 0–6 then build
- Any session where COHERENCE has raised an active flag
- Any task that touches auth, tokens, secrets, or permissions

If you are in `hotfix` mode and reading this file, stop. Switch to full UPA.

---

## Light Mode Checklist

Before proceeding in Light Mode, COHERENCE confirms ALL of these:

- [ ] Change touches ≤ 3 files
- [ ] No DB schema or migration involved
- [ ] No new dependencies
- [ ] No security-sensitive code (auth, tokens, secrets, permissions)
- [ ] No new environment variables
- [ ] No architectural change
- [ ] Scope is completely clear — no unknowns
- [ ] Not in `hotfix` mode

If any box is unchecked → switch to full UPA mode immediately.

---

## Light Mode Workflow

```
1. State what you're changing and why (1–2 sentences)
2. State what files are touched
3. State what is NOT changing
4. State any risk, even if small
5. Get approval
6. Make the change
7. Show commit message
8. Get commit approval
9. Push
10. Update TODO.md if applicable
```

No skipping steps 1–5. Planning is not optional even in Light Mode.

---

## Light Mode Output Format

```
LIGHT MODE
Change: [what is changing]
Files: [list]
Out of scope: [what is NOT being touched]
Risk: [none | low — reason]
Commit: [proposed message]
Approval needed: yes / no?
```

---

## When to Escalate Out of Light Mode

If during a Light Mode task any of the following appear, stop immediately and escalate to full UPA:

- A second file needs changing that wasn't in the original scope
- A DB query needs to change
- An env var needs to be added
- A security concern surfaces
- The change is larger than expected
- An unknown is discovered

Escalation is not failure. Catching it early is the correct behavior.

---

> **Canonical location:** `ShadowWalkerNC/.github/upa/UPA_LIGHT_MODE.md`
