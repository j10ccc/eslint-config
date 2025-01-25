import { Linter } from "eslint";
import simpleImportSortPlugin from "eslint-plugin-simple-import-sort";

export default function imports() {

  return [
    {
      name: "j10c/imports/rules",
      plugins: {
        "simple-import-sort": simpleImportSortPlugin
      },
      rules: {
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error"
      }
    }
  ] satisfies Linter.Config[];
}
