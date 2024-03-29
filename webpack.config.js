const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV == 'production' ? 'production' : 'development',

  output: {
    path: path.resolve(__dirname, 'public'),
    assetModuleFilename: "images/[hash][ext][query]"
  },
  module: {
    rules: [
      {
        test: /\.s?css$/i,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
        },
      },
    ]
  },
  plugins: [new CleanWebpackPlugin() ,new MiniCssExtractPlugin(), new HtmlWebpackPlugin({
    template: './src/index.html',
  })],
  devtool: "source-map",
  devServer: {
    static: 'public',
    hot: true,
    watchFiles: ["src/*.html"],
  }
}