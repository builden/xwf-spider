const webpack = require('webpack');
// const path = require('path');

const config = {
  entry: {
    app: [ __dirname + '/src/index.js'],
    // app: ['webpack/hot/dev-server', __dirname + '/src/index.js'],
    vendors: ['react', 'react-dom', 'react-bootstrap'],
    // vendors: [],
  },

  output: {
    path: __dirname + '/dist',
    publicPath: '/dist/', // for webpack-dev-server
    filename: '[name].js',
  },

  devtool: 'source-map',

  // 防止重复解析
  resolve: {
    alias: {},
  },

  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/, exclude: /node_modules/,
        loaders: ['react-hot', 'babel?stage=1&optional=runtime'],
      },
      {
        test: /\.css$/, loader: 'style!css',
      },
      {
        test: /\.(eot|woff2|woff|ttf|svg)$/, loader: 'raw',
      },
      {
        test: /\.(json)/, loader: 'json',
      },
    ],
    // 防止重复去解析
    noParse: [],
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
  ],
};
/*
// 防止重复去解析
const nodeModulesDir = path.join(__dirname, 'node_modules');
const deps = [
  { name: 'react', file: 'react/dist/react.min.js' },
  { name: 'react-dom', file: 'react-dom/dist/react-dom.min.js' },
  { name: 'react-bootstrap', file: 'react-bootstrap/dist/react-bootstrap.min.js' },
];
deps.forEach((dep) => {
  const depPath = path.resolve(nodeModulesDir, dep.file);
  config.resolve.alias[dep.name] = depPath;
  config.module.noParse.push(depPath);
  config.entry.vendors.push(dep.name);
});
console.log(config);
//*/

module.exports = config;
