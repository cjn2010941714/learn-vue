const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const uglifyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname,'../dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // css-loader只负责加载
        // style-loader负责将样式添加到dom
        // 使用多个loader 从右向左读
        use: ['style-loader','css-loader']
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ]
  },
  resolve: {
    // alias 取别名
    extensions: ['.js','.css','.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    // BannerPlugin 添加版权信息
    new webpack.BannerPlugin("版权所有者AAA"),
    // 打包html的plugin
    new htmlWebpackPlugin({
      template: 'index.html'
    }),
    // 压缩js打包文件
   // new uglifyJsPlugin()
  ]
}