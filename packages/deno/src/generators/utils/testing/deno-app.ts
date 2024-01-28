import { addProjectConfiguration, joinPathFragments, Tree } from '@nx/devkit';
import type { DenoAppNormalizedSchema } from '../../application/schema';

export function createDenoAppForTesting(
  tree: Tree,
  opts: DenoAppNormalizedSchema
) {
  addProjectConfiguration(tree, opts.name, {
    name: opts.name,
    root: opts.projectRoot,
    targets: {
      build: {
        executor: '@axhxrx/nx-deno:emit',
        options: {
          main: joinPathFragments(opts.projectRoot, 'src/main.ts'),
          outputFile: joinPathFragments(
            'dist',
            opts.rootProject ? opts.name : opts.projectRoot,
            'main.js'
          ),
          denoConfig: joinPathFragments(opts.projectRoot, 'deno.json'),
        },
      },
      serve: {
        executor: '@axhxrx/nx-deno:run',
        options: {
          buildTarget: `${opts.projectName}:build`,
        },
      },
      test: {
        executor: '@axhxrx/nx-deno:test',
        options: {
          coverageDirectory: joinPathFragments('coverage', opts.projectRoot),
          denoConfig: joinPathFragments(opts.projectRoot, 'deno.json'),
        },
      },
      lint: {
        executor: '@axhxrx/nx-deno:lint',
        options: {
          denoConfig: joinPathFragments(opts.projectRoot, 'deno.json'),
        },
      },
    },
  });
}
