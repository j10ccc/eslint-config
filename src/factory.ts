import { Linter } from "eslint";
import typescript from "./configs/typescript";
import javascript from "./configs/javascript";
import stylistic from "./configs/stylistic";

export function j10c() {
  return [
    ...stylistic(),
    ...javascript(),
    ...typescript()
  ] satisfies Linter.Config[];
}