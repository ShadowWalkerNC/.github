param([string]$Root = (Split-Path $PSScriptRoot -Parent), [switch]$Installed)
$ErrorActionPreference = 'Stop'
if ($Installed) { throw 'Use standards.mjs check --target PATH --repo owner/name for explicit installed-bundle verification.' }
& node (Join-Path $Root 'scripts/validate.mjs') --root $Root
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
