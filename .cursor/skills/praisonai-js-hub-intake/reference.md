# praisonai-js hub intake — file reference

Same content as the PraisonAI monorepo skill reference. Key paths from **this repo**:

## praisonai-js (canonical)

| File | Role |
|------|------|
| `.github/workflows/sync-to-praisonai.yml` | Rsync → `MervinPraison/PraisonAI` `src/praisonai-ts/` |
| `.github/pull_request_template.md` | `Fixes MervinPraison/PraisonAI#N` |
| `.github/ISSUE_TEMPLATE/` | TS bugs here; contact links to PraisonAI for Python |
| `.github/scripts/gate-config.js` | `externalRepos` hub-intake |
| `AGENTS.md` §2.1.1 | Hub intake |
| `README.md` | Reporting issues |

## PraisonAI (hub)

| File | Role |
|------|------|
| `.github/workflows/claude.yml` | Triage + STEP 3-ALT to praisonai-js |
| `.github/scripts/merge-gate.js` | Blocks direct `src/praisonai-ts/` edits |
| `CONTRIBUTING.md` | Hub intake table |
| `src/praisonai-ts/` | Mirror only |

## Commands

```bash
# Secrets (once per new repo)
gh workflow run "Sync Claude Secrets" \
  --repo MervinPraison/PraisonAI \
  -f target_repo=MervinPraison/praisonai-js

# Code sync after merge
gh workflow run "Sync to PraisonAI Monorepo" \
  --repo MervinPraison/praisonai-js \
  -f upstream_issue=1234
```

## Decision tree

```
TS / npm / praisonai-js issue?
  → Fix in THIS repo
  → PR links Fixes MervinPraison/PraisonAI#N
  → After merge: Sync to PraisonAI Monorepo

Python / CLI issue?
  → User should use PraisonAI — do not implement here
```
