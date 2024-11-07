import { Linter } from "eslint";
import typescript from "./configs/typescript";
import javascript from "./configs/javascript";
import jsx from "./configs/jsx";
import stylistic from "./configs/stylistic";
import react from "./configs/react";
import astro from "./configs/astro";
import { isPackageExists } from "local-pkg";
import { unocss } from "./configs/unocss";

type Switcher = {
  astro?: boolean;
  react?: boolean;
  javascript?: boolean;
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
    javascript: enableJS = true,
    jsx: enableJSX = true,
    stylistic: enableStylistic = true,
    typescript: enableTS = true
  } = options ?? {};
  const configs: Linter.Config[][] = [];

  if (enableReact) configs.push(await react());
  if (enableAstro) configs.push(await astro());
  if (enableUnocss) configs.push(await unocss());
  if (enableJS) configs.push(javascript());
  if (enableJSX) configs.push(jsx());
  if (enableStylistic) configs.push(stylistic());
  if (enableTS) configs.push(typescript());

  return configs.flat(1) satisfies Linter.Config[];
}
