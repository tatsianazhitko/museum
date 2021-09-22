const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    assetModuleFilename: 'assets/[name][ext]'
  },
  module: {
      rules: [
        {
          test: /\.(?:ico|gif|png|jpg|jpeg|svg|mp4)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
          test: /\.s[ac]ss$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        }
      ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new HtmlWebpackPlugin({
      filename: 'tours/tour1.html',
      template: './src/tours/tour1.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'tours/tour2.html',
      template: './src/tours/tour2.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'tours/tour3.html',
      template: './src/tours/tour3.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'tours/tour4.html',
      template: './src/tours/tour4.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'tours/tour5.html',
      template: './src/tours/tour5.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'tours/tour6.html',
      template: './src/tours/tour6.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'tours/tour7.html',
      template: './src/tours/tour7.html'
    }),
    new MiniCssExtractPlugin({ filename: 'styles.css' }),
  ],
};
