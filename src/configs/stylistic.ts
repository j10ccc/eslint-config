import stylisticEslintPlugin from "@stylistic/eslint-plugin";
import { Linter } from "eslint";

export default function stylistic() {

  return [
    {
      name: "j10c/stylistic/rules",
      plugins: {
        "@stylistic": stylisticEslintPlugin
      },
      rules: {
        "@stylistic/indent": ["error", 2],
        "@stylistic/keyword-spacing": "error",
        "@stylistic/key-spacing": "error",
        "@stylistic/no-trailing-spaces": "error",
        "@stylistic/linebreak-style": ["error", "unix"],
        "@stylistic/quotes": ["error", "double"],
        "@stylistic/function-call-spacing": "error",
        "@stylistic/semi": "error",
        "@stylistic/no-multiple-empty-lines": ["warn", { max: 1 }],
        "@stylistic/object-curly-spacing": ["error", "always"],
        "@stylistic/arrow-spacing": "error",
        "@stylistic/block-spacing": "error",
        "@stylistic/brace-style": "error",
        "@stylistic/comma-dangle": "error",
        "@stylistic/no-multi-spaces": "error",
        "@stylistic/comma-spacing": "error",
        "@stylistic/switch-colon-spacing": "error",
        "@stylistic/type-annotation-spacing": "error",
        "@stylistic/eol-last": ["error", "always"]
      }
    }

  ] satisfies Linter.Config[] ;
}
