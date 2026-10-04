# permissions
Permission classes: read, write, execute, git.write, publish, deploy, admin, secret.read, secret.write, financial, clinical, system and destructive. Bind authorization to actor, project, capability, action and environment. Default deny unknown privileges; user-approved repository edit scope does not grant production, cross-project or secret authority. MCP and extensions inherit domain checks.

Related: [security standard](../standards/SECURITY_STANDARD.md) and [current approvals](../execution/APPROVALS.yaml).
