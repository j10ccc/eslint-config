import { Linter } from "eslint";
import { isPackageExists } from "local-pkg";

import astro from "./configs/astro";
import imports from "./configs/imports";
import javascript from "./configs/javascript";
import jsx from "./configs/jsx";
import react from "./configs/react";
import stylistic from "./configs/stylistic";
import typescript from "./configs/typescript";
import { unocss } from "./configs/unocss";

type Switcher = {
  astro?: boolean;
  react?: boolean;
  jsx?: boolean;
  stylistic?: boolean;
  typescript?: boolean;
  unocss?: boolean;
};

export async function j10c(options?: Switcher) {
  const {
    react: enableReact = isPackageExists("react"),
    astro: enableAstro = isPackageExists("astro"),
    unocss: enableUnocss = isPackageExists("unocss"),
    jsx: enableJSX = true,
    stylistic: enableStylistic = true,
    typescript: enableTS = true
  } = options ?? {};
  const configs: Linter.Config[][] = [];

  configs.push(javascript());
  configs.push(imports());

  if (enableReact) configs.push(await react());
  if (enableAstro) configs.push(await astro());
  if (enableUnocss) configs.push(await unocss());
  if (enableJSX) configs.push(jsx());
  if (enableStylistic) configs.push(stylistic());
  if (enableTS) configs.push(typescript());

  return configs.flat(1) satisfies Linter.Config[];
}
