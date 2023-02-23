const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
  devServer: {
    port: 3001,
    open: true,
    hot: true
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
  ]
}