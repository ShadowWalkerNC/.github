# Antigravity P03 Implementation Plan — Governed Dashboard & TUI
**Date:** 2026-10-03  
**Author:** Antigravity  
**Target:** ForgeSatchel Terminal User Interface (`src/tui.ts`) & Local API Surface  
**Blueprint Scope:** P03 Foundation (Governance Views: Projects, Lifecycle, Docs Search, Relationships)  

---

## 1. Overview & Architectural Boundaries

ForgeSatchel currently features a lightweight, zero-dependency ANSI Terminal User Interface (`src/tui.ts`) invoked via `forge tui`. It uses double-buffered raw-mode ANSI rendering and integrates with `src/graph.ts`, `src/digest.ts`, `src/wiki.ts`, and `src/eval.ts`.

This plan outlines the minimal, non-disruptive enhancements to expose **governed projects, lifecycle states, documentation search results, and explicit relationships** within the existing TUI and API.

### Strict Guardrails & Non-Goals:
- **No new frameworks or UI libraries:** Reuse existing Node.js raw-mode ANSI canvas and string pad utilities in `src/tui.ts`.
- **No external SDKs or runtime dependencies:** Zero `npm install`.
- **Strict Separation of Links:** Explicitly partition **observed package dependency links** (from `package.json` parsing in `src/graph.ts`) from **declared blueprint migration/integration links** (from `portfolio/PORTFOLIO.yaml` / `migrations/MIGRATION_MATRIX.yaml` / `forge.project.json`).
- **Zero Provider Mutation:** Strictly offline and local.

---

## 2. Gap Analysis in Existing TUI (`src/tui.ts`)

1. **Left Project List (`lines 135–157`):**
   - Displays `p.name` and git status (`✓` or `●`), but ignores `manifest.portfolio.lifecycle` and `manifest.portfolio.classification`.
   - Displays raw legacy project name rather than canonical name with classification/lifecycle badge.
   - Shows no indication of `manifest-invalid` status.

2. **Overview Tab (`lines 165–181`):**
   - Lacks display of canonical metadata: Lifecycle, Classification, Priority, Ecosystem, Languages, Integrations.
   - Does not present `manifestIssues` when a manifest fails validation.

3. **Missing Documentation Search Tab:**
   - Tabs currently: `[1] Overview`, `[2] Architecture Graph`, `[3] GitIngest Digest`, `[4] Project Wiki`, `[5] Health & Audit`.
   - No interactive or dedicated view for `searchDocs()` (`src/knowledge.ts`).

4. **Relationships / Graph Tab (`lines 183–186`):**
   - Only displays ASCII representation of observed package dependencies.
   - Does not display declared integrations (models, codingAgents, MCP, SDKs) from `forge.project.json`.

---

## 3. Bounded Implementation Plan

### Phase 1: Governed Project List & Status Badges
**Target File:** `src/tui.ts`
- **Changes:**
  - In `render()` left-pane loop, invoke `loadManifest(p.local.path)` (or cache manifests during TUI initialization).
  - Add lifecycle badge next to project:
    - Active: `[act]` (green)
    - Supporting: `[sup]` (cyan)
    - Migrating: `[mig]` (yellow)
    - Deprecated/Archived: `[arc]` (dim/gray)
    - Manifest Invalid: `[!]` (red)
  - Prepend canonical display name from `manifest.portfolio?.name ?? p.name`.

### Phase 2: Governed Metadata & Integration Views in Overview Tab
**Target File:** `src/tui.ts`
- **Changes:**
  - Expand right-pane `overview` render:
    - Show `Classification: <classification>` and `Lifecycle: <lifecycle>`.
    - Show `Ecosystem: <ecosystem>`.
    - Show declared integrations count (e.g. `MCP: 2, Models: 1, Agents: 3`).
    - If `manifestIssues.length > 0`, display warning block: `⚠ Manifest Validation Issues:` followed by issues.

### Phase 3: Relationships Partitioning (Observed vs Declared)
**Target Files:** `src/graph.ts`, `src/tui.ts`
- **Changes:**
  - In `buildProjectGraph()` / `src/graph.ts`, attach a `declaredIntegrations` summary extracted from `manifest.portfolio.integrations`.
  - In TUI tab `[2] Architecture Graph`:
    - Pane split or sectioned output:
      1. `=== Observed Local Dependencies (Filesystem / package.json) ===`
      2. `=== Declared Ecosystem Integrations (forge.project.json) ===`
    - Clearly label: `[Note: Declared integrations represent architectural contracts; observed dependencies represent scanned local code.]`

### Phase 4: Governed Documentation Search Tab
**Target File:** `src/tui.ts`
- **Changes:**
  - Add tab `[6] Docs Search` (or bind hotkey `/` for interactive search prompt).
  - When in Docs Search tab:
    - Show input bar: `Search Docs: <query>`.
    - Display result hits from `searchDocs(selectedProject ? [selectedProject] : allProjects, query)`.
    - Render hit list: `<path>:<line> — <matching text excerpt>`.
    - Handle `truncated` badge if hits exceed limit.

---

## 4. Exact File Impact & Proposed Ownership

| File | Proposed Action | Ownership |
| :--- | :--- | :--- |
| `src/tui.ts` | Add lifecycle badges, manifest issue warnings, declared integrations view, and docs search tab. | Antigravity (or Codex upon integration) |
| `src/graph.ts` | Expose declared portfolio integration metadata separately from runtime package dependencies. | Codex / Antigravity |
| `test/tui-terminal.test.ts` | Add test cases verifying TUI renders lifecycle badges and loads manifest properties. | Antigravity |

---

## 5. Acceptance & Verification Criteria

1. **Strict Typecheck & Build:**
   - Zero diagnostics under `tsconfig.json` with strict mode (`erasableSyntaxOnly`, `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`).
2. **Automated Unit Tests:**
   - Existing 49 tests continue to pass.
   - New unit tests for TUI lifecycle badge generation and declared vs observed graph separation pass.
3. **Smoke Test:**
   - `node --experimental-strip-types src/cli.ts tui` initializes without crashing on non-interactive test harnesses.
4. **Zero State Mutation:**
   - No changes to `.forgesatchel` operational preferences or filesystem without explicit user command.
