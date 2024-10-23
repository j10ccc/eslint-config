import { Linter } from "eslint";
import tsParser from "@typescript-eslint/parser";

export default function jsx() {
  const files = ["**/*.?([cm])jsx", "**/*.?([cm])tsx"];

  return [
    {
      name: "j10c/jsx/setup",
      files,
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            jsx: true
          }
        }
      }
    },
    {
      name: "j10c/jsx/parser",
      files,
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
    }
  ] satisfies Linter.Config[];
}
