# @axhxrx/nx-deno
A plugin for working with Deno in an Nx monorepo. This is a [fork](https://github.com/axhxrx/axhxrx-nx-deno) of the final version of the original [@nrwl nx-labs](https://github.com/nrwl/nx-labs) `@nx/deno` plugin, at the time it was discontinued.

## [1.0.2]( https://github.com/axhxrx/axhxrx-nx-deno/compare/v0.0.2...v1.0.2)  
- fix the version mismatch on NPM vs GitHub

## 1.0.1
- Fork the discontinued @nx/deno, and fix bug where "--watch" always caused "test" to fail

The impetus for this project was that when the [nx-labs](https://github.com/nrwl/nx-labs) project discontinued the `@nx/deno` plugin, it had a bug that prevented `--watch` from working when using the `"test"` executor. I think the only significant difference from the old [nx-labs](https://github.com/nrwl/nx-labs) version should be the fix for that.

(Automatic generation of release notes didn't work, so these are manual.)

Commits:
- chore(@axhxrx/nx-deno): install np, at least for now, to use for release  2c3e6b3
- chore(@axhxrx/nx-deno): change package name to @axhxrx/nx-deno  71b8c06
- chore(@axhxrx/nx-deno): Delete more unneeded stuff  f614a37
- fix(@axhxrx/nx-deno): Fix bug where "--watch" always caused "test" to fail  e788f99
- chore: Rename @nx/deno to @axhxrx/nx-deno  41bf661
- chore: Round 1 of removing all the stuff we don't care about — which is everything that isn't Deno-related  46d2683
- chore(@axhxrx/deno): Fork the final version of @nx/deno  5f2db13
- chore(misc): add deprecate notice to @nx/deno, @nx/netlify, @nx/aws-lambda (#366)  7957b10

