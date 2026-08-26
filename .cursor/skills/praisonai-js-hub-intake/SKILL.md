---
name: praisonai-ts-monorepo
description: >-
  TypeScript SDK routing in the PraisonAI monorepo: issues and fixes in
  src/praisonai-ts/ on MervinPraison/PraisonAI. Use when routing npm/TS issues,
  praisonai-ts paths, javascript label, or praisonai-js mirror repo questions.
---

# TypeScript SDK — monorepo canonical

**Canonical path:** `MervinPraison/PraisonAI` → `src/praisonai-ts/`

**This repo (`praisonai-js`):** npm mirror checkout — not the hub fix target for PraisonAI issues.

## Rules

1. TS hub fixes → `src/praisonai-ts/` in the monorepo
2. Tests: `cd src/praisonai-ts && npm test`
3. Merge gate / Claude on PraisonAI do **not** route TS to praisonai-js

See monorepo skill: `.cursor/skills/praisonai-js-hub-intake/SKILL.md` on PraisonAI.
