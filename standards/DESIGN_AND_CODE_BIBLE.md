# ShadowWalkerNC Design and Code Bible

Version: **1.1.0** · Updated: **2026-11-01** · Owner: **ShadowWalkerNC**

Status: reusable preset library; adoption is explicit and project-specific.
Canonical source: `ShadowWalkerNC/.github/standards/DESIGN_AND_CODE_BIBLE.md`.

## 1. Purpose and activation

Build useful, distinctive software that is clear to operate, accessible, reliable,
and maintainable. This library translates the owner's existing preferences into
concrete design and engineering choices for current and future projects.

**Apply it only to the project the owner names.** Reading, editing, or merging
this library does not adopt it across the portfolio. Never restyle sibling
projects, install dependencies, migrate stacks, or change product scope merely
to conform to a preset. If no project is named, work on this library only; ask
for the target before applying it to a product.

For a named project, inspect its local instructions, stack, existing components,
brand, user tasks, and verified state first. Preserve working conventions. Use
the smallest relevant portion of this library for the requested change.

This document governs design and implementation choices within authorized work.
It does not grant execution permissions, change phase gates, or supersede the
owner's explicit instructions or applicable safety/security requirements.
Project-specific brand and platform conventions refine these defaults. Resolve
conflicts explicitly; do not silently lower accessibility or security standards.

### Adoption contract

Record this compact block in the project's existing design documentation or
AGENTS.md when adoption is requested. Link the canonical Bible instead of copying
it. These fields are documentation, not additions to any machine manifest schema.

```yaml
design_code_bible:
  source: https://github.com/ShadowWalkerNC/.github/blob/main/standards/DESIGN_AND_CODE_BIBLE.md
  version: 1.1.0
  project: <exact owner-named project>
  scope: <feature, surface, or whole-project scope explicitly requested>
  preset: <operational | reading | hospitality | creative>
  brand: <existing brand reference or proposed direction>
  platforms: <web, desktop, native, print, or other actual targets>
  theme: <existing | light | dark | system>
  density: <comfortable | compact>
  overrides: <specific choices and reasons, or none>
  evidence: <links to verification and known limitations>
```

For a small task, a short existing-doc entry is sufficient. Do not manufacture a
new documentation tree. Pin adoption to a version: library updates do not
automatically migrate already adopted projects.

## 2. The owner's design direction

- Put the user's work first: a clear task, understandable state, and an obvious
  next action. Every screen answers where am I, what can I do, and what follows.
- Favor deliberate typography, strong alignment, useful density, and restrained
  color. Use whitespace to organize relationships and improve reading.
- Give each product a recognizable identity grounded in its audience and brand.
  A shared engineering standard does not require identical product visuals.
- Prefer direct navigation, native behavior, reusable components, and predictable
  interactions. Complexity belongs behind progressive disclosure when practical.
- Use real content and domain language. Show units, dates, time zones, ownership,
  and data freshness wherever users need them to decide.
- Design for narrow screens, keyboard use, assistive technology, slow networks,
  large text, and failure states from the beginning.

Avoid repetitive rounded cards, gratuitous gradients/glows, giant heroes on work
screens, random icons, vanity dashboards, and empty space that hides useful work.
Cards are appropriate for grouped entities; tables for comparison; lists for
queues; prose for reading. Choose a layout because it serves the task.

## 3. Selectable presets

These are starting points, not declarations about current product implementations.
Choose a preset for the named scope; none activates adoption automatically.

| Preset | Suitable work | Visual and interaction direction | Watch for |
| --- | --- | --- | --- |
| Operational | Tools, queues, admin | Calm neutral surfaces, high legibility, clear status, compact tables on large screens, direct actions, persistent task context | Overloaded dashboards, hidden critical actions, ambiguous freshness |
| Reading | Research, reference, long-form study | Quiet canvas, generous reading measure, durable navigation, optional restrained serif for reading, accessible annotation/search | Tiny text, weak hierarchy, decoration that interrupts reading |
| Hospitality | Menus, food, client-facing commerce | Warm brand-led palette, authentic food photography, clear menus/prices, appetite and trust, simple ordering/contact paths | Decorative type in body copy, image-heavy slow pages, unclear allergens/pricing |
| Creative | Creative tools and immersive products | Expressive art direction, task-specific canvas, controlled motion, platform-aware input and interaction | Effects that obscure controls, inaccessible custom widgets, forced web patterns on native/game UI |

Keep each preset's core interaction principles in light and dark themes. A dark
theme is a product choice, not an assumed preference. Native and game interfaces
use platform-equivalent semantics, sizing, focus, and accessibility mechanisms;
the CSS examples below apply to web work.

## 4. Design tokens and visual grammar

Reuse existing tokens first. For a new web surface without tokens, begin with
the following neutral foundation and adapt it to the selected brand. Colors are
candidates: verify actual foreground/background pairs before declaring AA.

```css
:root {
  color-scheme: light;
  --color-canvas: #f8fafc;
  --color-surface: #ffffff;
  --color-text: #0f172a;
  --color-text-muted: #475569;
  --color-border: #64748b;
  --color-accent: #1d4ed8;
  --color-on-accent: #ffffff;
  --color-focus: #1d4ed8;
  --color-danger: #b91c1c;
  --color-success: #166534;
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-12: 3rem;
  --radius-control: 0.375rem;
  --radius-panel: 0.5rem;
  --measure-reading: 68ch;
  --duration-feedback: 150ms;
}

[data-theme="dark"] {
  color-scheme: dark;
  --color-canvas: #0f172a;
  --color-surface: #1e293b;
  --color-text: #f8fafc;
  --color-text-muted: #cbd5e1;
  --color-border: #94a3b8;
  --color-accent: #93c5fd;
  --color-on-accent: #0f172a;
  --color-focus: #93c5fd;
  --color-danger: #fca5a5;
  --color-success: #86efac;
}
```

Use semantic names in components; map status backgrounds, hover/active states,
disabled states, charts, and elevation to additional semantic tokens as needed.
An accent is not a status signal. Check focus contrast against every adjacent
surface, including accent buttons; use a contrasting offset/dual ring where needed.

### Typography, spacing, and imagery

- Use the project's font first; otherwise a system sans stack is a fast default.
  Add a display or reading font only for a clear brand/readability reason.
- Web starting scale: body 1rem, secondary 0.875rem, headings 1.25/1.5/2rem;
  use relative units and responsive sizing. Keep mobile text at least 16px under
  normal settings. Support user scaling rather than locking font size.
- Body line-height starts around 1.5–1.65; reading text around 60–75 characters
  per line. Use tabular numerals for quantities, money, and aligned comparisons.
- Space related items closely and separate sections consistently. Prefer the
  token scale; avoid arbitrary margins that drift between screens.
- Radius and shadow communicate grouping/elevation. Use borders and alignment
  before stacking shadows. Reserve pills for tags/status where useful.
- Use relevant, licensed imagery with explicit dimensions, appropriate crops,
  responsive sources, and meaningful alt text. Decorative images get empty alt.
  Icons support labels; provide accessible names for standalone icon controls.

## 5. Layout, navigation, and responsive behavior

Design from the smallest usable layout, then add capacity as content needs it.
Choose breakpoints where the layout fails, not from a device-name checklist.
Start with roughly 1rem narrow-screen gutters and 1.5–2rem on wider screens.
Reading pages use a measure limit; operational tools may use the available width.

Keep navigation names stable and show current location. Put the primary task
early in the reading order. Use one primary visual emphasis per local decision
area. Sidebars, tabs, breadcrumbs, and search must earn their space through the
information architecture. Preserve filters and context when returning from detail.

On narrow screens, prioritize key fields and actions. Reflow ordinary content
without horizontal scrolling at 320 CSS px; keep unavoidable two-dimensional
tables/canvases in labeled, keyboard-operable scroll regions. Do not hide essential
data merely to fit a screenshot. Sticky controls must not cover focus or content.
Account for safe areas, touch input, orientation, and on-screen keyboards.

## 6. Component and interaction contracts

Reuse existing accessible primitives before creating custom controls. Each
component defines content, states, keyboard behavior, responsive behavior, and
failure/recovery behavior. Separate reusable mechanics from domain decisions.

| Component | Required behavior |
| --- | --- |
| Button/link | Button performs an action; link navigates. Clear verb/object label, visible focus, appropriate busy state, protection from duplicate submission |
| Form | Persistent labels, units/help before input, correct autocomplete/input mode, sensible defaults, inline errors linked to fields, summary for long forms, preserve valid input after failure |
| Table/list | Semantic headers, readable values/units, explicit sorting/filtering, empty result recovery, stable identity; pagination/virtualization when volume warrants it |
| Dialog/drawer | Use only when interruption helps; accessible name, focus entry/containment/return, discoverable close; Escape closes ordinary dismissible dialogs, protect unsaved work intentionally |
| Notification | Distinguish transient feedback from persistent problems; announce appropriately; critical errors remain actionable and available beyond a short toast |
| Search/filter | Clear labels, reset path, result count when useful, distinguish no records from no matches, preserve relevant URL state where suitable |
| Status/chart | Text/symbol in addition to color; units, time window, source/freshness; accessible summary or data alternative |

For every async flow, define initial, loading, populated, empty, partial, error,
permission-denied, and success states as applicable. Treat offline/stale data
explicitly where the product supports it. Explain what failed and how to recover;
never claim a save succeeded before it is confirmed. Distinguish persisted state
from an optimistic preview and recover from rejected writes.

Use inline validation without scolding while users type. Confirm consequential
destructive actions with the affected object and consequence; offer undo when
safe. Avoid confirmation dialogs for routine reversible actions.

Motion explains state or spatial relationships. Keep routine feedback brief
(about 120–200ms), respect reduced motion, and never require animation to convey
meaning. Avoid autoplay and indefinite decorative movement.

## 7. Accessibility acceptance

WCAG 2.1 AA is the minimum, consistent with the existing UX standard. Use
WCAG 2.2 AA improvements where applicable, including unobscured focus. A checklist
or automated scan alone is not proof of conformance.

- Use semantic headings, landmarks, lists, labels, and native controls. Provide
  a skip link for repeated navigation and a logical reading/focus order.
- Make every task keyboard-operable with visible focus and no unintended traps.
  Ensure overlays return focus to a sensible location after closing.
- Meet 4.5:1 normal-text contrast and 3:1 large-text contrast; essential control
  boundaries, state indicators, and graphical information need 3:1 where required.
  Never rely on color alone. Check all themes and interactive states.
- Aim for at least 44×44 CSS px touch targets, including in compact layouts.
  Support 200% text zoom and 400% page zoom/reflow without losing tasks/content.
- Give errors useful descriptions, announce async status without stealing focus,
  and expose name/role/value to assistive technology.
- Honor reduced motion; provide captions/transcripts and media controls where
  relevant. Charts and custom canvases need equivalent accessible information
  and task paths appropriate to the platform.

Verify representative keyboard-only and screen-reader flows alongside automated
checks. Record actual coverage and limitations; do not infer accessibility from
semantic source alone.

## 8. Engineering foundation

Respect the project's actual stack. Prefer TypeScript with strict types where
it fits; preserve established JavaScript, Python, C#, native, and game conventions
where those serve the project. Use Tailwind when already adopted. No framework,
component library, SDK, or state-manager migration is implied by this Bible.

- Follow UI → domain services/contracts → infrastructure/providers dependency
  direction. Keep business rules outside rendering and reusable primitives.
- Prefer small coherent modules and explicit interfaces. Extract shared code
  for a real repeated need; avoid speculative frameworks and generic wrappers.
- Reuse installed dependencies and platform features first. Justify new
  dependencies by need, maintenance, license, security, and bundle/runtime cost.
- Treat external input as unknown; validate at boundaries. Use discriminated
  states for loading/results/errors and explicit units for domain quantities.
  Avoid unchecked casts, unexplained any, swallowed errors, and magic constants.
- Keep local interaction state local; derive values rather than duplicating
  sources of truth. Introduce shared state only when multiple consumers need it.
- Keep configuration and environment-specific behavior explicit. Secrets stay
  on trusted servers/in approved secret stores, never in client bundles or Git.
- Enforce authentication and authorization on the server for durable effects;
  hiding a control is not authorization. Bind data access to validated identity
  and tenant context where relevant. Redact sensitive logs and errors.
- Give APIs explicit request/response/error contracts; handle cancellation,
  timeouts, and bounded retries. Make retryable writes idempotent where needed.
  Keep versions, compatibility, and migrations explicit for changed contracts.

Domain invariants outrank presentation convenience: quantities/units, money,
allergens, clinical data, ownership, and permission decisions need authoritative
validation appropriate to the actual product. A preset never certifies them.

## 9. Performance and reliability

Budget from the real user journey and target hardware/network. For web work,
use good Core Web Vitals as a starting target: LCP ≤2.5s, INP ≤200ms, CLS ≤0.1
at the 75th percentile where field measurements exist. Lab results are diagnostic,
not a claim of field compliance. Native/game work defines platform-specific
startup, responsiveness, memory, and frame-time budgets instead.

Reserve media dimensions, optimize image formats/sizes, load noncritical assets
on demand, avoid unnecessary client JavaScript, and measure before memoizing or
virtualizing. Keep critical actions usable while background work runs. Scope
error boundaries and recovery to preserve user work; do not replace entire tasks
with generic failure screens unnecessarily.

## 10. Workflow and verification

1. Identify the owner-named project and scope; inspect existing conventions and
   choose or preserve its preset. State assumptions briefly.
2. For meaningful features, follow the existing [requirements workflow](REQUIREMENTS_WORKFLOW.md):
   product → technical → app flow → data ownership/schema → implementation plan.
   Reuse accepted requirements for small fixes.
3. Define the main task, real content, states, responsive behavior, tokens, and
   accessibility acceptance before expanding implementation.
4. Build a narrow working slice with existing primitives. Keep edits isolated
   from unrelated work and avoid unsolicited redesigns.
5. Verify only the affected risk/scope and update the documentation that changed.
   Use actual repository commands; do not invent successful checks.

For a changed UI, inspect representative narrow and wide layouts, long text,
empty/error/loading states, keyboard focus, zoom/reflow, and adopted themes.
Use screenshots or visual comparison where available; rendered interaction is
necessary evidence for visual claims. Test real happy and recovery paths.

Run affected lint/type/build checks and meaningful unit/integration/end-to-end
checks as appropriate. Regression tests should assert behavior or invariants,
not merely mirror markup or implementation. An isolated copy/style fix can use
a targeted visual check; auth, contracts, or domain changes need stronger checks.

Report PASS / FAIL / NOT RUN / BLOCKED with the exact scope and evidence. Separate
source inspection, local runtime checks, hosted checks, and production acceptance.
Do not weaken checks to get a pass or claim that documentation proves runtime.

### Ready-for-review checklist

- Named project/scope and selected preset are clear; unrelated projects untouched.
- Core task and applicable states work with real content and recovery paths.
- Tokens/components match the project's brand and conventions.
- Responsive, keyboard, contrast, focus, and zoom checks have recorded evidence.
- Code preserves domain ownership, security boundaries, and existing stack.
- Relevant checks pass, or failures/unknowns are plainly documented.
- PR explains the problem, resulting behavior, validation, and material limits.

## 11. Maintenance and versioning

Use the library README for pinned local bundles, selection, integrity checks, and
upgrade PRs. The library version and this document's version are independent.

Keep one canonical library and project-local adoption/override records. Change it
on a branch and review through a PR. Do not merge or enable auto-merge unless the
owner explicitly requests it. Review adopted projects individually before any
upgrade; a library release never authorizes portfolio rollout.

Use semantic versions for this document: PATCH for clarifications without changed
expectations; MINOR for compatible new guidance/presets; MAJOR for changed adoption
semantics or incompatible requirements. Update the version/date, append a concise
entry below, and describe affected adoption choices in the PR. This document's
version is independent of governance/blueprint and product release versions.

### Changelog

| Version | Date | Change |
| --- | --- | --- |
| 1.1.0 | 2026-11-01 | Adds pinned bundle adoption through the library README and selectable preset files. Replaces named project suggestions with task descriptions; project-only activation is unchanged. |
| 1.0.0 | 2026-11-01 | Initial owner-tailored library: explicit project-only activation, four selectable presets, tokens, UX/accessibility contracts, engineering rules, verification, and versioned adoption. No previous Bible exists on the base branch; this establishes the first version. |

## 12. Related canonical guidance

- [Owner operating preferences and scope](../AGENTS.md)
- [UX and accessibility baseline](../agents/AGENT_UX.md)
- [Architecture](ARCHITECTURE_STANDARD.md)
- [Project requirements workflow](REQUIREMENTS_WORKFLOW.md)
- [Security](SECURITY_STANDARD.md)
- [Testing and evidence](TESTING_STANDARD.md)
- [Documentation ownership](DOCUMENTATION_STANDARD.md)
- [Contract versioning](VERSIONING_STANDARD.md)

These links supply deeper guidance when relevant; they do not require loading
the entire governance system for a small design or code change.
