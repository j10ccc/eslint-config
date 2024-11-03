import { Linter } from "eslint";
import j10c from "./src";

export default [
  ...await j10c({
    react: true
  }),
  {
    name: "local",
    ignores: [
      "dist/*"
    ]
  }
] satisfies Linter.Config[];
