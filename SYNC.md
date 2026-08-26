# Sync direction

**Canonical:** `MervinPraison/PraisonAI` → `src/praisonai-ts/`

**Mirror:** `MervinPraison/praisonai-js` (npm repo)

After merging TypeScript changes in the monorepo, run on **PraisonAI**:

```bash
gh workflow run "Sync to praisonai-js" --repo MervinPraison/PraisonAI
```

Sync is **monorepo → praisonai-js** only. The old praisonai-js → monorepo workflow was removed (wrong direction).
