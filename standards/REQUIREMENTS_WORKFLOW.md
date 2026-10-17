# Requirements workflow standard
Adopted by owner 2026-10-07. For meaningful feature work use this ordered path:

1. Product requirements by feature: stable feature ID, user need, scenarios, scope, negative cases and measurable acceptance.
2. Technical requirements: affected components/contracts, dependency direction, security, offline/error behavior and verification.
3. App flow diagrams: user and system actions, loading/empty/failure/recovery branches and required gates.
4. Backend schema/ownership: current versus proposed entities, authoritative store/owner, relationships, lifecycle, version and rollback. Explicitly record no schema change when appropriate.
5. Implementation plan: bounded ordered tasks, exact ownership, dependencies, applicable authorization, tests, rollback and handoff evidence.

Keep the same feature IDs across stages. Load only the affected context. Use existing canonical documents through links; avoid copies, empty folders and new repositories. Small fixes reuse accepted requirements rather than generating a new document set. Changed requirements require reviewing only affected downstream artifacts. Stages contain inspectable files; scripts perform deterministic mechanical work.

The filesystem/context principle comes from Jake Van Clief and David McDermott's Interpretable Context Methodology (https://arxiv.org/abs/2603.16021). This five-stage software sequence is the owner's adaptation. Routine authorization remains effective; explicit production/destructive/secret/access-control boundaries still apply.

ForgeSatchel's first concrete application is its maintained checkout docs/planning/README.md and numbered01–05 files. Keep the full master blueprint and portfolio phase gates; this standard does not declare features implemented.

Updated Josh distinguishes typed Decide from guarded Orchestrate. Consult its current versioned protocol, policy/session ownership and execution receipts before integration. A model decision never grants authority; read-only fixed-probe acceptance does not prove general command execution or Forge integration. Use current source/docs rather than stale gateway/terminal guidance.
