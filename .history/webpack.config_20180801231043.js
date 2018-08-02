module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'app.bundle.js',
  },
  plugins: [new HtmlWebpackPlugin()],
};
