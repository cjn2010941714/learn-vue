const uglifyJsPlugin = require('uglifyjs-webpack-plugin')
const webpackMerge = require('webpack-merge');
const baseConfig = require('./base.config');
module.exports = webpackMerge(baseConfig,{
  plugins: [
    // 压缩js打包文件
    new uglifyJsPlugin()
  ]
});