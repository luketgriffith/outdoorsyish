var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  entry: ['babel-polyfill', './app/app.js', 'webpack-dev-server/client?http://localhost:5001/', 'webpack/hot/dev-server'],
  output: {
      filename: "bundle.js",
      path: path.resolve(__dirname + "/dist")
  },
  devServer: {
      contentBase: './app/',
      port: 5001,
      historyApiFallback: true
  },
  devtool: 'source-map',
  plugins: [new HtmlWebpackPlugin({
      title: 'Outdoorsyish',
      template: path.join(__dirname, './app/index.html'),
      inject: 'body'
  }), ],
  module: {
    loaders: [
      {
          test: /\.css$/,
          loader: 'style!css',
          include: [path.resolve(__dirname, 'app')],
          exclude: /node_modules/
      },  {
          test: /\.scss$/,
          loaders: [ 'style', 'css?sourceMap', 'sass?sourceMap' ]
      }, {
          test: /\.js$/,
          loader: 'babel',
          query: {
              presets: ['react', 'es2015', 'stage-0']
          },
          include: [path.resolve(__dirname, 'app')],
          exclude: /node_modules/
      }, {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192',
        include: [path.resolve(__dirname, 'app')],
        exclude: /node_modules/
      }
      // { test: /\.woff(\?.*)?$/,  loader: "url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff" },
      // { test: /\.woff2(\?.*)?$/, loader: "url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff2" },
      // { test: /\.ttf(\?.*)?$/,   loader: "url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/octet-stream" },
      // { test: /\.eot(\?.*)?$/,   loader: "file-loader?prefix=fonts/&name=[path][name].[ext]" },
      // { test: /\.svg(\?.*)?$/,   loader: "url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=image/svg+xml" }
    ]
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, "./app/stylesheets")
    ]
  },
  resolve: {
    alias: {
      config: path.join(__dirname, './config', process.env.NODE_ENV)
    }
  }
};