# @svel/cli-plugin-unit-mocha

> unit-mocha plugin for vue-cli

## Injected Commands

- **`svelte-cli-service test:unit`**

  Run unit tests with [mocha-webpack](https://github.com/zinserjan/mocha-webpack) + [chai](http://chaijs.com/).

  **Note the tests are run inside Node.js with browser environment simulated with JSDOM.**

  ```
  Usage: svelte-cli-service test:unit [options] [...files]

  Options:

    --watch, -w   run in watch mode
    --grep, -g    only run tests matching <pattern>
    --slow, -s    "slow" test threshold in milliseconds
    --timeout, -t timeout threshold in milliseconds
    --bail, -b    bail after first test failure
    --require, -r require the given module before running tests
    --include     include the given module into test bundle
    --inspect-brk Enable inspector to debug the tests
  ```

  Default files matches are: any files in `tests/unit` that end in `.spec.(ts|js)`.

  All [mocha-webpack command line options](http://zinserjan.github.io/mocha-webpack/docs/installation/cli-usage.html) are also supported.

## Installing in an Already Created Project

``` sh
vue add @svel/unit-mocha
```