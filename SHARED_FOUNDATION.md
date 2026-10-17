# ShadowWalkerNC Shared Engineering Foundation

Standard Configurations, Contract Schemas, Common Interfaces, and Tooling Conventions  
Repository: ShadowWalkerNC/.github  
Date: October 17, 2026  
Status: Authoritative Engineering Standard  

---

## 1. Multi-Language Engineering Standards

ShadowWalkerNC rejects one-size-fits-all runtime dogma. Different problems require different optimal runtimes. We establish rigorous conventions per language stack rather than forcing every system into one framework:

| Language / Stack | Primary Use Cases | Pinned Toolchain & Manager | Strict Standards |
| :--- | :--- | :--- | :--- |
| **TypeScript / Node** | Developer interfaces, Web UIs, orchestration, REST/Fastify APIs | Node 22+ / 24, pnpm workspaces, Vite, Turborepo | Strict tsconfig (`noImplicitAny`, `exactOptionalPropertyTypes`), ESM-first, Vitest/Node test runner. |
| **Native TypeScript (ScriptC)** | Ultra-fast local CLI utilities, zero-overhead background tools | ScriptC (Vercel Labs), portable Zig 0.13.0, stat_shim.o | Standalone native Windows executables (~569 KB, 0ms startup, no V8 runtime). |
| **Python** | System 1 ML kernels, deterministic scoring, data transformations | Python 3.12, UV package manager, PyTorch/LlamaCpp | Pydantic v2 data contracts, pytest with coverage, type annotations checked via pyright/mypy. |
| **Rust** | High-performance visual codecs, binary protocols, system tools | Rust 1.80+ (stable-x86_64-pc-windows-msvc), Cargo | Zero unsafe code in application logic, Clippy warnings as errors, standard Cargo workspaces. |
| **Kotlin (KMP)** | Modern mobile & multiplatform clients (Emergency-CAD) | Kotlin 2.0+, Gradle Kotlin DSL (build.gradle.kts) | Multiplatform mobile/desktop targets, Coroutines, strict nullability. |
| **C# / Unity** | Simulation engines, interactive visual clients (Dominion) | Unity 2022.3 LTS / 2023 LTS, .NET 8, C# 12 | Pinned package manifests, automated test runner harnesses, clean separation of engine from UI. |

---

## 2. Common Interfaces Architecture

To prevent duplicate business logic across different user touchpoints, all product capabilities follow the Canonical Interface Flow:

```text
                    Product Capability
                           |
               Canonical Business Logic
                           |
             Shared Validation & Policy Gating
                           |
       +-----------+-------+-------+-----------+
       |           |               |           |
      CLI         API             MCP         SDK & UI
```

### Non-Negotiable Implementation Rules:
1. One canonical implementation: The underlying business operation (e.g., project creation, recipe ratio scaling, shift assignment) is implemented once in the core package or module.
2. Identical error semantics: If an action fails validation, the CLI, REST API, MCP tool, and SDK report the identical error code and message format.
3. Unified policy gating: All interfaces pass through the central policy check (JOSH System 1 or product RBAC). An unprivileged user cannot bypass security rules by switching from the UI to the CLI or MCP.

---

## 3. Contract-First Schema Architecture

All cross-system and cross-service communication is governed by versioned JSON Schemas stored in `ShadowWalkerNC/.github/schemas/`:

1. `capability.schema.json`: Declares product capabilities, supported interfaces, permissions, and dependencies.
2. `forge-project.schema.json`: Machine-readable project manifest (`forge.project.json`) defining identity, lifecycle, commands, and agent policy.
3. `integration.schema.json`: Defines external and inter-project integration contracts, protocols, and authentication methods.
4. `migration.schema.json`: Governs capability migration steps, verification evidence, and rollback procedures.
5. `phase.schema.json`: Standardizes portfolio lifecycle phases (P00 through P13).
6. `portfolio.schema.json`: Authoritative portfolio registry schema for machine-readable inventories.

### Error Response Contract:
Every HTTP API and MCP server in the ecosystem must adhere to the standard error structure:
```json
{
  "error": {
    "code": "STRING_ERROR_CODE",
    "message": "Human-readable explanation.",
    "target": "field_or_resource_id",
    "timestamp": "2026-10-17T12:00:00.000Z",
    "recoverable": false,
    "details": []
  }
}
```

---

## 4. MCP (Model Context Protocol) Standards

Model Context Protocol servers enable AI agents and external tools to interact with ShadowWalkerNC applications safely.

Standard MCP Requirements:
- Transport: Local stdio transport is preferred for developer tools; Server-Sent Events (SSE) over authenticated loopback or Tailscale is used for remote daemon access.
- Schema Validation: Tool inputs must be validated with Zod or standard JSON schema before execution.
- Security Policy: All destructive actions (e.g., file writes, shell execution, database updates) require approval card surfacing unless pre-authorized by an explicit JOSH policy.
- Implemented MCP Servers:
  - `@helicon/mcp`: Coding session and project orchestration tools.
  - `CulinaryOS MCP`: Restaurant operations, prep lists, and recipe scaling tools.
  - `ForgeSatchel MCP`: Developer workspace indexing and Git worktree management tools.
  - `gitdiagram`: System architecture visualizer.
  - `jev-classifier`: Fast intent and safety classification.

---

## 5. Security and Secret Management Rules

1. Zero secrets in SQLite or logs: Secrets, tokens, and private keys must never be committed to Git, stored in SQLite databases, or emitted in log files.
2. Environment precedence: Runtime configuration follows the hierarchy:
   - System Environment Variables (Highest priority)
   - Encrypted Vault / Secret Broker (ForgeSatchel / Railway Variables)
   - `.env.local` (Local overrides, Git-ignored)
   - `.env.example` (Committed reference documentation)
3. Fail-Closed Policy: If JOSH or an authorization endpoint is unreachable, all dangerous operations fail closed to manual user confirmation.
