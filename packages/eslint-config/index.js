const { isPackageExists } = require("local-pkg");

const isReactUsed = isPackageExists("react");

module.exports = {
  extends: [
    isReactUsed && "@j10c/eslint-config-react",
  ].filter(Boolean)
};