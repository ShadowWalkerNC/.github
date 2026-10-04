# P04 repository rename plan — not executed
Source: ShadowWalkerNC/MuseAiBots. Target: ShadowWalkerNC/MuseLab.
Stable repository ID: 1384234838. Current live source metadata: public, not archived, default main, size 0. Connected actor has admin permission; capability does not constitute owner approval.
Target lookup returned authenticated 404 NOT_FOUND. Recheck source ID/name and target immediately before an approved mutation; this is not a guaranteed future reservation.

Local root stays C:/Users/white/Documents/GitHub/MuseAiBots for now to preserve path-based tools and agents. Existing checkout is unborn main with no HEAD and nine untracked governance files. No local rename, commit or push proposed.

After explicit repository_rename approval:
1. Re-read Git/change state, owner ledger claims, remote/source ID and target availability; preserve source/config/manifest snapshots.
2. Capture current branches/tags/releases/issues/PRs/CI/provider mappings or explicit unknowns. Size 0 and no local HEAD alone do not prove every external surface absent.
3. Rename the same GitHub repository to MuseLab; never create a replacement repository or delete source.
4. Verify stable ID and visibility/default branch unchanged. Update local origin URL to https://github.com/ShadowWalkerNC/MuseLab.git.
5. Update current portfolio/active manifest/migration status references and project repository metadata; preserve MuseAiBots in historical provenance. Keep local filesystem root unchanged.
6. Verify old/new URL behavior and any identified Pages/Actions/provider consumers independently. Stop on any ID/consumer mismatch.
7. Record durable rename evidence and handoff. No deployment, secrets, commit/push or SDK mutation.

GitHub documents web/Git redirects, but Pages URLs and calls to hosted actions have exceptions. Do not reuse the old repository name because that can break redirects.
Source: https://docs.github.com/en/repositories/creating-and-managing-repositories/renaming-a-repository

Rollback: if approved rename breaks an identified consumer, stop further mutations; recheck availability of MuseAiBots, rename the same stable-ID repository back under explicit rollback authorization, restore origin/metadata snapshots and verify consumers. Do not assume reverse rename is always possible or silently restore external state without authorization.

