const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;
const path = require("path");

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept",
    },
    port: 3001,
  },
  experiments: {
    // The support for ES6 Moduels is experimental
    // so we need manually enable this feature
    outputModule: true,
  },
  externalsType: "module",
  externals: {
    react: "https://cdn.skypack.dev/react",
    "react-dom": "https://cdn.skypack.dev/react-dom",
  },
  devtool: "eval-source-map",
  output: {
    publicPath: "auto",
    environment: { module: true },
    filename: `app.js`,
    module: true,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /bootstrap\.tsx$/,
        loader: "bundle-loader",
        options: {
          lazy: true,
        },
      },
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react", "@babel/preset-typescript"],
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "legacy",
      filename: "remoteEntry.js",
      exposes: {
        "./Legacy": "./src/pages",
      },
      library: { type: "module" },
      shared: {
        "styled-components": {
          singleton: true,
          eager: true,
        },
        "react-dom": {
          singleton: true,
          eager: true,
        },
        react: {
          singleton: true,
          eager: true,
          requiredVersion: "16.8.0",
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
