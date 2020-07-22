const path = require("path");
const TSLintPlugin = require("tslint-webpack-plugin");
const rootAbsolute = path.resolve(__dirname, '');
console.log()
module.exports = {
  entry: {
    app: rootAbsolute + "/src/index.ts",

    "drag.test": rootAbsolute + "/src/drag/drag.test.ts"
  },
  output: {
    filename: "[name].js",
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
