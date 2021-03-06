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
  new MiniCssExtractPlugin({
    filename: 'style.css',
    chunkFilename: 'app.scss',
  }),
  ],
  module: {
    rules: [
    //   {
    //     test: /\.css$/,
    //     use: ['style-loader', 'css-loader'],
    //   },
      {
        test: /\.scss$/,
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader', 'sass-loader'],
      },
    ],
  },
};
