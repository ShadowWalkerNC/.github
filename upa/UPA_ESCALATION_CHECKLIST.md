# UPA Escalation Checklist

> **Purpose:** Determine when a task must escalate from Light Mode or informal planning to full UPA workflow. Run this checklist when scope is unclear, a task is growing, or something unexpected appears.

---

## Escalation Triggers

If ANY of the following are true, escalate immediately to full UPA workflow:

### Scope Triggers
- [ ] More than 3 files are affected
- [ ] A new module, class, or service is being created
- [ ] A new integration or third-party API is being added
- [ ] The original scope has expanded since the session started
- [ ] Something unexpected was discovered during implementation

### Data Triggers
- [ ] Any database schema change (add/remove/rename column, new table, index)
- [ ] A migration is needed
- [ ] Existing data could be affected, corrupted, or lost
- [ ] A new query is being added that touches sensitive data

### Security Triggers
- [ ] Authentication or authorization logic is being changed
- [ ] A new secret, key, or token is being added
- [ ] User-facing input is being processed
- [ ] A new API endpoint is being exposed
- [ ] Permissions or roles are being modified
- [ ] Any OWASP Top 10 concern is present

### Infrastructure Triggers
- [ ] A new environment variable is needed
- [ ] CI/CD pipeline is being modified
- [ ] Deployment configuration is changing
- [ ] A new service or dependency is being added
- [ ] Cron jobs or scheduled tasks are being added or changed

### Architecture Triggers
- [ ] Data flow between modules is changing
- [ ] A new interface or contract is being defined
- [ ] Coupling between existing modules is increasing
- [ ] A design pattern is being introduced or removed

---

## Escalation Procedure

1. Stop current work immediately
2. State: "ESCALATING — [reason from checklist above]"
3. State what has been done so far
4. State what is now understood about the actual scope
5. Propose whether to: (a) continue with full UPA, (b) reduce scope and stay in Light Mode, or (c) defer to a separate session
6. Wait for user decision
7. Do not proceed until approved

---

## Post-Escalation

After escalating:

- Run the full UPA Discovery Protocol
- Re-state requirements
- Re-identify risks
- Produce a full plan before touching any more files
- Get explicit approval before continuing

---

> **Canonical location:** `ShadowWalkerNC/.github/upa/UPA_ESCALATION_CHECKLIST.md`
