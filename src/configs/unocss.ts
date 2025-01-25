import { Linter } from "eslint";

import { ensurePackages, interopDefault } from "../utils";

export async function unocss() {
  await ensurePackages([
    "@unocss/eslint-plugin"
  ]);

  const [
    UnoCSSPlugin
  ] = await Promise.all([
    interopDefault(import("@unocss/eslint-plugin"))
  ]);

  return [
    {
      name: "j10c/unocss/setup",
      plugins: {
        unocss: UnoCSSPlugin as any
      },
      rules: {
        "unocss/order": "warn",
        "unocss/order-attributify": "warn",
        "unocss/blocklist": "error"
      }
    }
  ] satisfies Linter.Config[];
}
