# Sensoria Portfolio working agreements

## Safety and authority

- Verify facts; leave unknowns explicit. Preserve unrelated dirty/untracked work; never read or expose secret environment values or commit credentials/private data. Only secret-free environment examples belong in Git.
- Reversible branch-local work proceeds without extra approval. Explain API/schema/dependency/schedule/instruction changes once before implementation. Diagnosis alone does not authorize implementation.
- Obtain explicit approval immediately before default-branch merge, deletion/overwrite, force push, production deploy, external publication or paid operations; state what remains and what is removed. Do not infer authorization from a checklist.
- Use a purpose-specific branch/PR against the actual default, one purpose per PR. Use squash merge after approval. Inspect branch/status before changes and merge; stage only intended files. Preserve generated/environment files unless intentionally changed. Use --body-file for multiline GitHub bodies.
- PRs record changes, related issue, actual checks/review and limitations. Inspect final diff, current base/head, checks and blocking findings before approved merge. After merge, sync without overwriting dirty work; clean worktree/branches and prune only with deletion approval.

## Behavior validation

- Add practical regression/boundary tests for changed behavior. Scheduled work, public output and external delivery need real tests and documented commands; document a justified absence instead of installing a synthetic gate. Before publication or a major release, check the applicable release checklist.

## Review and local verification

- Known, isolated low-risk edits with reversible effects (not just Git-revertible): affected checks and final diff; independent review/UAT docs optional. Size/extension alone is not low risk; high-risk gates and stricter domain rules override this exemption.
- Other behavior changes: affected tests, changed-path check and one independent review. Build/integration/UAT only where affected. Record results in PR or existing UAT; update changed acceptance contracts.
- Auth/permissions/secrets/billing/migrations, external send/publish controls, live-data/processed-state writes, scheduler execution controls (including retry/exit gating), production or broad high impact: independent specialist/domain and rollback scrutiny, related full suite/build and relevant UAT. Investigate unknown impact before granting a low-risk exemption.
- Choose model/effort for risk; briefly report scope/results/untested coverage. Failed reviews do not count or waive required scope. Re-review material changes only. Required-check failures and correctness/safety/requirement findings block; optional polish does not.
- Local checks first; optional Actions default off subject to enforced rules/domain exceptions. Preserve triggers; [skip ci] only when allowed, no default dispatch/reruns. No execution = NOT_RUN, never PASS. Existing merge/deletion/deploy/publication/paid-operation approvals remain.

## Article research

- Public-safe workflow and aggregate counts live in `docs/article-research/`. Source texts, per-article reports, prompts, images and generated drafts stay at ignored local paths; resume from `article-analysis.local/PRESERVATION.md`. Never stage them automatically.
- Distinguish publication versions from unique manuscripts, author-written texts from interview-subject articles, and measured counts from interpretation. Analysis does not authorize new article proposals or publication.
- Preserve source IDs and hashes, including ordered line mappings. Validation success does not establish interpretive correctness or author approval. When consulting Claude Code, use Opus 5.5 with medium reasoning or higher.
- Run `python -B -m unittest discover -s scripts -p test_article_style.py -v` for tool changes. Store source-bearing temporary inputs and raw responses in the designated investigation scratch. Skill implementation and site restoration remain separate scopes.
