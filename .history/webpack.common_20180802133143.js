const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');


module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js',
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src'),
    },
    extensions: ['.js', '.scss'],
  },
  plugins: [
    new HtmlWebpackPlugin({
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
    new CleanWebpackPlugin(['dist']),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              minimize: true,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'css-hot-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              minimize: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                require('autoprefixer')(),
              ],
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        options: {
          cacheDirectory: true,
          presets: [['env', { modules: false }], 'stage-0', 'react'],
          plugins: ['transform-runtime', 'syntax-dynamic-import', 'transform-decorators-legacy'],
        },
      },
    ],
  },
};
