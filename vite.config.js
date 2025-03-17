import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import banner from 'vite-plugin-banner'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    banner({
      content: `// ==UserScript==
// @name         カスタマイズ版匿名日記
// @namespace    http://tampermonkey.net/
// @version      {{version}}
// @description  try to take over the world!
// @author       You
// @match        https://anond.hatelabo.jp/customized
// @grant        none
// ==/UserScript==
`.replaceAll('{{version}}', process.env.npm_package_version),
      verify: false
    }),
    vue()
  ],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: '[name].js'
      }
    }
  }
})
