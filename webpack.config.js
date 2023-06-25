const path = require('path');
const webpack = require('webpack');
const { VueLoaderPlugin } = require("vue-loader")

module.exports = {

  mode: 'development',

  entry: './src/app.js',

  output: {
    filename: 'UserScript.js',

    path: path.join(__dirname, 'public')
  },

  module: {
    rules: [
      {
        test: /\.css$/, // .css
        use: ["vue-style-loader", "css-loader"]
      },
      {
          test:/\.vue$/, // .vue
          loader: "vue-loader"
      }
    ]
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
// @match        https://anond.hatelabo.jp/customized
// @grant        none
// ==/UserScript==
`,
      raw: true
    }),
    new VueLoaderPlugin()
  ],
};
