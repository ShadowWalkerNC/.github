# Design and Code Bible, agent edition

Agent-readable Markdown edition of Nate's Design and Code Bible (the Master Design File), Version 2.2, November 1, 2026. Same content as the PDF edition. For Codex, Antigravity, and any coding agent: treat this file as a preset library of design and coding rules. Standing rule from the owner: nothing in this file is applied to a project until Nate names that project.

---

Master Design File - Version 2.2 - November 1, 2026

# Design rules and presets for any application

Every pattern from the source videos and reference repos, turned into tokens, component specs, code, and checklists, usable by a builder who never saw them.

## How agents use and update this file

- **Use:** when a task involves UI or design work in any ShadowWalkerNC project, load the sections of this file that match the task (tokens first, then the component or pattern spec, then the discipline checklists). Do not load the whole file for non-design work.
- **Standing rule:** nothing in this file is applied to a project until the owner, Nate, names that project. This file is a preset library, not a work order.
- **Update:** changes come from the owner only. When Nate approves a change, edit this file in a pull request, bump the version in the header and in the Master Design File title line below, and note the change in the version note. Never edit this file directly on the main branch. The PDF edition and the source collection are kept in sync by Muse on the same approval.

---

### What is inside

| Pattern | Discipline | Page focus |
| --- | --- | --- |
| Floating nav bar | UI, MX | Floating container, blur, mega menu |
| Apple-style navbar | UI, MX | Glassmorphism reference look, React and Framer Motion |
| Make a button pop | UI, UX | CTA hierarchy, hover halo, win-framed copy |
| Premium buttons | UI | Four-shadow lit-from-above depth model |
| Dark streaming sidebar | UI, UX, MX | Grouped sections, badges, collapse to icons |
| Logo design process | PX, Brand | Noun list, 100 to 300 sketches, modular mark system |
| Effortless search flow (Airbnb) | UX, UI | Steps not forms, live result count on the button |
| Blank page that never feels empty (Notion) | UX, UI | Cursor first, hidden chrome, starters that vanish |
| Honest controls: checkbox, switch, radio | UI, UX | Act now or on save, 44px rows, three-state parent |
| One file carries the look (DESIGN.md) | AIX, PX | DESIGN.md format, own-system rule, browser check loop |
| Five-discipline rule sets | UI, UX, MX, PX, AIX | Checkable rules for every project |

### How to use this file

1. **Start with tokens (page 3).** Set the variables first. Never style a component with a one-off value when a token exists.
2. **Build components from their spec pages.** Each spec gives structure, values, states, code, and acceptance checks.
3. **Run the discipline checklists (pages 13 to 15)** before calling any screen or flow done.
4. **Values marked DERIVED** are implementation values worked out from the source idea (a blur radius where the video named the effect, not the number). Starting presets, free to tune per project. Unmarked values come straight from the source.

**Standing rule:** Nothing in this file is applied to a project until Nate names that project. This file is the preset library, not a work order.

**Version 2 (Oct 30, 2026):** adds Spec 05 and 06 (pages 10 to 11), three source rows, one UX rule, a ship-gate check. **Version 2.1 (same day):** four Karpathy techniques into the AIX rules (page 14). **Version 2.2 (Nov 1, 2026):** adds Spec 07 (page 12), the DESIGN.md format and the browser verification loop. The Oct 26 ruleset assessment was measured against v1 and needs a refresh.

Foundation

## The five disciplines, and how they stack

Build order matters. Tokens first, then components, then pages, then flows, then the full product. Skipping a layer shows up later as inconsistency that no amount of polish fixes.

| Layer | What it governs | Becomes in this system |
| --- | --- | --- |
| **UI** User Interface | The surface: layout, type, color, components, states. What the user sees and touches. | Tokens and components. Rule: every interactive element has default, hover, and pressed states. |
| **UX** User Experience | The journey: flows, information architecture, usability, friction. How a whole task feels start to finish. | Flow maps and step budgets. Map the task before designing any screen, then cut steps and decisions. |
| **MX** Motion Experience | Movement with meaning: transitions and micro-interactions that communicate state, hierarchy, and cause and effect. | Motion presets. Every animation answers what changed and why. UI feedback runs 150 to 300ms. |
| **PX** Product Experience | The whole product end to end: onboarding, pricing, packaging, support, retention, and whether reality matches the promise. | Product rules and lifecycle audits. UX covers using the product; PX covers owning it. |
| **AIX** AI Experience | Designing for AI: trust, transparency, uncertainty, and control. The model will be wrong sometimes, so design for that. | AI rules. Every AI action is reviewable and reversible. Design failure states before the happy path. |

### How they stack

- **UI sits inside UX.** A beautiful screen on a five-step task that should take two is still bad UX.
- **UX sits inside PX.** A smooth flow inside a product that breaks its promise at billing or support still fails.
- **MX cuts across UI and UX.** Motion explains state changes inside a screen and carries the user between steps in a flow.
- **AIX touches all of them.** Anywhere AI acts, suggests, or generates, the AIX rules on page 14 apply on top of the other four.

**Decision test:** When two rules conflict, the outer layer wins. A PX promise (for example, no surprise charges) overrides a UI preference (for example, hiding the price to clean up the layout).

Note on MX: some teams use MX to mean mobile experience. In this UI, UX, MX, PX, AIX lineup, MX means motion experience, and that is the meaning used throughout this file.

Presets - Apply everywhere

## Global tokens: set these before any component

Copy this block into the project as CSS custom properties (or the equivalent theme object in React, Flutter, SwiftUI, or any other stack). Component pages in this file reference these names only.

```
:root {
  /* Spacing scale (DERIVED preset, 4px base) */
  --space-1: 4px;  --space-2: 8px;  --space-3: 12px;
  --space-4: 16px; --space-6: 24px; --space-8: 32px;
  /* Radius */
  --radius-sm: 8px; --radius-md: 12px;
  --radius-lg: 16px; --radius-pill: 999px;
  /* Type scale (DERIVED preset) */
  --text-sm: 13px; --text-md: 15px; --text-lg: 18px;
  --text-xl: 24px; --text-2xl: 32px;
  /* Color roles: assign per project, keep the roles */
  --color-bg: #ffffff;        /* page background */
  --color-surface: #f5f7fa;   /* panels, menus */
  --color-ink: #17202e;       /* primary text */
  --color-ink-soft: #4b5a6e;  /* secondary text */
  --color-accent: #2563eb;    /* primary CTA fill */
  --color-accent-ink: #ffffff;/* text on accent */
  --color-line: #d7dee8;      /* hairlines, borders */
  /* Glass (nav and sidebar) */
  --glass-bg: rgba(255,255,255,0.72);
  --glass-bg-dark: rgba(18,22,30,0.72);
  --glass-blur: 14px;         /* DERIVED */
  /* Motion */
  --motion-fast: 150ms; --motion-med: 250ms;
  --motion-slow: 300ms; --ease-out: cubic-bezier(0.2, 0.8, 0.2, 1);
}
```

### Token rules

- **No raw values in components.** If a value is not in the token block, add it to the block first, then use it.
- **Color is assigned by role, never by look.** Swap the accent per project; the role names and their jobs stay fixed.
- **Dark surfaces reuse the same tokens** with the dark glass value and light ink. Do not invent a second system for dark mode.
- **Touch targets:** interactive elements are at least 40px tall on desktop presets and 44px on touch layouts (DERIVED accessibility floor).

**Honesty note:** The source videos specify effects and a small number of exact values (8px nav padding is one). Everything marked DERIVED is a concrete starting preset chosen so the system can be built today. Tune per project, then update this file so the preset improves.

Component Spec 01 - Navigation

## Floating nav bar with mega menu

UI - MX

**The move:** take a basic, edge-to-edge nav bar and give it separation. The bar becomes a floating, rounded container; dropdowns become a full-width mega menu; the Apple-style glass finish is the reference look the technique produces.

### Structure

1. Outer wrapper: full width, transparent, holds the bar off the page edges.
2. Bar: floating container, rounded corners, translucent background with backdrop blur so scrolled content reads through it.
3. Inside the bar: logo left, primary links center or left, actions right (see button hierarchy, page 6).
4. Mega menu panel: opens from the bar, flush to the full nav width, multi-column.

### Exact values

| Property | Value |
| --- | --- |
| Bar inner padding | **8px** (from source) |
| Bar offset from viewport edges | 16px top, 16px sides (DERIVED, use --space-4) |
| Corner radius | --radius-lg (16px) or --radius-pill for a pill bar (DERIVED) |
| Background | --glass-bg with backdrop-filter blur of --glass-blur |
| Border | 1px solid rgba(255,255,255,0.35) on glass (DERIVED) |
| Mega menu width | 100% of the nav container width, flush, no side gap |
| Mega menu columns | 4 columns; column 4 is visual support, not links |

### The mega menu rule

Upgrade plain popovers to a mega menu that spans the full nav width with more columns. Use the fourth column as a visual supporter for the highlighted menu item: when an item is highlighted, column 4 shows supporting imagery or a featured panel for that item. Columns 1 to 3 carry the link groups.

Component Spec 01 - Continued

## Nav bar: code and the Apple-style reference

### CSS preset

```
.nav-wrap { position: sticky; top: 16px; z-index: 50;
  padding: 0 16px; }
.nav-bar { display: flex; align-items: center; gap: 24px;
  padding: 8px; border-radius: 16px;
  background: var(--glass-bg);
  -webkit-backdrop-filter: blur(var(--glass-blur));
  backdrop-filter: blur(var(--glass-blur));
  border: 1px solid rgba(255,255,255,0.35);
  box-shadow: 0 8px 30px rgba(16,26,44,0.12); }
.mega { position: absolute; left: 0; right: 0; top: 100%;
  display: grid; grid-template-columns: 1fr 1fr 1fr 1.2fr;
  gap: 24px; padding: 24px; border-radius: 0 0 16px 16px;
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur)); }
.mega .support { border-radius: 12px; overflow: hidden; }
/* Support panel content swaps to match the
   highlighted item in columns 1 to 3. */
```

### Apple-style navbar: the reference look

- **Glassmorphism finish:** translucent surface, strong blur, hairline light border, soft drop shadow. The bar floats over content instead of sitting on it.
- **Smooth micro-interactions:** hover and open states animate at --motion-fast to --motion-med with --ease-out. Nothing snaps.
- **Clean responsive layout:** links collapse behind a menu control on narrow widths; the bar keeps its floating shape and padding at every size.
- **Reference stack:** React + CSS + Framer Motion (from source). In other stacks, match the finish and motion values, not the library.

### States and acceptance checks

- [ ] Bar floats: visible gap on top and sides, rounded corners, page content scrolls underneath and stays readable through the blur.
- [ ] Mega menu opens flush to full nav width with no horizontal jump or gap.
- [ ] Highlighting an item updates the fourth-column support panel.
- [ ] Keyboard: menu opens and closes from the keyboard, focus is visible, Escape closes it.
- [ ] Reduced motion: with prefers-reduced-motion set, menu appears without animation.
- [ ] Mobile: bar remains usable at 360px wide, no overlapping items.

Sources: Omar Farook (@buildwithomar), floating nav bar, posted Oct 23, 2026. Code XR, Apple-style navbar, posted Sept 21, 2026. Full links in the source index, page 15.

Component Spec 02 - Buttons

## Buttons: hierarchy first, then depth

UI - UX

Two sources combine into one button system. Omar covers hierarchy and hover: which button earns the click. Ania covers static depth: why a button looks premium instead of cheap.

### Rule 1: hierarchy (Omar)

- **Demote the secondary action.** Login becomes a bare link: no outline, no fill. Existing users will find it, they already paid to get in.
- **One primary CTA per view.** It is the only element that gets the lift, the glow, and the win-framed copy.
- **Copy feels like a win.** Name the outcome, not the action. Source example: "Book my first client" instead of "Sign up" or "Submit".

### Rule 2: the four-shadow depth model (Ania)

Fake a light source above the button with four box shadows, applied together:

| # | Shadow | What it simulates |
| --- | --- | --- |
| 1 | Inset 1px highlight on the top edge | Light hitting the top edge. This is light, not shadow. |
| 2 | Inset darker shade at the bottom | The side facing away from the light. |
| 3 | Tight dark shadow directly underneath | Contact shadow where the button touches the page. |
| 4 | Big soft glow in the button's own color | Bounced light from the button onto its surroundings. |

Plus a gentle top-to-bottom gradient on the fill, lighter at the top. On press, flip the treatment: the top highlight disappears and the gradient reverses, so the button reads as physically pushed in.

### Rule 3: hover halo (Omar)

On hover, the primary CTA gets a rotating conic-gradient glow around it, blooming like a halo. The halo is hover-only and CTA-only. Secondary buttons and links never get it.

Component Spec 02 - Code

## Button presets: copy, paste, adjust the accent

```
/* Primary CTA: Ania depth + Omar lift */
.btn-primary {
  background: linear-gradient(180deg,
    color-mix(in srgb, var(--color-accent) 88%, white),
    var(--color-accent));
  color: var(--color-accent-ink); border: 0;
  border-radius: var(--radius-md); padding: 12px 22px;
  font-weight: 700; cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.45),
    inset 0 -2px 4px rgba(0,0,0,0.22),
    0 2px 6px rgba(16,26,44,0.35),
    0 10px 28px -6px var(--color-accent);
  transition: all var(--motion-fast) var(--ease-out); }
.btn-primary:active { /* pressed: flip it */
  background: linear-gradient(0deg,
    color-mix(in srgb, var(--color-accent) 88%, white),
    var(--color-accent));
  box-shadow: inset 0 2px 5px rgba(0,0,0,0.28),
    0 1px 2px rgba(16,26,44,0.3); }
/* Secondary: bare link (Omar demotion) */
.btn-link { background: none; border: 0; padding: 12px 8px;
  color: var(--color-ink); font-weight: 600; cursor: pointer; }
.btn-link:hover { text-decoration: underline; }
```

### Hover halo preset (DERIVED mechanics, Omar effect)

```
.btn-primary { position: relative; }
.btn-primary::before { content: ""; position: absolute;
  inset: -3px; border-radius: inherit; z-index: -1; opacity: 0;
  transition: opacity var(--motion-med); filter: blur(8px);
  background: conic-gradient(from var(--a, 0deg),
    transparent, var(--color-accent), transparent 30%); }
.btn-primary:hover::before { opacity: 1;
  animation: halo-spin 2.4s linear infinite; }
@property --a { syntax: "<angle>"; initial-value: 0deg; inherits: false; }
@keyframes halo-spin { to { --a: 360deg; } }
@media (prefers-reduced-motion: reduce) {
  .btn-primary:hover::before { animation: none; } }
```

### Acceptance checks

- [ ] Exactly one primary CTA per view; secondary actions render as bare links. CTA copy names a win, not a form action.
- [ ] All four shadows present; pressed state flips (top highlight gone, gradient reversed).
- [ ] Halo appears on hover only, rotates, and never appears on secondary actions.

Sources: Omar Farook, button pop, Oct 21, 2026. Ania Kubow, premium buttons, Oct 14, 2026.

Component Spec 03 - Sidebar

## Dark streaming sidebar: grouped, badged, collapsible

UI - UX - MX

**The pattern:** a dark translucent panel over an abstract background. Identity at the top, search under it, grouped navigation in the middle, collapse as a first-class control.

### Structure, top to bottom

1. **Identity row:** user avatar plus name (source example: "Dorian"), with a **search field** directly under it.
2. **Sections:** MENU (Home, Continue watching, My List, Series, Movies, Games), DISCOVERY (Releases, Popular), GENERAL (Settings, Log out).
3. **Collapse button:** shrinks the sidebar to a narrow icon-only strip; clicking again expands it back to full width.

### State and formatting rules

| Element | Rule |
| --- | --- |
| Active item | Exactly one. Home is active in the source, highlighted in red. Use the project accent; the rule is one clear active state, never two. |
| Badge | Count badge on items with pending items (source: My List shows "7"). Hide at zero, never show "0". |
| Section labels and panel | Labels uppercase, small, muted, in MENU, DISCOVERY, GENERAL order. Panel is a dark translucent surface (--glass-bg-dark with blur) over the app background. |
| Widths | Expanded 240 to 260px; collapsed 64 to 72px, icons only, labels hidden (DERIVED presets). |
| Collapse motion | Width animates at --motion-med with --ease-out. Labels fade before the width closes, so text never gets crushed mid-animation. The motion is the communication: the panel visibly becomes the strip, so the user learns where everything went. |

### Acceptance checks

- [ ] Sections in order with uppercase muted labels; every item in exactly one section; one active item only; badge shows a real count and disappears at zero.
- [ ] Collapse reaches icon-only width and expands back; collapsed icons keep tooltips or accessible labels; collapse state is remembered per user where the stack allows it.
- [ ] Search and identity stay reachable in both widths, or collapse hides them deliberately and consistently.

Source: Code XR, dark streaming sidebar UI, Sept 30, 2026. The Reel carried no caption or transcript; this spec rests on the visual description supplied with it.

Process Spec 04 - Logo and Brand

## Logo process: nouns first, volume second, system last

PX - Brand

**The case:** Golden Bear Equities, by Peters Design Company. The process below is the preset for any logo or brand-mark job, in this exact order. Do not show marks before step 1 is done.

### Step 1: Build the brand noun list with the client

- Both sides make long lists of brand nouns: the concrete things the brand could be pictured as.
- Then cut together: remove everything the client does not want to see.
- Payoff: expectations are set before any marks are shown, so sketching explores approved territory only.

### Step 2: Sketch at volume

- Sketch **100 to 300** marks, combining multiple brand nouns in single marks. Narrow to **15 that are genuinely loved** (not merely acceptable). The client picks favorites to develop.

### Step 3: Develop the favorites

Golden Bear favorites, as the worked example:

- **Mark A:** G and B combined with overlapping geometry. Reads G first, B second.
- **Mark B:** Bear plus house silhouette combined in one mark.

### Step 4: Build the system, not just the mark

- The client loved both marks, so the designer built a **badge integrating the primary and secondary marks** instead of forcing a single winner.
- Deliver a **modular system**: primary mark, secondary mark, and integrated badge, all under one graphical system, so the brand works on any media type.

**Preset rule:** A logo job is done when it ships a system (primary, secondary, badge or lockup, usage across media types), not when it ships one file. If the client loves two marks, integrate them; do not discard one to force a decision.

### Deliverables checklist

- [ ] Signed-off noun list, including the cut list.
- [ ] Sketch count documented (100 to 300) and the 15 loved marks preserved.
- [ ] Primary mark, secondary mark, integrated badge.
- [ ] Each mark tested at small size, large size, one color, and reversed.

Source: Peters Design Company, logo design process for Golden Bear Equities, posted Oct 22, 2026.

Pattern Spec 05 - Flows and First Screens

## Effortless flows: search sheets and blank pages

UX - UI

**The governing rule (all three Design Motion teardowns, pages 10 to 11):** remove friction before the first action, hide chrome until it is needed, and make state visible.

### Pattern A: Search that feels effortless (Airbnb teardown)

The move: a search pill opens into a guided flow, not a form.

1. **One task per surface.** Tapping search opens a full-screen sheet, so nothing else competes for the thumb.
2. **Steps, not forms.** Where, when, and who arrive one step at a time. Each finished step folds into one line that can be tapped again to edit it.
3. **The result count sits on the button** and updates as filters change, so the user sees what is left before committing.
4. **Map and list sit behind one floating pill** low on the screen, so the thumb stays low and never travels to the top.
5. **Before typing anything,** the sheet shows recent searches and nearby places, so most trips start with one tap instead of a keyboard.

### Pattern B: The blank page that never feels empty (Notion teardown)

The move: an empty create surface that teaches itself in one glance, then gets out of the way.

1. **The cursor already sits in the title,** so the user types right away. There is no create button.
2. **Chrome stays hidden until hover:** icon, cover, and comment controls appear only when the title is hovered, so nothing sits between the user and the first word.
3. **One pale grey hint line** teaches the slash shortcut, opening every block type in a menu. The grey is pale enough never to mistake for content, and it disappears when typing starts.
4. **Starter points wait under the cursor** (a table, a board, a template) and vanish once the first letter is typed, so the page stays clean.

### Acceptance checks

- [ ] Search or filter flows use steps with folded, tappable summary lines, never one long form.
- [ ] The commit button shows a live result count whenever results can be counted.
- [ ] The main view switch sits within thumb reach; recents and nearby options appear before the keyboard.
- [ ] Create surfaces open with the cursor in the primary field; zero clicks before typing.
- [ ] Help is one disappearing hint line, never a paragraph; starters vanish after the first character and never return for that item.

Sources: Design Motion, Airbnb search teardown, posted Oct 25, 2026. Design Motion, Notion blank page teardown, posted Oct 26, 2026. Full links in the source index, page 15.

Component Spec 06 - Controls

## Checkbox, switch, radio: the control must match what it does

UI - UX

**The governing question:** does it act now or on save? Pick the control by the answer, never by looks.

| Control | Rule |
| --- | --- |
| **Switch** | Acts the moment it is flipped. There is never a save button behind it. Use only for settings that take effect instantly. |
| **Checkbox** | Waits for save. It means nothing until the user presses save or commit. Never mix switches and checkboxes in one form, or nobody knows which settings are live. |
| **Radio** | Picks one option out of a few: up to five, all visible, no click to reveal. Past five options, the list pushes the rest of the settings off screen, and that is when it becomes a dropdown. |
| **Segmented control** | Two to four exclusive options that must stay in view (daily, weekly, monthly side by side). One tap switches the view and every option stays one tap away. |
| **Parent checkbox** | Three states, not two: all children on is checked, none is empty, a mix is a dash. Clicking the dash turns every child on. |
| **Label and target** | The label is part of the control: tapping the text toggles the box. The whole row is the target, at least 44px tall (matches the touch floor on page 3). A 16px box alone gets missed by every thumb. |

### Acceptance checks

- [ ] Every switch takes effect instantly, with no save step anywhere behind it. Every checkbox sits inside a form with an explicit save or commit.
- [ ] No form mixes switches and checkboxes for the same class of setting.
- [ ] Radio groups show five or fewer options in full; larger sets use a dropdown; two to four always-visible exclusive options use a segmented control.
- [ ] Parent checkboxes render the mixed dash state, and clicking it turns every child on.
- [ ] Labels toggle their control, and every control row is at least 44px tall.

**Promo flag:** all three Design Motion teardowns (pages 10 to 11) also pitch the creator's UX Engine tool, linked in the video bio. The specs in this file rest on the teardown content. The pitch is a tactic, not a design rule.

Source: Design Motion, checkbox, switch, radio teardown, posted Oct 8, 2026. Full link in the source index, page 15.

Pattern Spec 07 - Agent Workflow

## The look in one file, checked in a real browser

AIX - PX

**The governing idea:** AGENTS.md tells the agent how to build. DESIGN.md tells it how the product should look. A real browser tells it whether the build worked. Verify in the browser, never by reading code alone.

### Part 1: DESIGN.md, the look in one file

DESIGN.md is a plain-text markdown file holding a whole design system (a format introduced by Google Stitch), sitting at the project root where any coding agent can read it.

| Part | Contents |
| --- | --- |
| **YAML front matter** | The tokens as data: exact color hex values, and type roles with family, size, weight, line height, and letter spacing. These mirror the tokens on page 3. |
| **Written sections** | Overview, colors, typography, layout and spacing, elevation and depth, shapes and radius, components, do's and don'ts, responsive behavior, and an iteration guide. |

1. **Write your own, from your own direction.** The file encodes this product's tokens and specs, generated from the direction work or captured from the built system (Impeccable's document command writes one).
2. **Collections are study material, not a wardrobe.** VoltAgent's awesome-design-md holds 84 files analyzed from real sites (Stripe's runs 487 lines). They teach the format; dropping one in whole borrows another brand's identity and fails the template check.
3. **One file, project root, named DESIGN.md,** next to AGENTS.md. A look scattered across chat history is a look that drifts.

### Part 2: verify in a real browser

1. **The loop:** build, open it in a real browser, click the main flow end to end, read console and network output, fix the top problems, recheck. Repeat until clean.
2. **Check at three widths** (phone, tablet, desktop) before calling any screen done.
3. **Read the page as structure, not pixels:** accessibility-tree snapshots with stable element references let the agent act deterministically, no vision model needed (the Playwright approach).
4. **The wiring is a project choice, the loop is the rule.** Microsoft's Playwright MCP server exposes the browser as agent tools; Microsoft itself steers coding agents to Playwright CLI plus skills for token efficiency, keeping MCP for persistent-state loops.

### Acceptance checks

- [ ] The project root carries a DESIGN.md written from this project's own direction, tokens matching page 3.
- [ ] No borrowed DESIGN.md ships whole; studied files are adapted, not copied, and credited in project notes.
- [ ] The build was opened in a real browser, the main flow clicked end to end, console errors at zero.
- [ ] Layout checked at three widths; top problems fixed and rechecked after the fix.

**Source flag:** the roundup Reel gates its links behind a comment ("Comment DESIGN and I'll DM you all five"); the repos were read directly instead. Reel numbers trail the repos (73 files and 59 rules claimed; 84 and 62 read).

Sources: hayder.developer, five design plugins roundup, Oct 30, 2026. VoltAgent, awesome-design-md, and Microsoft, playwright-mcp, repos read Nov 1, 2026. Links in the source index, page 15.

Rule Sets

## UX and MX rules: the journey and its movement

### UX rules

1. **Map the task before the screen.** Write the flow as steps first. Any screen designed before its flow exists gets reviewed against the flow before shipping.
2. **Count steps and decisions, then cut both.** Every step needs a reason the previous step could not absorb it. A five-step task that can be two is a defect, not a style choice.
3. **One primary action per view** (pairs with the button hierarchy, page 6). Competing primaries split clicks and slow the task.
4. **Labels name outcomes.** Navigation, buttons, and menu items say what the user gets, in the user's words, not the system's internal names.
5. **Every state exists:** empty, loading, error, and success are designed for every screen, not only the full-data happy path.
6. **Forgiveness:** destructive actions confirm first and offer undo where the stack allows it.
7. **Steps, not forms, and state on the button:** multi-part inputs arrive one step at a time, finished steps fold into tappable summary lines, and the commit button carries the live result count (pattern spec 05, page 10). Recents and defaults come before the keyboard.

### MX rules

1. **Every animation answers two questions:** what changed, and why. If it answers neither, remove it. Decoration is not a reason.
2. **Timing presets:** UI feedback 150 to 300ms. Use --motion-fast for hover and press, --motion-med for menus and panels, --motion-slow only for large surface changes.
3. **Continuity over teleporting:** elements move from where they were to where they go (the sidebar collapse, page 8, is the model). Fade-only transitions are the fallback, not the default.
4. **One motion at a time per region.** Stacked simultaneous animations read as noise.
5. **Respect reduced motion:** with prefers-reduced-motion set, animations are removed or reduced to instant state changes. Function never depends on watching an animation finish.
6. **Press feedback is instant:** the pressed state (page 6) appears on pointer-down, not on release.

**Quick audit:** Record the main flow. If any moment makes the viewer ask "what just happened", that moment fails MX rule 1 or UX rule 5. Fix that moment first.

Rule Sets

## PX and AIX rules: the product and its AI

### PX rules

1. **Audit the full lifecycle, not just screens:** discover, sign up, onboard, first success, daily use, billing, support, renewal, exit. Score each stage: does the delivered reality match the promise made at the previous stage?
2. **The promise test:** write the promise the marketing makes in one sentence. Walk the product and list every place it breaks. That list is the PX backlog, ranked by how early the break hits.
3. **Onboarding ends at first success,** not at account creation. Measure and design to the moment the user first gets the outcome they came for.
4. **Brand is a product rule:** identity ships as a modular system that works on any media type (page 9), so every surface, receipt, and social post stays recognizably one product.
5. **Support is part of the product:** help is reachable from inside the flow where users get stuck, not only from a footer link.
6. **No dark patterns:** cancellation and opt-out are as easy as sign-up and opt-in. PX covers owning the product, including leaving it.

### AIX rules

1. **Design failure states first.** The model will be wrong sometimes. Wrong, uncertain, and unavailable states get designed before the happy path.
2. **Every AI action is reviewable and reversible.** The user can see what the AI did, inspect inputs and outputs, and undo it.
3. **Show grounding where it matters:** sources, confidence, or a plain "I am not sure" state, scaled to the stakes of the action.
4. **Corrections are easy:** one obvious action fixes a wrong output, and the correction feeds back instead of disappearing.
5. **The human stays in control:** the AI never silently acts on anything high stakes (money, sending, deleting, publishing). It proposes; the user approves.
6. **Label AI as AI:** generated content and automated actions are identifiable as such wherever the user sees them.
7. **Prompt in controlled language.** ASD-STE100 at about 80 percent compliance: the constraints keep model output clear and readable, and stopping short of full compliance keeps it from sounding robotic.
8. **Diagrams over prose** for anything spatial or structural. Even clean writing has to be read; a diagram is easier to process and check.
9. **Ask for artifacts, not just answers.** A working HTML page with sliders and controls beats a text explanation when the user needs to explore numbers. Large, custom, discardable artifacts are now cheap enough to ask for.
10. **Ask for explainer video when teaching matters:** a short narrated video in a known style (3Blue1Brown) can carry a topic text cannot. As the model does more of the legwork, the human role rises into oversight.
11. **The agent verifies its own UI work in a real browser** before calling it done (spec 07, page 12): open the build, click the flow, read console and network, fix the top problems, recheck at three widths.

Rules 7 to 10: Andrej Karpathy's prompting techniques, summarized by Kathryn Petrillo, posted Oct 30, 2026. Rule 11: spec 07, page 12. Full links in the source index, page 15.

**AIX acceptance test:** Force the AI to be wrong in a test run. If the user cannot spot the error, understand its impact, and reverse it in under a minute, the design fails AIX, whatever the happy path looks like.

Ship Gate

## Master checklist and source index

### Before any application ships

- [ ] UI: tokens first, no raw values, every interactive element has default, hover, pressed, focus, and disabled states.
- [ ] UX: flow mapped, steps counted and cut, all four screen states designed. MX: every animation passes the what-and-why test, 150 to 300ms, reduced motion respected.
- [ ] PX: lifecycle walked, promise breaks ranked, onboarding ends at first success. AIX: failure states first, AI actions reviewable and reversible.
- [ ] Components match their spec pages and acceptance checks. Brand shipped as a system (primary, secondary, badge), tested at all sizes and in one color.
- [ ] Flows and controls pass specs 05 and 06: steps fold to summaries, live count on the button, controls match act-now-or-on-save, rows 44px or taller.
- [ ] Agent workflow passes spec 07: own-direction DESIGN.md at the project root; build verified in a real browser at three widths.

### Per-project application record

```
Project:
Patterns applied (nav / buttons / sidebar / logo / flows / controls):
Tokens changed from preset, and why:   DERIVED values tuned:
Checklists passed (UI / UX / MX / PX / AIX):   Open exceptions:
```

### Source index: every pattern traces to its source

| Pattern | Creator | Posted | Source |
| --- | --- | --- | --- |
| Floating nav bar | Omar Farook (@buildwithomar) | Oct 23, 2026 | facebook.com/reel/2351125032383047/ |
| Apple-style navbar | Code XR | Sept 21, 2026 | facebook.com/reel/4539537049671820/ |
| Make a button pop | Omar Farook (@buildwithomar) | Oct 21, 2026 | facebook.com/reel/1459999332693030/ |
| Premium buttons | Ania Kubow (@akubow) | Oct 14, 2026 | facebook.com/reel/28231143453248417/ |
| Dark streaming sidebar | Code XR | Sept 30, 2026 | facebook.com/reel/1069395735710496/ |
| Logo process, Golden Bear Equities | Peters Design Company | Oct 22, 2026 | facebook.com/reel/1436804551904246/ |
| Search feels effortless (Airbnb) | Design Motion | Oct 25, 2026 | facebook.com/reel/2033483404036598/ |
| Notion's blank page | Design Motion | Oct 26, 2026 | facebook.com/reel/1099521116193098/ |
| Checkbox, switch, radio | Design Motion | Oct 8, 2026 | facebook.com/reel/1458518826177868/ |
| Prompting techniques | Kathryn Petrillo (Karpathy) | Oct 30, 2026 | facebook.com/reel/2193563514922195/ |
| Five design plugins roundup | hayder.developer | Oct 30, 2026 | facebook.com/reel/1780228483203385/ |
| DESIGN.md collection (84 files) | VoltAgent | Repo, read Nov 1, 2026 | github.com/VoltAgent/awesome-design-md |
| Playwright MCP | Microsoft | Repo, read Nov 1, 2026 | github.com/microsoft/playwright-mcp |

Caveats: the sidebar Reel had no caption or transcript; its spec rests on the supplied visual description only. The Code XR "Code" offer, the UX Engine pitch, and the roundup Reel's comment gate are promos, not rules.

**Version rule:** A new video gets a spec section, a checklist update if needed, and a row in this index; the page 1 version increments. This file stays the single source.
