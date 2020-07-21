const path = require("path");
const TSLintPlugin = require("tslint-webpack-plugin");
const rootAbsolute = path.resolve(__dirname, '');
console.log()
module.exports = {
  entry: rootAbsolute + "/src/index.ts",
  output: {
    filename: "app.js",
    path: rootAbsolute + "/dist",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new TSLintPlugin({
      files: ["./src/**/*.ts"],
    }),
  ],
};
