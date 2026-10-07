# v6.2 adoption and PROJECT.yaml v1

Date: 2026-10-07
Owner-supplied ECOSYSTEM.md SHA256: 0835510DF03502AB82C2C4E66332A6E60295CA3FB0D7AAA88E010D8867DEC48E

VERIFIED: ECOSYSTEM.md is byte-identical to the supplied final integrated v6.2 document. The existing governance repository is used; no new repository or separate amendment is introduced. AGENTS.md and execution/CURRENT_PHASE.yaml point to Vertical Slice 0. Primary dirty standards and ledger changes remain preserved.

DECLARED: project schema initial acceptance covers ForgeSatchel, JOSH and CulinaryOS only. The first scoped task uses existing Forge code and dedicated worktrees. Contract validity proves declaration shape, not runtime support, migration acceptance, production safety or a working JOSH bridge.

UNKNOWN: complete Task -> Worktree -> JOSH -> Forge authorization -> declared command -> verification -> ActionReceipt acceptance. That is the next gate after the project reader. No broad CulinaryOS migration, remote execution, production or security-policy mutation is authorized by a valid manifest.

Local implementation/evidence lives on codex/shadowwalker-project-v1 in Forge/JOSH/Culinary task worktrees. Canonical remote publication and hosted CI remain separate evidence; no push is performed in this task.

## Contract acceptance — 2026-10-07
VERIFIED: authoritative Zod schema and generated JSON Schema, strict reader/declared command exclusivity, root Forge/JOSH/Culinary manifests and invalid fixtures. Schema drift/typecheck/build PASS; complete compiled suite 103 tests: 102 PASS, 0 FAIL, 1 file-symlink privilege SKIP. Actual three worktree manifests valid through compiled reader. Local commits merged: Forge e5cb00b, JOSH 4ec6036, CulinaryOS 6493844; no push. Exact operating evidence: Forge docs/operations/project-contract-v1.md. Prior source lifecycle checkpoint ae34274 preserved.
DECLARED compatibility limits: CulinaryOS still specifies Node >=20; JOSH package-manager version unknown; only current Windows/Node24 host checked. Schema validity is not production/migration/runtime certification.
IN PROGRESS: next bounded Slice 0 task/worktree/local JOSH IPC/Forge authorization/declared Forge test/receipt path. Acceptance requires real execution plus specified failure cases; no acceptance is claimed by this contract checkpoint.
