var path = require('path');
const srcRoot = './src';
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
let isDev = process.env.NODE_ENV;
function resolve(dir) {
  return path.join(__dirname, '..', dir)
}
module.exports = {
  entry: {
    main: path.resolve(__dirname, '../src/main.jsx')
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  mode: isDev,
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        })
      },
      {
        test: /\.styl$/,
        use: ExtractTextPlugin.extract({
          use: [{
            loader: "css-loader"
          },{
            loader
              : "stylus-loader"
          }],
          // use style-loader in development
          fallback: "style-loader"
        })
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        use: 'url-loader?limit=8192&name=images/[name].[hash].[ext]',
        include: path.resolve(srcRoot)
      },
      {
        test: /\.(js|jsx)$/,
        use: [{loader:'babel-loader'}] ,
        include: path.resolve(srcRoot)
      },
      {
        test: /.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      '@': resolve('src'),
    },
  },
  plugins: [
    // html 模板插件
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: true,
      chunks: ['main'],
      template: path.resolve( './index.html')
    }),
    // 热加载插件
    new webpack.HotModuleReplacementPlugin(),
    // 抽离css
    new ExtractTextPlugin('static/[name].min.css')
  ],
  devServer: {
    host: '127.0.0.1',
    port: 8080,
    proxy: {
      // 凡是 `/api` 开头的 http 请求，都会被代理到 localhost:3000 上，由 koa 提供 mock 数据。
      // koa 代码在 ./mock 目录中，启动命令为 npm run mock
      '/api': {
        // 下面这个 target 的地址，如果直接写域名(例如 localhost)报错，那么就换成 ip
        target: 'http://127.0.0.1:3000',
        secure: false,
        changeOrigin: true
      }
    },
    inline: true, //实时刷新
    hot: true  // 使用热加载插件 HotModuleReplacementPlugin
  },


};

