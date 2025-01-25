import { Linter } from "eslint";

import { ensurePackages, interopDefault } from "../utils";
import jsx from "./jsx";

export default async function react() {
  const files = ["**/*.?([cm])js?(x)", "**/*.?([cm])ts?(x)"];

  await ensurePackages([
    "@eslint-react/eslint-plugin",
    "eslint-plugin-react-hooks",
    "eslint-plugin-react-refresh"
  ]);

  const [
    reactPlugin,
    reactHooksPlugin,
    reactRefreshPlugin
  ] = await Promise.all([
    interopDefault(import("@eslint-react/eslint-plugin")),
    // @ts-expect-error Missing type declare
    interopDefault(import("eslint-plugin-react-hooks")),
    interopDefault(import("eslint-plugin-react-refresh"))
  ]);

  const plugins = reactPlugin.configs.recommended.plugins;

  return [
    {
      name: "j10c/react/setup",
      plugins: {
        "@eslint-react": plugins["@eslint-react"],
        "@eslint-react/debug": plugins["@eslint-react/debug"],
        "@eslint-react/dom": plugins["@eslint-react/dom"],
        "@eslint-react/hooks-extra": plugins["@eslint-react/hooks-extra"],
        "@eslint-react/naming-convention": plugins["@eslint-react/naming-convention"],
        "@eslint-react/web-api": plugins["@eslint-react/web-api"],
        "react-hooks": reactHooksPlugin,
        "react-refresh": reactRefreshPlugin
      }
    } as any,
    {
      name: "j10c/react/rules",
      files,
      rules: {
        ...reactPlugin.configs.recommended.rules,
        ...reactHooksPlugin.configs.recommended.rules,
        "react-refresh/only-export-components": "warn"
      }
    },
    ...jsx()
  ] satisfies Linter.Config[];
}
