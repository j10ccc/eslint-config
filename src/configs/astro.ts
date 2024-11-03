import tsParser from "@typescript-eslint/parser";
import { Linter } from "eslint";
import { ensurePackages, interopDefault } from "../utils";

export default async function astro() {
  await ensurePackages([
    "eslint-plugin-astro",
    "astro-eslint-parser"
  ]);

  const [astroPlugin, astroParser] = await Promise.all([
    interopDefault(import("eslint-plugin-astro")),
    interopDefault(import("astro-eslint-parser"))
  ]);

  const files = ["**/*.astro"];
  const recommendedRules = astroPlugin.configs.recommended
    .find(_ => _.name === "astro/recommended")?.rules || {};

  return [
    {
      name: "j10c/astro/setup",
      plugins: {
        astro: astroPlugin
      }
    },
    {
      name: "j10c/astro/parser",
      files,
      languageOptions: {
        globals: astroPlugin.environments.astro.globals,
        parser: astroParser,
        parserOptions: {
          extraFileExtension: [".astro"],
          parser: tsParser
        },
        sourceType: "module"
      },
      processor: "astro/client-side-ts"
    },
    {
      name: "j10c/astro/rules",
      files,
      rules: {
        ...recommendedRules
      }
    }
  ] satisfies Linter.Config[];
}
