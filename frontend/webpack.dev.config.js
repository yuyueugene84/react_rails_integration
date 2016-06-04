var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: "eval",
  entry: {
    app: [
      "./src/scripts/main.js"
    ]
  },
  output: {
    path: "../app/assets/javascripts/build",
    filename: "bundle.js"
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      _: 'lodash'
    }),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    modulesDirectories: ['node_modules'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: "react-hot!babel?presets[]=es2015,presets[]=react",
        exclude: [ path.resolve(__dirname, "node_modules") ]
      },

      {
        test: /\.sass$/,
        loader: "style!css!sass?indentedSyntax=true&outputStyle=expanded"
      },

      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192'
      },

      {
        test: /\.html$/,
        loader: "file?name=[path][name].[ext]&context=./src"
      }
    ]
  }
};