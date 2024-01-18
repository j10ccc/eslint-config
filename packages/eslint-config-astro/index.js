const { isPackageExists } = require("local-pkg");

const isTsUsed = isPackageExists("typescript");

module.exports = {
  extends: [
    isTsUsed ? "@j10c/eslint-config-ts" : "@j10c/eslint-config-basic",
    "plugin:astro/recommended"
  ],
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: isTsUsed ? {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      } : {}
    }
  ],
};
