const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 创建插件实例
const htmlPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, './src/index.html'), //源文件
  filename: 'index.html' //生成到内存中的首页名称
})

// 向外暴露打包配置对象
// webpack基于node构建，支持所有node语法
// webpack默认只打包.js，需要配置第三方loader
module.exports = {
  mode: 'development',
  // mode: 'production'
  plugins: [
    htmlPlugin
  ],
  // 所有第三方模块
  module: {
    rules: [{
      test: /\.js|jsx$/,
      use: 'babel-loader',
      exclude: /node_modules/
    }]
  }
}