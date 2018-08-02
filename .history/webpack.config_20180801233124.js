const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js',
  },
  plugins: [new HtmlWebpackPlugin({
    template: './index.tmpl.html',
    filename: 'index.html',
    minify: {
      collapseWhitespace: false, // 生成html文件内容是否去掉空格
    },
    hash: true,
  }),
  new MiniCssExtractPlugin({//实例MiniCssExtractPlugin
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    filename: "style.css",
    chunkFilename: "app.scss"
  })

作者：BULL_DEBUG
链接：https://www.jianshu.com/p/1576995d46ce
來源：简书
简书著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。
],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};
