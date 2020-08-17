const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const { resolve } = require("./import.resolver.js");

module.exports = merge(common, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: process.env.PUBLIC_PATH || "/",
    filename: "[name].[contenthash].js",
  },
  resolve,
});
