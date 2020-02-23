const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 创建插件实例
const htmlPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname,'./src/index.html'), //源文件
  filename: 'index.html' //生成到内存中的首页名称
})

// 向外暴露打包配置对象
// webpack基于node构建，支持所有node语法
module.exports={
  mode:'development',
  // mode: 'production'
  plugins:[
    htmlPlugin
  ]
}
