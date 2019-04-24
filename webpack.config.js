
var path=require('path');
var HtmlWebpackPlugin=require('html-webpack-plugin');

module.exports = {
  entry: './app/index.js',
  module: {
    rules: [
      { test: /\.js$/, use: "babel-loader" },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath:'/'
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    })
  ],
  mode: process.env.NODE_ENV=== 'production'?'production':'development',
}

