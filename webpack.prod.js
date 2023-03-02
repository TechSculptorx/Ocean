const path = require("path");
const common = require("./webpack.config");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "main.[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {
    minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin()],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      removeAttributeQuotes: true,
      collapseWhitespace: true,
      removeComments: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, // 3 > extract css into files
          "css-loader", // 2 > css into js
        ],
      },
    ],
  },
});
