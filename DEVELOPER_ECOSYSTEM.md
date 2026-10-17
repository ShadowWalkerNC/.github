# ShadowWalkerNC Developer Intelligence & Orchestration Ecosystem

Architecture Specification for ForgeSatchel, JOSH, and Muse Coordinated Execution  
Repository: ShadowWalkerNC/.github  
Date: October 17, 2026  
Status: Authoritative Integration Contract  

---

## 1. System Division of Labor & Ownership

The developer intelligence tier operates as a tri-partite engine:

| Component | Role | Core Responsibilities | What It Must NOT Do |
| :--- | :--- | :--- | :--- |
| **ForgeSatchel** | Development Control Plane | Machine state authority, Git worktree isolation, project registry, task scheduling, developer suites, and secret brokering. | Must not perform statistical NLP intent classification or replace JOSH. |
| **JOSH** | System 1 Intelligence Engine | Fast intent classification, trigger/mention parsing, deterministic routing, command safety evaluation, and policy enforcement (`/v2/decide`). | Must not become an oversized LLM wrapper; must not mutate machine files or manage worktrees. |
| **Muse & MuseLab** | Agent Execution & R&D | Official Meta Muse Code CLI execution (`@muse-code/sdk`), MSP sessions, hardware gadget experiments, and model benchmarking. | Unstable experimental dependencies must not pollute production control plane code. |
| **ShadowHelicon** | Developer GUI Workbench | Visual desktop/web workbench, categorized project sidebar, chat thread, live inline diffs, approvals, and permanent usage bar. | Must not replace ForgeSatchel authority or store master machine credentials. |

---

## 2. Coordinated Request Execution Flow

When a developer or agent triggers an action in the ecosystem, execution follows the strict vertical execution path:

```text
User / Agent Prompt or Slash Command
                 |
                 v
        +------------------+
        | ShadowHelicon /  |
        |   ForgeSatchel   |
        +------------------+
                 |
                 v (Fast Intent & Policy Query)
        +------------------+
        |  JOSH System 1   | <---> [Local Gemma 3 / CPU Scorer]
        |    (/v2/decide)  |       (0-15ms fast probabilistic triage)
        +------------------+
                 |
        +--------+--------+
        |                 |
  [Deterministic]   [High-Reasoning]
        |                 |
        v                 v
+---------------+ +------------------+
| Direct Tool / | | Cloud Escalation |
| Local ScriptC | | (Gemini / Claude)|
+---------------+ +------------------+
        |                 |
        +--------+--------+
                 |
                 v
        +------------------+
        |   ForgeSatchel   | ---> [Isolated Git Worktree / Sandbox]
        |  Execution Grant | ---> [Audit Receipt & Verification]
        +------------------+
                 |
                 v
        +------------------+
        | Muse Code Host   | ---> [Real-time Inline Diff / Result]
        +------------------+
```

---

## 3. Integration Contracts Between Systems

### 3.1 ForgeSatchel <-> JOSH Contract
- Communication: Local Fastify HTTP REST API (`http://127.0.0.1:7777`) with loopback token authorization.
- Request Model:
  ```json
  {
    "action": "execute_command",
    "target": "pnpm test",
    "cwd": "C:/Users/white/Documents/GitHub/CulinaryOS",
    "context": {
      "principal": "agent",
      "sessionId": "ses-10492"
    }
  }
  ```
- Response Model:
  ```json
  {
    "decision": "allow | deny | escalate | ask",
    "confidence": 0.98,
    "policyMatched": "safe_read_or_test",
    "riskLevel": "low",
    "escalateTo": null
  }
  ```
- Fail-Closed Guarantee: If JOSH is unreachable or unconfigured, ForgeSatchel strictly defaults to `ask` (requiring human confirmation).

### 3.2 ShadowHelicon <-> ForgeSatchel Contract
- Communication: Daemon startup registration hook (`POST /api/machines/register`).
- Secret Brokering: ShadowHelicon requests ephemeral tokens from ForgeSatchel during session setup. Secrets are kept in memory only; zero secrets are written to SQLite databases or logs.

### 3.3 ShadowHelicon <-> Muse Code SDK Contract
- Communication: Official Meta `@muse-code/sdk` over stdio/IPC using the Muse Session Protocol (MSP).
- Execution: Daemon spawns `muse serve` per workspace, handles approvals, feeds inline diffs, and monitors streaming turns.

---

## 4. Local-First and Offline Autonomy

1. Complete Offline Operation: The core development loop (JOSH deterministic triage, ForgeSatchel worktrees, ScriptC compilation, local test runners) functions 100% offline without public internet connectivity.
2. Local Intelligence: JOSH leverages fast local deterministic rules and local CPU-quantized models (e.g., Gemma 3 1B Q4_K_M) for intent classification under 20ms without invoking cloud tokens.
3. Cloud Escalation: Large language models (Gemini 2.5 Pro, Claude 3.7 Sonnet) are invoked only when JOSH returns `escalate` for complex architectural reasoning or creative code generation.
