import reactPlugin from "@eslint-react/eslint-plugin";
// @ts-expect-error Missing type declare
import reactHooksPlugin from "eslint-plugin-react-hooks";
// @ts-expect-error Missing type declare
import reactRefreshPlugin from "eslint-plugin-react-refresh";
import { Linter } from "eslint";
import jsx from "./jsx";

export default function react() {
  const files = ["**/*.?([cm])js?(x)", "**/*.?([cm])ts?(x)"];
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
