# threat model
Assets: project history, provider access, operational state, secrets and durable actions. Threats include malicious repository instructions/prompt injection, compromised adapters, overprivileged tokens, stale cached state, destructive agents, secret leakage and cross-project privilege escalation. Mitigate with minimum context, explicit capability/project scope, least privilege, stale markers, authenticated domain services, approvals and audit/recovery evidence. This is a target threat model; controls require implementation verification.

Related: [security standard](../standards/SECURITY_STANDARD.md) and [current approvals](../execution/APPROVALS.yaml).
