# `@j10c/eslint-config`

[![NPM Version](https://img.shields.io/npm/v/%40j10c%2Feslint-config?style=social)](https://www.npmjs.com/package/@j10c/eslint-config)

- Double quotes, with semi
- No trailing space
- Auto fix for formatting (aimed to be used standalone without Prettier)
- Reasonable defaults, best practices, only one-line of config

## Installation

```sh
$ pnpm i -D @j10c/eslint-config
```

## Usage

Create an `eslint.config.mjs` file(using flat config):

```js
import j10c from "@j10c/eslint-config";

export default j10c();
```

Or use with custom config


```js
export default [
  ...j10c(),
  {
    // Your custom config
  }
]
```
