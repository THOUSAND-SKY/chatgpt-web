import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import dsv from '@rollup/plugin-dsv'
import purgecss from '@fullhuman/postcss-purgecss'
import { join } from 'node:path';
import { buildSync } from "esbuild";

const plugins = [svelte(), dsv(), {
      apply: "build",
      enforce: "post",
      transformIndexHtml() {
        buildSync({
          minify: true,
          bundle: true,
          entryPoints: [join(process.cwd(), "src/sw.js")],
          outfile: join(process.cwd(), "dist", "sw.js"),
        });
      },
    }]

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {
  // Only run PurgeCSS in production builds
  if (command === 'build') {
    return {
      plugins,
      css: {
        postcss: {
          plugins: [
            purgecss({
              content: ['./**/*.html', './**/*.svelte'],
              safelist: ['pre', 'code']
            })
          ]
        }
      },
      base: './'
    }
  } else {
    return {
      plugins
    }
  }
})
