module.exports = {
  rules: {
    "indent": ["error", 2],
    "no-trailing-spaces": "error",
    "quotes": ["error", "double"],
    "semi": [2, "always"],
    "no-multiple-empty-lines": ["warn", { "max": 1, "maxEOF": 0 }],
    "sort-imports": ["error", {
      "memberSyntaxSortOrder": ["multiple", "single", "all", "none"]
    }],
    "linebreak-style": ["error", "unix"]
  }
};