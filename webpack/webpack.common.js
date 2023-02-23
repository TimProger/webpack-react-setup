const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist'),
}

const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  entry: PATHS.src,
  output: {
    path: PATHS.dist,
    clean: true,
    filename: "[name].[hash].js",
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  resolve: {
    extensions: ["*", ".js", ".ts", ".tsx", ".scss"],
    alias: {
      '@': PATHS.src,
    }
  },
  module: {
    rules: [
      {
        // JavaScript
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
      {
        // SCSS
        test: /\.s[ac]ss$/,
        exclude: /node_modules/,
        use: [
          !isDev ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true }
          }
        ]
      },
      {
        // CSS
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          !isDev ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: { sourceMap: true }
          }
        ]
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public', 'index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
    }),
  ],
}