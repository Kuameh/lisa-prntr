import { resolve } from 'path'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import { defineConfig } from 'vite'

import * as packageJson from './package.json'

export default defineConfig(() => ({
  plugins: [
    vanillaExtractPlugin(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.js'),
      name: 'Lisa Prntr',
      formats: ['es', 'cjs'],
      fileName: (format) => `lisa-prntr.${format}.js`
    },
    // rollupOptions: {
    //   external: [...Object.keys(packageJson.peerDependencies)],
    //   output: {
    //     globals: {
      
    //     },
    //   },
    // }
  }
}))
