const path = require('path');
const webpack = require('webpack');
const { VueLoaderPlugin } = require("vue-loader")
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {

  mode: 'production',

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
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: 'all',
            beautify: false,
            max_line_len: 120, // 1行の最大長を120文字に設定
          },
        },
      })
    ]
  }
};
