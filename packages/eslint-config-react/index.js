const { isPackageExists } = require("local-pkg");

const isTsUsed = isPackageExists("typescript");

module.exports = {
  extends: [
    isTsUsed ? "@j10c/eslint-config-ts" : "@j10c/eslint-config-basic",
    "plugin:react-hooks/recommended",
  ]
};