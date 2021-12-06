const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;
const path = require("path");

module.exports = {
  entry: "./src/index",
  mode: "development",
  target: "es2020",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept",
    },
    port: 3000,
  },
  output: {
    publicPath: "auto",
    filename: `app.js`,
    module: true,
  },
  experiments: {
    // The support for ES6 Moduels is experimental
    // so we need manually enable this feature
    outputModule: true,
  },
  devtool: "eval-source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  externals: {
    react: "https://cdn.skypack.dev/react",
    "react-dom": "https://cdn.skypack.dev/react-dom",
  },
  externalsType: "module",
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
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
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
      name: "host",
      library: { type: "module" },
      remotes: {
        legacy: "http://localhost:3001/remoteEntry.js",
        profile: "profile@http://localhost:4201/remoteEntry.js",
      },
      shared: {
        "styled-components": {
          singleton: true,
          eager: true,
        },
        "react-dom": {
          eager: true,
          singleton: true,
        },
        react: {
          eager: true,
          singleton: true,
          requiredVersion: "16.8.0",
        },
      },
    }),
    new HtmlWebpackPlugin({
      inject: false,
      templateContent: ({ htmlWebpackPlugin }) => `
        <html>
          <head>
            ${Object.keys(htmlWebpackPlugin.files.css).map((key) => {
              return `<link rel="stylesheet" href="${htmlWebpackPlugin.files.css[key]}" />`;
            })}
            <base href="/" />
            
          </head>
          <body>
            <noscript>You need to enable javascript</noscript>
            <div id="root"></div>
            <script src="http://localhost:3000/ngelement.js" type="module"></script>
            <script src="http://localhost:3001/remoteEntry.js" type="module"></script>
            ${Object.keys(htmlWebpackPlugin.files.js).map((key) => {
              return `<script type="module" src="${htmlWebpackPlugin.files.js[key]}"></script>`;
            })}
          </body>
        </html>
      `,
    }),
  ],
};
