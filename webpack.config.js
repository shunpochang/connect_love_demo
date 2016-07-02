var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')
require('es6-promise').polyfill(); //Enable css-loader.
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: __dirname,

  entry: './assets/js/index', // entry point of our app. assets/js/index.js should require other js modules and dependencies it needs

  output: {
      path: path.resolve('./assets/bundles/'),
      filename: '[name].js',
  },

  plugins: [
    new BundleTracker({filename: './webpack-stats.json'}),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new ExtractTextPlugin("[name].css"),
  ],

  module: {
    loaders: [
      { test: /\.jsx?$/,
        exclude: [/node_modules/, '/dist/'], //Exclude deploying files.
	loader: 'babel',
	query: {presets:['react']}
      }, // to transform JSX into JS.
      { test: /\.css$/,
        exclude: [/node_modules/, '/dist/'], //Exclude deploying files.
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      }, // to get css stylesheets.
    ],
  },

  resolve: {
    modulesDirectories: ['node_modules', 'bower_components'],
    extensions: ['', '.js', '.jsx']
  },
}
