param([string]$Root = (Split-Path $PSScriptRoot -Parent), [switch]$Installed)
$ErrorActionPreference='Stop'
foreach ($file in Get-ChildItem $Root -Recurse -File | Where-Object { $_.FullName -notmatch '[\\/](baseline|rollout-docs|\.git)[\\/]' -and $_.Extension -in @('.json','.yaml') }) { $null = Get-Content $file.FullName -Raw | ConvertFrom-Json }
foreach ($pair in @(@('portfolio/PORTFOLIO.yaml','schemas/portfolio.schema.json'),@('migrations/MIGRATION_MATRIX.yaml','schemas/migration.schema.json'),@('portfolio/CAPABILITY_REGISTRY.yaml','schemas/capability.schema.json'),@('portfolio/INTEGRATION_REGISTRY.yaml','schemas/integration.schema.json'))) {
  if (!(Test-Json -Json (Get-Content (Join-Path $Root $pair[0]) -Raw) -SchemaFile (Join-Path $Root $pair[1]))) { throw "Schema failure: $($pair[0])" }
}
$p = Get-Content (Join-Path $Root 'portfolio/PORTFOLIO.yaml') -Raw | ConvertFrom-Json
$ids = @($p.entities.id)
$cap = Get-Content (Join-Path $Root 'portfolio/CAPABILITY_REGISTRY.yaml') -Raw | ConvertFrom-Json
$integration = Get-Content (Join-Path $Root 'portfolio/INTEGRATION_REGISTRY.yaml') -Raw | ConvertFrom-Json
foreach ($list in @(@($cap.capabilities.id),@($integration.integrations.id))) { if (@($list | Select-Object -Unique).Count -ne $list.Count) { throw 'Duplicate capability/integration IDs' } }
foreach ($c in $cap.capabilities) { if ($c.owner -notin $ids) { throw "Unknown capability owner: $($c.owner)" } }
foreach ($i in $integration.integrations) { if ($i.project -notin $ids) { throw "Unknown integration owner: $($i.project)" } }
$phases = @()
foreach ($file in Get-ChildItem (Join-Path $Root 'phases') -Filter PHASE.yaml -Recurse) {
  if (!(Test-Json -Json (Get-Content $file.FullName -Raw) -SchemaFile (Join-Path $Root 'schemas/phase.schema.json'))) { throw "Phase schema: $($file.FullName)" }
  $phases += Get-Content $file.FullName -Raw | ConvertFrom-Json
}
if ($phases.Count -ne 14 -or @($phases.id | Select-Object -Unique).Count -ne 14) { throw 'Expected fourteen unique phases' }
foreach ($phase in $phases) { foreach ($dep in $phase.depends_on) { if ($dep -notin $phases.id -or $dep -ge $phase.id) { throw "Invalid phase dependency: $($phase.id)" } } }
$files = @()
foreach ($folder in @('decisions','sdk-decisions','standards','security','phases','portfolio','migrations')) { $files += Get-ChildItem (Join-Path $Root $folder) -Recurse -Filter '*.md' -File }
foreach ($name in @('MASTER_PLAN.md','CURRENT_STATE.md')) { $files += Get-Item (Join-Path $Root $name) }
$linkCount=0
foreach ($file in $files) {
  foreach ($match in [regex]::Matches((Get-Content $file.FullName -Raw), '\]\(([^)]+)\)')) {
    $link=$match.Groups[1].Value
    if ($link -match '^[a-z]+:' -or $link.StartsWith('#')) { continue }
    $link=($link -split '#')[0]
    if (!(Test-Path -LiteralPath (Join-Path $file.DirectoryName $link))) { throw "Broken governance link: $($file.FullName) -> $link" }
    $linkCount++
  }
}
if ($Installed) {
  $coverage = Get-Content (Join-Path $Root 'execution/P02_DOCUMENTATION_COVERAGE.json') -Raw | ConvertFrom-Json
  foreach ($project in $coverage.activeProjects) {
    $path=$project.localPaths[0]
    foreach ($name in @('forge.project.json','README.md','AGENTS.md','ARCHITECTURE.md','STATUS.md','ROADMAP.md','CHANGELOG.md','SECURITY.md')) { if (!(Test-Path -LiteralPath (Join-Path $path $name))) { throw "Missing installed doc: $($project.id)/$name" } }
    $manifestPath=Join-Path $path 'forge.project.json'
    if (!(Test-Json -Json (Get-Content $manifestPath -Raw) -SchemaFile (Join-Path $Root 'schemas/forge-project.schema.json'))) { throw "Invalid installed manifest: $path" }
    $manifest=Get-Content $manifestPath -Raw | ConvertFrom-Json
    foreach ($capability in $manifest.capabilities) { if ($capability -notin $cap.capabilities.id) { throw "Unregistered capability: $capability" } }
    foreach ($category in $manifest.integrations.PSObject.Properties) { foreach ($provider in $category.Value) { $key="$($project.id):$($category.Name):$provider"; if ($key -notin $integration.integrations.id) { throw "Unregistered integration: $key" } } }
  }
}
Write-Output "PASS: JSON/YAML parse; registry schemas/owners/unique IDs; fourteen phase schemas/dependencies; $linkCount governance links; installed manifests/docs when requested."
