module.exports = {
  extends: [
    "plugin:import/recommended",
    "plugin:import/typescript",
  ],
  rules: {
    "indent": ["error", 2],
    "no-trailing-spaces": "error",
    "quotes": ["error", "double"],
    "semi": [2, "always"],
    "no-multiple-empty-lines": ["warn", { "max": 1, "maxEOF": 0 }],
    "sort-imports": [
      "error",
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
        allowSeparatedGroups: true,
      }
    ],
    "import/no-unresolved": "error",
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          ["sibling", "parent"],
          "index",
          "unknown",
        ],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    "linebreak-style": ["error", "unix"]
  }
};