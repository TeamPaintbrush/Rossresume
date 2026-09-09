/**
 * workflowController — expose the cross-project workflow snapshot
 * (memory / open tasks / unreleased changelog) read from every project in
 * Jobs/_workflow-sources.json. Feeds the /jobs dashboard's Workflow panel.
 */

const W = require('../../../scripts/lib/workflow');

exports.get = (req, res) => {
  const sources = W.collect();
  res.json({
    configPath: W.CONFIG_PATH,
    generatedAt: new Date().toISOString(),
    sources,
  });
};
