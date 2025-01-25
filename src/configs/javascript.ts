import eslintJS from "@eslint/js";
import { Linter } from "eslint";
import globals from "globals";

export default function javascript() {

  return [
    {
      name: "j10c/javascript/setup",
      languageOptions: {
        ecmaVersion: 2022,
        globals: {
          ...globals.browser,
          ...globals.es2021,
          ...globals.node,
          document: "readonly",
          navigator: "readonly",
          window: "readonly"
        },
        parserOptions: {
          ecmaFeatures: {
            jsx: true
          },
          ecmaVersion: 2022,
          sourceType: "module"
        },
        sourceType: "module"
      },
      linterOptions: {
        reportUnusedDisableDirectives: true
      }
    },
    {
      name: "j10c/javascript/rules",
      rules: {
        ...eslintJS.configs.recommended.rules,
        "camelcase": "error",
        "no-warning-comments": "warn",
        "no-console": ["warn", { allow: [ "warn", "error" ] }],
        "no-var": "error",
        "prefer-const": "warn"
      }
    }
  ] satisfies Linter.Config[];
}
