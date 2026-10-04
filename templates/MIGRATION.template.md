# Source -> Target migration
Status: planned
Owner: OWNER
Phase: PHASE_ID

## Baseline
Repository, branch, commit/source snapshot, tags, releases, issues/PRs, deployments, domains, env names, DB version, license and package versions. Unknowns stay explicit.

## Feature and boundary map
Routes/features, data ownership, APIs/MCP, contracts, auth assumptions, dependencies and existing target implementation.

## Sequence and acceptance
Incremental movement -> contract/integration tests -> parity review -> docs -> deprecation -> read-only -> archive after rollback window and approval.

## Rollback
Trigger, procedure, source state, data restoration and deployment restoration. Do not archive while rollback depends on the source.
