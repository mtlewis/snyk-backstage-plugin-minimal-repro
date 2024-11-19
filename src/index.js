const inspect = require('snyk-nodejs-lockfile-parser');

inspect.buildDepTreeFromFiles('./', 'package.json', 'yarn.lock')
  .then((tree) => {
    console.log(JSON.stringify(tree));
  })
  .catch(console.error);
