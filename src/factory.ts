import { Linter } from "eslint";
import typescript from "./configs/typescript";
import javascript from "./configs/javascript";
import jsx from "./configs/jsx";
import stylistic from "./configs/stylistic";
import react from "./configs/react";
import astro from "./configs/astro";
import { isPackageExists } from "local-pkg";

type Switcher = {
  astro?: boolean;
  react?: boolean;
  javascript?: boolean;
  jsx?: boolean;
  stylistic?: boolean;
  typescript?: boolean;
};

export function j10c(options?: Switcher) {
  const {
    react: enableReact = isPackageExists("react"),
    astro: enableAstro = isPackageExists("astro"),
    javascript: enableJS = true,
    jsx: enableJSX = true,
    stylistic: enableStylistic = true,
    typescript: enableTS = true
  } = options ?? {};
  const configs: Linter.Config[][] = [];

  if (enableReact) configs.push(react());
  if (enableAstro) configs.push(astro());
  if (enableJS) configs.push(javascript());
  if (enableJSX) configs.push(jsx());
  if (enableStylistic) configs.push(stylistic());
  if (enableTS) configs.push(typescript());

  return configs.flat(1) satisfies Linter.Config[];
}