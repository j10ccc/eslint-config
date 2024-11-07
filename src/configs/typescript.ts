import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import { Linter } from "eslint";

export default function typescript() {

  return [
    {
      name: "j10c/typescript/setup",
      plugins: {
        "@typescript-eslint": tsPlugin as any
      }
    },
    {
      name: "j10c/typescript/parser",
      files: ["**/*.?([cm])ts"],
      languageOptions: {
        parser: tsParser,
        parserOptions: {
          ecmaVersion: 2022,
          sourceType: "module",
          projectService: {
            allowDefaultProject: ["./*.js"],
            defaultProject: "./tsconfig.json"
          },
          tsconfigRootDir: process.cwd()
        }
      }
    },
    {
      name: "j10c/typescript/rules",
      rules: {
        ...tsPlugin.configs["eslint-recommended"].overrides![0].rules!,
        ...tsPlugin.configs.strict.rules,
        "@typescript-eslint/ban-ts-comment": ["error", { "ts-expect-error": "allow-with-description" }],
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-non-null-assertion": "off"
      }
    }
  ] satisfies Linter.Config[];
}
