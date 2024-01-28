# @axhxrx/nx-deno

A plugin for working with Deno in an Nx monorepo. This is a [fork](https://github.com/axhxrx/axhxrx-nx-deno) of the final version of the original [@nrwl nx-labs](https://github.com/nrwl/nx-labs) `@nx/deno` plugin, at the time it was [discontinued](https://github.com/nrwl/nx-labs/commit/0c0a99bec1eb5a83c64bffffd3ae19560cb6ad36).

## How to hack on this and release it
The first attmpts to automate the NPM package release went sideways, with the git version not matching the NPM version, so here are the steps:

1. Create a branch and PR to fix something or whatever, to warrant a new release, and make sure `nx e2e deno-e2e` succeeds.

2. Merge PR to `axhxrx-nx-deno` branch (not `main`).

3. Tag that commit like `v1.0.3`

4. Make a GitHub release with release notes.

5. When all that is done, `nx build deno && nx e2e deno-e2e`

6. If all goes well, rejoice! Then publish manually like `cd dist/packages/deno && npm publish`

(NOTE: Obviously, that whole mess should be automated. But Nx itself doesn't work great for that kind of thing, because of closed-but-not-yet-fixed issues [Allow interactive commands through @nrwl/workspace:run-commands #8269](https://github.com/nrwl/nx/issues/8269). But apparently [feat(core): forward stdin to commands started via rust #21195](https://github.com/nrwl/nx/pull/21195) will also fix #8629 when it lands, and that will be soon, so... waiting for that.)

-----

The README from the [original Nx project](https://github.com/nrwl/nx-labs) follows:


# @nx/deno

> ⚠️ The Deno plugin is deprecated and will no longer receive updates. We are committed to providing high-quality tooling to community, and we no longer have the capacity to keep this plugin updated.

[Deno](https://deno.com/runtime) is a JavaScript runtime that provides great tooling and hassle-free deployment.

The following guides show you how to create a new Deno project and deploy to either [Deno Deploy](https://deno.com/deploy) or [Netlify](https://www.netlify.com/).

- Deno Deploy: https://nx.dev/recipes/deployment/deno-deploy
- Netlify: https://nx.dev/recipes/deployment/deno-netlify

## Setup

Create a new Nx workspace if you don't already have one.

```shell
npx create-nx-workspace@latest deno-demo --preset=@nx/deno:preset
```

Now, you can go into the `deno-demo` folder and start development.

```shell
cd deno-demo
deno task start
```

You can also run lint, test, and build scripts for the project.

```shell
deno task lint
deno task test
deno task build
```

**Note:** Change `deno-demo` to any project name you want.

## Existing workspaces

You can add Deno to any existing Nx workspace.

First, install the plugin:

```bash
npm install -DE @nx/deno@latest
```

## Create a new Deno App

You can create additional Deno apps

```shell
npx nx g @nx/deno:app
```

You can run `npx nx serve <your-Deno-app-name>` and see the sample web server on htts://localhost:8000
You can also run test, lint, and build as tasks for `<your-Deno-app-name>`

```shell
npx nx serve <your-Deno-app-name>
npx nx test <your-Deno-app-name>
npx nx lint <your-Deno-app-name>
npx nx build <your-Deno-app-name>
```

Building/Bundling is an optional step in Deno so you don't have to build when using @nx/deno, but it can be useful to bundle the code into a single file for easier portability if you so need it.

## Create a new Deno Library

```shell
npx nx g @nx/deno:lib
```

Deno libraies only come with lint/test targets to run.

```shell
npx nx test <your-Deno-library-name>
npx nx lint <your-Deno-library-name>
```

You can easily consume these libraries with their import aliases that are listed in the `import_map.json` in the root of the workspace.

## Customizing

The executors have a `denoConfig` option that allows you to pass in a deno config. This defaults to the generated `deno.json` in the project root of each generated deno project.
Within this file you can control various aspects of Deno, such as lint and test settings.
[Read more about the `deno.json` config file](https://deno.land/manual/getting_started/configuration_file)

By default this config uses the `import_map.json` in the root of the workspace.
This file contains the import alias to your other local Deno projects that you can use across other projects.
