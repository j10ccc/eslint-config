const { isPackageExists } = require("local-pkg");

const isReactUsed = isPackageExists("react");
const isAstroUsed = isPackageExists("astro");

module.exports = {
  extends: [
    isReactUsed && "@j10c/eslint-config-react",
    isAstroUsed && "@j10c/eslint-config-astro",
  ].filter(Boolean)
};