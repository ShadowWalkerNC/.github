param([string]$Root = (Split-Path $PSScriptRoot -Parent), [switch]$Schema)
$ErrorActionPreference = 'Stop'
& node (Join-Path $Root 'scripts/validate.mjs') --root $Root
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
