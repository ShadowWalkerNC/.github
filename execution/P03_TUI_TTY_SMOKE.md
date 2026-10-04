# Interactive TTY smoke - 2026-10-03
Bundled Node, compiled dist/src/cli.js tui, isolated eight-project registry.
PASS: TTY startup/render displays eight canonical project names, active/supporting badges and ForgeSatchel governance metadata. ConPTY output captured in task tool result.
NOT CONFIRMED: synthetic input sent through write_stdin did not produce a visible tab/search update in captured output; do not claim keyboard/search acceptance from source tests alone. This is startup/render smoke, not full usability/visual certification.
Additional captured output confirms Docs Search tab navigation and search-result/truncation rendering for query prefixes F/For. Per-character input/render processing was slow; full usability acceptance remains pending. Owned test process stopped after smoke.
