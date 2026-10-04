# approval model
LOW actions run automatically inside approved scope. MEDIUM follows rules and escalates when scope/confidence materially changes. HIGH external/irreversible mutations need explicit owner approval. CRITICAL needs explicit approval plus rollback and independent verification where practical. Production deploy/rollback, domains, secrets, access-control, financial/clinical actions, archive/delete, irreversible DB migrations, organization migration and experiment promotion remain gated. Record approval scope and evidence; elapsed time is not approval.

Related: [security standard](../standards/SECURITY_STANDARD.md) and [current approvals](../execution/APPROVALS.yaml).
