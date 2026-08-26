---
name: praisonai-js-hub-intake
description: >-
  Explains Option B hub intake for PraisonAI TypeScript/JavaScript (npm praisonai):
  accept TS issues on MervinPraison/PraisonAI, implement fixes in MervinPraison/praisonai-js,
  sync to src/praisonai-ts/. Use when routing issues, implementing TS fixes, sync workflows,
  merge-gate TS paths, or when the user mentions praisonai-js, praisonai-ts, npm SDK, or TS hub intake.
---

# praisonai-js hub intake (Option B)

## Model in one sentence

**Users file TypeScript issues on [PraisonAI](https://github.com/MervinPraison/PraisonAI); fixes land in [praisonai-js](https://github.com/MervinPraison/praisonai-js) (this repo); `src/praisonai-ts/` in the monorepo is a sync mirror only.**

Do **not** ask users to re-file on praisonai-js unless they opened a duplicate on the wrong repo.

## This repo's role

| You are here | Canonical TypeScript SDK — all TS implementation happens in `src/`, `tests/` |
| Hub issues | Often filed on PraisonAI; your PR should link back: `Fixes MervinPraison/PraisonAI#N` |
| After merge | Run **Sync to PraisonAI Monorepo** (Actions) to update the monorepo mirror |

## Routing table

| Topic | Report | Fix repo |
|-------|--------|----------|
| TypeScript / npm `praisonai` | PraisonAI or here | **this repo** |
| Python SDK / CLI | [PraisonAI](https://github.com/MervinPraison/PraisonAI/issues) | not here |
| Cross-language parity | PraisonAI | often Python + this repo |
| Agent-callable tools | PraisonAI | PraisonAI-Tools |

## End-to-end flow

```
Issue on PraisonAI
  → Claude STEP 3-ALT clones this repo
  → PR here: Fixes MervinPraison/PraisonAI#N
  → merge (CI + claude-merge-gate on praisonai-js)
  → Sync to PraisonAI Monorepo workflow
  → sync PR on PraisonAI updates src/praisonai-ts/
```

## Agent rules

1. Implement TS changes **only in this repo** — never in monorepo `src/praisonai-ts/`.
2. PR template: include upstream issue link when applicable.
3. Tests: `npm install && npm run build && npm test`.
4. Reject Python SDK or tools work — route per `gate-config.js` scope strings.

## Sync to monorepo

```bash
gh workflow run "Sync to PraisonAI Monorepo" \
  --repo MervinPraison/praisonai-js \
  -f upstream_issue=<praisonai_issue_number>
```

## Key files (this repo)

| File | Role |
|------|------|
| `.github/workflows/sync-to-praisonai.yml` | Mirror sync → `src/praisonai-ts/` |
| `.github/pull_request_template.md` | Upstream issue + sync checklist |
| `.github/scripts/gate-config.js` | Merge gate / Claude scope |
| `AGENTS.md` §2.1.1 | Hub intake detail |

## Monorepo counterpart

Full cross-repo reference: [PraisonAI `.cursor/skills/praisonai-js-hub-intake/reference.md`](https://github.com/MervinPraison/PraisonAI/blob/main/.cursor/skills/praisonai-js-hub-intake/reference.md) or [reference.md](reference.md) in this skill folder.
