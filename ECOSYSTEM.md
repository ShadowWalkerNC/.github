This replaces **v6.1 and the separate v6.2 amendment**. It is now one canonical document: architecture Bible, portfolio wiki, project registry, future roadmap, and execution specification.

# SHADOWWALKER ECOSYSTEM

## Canonical Architecture, Portfolio Wiki & Execution Specification

**Human name:** The ShadowWalker Bible  
**Canonical file:** `.github/ECOSYSTEM.md`  
**Version:** 6.2.1 (reference amendment to integrated v6.2)
**Canonical date:** October 8, 2026
**Owner:** ShadowWalkerNC  
**Architecture confidence:** ~97–98%  
**Current phase:** P06 — Forge Foundation + CulinaryOS Compatibility/Migration Preparation  
**Current ecosystem objective:** ShadowWalker Vertical Slice 0  
**Primary systems:** ForgeSatchel → JOSH → CulinaryOS  
**R&D boundary:** MuseLab  

---

# 0. EXECUTIVE DIRECTIVE

The ShadowWalker architecture is sufficiently defined.

Do not continue expanding the architecture horizontally unless implementation evidence exposes a real gap.

The ecosystem now operates under two paired principles:

> **Evidence before abstraction.**

and:

> **Vertical proof before horizontal expansion.**

The current goal is not another architecture document, repository, framework, or migration.

The current goal is to prove one complete ShadowWalker execution path:

```text
PROJECT.yaml
     ↓
Forge understands project
     ↓
persistent task
     ↓
isolated Git worktree
     ↓
JOSH decision
     ↓
ActionRequest
     ↓
Forge authorization
     ↓
declared command execution
     ↓
verification
     ↓
ActionReceipt
```

Once this works reliably, expand from evidence.

---

# 1. PURPOSE OF THIS DOCUMENT

This document is the long-form canonical reference for the entire ShadowWalker ecosystem.

It answers:

- What projects exist?
- What does each project do?
- Which projects are active?
- Which are paused?
- Which are migration sources?
- Which should be archived?
- What technology does each project use?
- What technology should it use in the future?
- What belongs in ForgeSatchel?
- What belongs in JOSH?
- What belongs in individual products?
- How do projects integrate?
- What data belongs where?
- How should AI agents work?
- What can be shared?
- What must remain isolated?
- Where should new ideas go?
- When is a new repository justified?
- How should tasks, agents, worktrees, runtimes, providers and devices be managed?
- What should happen next?

A future AI should not need years of previous chats to reconstruct the ecosystem.

The desired result is:

> **One understandable engineering universe instead of dozens of overlapping ideas.**

---

# 2. DOCUMENT MODEL

ShadowWalker uses three primary layers of documentation.

## `.github/ECOSYSTEM.md`

This document.

Purpose:

- architecture constitution;
- portfolio encyclopedia;
- ownership boundaries;
- project map;
- long-term direction;
- integration rules;
- roadmap.

## `AGENTS.md`

Short operational constitution.

Purpose:

- rules agents need immediately;
- current objective;
- evidence rules;
- worktree policy;
- risk policy;
- project boundaries.

Agents should normally read this before loading the full ecosystem Bible.

## `PROJECT.yaml`

Per-repository machine-readable contract.

Purpose:

- identity;
- lifecycle;
- ownership;
- runtime;
- environment;
- commands;
- integrations;
- agent policy.

---

# 3. SOURCE-OF-TRUTH HIERARCHY

When information conflicts, use:

```text
1. Actual runtime behavior / Git / executed tests
2. PROJECT.yaml
3. STATUS.md
4. Acceptance evidence / ADRs / migration records
5. ECOSYSTEM.md
6. README / ROADMAP
7. Historical plans / old conversations
```

Meaning:

```text
ECOSYSTEM.md
→ intended architecture

PROJECT.yaml
→ declared project state

Forge
→ observed machine state

Git
→ actual repository history

Tests
→ evidence that behavior works
```

Documentation must never pretend implementation exists when it does not.

---

# 4. EVIDENCE CLASSIFICATION

Important claims should be classified as:

```text
VERIFIED
DECLARED
PROPOSED
UNKNOWN
```

## VERIFIED

Direct evidence exists.

Examples:

- a test actually ran;
- a build passed;
- a repository was inspected;
- a runtime version was observed.

## DECLARED

Configuration or documentation says something is true.

Example:

> `package.json` permits Node >=20.

That does not mean Node 20 was recently tested.

## PROPOSED

A future implementation decision or recommendation.

Example:

> Forge may use RRF for hybrid retrieval.

## UNKNOWN

There is insufficient evidence.

Agents must not convert:

```text
reasonable inference
```

into:

```text
canonical fact
```

without evidence or an explicit decision.

---

# 5. SHADOWWALKER MISSION

ShadowWalker is a personal development ecosystem capable of supporting:

- developer infrastructure;
- AI tooling;
- restaurant software;
- healthcare dining software;
- communications;
- Bible/study software;
- games;
- local-first applications;
- cloud applications;
- Raspberry Pi systems;
- ESP32 peripherals;
- XR experiments;
- research tools;
- client projects;
- business technology.

The ecosystem optimizes for:

```text
clarity
capability
reuse
interoperability
maintainability
security
recoverability
local ownership
low operating cost
documentation
automation
replaceability
```

It does not optimize for:

```text
number of repositories
number of agents
number of SDKs
number of frameworks
number of microservices
number of languages
number of databases
architectural novelty
```

---

# 6. CENTRAL ARCHITECTURE

There are two core infrastructure projects.

```text
ForgeSatchel
=
Development Control Plane

JOSH
=
System-1 Decision + Policy Kernel
```

Everything else should be classified as:

- product;
- module;
- client;
- experiment;
- lab;
- migration source;
- reference;
- governance;
- archive.

---

# 7. GOLDEN RULE

> **Do not build more global infrastructure. Finish the control plane.**

Do not create without demonstrated evidence:

- ShadowCore;
- universal auth service;
- universal product database;
- universal event bus;
- universal UI framework;
- universal knowledge service;
- another AI harness;
- another agent orchestrator;
- another portfolio database;
- another generic OS abstraction;
- another global device framework.

If multiple products need something, share contracts first.

Share implementation only after reuse is proven.

---

# 8. ECOSYSTEM MAP

```text
                         SHADOWWALKER
                              │
                       ECOSYSTEM.md
                              │
                 ┌────────────┴────────────┐
                 │                         │
           ForgeSatchel                  JOSH
         Control Plane              System-1 Kernel
                 │                         │
                 └──── Typed Contract ─────┘
                              │
       ┌──────────────────────┼───────────────────────┐
       │                      │                       │
    PRODUCTS                LABS                  CLIENTS
       │                      │                       │
 ┌─────┼───────────────┐    MuseLab              Cheezies
 │     │               │
 ▼     ▼               ▼
CulinaryOS        ShorelineOps
Mercury
BibleDesk
Dominion
```

---

# 9. THREE-GRAPH MODEL

ShadowWalker must never be treated as one giant dependency graph.

## Product Graph

Describes organizational relationships.

## Code Graph

Describes allowed code dependencies.

## Runtime Graph

Describes actual communication while systems are running.

The governing principle is:

> **Product integration does not imply code sharing. Code sharing does not imply shared runtime state.**

---

# 10. PORTFOLIO CLASSIFICATION

## Core Infrastructure

- ForgeSatchel
- JOSH

## Primary Products

- CulinaryOS
- ShorelineOps
- Mercury
- BibleDesk
- Dominion

## R&D

- MuseLab

## Active Client/Business Implementation

- Cheezies Gourmet

## CulinaryOS Migration Sources

- KitchenKit
- RecipeOS
- CulinaryOps
- Post-Pilot
- Plated
- RestRevive-AI

## Absorbed / Migration Sources

- Prayer Atlas → BibleDesk
- Sigil → Mercury

## Paused / Lab Projects

- ShadowRealm
- ASCILINE
- BedrockOps
- ShieldBot
- Emergency-CAD
- EMSCAD
- Unity-MC

## Reference Projects

- open-saas
- openship
- node-minecraft-protocol
- playhtml
- playwright
- cloudflare-os
- openDAW

## Archive Targets

- Joes-Tacos
- Benjamins
- superseded migration repositories after successful parity

---

# 11. LIFECYCLE MODEL

Canonical lifecycle values:

```text
IDEA
RESEARCH
LAB
ALPHA
BETA
ACTIVE
STABLE
MAINTENANCE
MIGRATING
DEPRECATED
READ_ONLY
ARCHIVED
REFERENCE
```

Priority:

```text
P0 — critical/current
P1 — major
P2 — secondary
P3 — backlog
P4 — speculative
```

---

# 12. ACTIVE WIP POLICY

The maximum active workload is:

```text
1 ecosystem objective
2 product objectives
1 R&D experiment
```

These are maximums, not quotas.

Having fewer active objectives is better than filling every slot.

---

# 13. CURRENT FORMAL WIP

## Ecosystem Objective — ACTIVE

**ShadowWalker Vertical Slice 0**

Includes:

- minimal `PROJECT.yaml`;
- Forge project loading;
- task persistence;
- worktree isolation;
- JOSH decision;
- Forge execution;
- verification;
- ActionReceipt.

This is one ecosystem objective.

---

## Product Objective — ACTIVE

**CulinaryOS P06 compatibility analysis**

Allowed:

- identify migration blockers;
- test runtime compatibility;
- inventory existing code;
- document migration boundaries;
- repair prerequisites.

Not yet allowed:

- broad source absorption.

---

## Second Product Objective — ON DEMAND

May be used for a real immediate need, such as:

- Dominion gameplay stabilization;
- urgent client work;
- critical production repair.

It does not need to be occupied.

---

## R&D Slot — PAUSED BY DEFAULT

MuseLab experiments become active only when they answer a real current question.

---

# 14. CURRENT EXECUTION STATES

```text
ForgeSatchel
ACTIVE

JOSH
ACTIVE — Slice 0 work only

CulinaryOS
ACTIVE — compatibility only

Dominion
ON DEMAND

Cheezies
ON DEMAND

ShorelineOps
HOLD / MAINTAIN

Mercury
HOLD
except scheduled runtime remediation

BibleDesk
HOLD / MAINTAIN

MuseLab
PAUSED BY DEFAULT

Other labs
PAUSED

Future products
BACKLOG
```

`HOLD` means not consuming active development bandwidth.

It does not mean abandoned.

---

# 15. FORGESATCHEL

## Identity

ForgeSatchel is the ShadowWalker development control plane.

It manages:

- projects;
- environments;
- runtimes;
- processes;
- services;
- ports;
- tasks;
- Git worktrees;
- coding agents;
- deployment providers;
- devices;
- permissions;
- project context;
- bootstrap;
- recovery.

Forge does not own product business logic.

---

# 16. FORGE RESPONSIBILITY MAP

```text
ForgeSatchel
│
├── Project Registry
├── Environment Manager
├── Runtime Manager
├── Suite Manager
├── Doctor
├── Session Manager
├── Process Manager
├── Service Manager
├── Port Manager
├── Task Manager
├── Git / Worktree Manager
├── Agent Manager
├── Deployment Manager
├── Device Manager
│
├── Forge Guard
│   ├── permissions
│   ├── approvals
│   ├── policy
│   ├── secret references
│   └── audit
│
├── Forge Care
│   ├── bootstrap
│   ├── repair
│   ├── update
│   └── recovery
│
├── Forge Context
│   ├── indexing
│   ├── retrieval
│   ├── summaries
│   └── task packets
│
└── Forge Intelligence
    ├── JOSH
    ├── Codex
    ├── Claude
    ├── Gemini
    ├── Muse
    ├── OpenCode
    └── future providers
```

These are responsibility boundaries, not mandatory packages.

---

# 17. CURRENT FORGE STATE

Current known implementation includes:

- TypeScript;
- npm;
- CLI;
- API foundations;
- TUI;
- browser/project exploration;
- project discovery;
- SQLite operational state;
- task/handoff storage;
- FTS5 document search;
- capability/integration declarations;
- declared-vs-observed concepts;
- passing local TypeScript build/test evidence.

Current important gaps include:

- extension sandboxing;
- complete audit coverage;
- provider adapters;
- complete Agent Manager;
- secrets broker;
- fresh-machine bootstrap;
- restore-tested recovery;
- production Forge/JOSH bridge.

---

# 18. FORGE STATE MODEL

```text
Git
→ durable project history

PROJECT.yaml
→ declared project contract

SQLite
→ Forge local operational state

Provider APIs
→ authoritative external state

Cache
→ timestamped mirrors
```

Forge must not invent another distributed database.

---

# 19. FORGE KNOWLEDGE / CONTEXT

Forge may index:

- documentation;
- ADRs;
- migrations;
- tasks;
- handoffs;
- symbols;
- repository summaries;
- test results;
- deployment information.

Baseline retrieval:

```text
full-text / keyword
+
selective semantic retrieval
```

Potential future implementation:

```text
FTS5 / BM25
+
vector search
+
RRF
+
optional reranker
```

RRF is proposed, not mandatory.

---

# 20. FORGE COMMAND MODEL

Future standard UX may include:

```bash
forge scan
forge list
forge status
forge doctor

forge open <project>

forge up <project>
forge down <project>

forge build <project>
forge test <project>
forge verify <project>

forge task create
forge task status

forge agent run

forge deploy status
forge device list
```

Forge resolves commands through `PROJECT.yaml`.

It must not assume every repository uses npm.

---

# 21. FORGE REMOTE

The previously discussed Remote CLI application becomes:

**Forge Remote**

Architecture:

```text
Phone / Browser
      ↓
Authenticated Forge Gateway
      ↓
Forge Core
```

Potential future functions:

- inspect tasks;
- run approved workflows;
- start agents;
- view logs;
- approve actions;
- voice input;
- review builds;
- inspect deployment status.

No unrestricted remote shell by default.

---

# 22. JOSH

## Full Name

**Joint Operating System Harness**

JOSH is the ShadowWalker System-1 decision layer.

Conceptually:

```text
Classifier
+
Router
+
Policy Engine
+
Tool Dispatcher
+
Context Broker
+
Typed Decision Kernel
```

JOSH is not another full LLM.

---

# 23. JOSH RESPONSIBILITIES

JOSH should handle fast and inexpensive work such as:

- intent classification;
- command recognition;
- slash commands;
- `@mentions`;
- `#tags`;
- structured triggers;
- pattern matching;
- tool selection;
- skill selection;
- MCP routing;
- provider routing;
- project identification;
- risk classification;
- deterministic transformations;
- cached decisions.

Escalate only when larger reasoning is needed.

---

# 24. JOSH FLOW

```text
Input
 ↓
Normalize
 ↓
Fast rules / patterns
 ↓
Classify
 ↓
Route
 ↓
Policy
 ↓
Can deterministic code solve it?
 ├── yes → return
 └── no
      ↓
Can System-1 primitive solve it?
 ├── yes → typed decision
 └── no
      ↓
System-2 provider
```

---

# 25. JOSH DECIDE VS ORCHESTRATE

## Decide

Side-effect-free typed decision.

## Orchestrate

May compose decisions and request registered actions.

It does not gain unrestricted machine authority.

---

# 26. FORGE ↔ JOSH AUTHORITY

This boundary is locked:

```text
JOSH
→ classify
→ decide
→ score
→ route
→ request

Forge
→ authorize
→ approve
→ execute
→ verify
→ receipt
```

Canonical conceptual contracts:

```text
DecisionRequest
DecisionResult
ActionRequest
ActionReceipt
```

Their existence is locked.

Their full field-level wire schema is not considered final until Slice 0 proves it.

---

# 27. RISK MODEL

```text
R0 — read-only / harmless
R1 — reversible local action
R2 — meaningful project modification
R3 — external / production mutation
R4 — destructive / security / clinical / financial
```

Default handling:

```text
R0
automatic

R1
normally automatic within scope

R2
policy + verification
approval may be required by project policy

R3
explicit human approval

R4
explicit human approval
+ rollback planning
+ stronger verification
```

There is no global rule that every R2 action requires human approval.

---

# 28. PROJECT.YAML

`PROJECT.yaml` is the machine-readable project contract.

Schema:

```yaml
schemaVersion: shadowwalker.project/v1
```

Initial required fields:

```text
schemaVersion
id
name
repository
kind
lifecycle
ownership
environments
runtimes
packageManager
commands
```

Potential optional fields:

```text
priority
services
ports
integrations
agentPolicy
data
recovery
migrations
```

Do not add fields merely because they might someday be useful.

---

# 29. PROJECT.YAML INITIAL VALIDATION

The first v1 release must be implemented against:

```text
ForgeSatchel
JOSH
CulinaryOS
```

These provide sufficient initial variation.

The following remain future compatibility targets:

```text
ShorelineOps
Mercury
BibleDesk
Dominion
MuseLab
```

They do not block the first schema release.

Validate them when they return to active work.

---

# 30. PROJECT.YAML ACCEPTANCE

The initial schema passes when:

```text
ForgeSatchel manifest
PASS

JOSH manifest
PASS

CulinaryOS manifest
PASS

invalid fixture
correctly FAILS

JSON Schema
generated from authoritative source

Forge
loads manifest without repository-specific hacks
```

---

# 31. TASK / WORKTREE POLICY

Meaningful autonomous modifications must use dedicated Git worktrees.

```text
Task
 ↓
Branch
 ↓
Dedicated Worktree
 ↓
Scoped Agent
 ↓
Changes
 ↓
Tests
 ↓
Verification
 ↓
Merge / Close
```

The exact path such as:

```text
.worktrees/<task-id>
```

is implementation-defined.

The invariant is:

```text
primary working tree
≠
autonomous task working tree
```

Forge owns creation, tracking and cleanup.

---

# 32. AGENT RESOURCE MANAGEMENT

Primary developer hardware is approximately:

```text
Intel i7
16 GB RAM
integrated graphics
```

Therefore Forge should eventually monitor:

- active agents;
- active dev servers;
- active containers;
- memory pressure;
- CPU pressure;
- ports;
- background services.

Exact limits such as:

```text
1 container stack
2 dev servers
```

are not canonical until benchmarked.

Use measured configurable limits instead.

---

# 33. SHADOWWALKER VERTICAL SLICE 0

This is the current most important milestone.

Target project:

**ForgeSatchel itself**

Goal:

Prove one complete end-to-end task.

```text
User
 │
 ▼
JOSH
 │
 ├── classify request
 ├── identify ForgeSatchel
 ├── classify risk
 └── ActionRequest
 │
 ▼
Forge
 │
 ├── validate request
 ├── apply policy
 ├── load PROJECT.yaml
 ├── create task
 ├── create worktree
 ├── execute declared command
 ├── verify result
 └── store ActionReceipt
 │
 ▼
User
```

---

# 34. SLICE 0 MUST PROVE

## Project Declaration

Forge loads ForgeSatchel through `PROJECT.yaml`.

## Persistent Task

A task exists and survives process boundaries where required.

## Worktree Isolation

Forge creates a dedicated task worktree.

Primary checkout remains untouched.

## JOSH Decision

JOSH produces a typed request.

## Forge Authority

JOSH does not execute the machine-side action directly.

## Command Resolution

Forge reads the appropriate command from `PROJECT.yaml`.

## Execution

Command runs in the correct project/worktree/environment.

## Verification

Forge interprets result and exit status.

## Receipt

Forge stores an `ActionReceipt`.

## Correlation

The following can be traced:

```text
requestId
decision
taskId
worktree
ActionRequest
execution
ActionReceipt
```

---

# 35. SLICE 0 FAILURE ACCEPTANCE

Slice 0 must also demonstrate failure handling.

Required cases:

```text
invalid PROJECT.yaml
→ rejected

unknown capability
→ rejected

denied action
→ not executed

missing command
→ explicit failure

non-zero command exit
→ failed receipt

malformed JOSH request
→ rejected

worktree failure
→ primary checkout remains untouched
```

A perfect-path demo is not acceptance.

---

# 36. MINIMUM FORGE FOR SLICE 0

Build only what Slice 0 requires:

```text
Minimal Project Registry
Minimal Task Manager
Minimal Git/Worktree Manager
Minimal Policy/Execution Boundary
Minimal JOSH Adapter
Command Runner
Receipt Store
```

Do not build the complete Forge platform first.

---

# 37. DEFERRED FORGE COMPONENTS

These remain planned but do not block Slice 0:

- full Environment Manager;
- full Runtime Manager;
- full Suite Manager;
- full Process Manager;
- full Service Manager;
- full Port Manager;
- Deployment Manager;
- Device Manager;
- Forge Remote;
- Raspberry Pi node;
- XR.

Build them when real workflows expose the requirement.

---

# 38. LANGUAGE POLICY

## TypeScript

Default for:

- web;
- API;
- CLI;
- SDK;
- MCP;
- orchestration;
- integrations;
- most business applications.

## Python

Use for:

- AI/data work;
- NLP;
- research;
- computer vision;
- automation;
- existing Python services.

Do not rewrite stable Python merely for TypeScript uniformity.

## Rust

Use selectively for:

- native daemons;
- filesystem/process-heavy tools;
- strong native security boundaries;
- hardware interfaces;
- codecs;
- measured performance bottlenecks.

## Kotlin

Use when native Android/rugged-device needs justify it.

## C#

Canonical for Dominion/Unity.

---

# 39. NODE POLICY

Current preferred convergence baseline:

```text
Node 24
```

Node 24 remains supported through April 2028.

Node 26 becomes Active LTS on October 28, 2026.

Policy:

```text
Node 24
→ current preferred baseline

Node 26
→ evaluate after Active LTS
→ adopt only after CI + compatibility proof
```

Node 20 reached EOL April 30, 2026.

Remove Node 20 production baselines.

---

# 40. CURRENT NODE REALITY

## ForgeSatchel

Tested successfully on Node 24.

Current package declaration may still differ from the desired convergence policy.

## JOSH

Node 24+ direction already established.

## CulinaryOS

Current declaration still permits Node 20.

Target Node 24 after validation.

## ShorelineOps

Current baseline is approximately Node 22.19+.

Do not change solely for visual consistency.

## Mercury

Current declaration permits Node 20.

Must be remediated when Mercury returns to active runtime work.

Therefore:

> Node 24 is the convergence direction, not yet a universally enforced reality.

---

# 41. PACKAGE MANAGER POLICY

No universal package manager.

```text
npm
→ ForgeSatchel
→ Mercury
→ smaller stable Node repos

pnpm
→ JOSH
→ CulinaryOS
→ large TypeScript monorepos

uv / pip
→ Python where appropriate

Cargo
→ Rust

Unity tooling
→ Dominion
```

Forge executes project-declared commands.

It does not guess.

---

# 42. WINDOWS / WSL

Primary workstation:

```text
Windows
+
PowerShell 7
+
Windows Terminal
+
WSL2
```

General rule:

```text
Windows-native workloads
→ Windows / NTFS

Linux-heavy workloads
→ WSL Linux filesystem
```

Forge should eventually abstract this complexity.

---

# 43. PROVIDER STRATEGY

AI/provider-neutral architecture.

Potential AI agents:

- Codex;
- Claude;
- Gemini;
- Muse;
- OpenCode;
- Ollama;
- future providers.

Infrastructure providers:

- GitHub;
- Vercel;
- Railway;
- Render;
- Cloudflare;
- Supabase.

No single provider owns the architecture.

---

# 44. API / SDK / MCP MODEL

Preferred structure:

```text
Domain Logic
    ↓
Public API / Contract
├── Web
├── Mobile
├── CLI
├── SDK
├── MCP
└── Extensions
```

Do not reproduce business logic separately in every interface.

---

# 45. MCP POLICY

MCP is an adapter, not an architecture.

Correct:

```text
Agent
 ↓
MCP
 ↓
authentication
 ↓
authorization / policy
 ↓
domain validation
 ↓
domain service
 ↓
data
```

Never:

```text
Agent
 ↓
MCP
 ↓
unrestricted database
```

Remote MCP implementations should follow the negotiated current MCP authorization specification where authorization is used, including:

- protected-resource metadata where applicable;
- resource indicators;
- token audience/resource validation;
- PKCE;
- S256 as required/supported by the applicable specification;
- no token passthrough;
- least privilege;
- controlled scope escalation.

MCP security does not replace Forge or product-level policy.

---

# 46. SDK POLICY

Potential SDKs include:

```text
@forgesatchel/sdk
@culinaryos/sdk
@mercury/sdk
BibleDesk SDK
ShorelineOps public contracts/SDK
```

Do not build SDKs before public contracts stabilize.

---

# 47. CULINARYOS

CulinaryOS is the primary restaurant operating platform.

Long-term direction:

> Open/self-hostable core with optional managed services.

Core capabilities may include:

- POS;
- KDS;
- online ordering;
- inventory;
- employees;
- reporting;
- reservations/integrations;
- recipes;
- prep;
- vendors;
- purchasing;
- food cost;
- waste;
- marketing;
- websites;
- intelligence;
- AI interfaces.

---

# 48. CULINARYOS STRUCTURE

```text
CulinaryOS
│
├── Core
├── POS
├── KDS
├── Admin
├── Ordering
├── Inventory
├── Reporting
│
├── Prep
├── Ops
├── Marketing
├── Web
├── Intelligence
│
├── API
├── SDK
├── CLI
├── MCP
└── Integrations
```

---

# 49. CULINARYOS CORE

Owns:

- restaurant configuration;
- orders;
- payments;
- employee/auth foundations;
- base inventory;
- core reporting;
- core events;
- APIs;
- CLI;
- extension host.

---

# 50. CULINARYOS PREP

Absorbs:

- KitchenKit;
- RecipeOS.

Responsibilities:

- recipes;
- ratios;
- scaling;
- yields;
- pars;
- prep lists;
- mise en place;
- production planning;
- kitchen workflow;
- future kitchen-device integration.

---

# 51. CULINARYOS OPS

Absorbs:

- CulinaryOps.

Responsibilities:

- labor;
- purchasing;
- vendors;
- food cost;
- waste;
- operational analytics;
- management workflows.

---

# 52. CULINARYOS MARKETING

Absorbs:

- Post-Pilot.

Responsibilities:

- content creation;
- campaigns;
- scheduling;
- social publishing;
- analytics;
- inbox responses.

Existing Python may remain.

Do not rewrite merely for TypeScript consistency.

A location such as:

```text
apps/marketing-service
```

or package manager such as `uv` is an implementation option, not currently canonical.

---

# 53. CULINARYOS WEB

Absorbs:

- Plated.

Responsibilities:

- restaurant websites;
- themes;
- templates;
- menu publishing;
- SEO;
- storefronts;
- ordering integration;
- deployment integration.

Design principle:

> Restaurant websites should look intentional, local and handcrafted—not corporate or generically AI-generated.

---

# 54. CULINARYOS INTELLIGENCE

Absorbs ideas from:

- RestRevive-AI;
- restaurant diagnostic tooling;
- Owner.com-style analysis concept.

Responsibilities:

- menu analysis;
- food cost analysis;
- labor analysis;
- waste analysis;
- marketing analysis;
- operational benchmarking;
- recommendations;
- owner reports.

The free public restaurant analyzer belongs here.

---

# 55. CULINARYOS MCP / KITCHEN MCP

The previously discussed Kitchen MCP belongs inside CulinaryOS tooling.

Potential capabilities:

```text
business.get
menu.get
specials.list
events.list
recipe.get
prep.plan
inventory.get
ops.audit
content.generate
content.schedule
post.publish
analytics.get
inbox.reply
owner.report
```

These adapters call real domain services.

They do not become an independent restaurant platform.

---

# 56. CULINARYOS HARDWARE

Possible future hardware:

- Raspberry Pi;
- KDS displays;
- POS terminals;
- printers;
- scales;
- label printers;
- sensors;
- ESP32 devices.

Hardware remains optional to the core platform.

Product-specific adapters come before a universal hardware SDK.

---

# 57. CULINARYOS RUST POLICY

Do not rewrite CulinaryOS in Rust.

Rust may be useful for:

- local device daemons;
- hardware interfaces;
- secure native helpers;
- performance-critical utilities;
- networking components.

Use benchmarks and requirements, not enthusiasm.

---

# 58. CULINARYOS MIGRATION FREEZE

The migration architecture remains valid.

Actual broad source absorption is currently frozen.

Do not begin:

```text
KitchenKit migration
RecipeOS migration
CulinaryOps migration
Post-Pilot migration
Plated migration
RestRevive migration
```

until:

```text
PROJECT.yaml v1
PASS

Vertical Slice 0
PASS

worktree isolation
PASS

Forge/JOSH request-receipt loop
PASS
```

Compatibility analysis and necessary prerequisite repairs are allowed.

---

# 59. FUTURE CULINARYOS MIGRATION ORDER

When the freeze is lifted:

```text
1. KitchenKit → Prep
2. RecipeOS → Prep
3. CulinaryOps → Ops
4. Post-Pilot → Marketing
5. Plated → Web
6. RestRevive concepts → Intelligence
```

Each migration requires:

```text
inventory
dependency map
data ownership map
public contract map
compatibility
tests
fixture / dual-run validation
parity
source freeze
rollback
archive approval
```

Each migration is its own task and worktree.

---

# 60. SHORELINEOPS

ShorelineOps remains an independent product.

Purpose:

- senior-living dining;
- resident data;
- allergies;
- therapeutic diets;
- IDDSI;
- texture modification;
- EHR reconciliation;
- compliance;
- survey evidence;
- healthcare dining workflows.

It must not be merged into CulinaryOS.

Integration is only through:

- API;
- SDK;
- events;
- MCP;
- public contracts.

Clinical actions are high risk.

---

# 61. MERCURY

Mercury is the self-hosted communications product.

Capabilities may include:

- Spaces;
- Channels;
- DMs;
- WebSockets;
- presence;
- TOTP;
- files;
- search;
- Web Push;
- voice/video;
- LiveKit.

Mercury is optional.

No product must require Mercury to function.

Sigil may be selectively absorbed into Mercury before Sigil is archived.

---

# 62. BIBLEDESK

BibleDesk is the Scripture, study, prayer and Biblical research platform.

Capabilities include:

- Bible translations;
- study notes;
- search;
- cross references;
- lexicons;
- reading tools;
- maps;
- prayer;
- missions;
- Biblical graph;
- REST/API;
- MCP;
- SDK;
- optional AI.

Prayer Atlas is absorbed into BibleDesk.

Do not create a universal ShadowWalker knowledge service from BibleDesk's domain knowledge.

The previous Biblical Scholar concept is better treated as a BibleDesk scholarly-assistant mode/reference than another product.

---

# 63. DOMINION

Dominion is the primary active game project.

Canonical technology:

```text
Unity
C#
```

Current priorities:

1. card interaction;
2. action resolution;
3. turn flow;
4. rules correctness;
5. game-state management;
6. UX;
7. bots/NPCs;
8. testing.

Do not migrate Dominion to TypeScript.

XR experiments belong in MuseLab first.

---

# 64. MUSELAB

MuseLab contains uncertainty.

Potential experiments:

- Muse Code;
- Muse/Meta SDKs;
- model comparisons;
- MCP;
- agents;
- local models;
- Raspberry Pi;
- ESP32;
- Muse Gadgets;
- voice;
- audio;
- media;
- XR;
- glasses;
- deployment sandboxes.

Experiment lifecycle:

```text
IDEA
↓
EXPERIMENT
↓
VALIDATED
↓
CANDIDATE
↓
APPROVAL
↓
ADOPTED
```

or:

```text
REJECTED
```

An experiment does not become production architecture automatically.

MuseLab remains paused by default during Slice 0.

---

# 65. CULINARYOS ACADEMY

Future education/training project.

Historic concept:

- approximately 1,800-hour culinary curriculum.

It may share brand/domain knowledge with CulinaryOS, but education and restaurant operations have different users and lifecycles.

Do not put the academy inside the restaurant runtime.

---

# 66. KNOWLEDGE BANK

Future research initiative.

Concept:

> A verified, offline-capable digital Library of Alexandria.

Potential content:

- research papers;
- medicine;
- science;
- history;
- standards;
- technical documentation;
- educational resources;
- verified datasets.

Prefer:

- primary sources;
- peer-reviewed material;
- standards bodies;
- official documentation;
- reputable reference works.

Do not turn it into every product's operational database.

---

# 67. EXPERIMENTAL OS INITIATIVE

Status:

**LAB / PAUSED**

Historical direction:

- ARM-first;
- Raspberry Pi class;
- web-centric/PWA interface;
- XR;
- local System-1;
- integrated development control.

Before revival, answer:

> What does a custom OS provide that Linux + ForgeSatchel cannot?

Without a compelling answer, remain paused.

---

# 68. OTHER LABS

## ShadowRealm

Potential self-hosted AI workspace.

Keep separate from Forge if revived.

## OpenCAD

Possible future consolidation:

```text
Emergency-CAD
+
EMSCAD
→
OpenCAD
```

## BedrockOps

Potential operations/security project.

ShieldBot may belong underneath it if revived.

## ASCILINE

Potential image/processing project using:

```text
Python / OpenCV
+
web rendering
+
selective Rust
```

No rewrite without benchmarks.

## Unity-MC

Reference/archive candidate unless a real current use remains.

---

# 69. GAME / CREATIVE RESEARCH

Previously discussed possible projects include:

- Minecraft automation;
- Club-Penguin-inspired legal social MMO;
- Mega-Man/GBA-style game;
- XR game experiments.

These remain:

```text
LAB
RESEARCH
or FUTURE PRODUCT
```

until independent lifecycle is justified.

---

# 70. PERSONALITY ASSESSMENT PROJECT

Status:

**RESEARCH / LAB**

Goal:

Create a stronger personality-testing system informed by research.

Potential areas:

- transparent scoring;
- personality traits;
- MBTI-style outputs;
- validation;
- psychometric research.

Do not claim scientific validation before actual validation work exists.

---

# 71. CLIENT / BUSINESS PORTFOLIO

Business projects may provide real-world validation but do not define universal software architecture.

## Cheezies Gourmet

Active client/business implementation.

Potential validation target for:

- CulinaryOS Marketing;
- CulinaryOS Web;
- ordering;
- analytics.

## The Wilted Rose

Personal chef/catering brand.

Potential future validation for:

- events;
- menu management;
- costing;
- booking;
- restaurant/client tools.

## Northern Fixin's

Food-truck/business concept.

Potential real-world CulinaryOS food-truck use case.

## Other Historical Brands

Examples:

- The Twisted Fork;
- North of the Hole;
- Half Baked Cafe & Bakehouse;
- Donut Delight Co.;
- Alley Katz.

Brand existence alone does not justify a software repository.

---

# 72. BUSINESS CROSSOVER RULE

A client or personal business may reveal product requirements.

However:

> One business's workflow should remain configuration or an adapter until multiple independent operators demonstrate the same requirement.

This prevents CulinaryOS from becoming hard-coded to one restaurant or brand.

---

# 73. NEW REPOSITORY GATE

Before creating a repository, determine whether the idea is actually:

- a feature;
- a module;
- a package;
- a service;
- an adapter;
- an extension;
- an MCP;
- an SDK;
- a MuseLab experiment;
- a client implementation.

Create a repository only when independent lifecycle is real.

Evidence may include independent:

- users;
- deployment;
- release cadence;
- security boundary;
- product identity;
- ownership.

Default:

> **Do not create another repository.**

---

# 74. RULE OF TWO

Shared implementation should normally require:

```text
2 independent consumers
+
stable semantics
+
clear ownership
+
lower coupling after extraction
```

Contracts can be shared earlier.

Implementation should not.

---

# 75. NO-REWRITE RULE

Do not rewrite stable software because:

- Rust is interesting;
- a new framework exists;
- another agent prefers a different stack;
- uniformity looks cleaner;
- a package manager is fashionable.

Require:

- measured problem;
- clear benefit;
- migration plan;
- acceptance criteria.

---

# 76. SECURITY MODEL

No model, tool, agent, extension, provider, repository or device is inherently trusted.

Threats include:

- prompt injection;
- malicious repository instructions;
- compromised provider credentials;
- overprivileged tokens;
- cross-project leakage;
- secret exposure;
- unsafe extensions;
- dependency compromise;
- compromised GitHub Actions;
- remote-control abuse;
- device compromise;
- stale cached state.

---

# 77. SECRETS

Forge may become a secrets **broker**.

It should not become one plaintext universal vault.

Prefer:

- OS credential store;
- provider secret store;
- environment references;
- short-lived credentials;
- scoped tokens.

Never store secret values in:

- logs;
- receipts;
- handoff packets;
- documentation.

---

# 78. CI / SUPPLY CHAIN

Stable projects should converge toward:

```text
install
typecheck
lint
build
unit tests
integration tests
contract tests
security checks
```

Security hardening order:

```text
1. prove hosted CI
2. pin third-party Actions where appropriate
3. dependency review
4. secret scanning / push protection
5. SBOM
6. provenance / attestations
7. OpenSSF Scorecard
8. remediation
```

---

# 79. OBSERVABILITY

Shared conventions:

- structured logs;
- timestamps;
- project IDs;
- task IDs;
- request IDs;
- correlation IDs;
- health checks;
- readiness checks.

Use OpenTelemetry where distributed behavior actually warrants it.

---

# 80. RECOVERY

Every stateful production project should eventually define:

- data classification;
- RPO;
- RTO;
- backup mechanism;
- encryption;
- restore procedure;
- restore test;
- owner.

Forge owns Forge recovery.

Each product owns its product data.

---

# 81. AGENT CONTEXT MODEL

The complete Bible is reference material, not the default agent prompt.

Default agent context:

```text
AGENTS.md
+
PROJECT.yaml
+
STATUS.md
+
task-specific files/tests
+
relevant ARCHITECTURE.md
+
selected ECOSYSTEM.md section
```

Only load the broad portfolio when necessary.

---

# 82. AGENT HANDOFF STANDARD

Every substantial agent session should produce:

```text
SHADOWWALKER AGENT HANDOFF

1. Objective
2. Current State
3. Evidence Status
4. What Changed
5. Files Changed
6. Proposed / Target Files
7. Why
8. Tests Run
9. Build Status
10. Known Blockers
11. Architecture Decisions
12. Assumptions / Unverified Claims
13. Next Immediate Action
```

Never mix:

```text
files actually changed
```

with:

```text
files we intend to create
```

---

# 83. AGENT CONTEXT TIERS

```text
Tier 0
request + AGENTS rules

Tier 1
PROJECT.yaml + STATUS

Tier 2
affected code/tests

Tier 3
architecture/dependencies/history

Tier 4
ecosystem-wide context
```

Classify first.

Load second.

Reason third.

---

# 84. FOUNDATION MATURITY

Foundation capabilities move through:

```text
PROPOSED
↓
DECLARED
↓
IMPLEMENTED
↓
VERIFIED
↓
ACCEPTED
```

Documentation alone does not move a feature to accepted.

---

# 85. NO DOCUMENTATION-ONLY SUCCESS

Examples:

```text
PROJECT.yaml specification written
≠ complete

Forge/JOSH diagrams written
≠ complete

worktree policy documented
≠ complete

MCP tool listed
≠ implemented
```

Milestones require executable evidence.

---

# 86. STANDARD REPOSITORY DOCUMENTS

Major active repositories should eventually have:

```text
PROJECT.yaml
README.md
AGENTS.md
ARCHITECTURE.md
STATUS.md
ROADMAP.md
CHANGELOG.md
SECURITY.md
```

Add when useful:

```text
docs/
├── architecture/
├── contracts/
├── integrations/
├── migrations/
├── testing/
├── operations/
└── decisions/
```

Do not create empty documentation bureaucracy.

---

# 87. DOCUMENT RESPONSIBILITIES

```text
README
→ what is this?

ARCHITECTURE
→ how does it work?

STATUS
→ what is true today?

ROADMAP
→ what comes next?

CHANGELOG
→ what changed?

AGENTS
→ how may AI operate?

SECURITY
→ what are the boundaries?

PROJECT.yaml
→ machine-readable contract

ADR
→ why did architecture change?

MIGRATION
→ how does structural change happen?

RUNBOOK
→ how is it operated and recovered?
```

---

# 88. DEFINITION OF DONE

Applicable tasks should include:

```text
implementation
tests
integration
contracts
build
typecheck
lint
security consideration
documentation
migration notes
STATUS update
handoff
```

Not every task requires every item.

Generated code by itself is never sufficient proof.

---

# 89. P06 EXECUTION ROADMAP

## Step 1 — Minimal PROJECT.yaml v1

Deliver:

- authoritative Zod schema;
- generated JSON Schema;
- schema tests;
- ForgeSatchel manifest;
- JOSH manifest;
- CulinaryOS manifest;
- invalid fixtures.

Do not overdesign future schema fields.

---

## Step 2 — Minimal Forge Project Reader

Forge must:

- find project;
- load manifest;
- validate manifest;
- surface useful errors;
- resolve declared commands.

---

## Step 3 — Task + Worktree

Implement only enough to:

- create task;
- create branch;
- create isolated worktree;
- associate worktree with task;
- clean it safely.

---

## Step 4 — Minimal JOSH ↔ Forge Bridge

Implement:

- DecisionRequest;
- DecisionResult;
- ActionRequest;
- ActionReceipt.

Transport choice remains implementation-level.

Possible transports include:

- loopback HTTP;
- local socket;
- local IPC.

Choose the simplest secure mechanism that fits the current implementations.

---

## Step 5 — Execute One Real Command

JOSH requests a bounded Forge action.

Forge:

- validates;
- loads project declaration;
- creates isolated task;
- runs declared Forge command;
- records result.

---

## Step 6 — Persist Receipt

Receipt includes enough information to correlate:

- request;
- task;
- target;
- capability;
- policy outcome;
- command/result;
- verification;
- timestamp.

Do not expose secrets.

---

## Step 7 — Failure Testing

Prove:

- malformed input;
- invalid project;
- missing command;
- denied action;
- worktree failure;
- failed command;
- correlation.

---

## Step 8 — Vertical Slice 0 Accepted

Only after the real end-to-end path works.

---

# 90. AFTER SLICE 0

Expand based on evidence.

Likely sequence:

```text
Environment Manager
Runtime Manager
Doctor
Process Manager
Service Manager
Port Manager
Agent Manager hardening
Forge Guard
Secrets Broker
Provider adapters
```

Do not assume this exact sequence if Slice 0 exposes a more immediate dependency.

---

# 91. CULINARYOS AFTER SLICE 0

Once Slice 0 passes:

1. resolve remaining P06 compatibility blockers;
2. validate CulinaryOS on target Node runtime;
3. establish migration test harness;
4. begin migration #1 only;
5. verify;
6. repeat.

Do not start six migrations together.

---

# 92. CLEAN-MACHINE FUTURE ACCEPTANCE

Eventually:

```text
Fresh Windows machine
        ↓
Install Forge
        ↓
forge bootstrap
        ↓
detect/configure runtimes
        ↓
optional WSL setup
        ↓
connect providers
        ↓
discover projects
        ↓
restore Forge metadata
        ↓
forge doctor
        ↓
ready
```

Requirements:

- dry-run;
- idempotence;
- clear failures;
- recovery;
- clean-machine testing.

---

# 93. HARDWARE ROADMAP

Primary:

```text
PC
```

Secondary:

```text
Raspberry Pi 5
```

Peripheral:

```text
ESP32
Muse Gadgets
sensors
buttons
displays
controllers
```

Future topology:

```text
Forge Core / PC
      ↓
Forge Node / Pi
      ↓
device adapters
      ↓
ESP32 / peripherals
```

Hardware comes after core desktop execution is stable.

---

# 94. XR ROADMAP

Potential uses:

- Dominion XR;
- Forge spatial workspace;
- multi-screen development;
- experimental hardware interfaces.

XR remains MuseLab territory until validated.

Do not move Dominion away from Unity merely because another XR/game technology appears.

---

# 95. PORTFOLIO FUTURE MAP

Known future or speculative initiatives include:

- CulinaryOS Academy;
- Knowledge Bank;
- Forge Remote;
- Forge Device Node;
- OpenCAD;
- personality assessment system;
- Minecraft automation;
- social MMO concept;
- GBA-style game research;
- XR systems;
- experimental OS.

These are not automatically new repositories.

They remain mapped concepts until they pass the repository gate.

---

# 96. NEW IDEA ROUTING

```text
Restaurant?
→ CulinaryOS

Senior living / clinical dining?
→ ShorelineOps

Development tooling?
→ ForgeSatchel

Fast decision / routing / policy?
→ JOSH

Communications?
→ Mercury

Scripture / study / prayer?
→ BibleDesk

Dominion gameplay?
→ Dominion

Experimental?
→ MuseLab

Client-specific?
→ client repository

Uncertain?
→ backlog / lab

Independent lifecycle proven?
→ consider new repository
```

---

# 97. THINGS NOT BEING BUILT NOW

Do not create:

- ShadowCore;
- global authentication platform;
- global operational database;
- universal product event bus;
- universal UI framework;
- global Knowledge Core;
- another AI harness;
- another portfolio manager;
- universal device SDK;
- repository per provider adapter;
- Nx on top of Turborepo without a real ADR;
- mandatory Mercury;
- mandatory Supabase;
- mandatory Muse;
- mandatory cloud infrastructure.

---

# 98. NINE ECOSYSTEM CLOSURE CONDITIONS

Before describing the core ecosystem foundation as effectively complete:

1. `.github/ECOSYSTEM.md` is canonical.
2. Forge/JOSH terminology and authority are aligned.
3. `PROJECT.yaml` is implemented.
4. Required Forge managers exist based on proven workflows.
5. Node 20 is removed from active production baselines.
6. CulinaryOS migration gates pass.
7. Agent/process isolation and scoped permissions are operational.
8. Supply-chain controls are established.
9. Fresh-machine bootstrap and recovery are proven.

---

# 99. INSTRUCTIONS FOR FUTURE LLMS

When entering ShadowWalker:

```text
1. Identify target project.
2. Read AGENTS.md.
3. Read PROJECT.yaml.
4. Read STATUS.md.
5. Inspect Git.
6. Inspect relevant implementation.
7. Inspect tests.
8. Determine evidence status.
9. Read only relevant ECOSYSTEM sections.
10. Make the smallest correct change.
11. Verify.
12. Update relevant documentation.
13. Produce handoff.
```

Do not begin by redesigning the ecosystem.

---

# 100. AGENT PROHIBITIONS

Agents must not:

- create global infrastructure casually;
- convert JOSH into a full LLM;
- let JOSH bypass Forge;
- merge ShorelineOps into CulinaryOS;
- make Mercury mandatory;
- globalize BibleDesk internals;
- rewrite Dominion from Unity/C#;
- rewrite Python merely for consistency;
- add repositories for every feature;
- add Nx without need;
- treat Node 20 as a valid future production baseline;
- promote MuseLab experiments without approval;
- expose every tool to every model;
- claim unrun tests passed;
- call proposed files completed;
- promote assumptions into architecture;
- initiate broad CulinaryOS migration before Slice 0 acceptance.

---

# 101. CURRENT SINGLE MOST IMPORTANT DELIVERABLE

Not another architecture diagram.

Not another framework.

Not another project.

Not another migration.

The most important deliverable is:

> **One boring, repeatable, isolated, testable, end-to-end ShadowWalker task.**

When that works, the architecture becomes software.

---

# 102. CANONICAL EXECUTION MODEL

```text
CANONICALIZE
      ↓
PROVE VERTICAL SLICE
      ↓
IMPLEMENT FROM EVIDENCE
      ↓
MIGRATE
      ↓
VERIFY
      ↓
STABILIZE
      ↓
EXPAND
```

### Canonicalize

- ecosystem rules;
- minimal project contract;
- ownership;
- authority boundary.

### Prove Vertical Slice

- project declaration;
- task;
- worktree;
- JOSH;
- Forge;
- execution;
- receipt.

### Implement From Evidence

- build Forge managers that real workflows require;
- strengthen security;
- add providers.

### Migrate

- one source at a time.

### Verify

- builds;
- tests;
- contracts;
- security;
- recovery.

### Stabilize

- CI;
- docs;
- bootstrap;
- observability;
- backup/restore.

### Expand

- devices;
- remote;
- XR;
- future products.

---

# 103. FINAL SUCCESS STATE

The ecosystem succeeds when:

```text
Forge
knows what projects exist,
where they live,
how they run,
and what may modify them.

JOSH
understands requests,
handles cheap deterministic decisions,
and chooses bounded actions.

Products
own their domains.

Agents
operate in isolated scopes.

Providers
remain replaceable.

Experiments
remain experiments until proven.

PROJECT.yaml
declares intent.

Forge
observes reality.

Git
records change.

Tests
prove behavior.

ActionReceipts
prove execution.

ECOSYSTEM.md
explains how the universe fits together.
```

---

# 104. FINAL OPERATING PRINCIPLES

## Architecture

> **Products own their domains.**

## Sharing

> **Contracts before shared implementation.**

## Abstraction

> **Evidence before abstraction.**

## Authority

> **JOSH decides. Forge executes.**

## Execution

> **Vertical proof before horizontal expansion.**

## Repositories

> **New repo only when independent lifecycle is real.**

## Experiments

> **MuseLab first, production only after proof.**

## Migration

> **One migration at a time, with rollback.**

## AI

> **An AI inference is not a canonical fact.**

## Current directive

> **Stop expanding the architecture horizontally. Close the vertical execution loop.**

---

# 105. NEXT ACTION

The next implementation task is:

## `shadowwalker.project/v1`

Deliver:

1. minimal authoritative schema;
2. Zod implementation;
3. generated JSON Schema;
4. schema tests;
5. ForgeSatchel `PROJECT.yaml`;
6. JOSH `PROJECT.yaml`;
7. CulinaryOS `PROJECT.yaml`;
8. invalid fixtures;
9. minimal Forge reader.

Immediately afterward:

```text
Task
→ Worktree
→ JOSH request
→ Forge execution
→ Verification
→ ActionReceipt
```

That is ShadowWalker Vertical Slice 0.

Do not widen the scope until it works.

---

# 106. EXTERNAL ARCHITECTURAL REFERENCES — TYPESAFE AI / JEV

Amendment 6.2.1, October 8, 2026. Owner supplied this refinement; it preserves Vertical Slice 0 and adds no core infrastructure or mandatory vendor dependency.

Classification: **REFERENCE + OPTIONAL PROVIDER**. Primary relevance: **JOSH**.

JOSH's model is a fast path engine, typed judgment kernel, classifier, router, policy evaluator, context broker and deterministic workflow composer. Choice selects a closed-set option; Noul estimates a condition's probability; Score evaluates an ordered rubric. These concepts belong on JOSH's existing typed Decide surface. Deterministic commands, aliases, IDs, rules and cached mappings remain the first path.

TypeSafe documents atomic typed judgments composed by code, independent questions sharing one state, and speculative fan-out. Those are architectural references, not measured JOSH performance guarantees. Batch independent intent/project/risk/tool/capability questions when they do not depend on one another; code consumes only relevant, validated answers. Dependent questions wait for their prerequisites. Generate routing questions from registered capabilities and actual closed-set parameter contracts; model output supplies an ActionRequest, never a direct function-call authority. [TypeSafe introduction](https://docs.typesafe.ai/introduction), [patterns](https://docs.typesafe.ai/patterns), [typed JavaScript SDK](https://github.com/typesafe-ai/typesafe-sdk-js).

Keep known facts distinct from inferred judgments and retain per-question provenance and probabilities. Choice/Score confidence summarizes a distribution; it is not automatically a calibrated probability of correctness. Noul exposes a probability without a separate vendor confidence field. A weakest-required-judgment statistic may guide escalation after domain validation; it is not a joint correctness probability. Thresholds require measured domain/risk-specific calibration. Unknown, unavailable, abstained and timed-out results stay explicit. **Confidence never grants permission or bypasses R3/R4 approval.** [TypeSafe confidence](https://docs.typesafe.ai/confidence).

JOSH owns vendor-neutral request/result contracts. Rule/local scorers, an optional TypeSafe provider, optional local models and System-2 providers remain replaceable implementations. Provider-specific SDK/API shapes stay inside adapters. No TypeSafe installation, credential setup, hosted-service dependency, provider call, fixed universal threshold or model pin is adopted by this amendment.

The authority path remains:

```text
state -> fast path -> typed judgments -> deterministic policy/composition
-> DecisionResult -> ActionRequest -> Forge authorization/execution -> ActionReceipt
```

## JOSH Evals — first JOSH-specific follow-up after Slice 0

Borrow WorkflowEvals' persisted/resumable cases and comparable workflow runs. It reports agreement with reference answers; model agreement must not be relabeled ground-truth accuracy. Use human/domain-reviewed labels where accuracy or false-execution risk is claimed. Pin dataset, policy, code, provider/model settings and reference versions; keep missing cost/latency/token measurements unknown. [WorkflowEvals](https://github.com/typesafe-ai/WorkflowEvals).

Planned workflows: intent/project routing, tool/agent/provider selection, risk classification, command parsing, permission escalation and context selection. Compare deterministic rules and local scoring first; optional JEV and System-2 comparisons require separate bounded provider evidence. Metrics include labeled accuracy, exact route/arguments, false-execution risk, latency, tokens, known cost, confidence calibration and escalation rate. In particular, high-confidence malformed, denied or destructive requests must still result in no unauthorized execution.

This is a specification/evaluation direction, not an evaluation implementation or benchmark result. Do not create another framework, expand providers or run external evaluations before the current Task -> Worktree -> JOSH -> Forge -> verification -> ActionReceipt acceptance closes.

---

# FINAL STATEMENT

The ShadowWalker ecosystem is no longer a collection of unrelated projects and experiments.

It is an intentional hierarchy:

```text
ForgeSatchel
controls development execution.

JOSH
handles fast decisions and routing.

Products
control their domains.

MuseLab
contains uncertainty.

PROJECT.yaml
declares project intent.

AGENTS.md
governs agent behavior.

Git and runtime state
show reality.

Tests
prove behavior.

ActionReceipts
prove controlled execution.

ECOSYSTEM.md
explains the entire system.
```

The architecture is not waiting for another redesign.

The next stage is disciplined execution.

> **Define only what is needed. Build the thin path. Verify it. Expand from evidence.**

This is now the **final integrated v6.2 baseline**. Future changes should be small versioned amendments driven by actual implementation evidence rather than another wholesale rewrite.
