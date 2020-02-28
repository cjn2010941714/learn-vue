const path = require('path')
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname,'dist'),
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
  }
}