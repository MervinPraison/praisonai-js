/**
 * Per-repo gate configuration — customisable after install.
 * @see github-automation-template README
 */

module.exports = {
  repoFullName: 'MervinPraison/praisonai-js',
  gitUser: 'MervinPraison',
  gitEmail: '454862+MervinPraison@users.noreply.github.com',
  triggerLogins: ['MervinPraison', 'github-actions[bot]'],
  allowedTriageBots: ['praisonai-triage-agent[bot]'],
  productPathPrefixes: ['src/', 'tests/'],
  sensitivePathPatterns: [
    /^\.github\/workflows\//,
    /^package\.json$/,
    /^package-lock\.json$/,
    /^pnpm-lock\.yaml$/,
    /\.env(\.|$)/,
    /credentials\.json$/i,
  ],
  requiredCheckPatterns: [/^ci$/i, /test/i, /lint/i, /build/i],
  optionalCancelledChecks: ['detect-and-trigger'],
  optionalCancelledWhenCoreGreen: [],
  ciWorkflowFile: 'ci.yml',
  ciWorkflowName: 'CI',
  claudeWorkflowName: 'Claude Assistant',
  mergeGateWorkflowRuns: ['Claude Assistant', 'CI'],
  ciFailureWorkflowRuns: ['CI'],
  testCommand: "npm test",
  docsUrl: 'https://docs.praison.ai',
  architectureDoc: 'AGENTS.md',
  pypiPackageName: 'praisonai',
  packagePaths: ['src/', 'tests/'],
  finalClaudeScope:
    'SCOPE: Focus ONLY on the PraisonAI TypeScript SDK (praisonai-js, npm package praisonai). '
    + 'Do NOT modify Python SDK paths or unrelated repos. Read ALL comments from CodeRabbit, Greptile, and Qodo before responding.',
  finalClaudeProductValue:
    '4. Product value: review in depth whether the change genuinely adds value — never add features for the sake of adding them. '
    + 'It must strengthen the SDK (simpler, more user-friendly, robust). If it does not clearly add value, request changes or recommend rejecting/closing rather than merging scope creep.\n'
    + '5. Do not bloat core classes with additional params — only if absolutely required.\n'
    + '6. Repo routing: Python SDK → praisonaiagents repo; agent-callable tools → PraisonAI-Tools — request changes if wrongly added here.',
  mergeGateProductValue:
    'Confirm product value gate: change strengthens the product (no scope creep). BLOCK changes that duplicate existing capabilities or add knobs with no live consumer.',
  mergeGateLayering:
    'Layering routing: BLOCK if Python SDK logic was added here instead of praisonaiagents, or if tools belong in PraisonAI-Tools.',
  agentPyChecks: false,
  reviewBotLogins: [
    'coderabbitai[bot]',
    'qodo-code-review[bot]',
    'greptile-apps[bot]',
  ],
  externalRepos: [],
};
