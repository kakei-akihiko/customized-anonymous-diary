const path = require('path');
const webpack = require('webpack');

module.exports = {

  mode: 'development',

  entry: './src/app.js',

  output: {
    filename: 'UserScript.js',

    path: path.join(__dirname, 'public')
  },

  plugins: [
    new webpack.BannerPlugin({
      banner: 
`// ==UserScript==
// @name         カスタマイズ版匿名日記
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @require      https://cdn.jsdelivr.net/npm/vue
// @require      https://cdnjs.cloudflare.com/ajax/libs/dayjs/1.8.24/dayjs.min.js
// @match        https://anond.hatelabo.jp/customized
// @grant        none
// ==/UserScript==
`,
      raw: true
    })
  ],
};
