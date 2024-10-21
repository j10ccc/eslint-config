import { Linter } from "eslint";
import j10c from "./src";

export default [
  ...j10c(),
  {
    name: "local",
    ignores: [
      "dist/*"
    ]
  }
] satisfies Linter.Config[];
