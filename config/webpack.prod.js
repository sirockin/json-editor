var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const RemoveStrictPlugin = require('remove-strict-webpack-plugin');
var UnminifiedWebpackPlugin = require('unminified-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonConfig, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    path: helpers.root('dist'),
    // publicPath: '/',
    filename: '[name].min.js',
    chunkFilename: '[id].chunk.min.js'
  },

  optimization:{
    /*
    splitChunks:{
      chunks:'all'
    },
    */
    minimize:true
  },

  plugins: [
    new RemoveStrictPlugin(),           // I have put this in to avoid IE throwing error Assignment to read-only properties is not allowed in strict mode
    new UnminifiedWebpackPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    /*
    new webpack.optimize.UglifyJsPlugin({ // https://github.com/angular/angular/issues/10618
      mangle: {
        keep_fnames: true
      }
    }),
    */    
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: '[name].[hash].css',
      chunkFilename: '[id].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),  
    
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV)
      }
    })    
  ],

});