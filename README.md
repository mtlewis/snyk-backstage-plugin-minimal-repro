# snyk-nodejs-lockfile-parser parsing issue minimal repro

This repository demonstrates an issue with parsing yarn lockfiles when using
custom plugins that transform version ranges. The repository includes:

* A vendored installation of yarn 4.5.1
* The [Backstage yarn plugin](https://backstage.io/docs/next/getting-started/keeping-backstage-updated#managing-package-versions-with-the-backstage-yarn-plugin)
* A dependency on an arbitrary `@backstage` package, using the `backstage:^`
  version range, support for which is provided by the above plugin.
  * Note that this version range is converted to `backstage:1.32.5` in
    yarn.lock.

To reproduce the issue:

1. Clone the repo
2. `yarn install`
3. `yarn repro` (note that this command simply runs `src/index.js` with node)
4. Note the OutOfSync error.

Note: If you wish to confirm the minified code in this repo is free of malware, you
can recreate the contents of `.yarn` from scratch by removing the .yarn
directory and running the following commands:

1. `yarn set version stable` to vendor the latest stable release of yarn
2. `yarn plugin import https://versions.backstage.io/v1/tags/main/yarn-plugin`
   to install the latest stable version of the official Backstage yarn plugin.
