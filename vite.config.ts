import { resolve } from 'path'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import { defineConfig } from 'vite'
import * as packageJson from './package.json'
import dts from 'vite-plugin-dts'
import tsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig(() => ({
  plugins: [
    vanillaExtractPlugin(),
    tsConfigPaths(),
    dts({ include: ['src/**/*.ts'] })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'Lisa Prntr',
      formats: ['es', 'cjs'],
      fileName: (format) => `lisa-prntr.${format}.js`
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
      output: {
        globals: {
          'typescript': 'ts',
        },
      },
    },
    sourcemap: true
  }
}))
