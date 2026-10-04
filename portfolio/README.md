# Portfolio registry
[PORTFOLIO.yaml](PORTFOLIO.yaml) is the canonical registry of 63 discovered entities.
The file uses JSON syntax, which is valid YAML 1.2. PowerShell can parse and validate it without installing a YAML dependency.

classification and lifecycle are governance designations. observed contains captured GitHub/filesystem truth. migration.execution records actual migration progress separately.
Only the eight activeProjectIds belong in the default Active dashboard. Governance/profile/tooling entries live in Supporting; migration sources live in Migrations; Labs and References have separate views.
A local package, workspace, or experiment is an inventory entity rather than an automatic top-level repository.

Regeneration: scripts/Build-PortfolioClassification.ps1 uses the baseline and approved blueprint mappings. It must not be rerun blindly after new portfolio decisions; update its rules together with the registry.
Validation: scripts/Validate-Portfolio.ps1 checks semantic integrity; add -Schema after P02 schemas are present.
Future manifests and standards live in schemas/, templates/ and standards/. [Migration targets](../migrations/MIGRATION_MATRIX.yaml) are plans with approval/rollback gates, not proof of implementation.
