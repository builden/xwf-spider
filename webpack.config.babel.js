import webpack from 'webpack';
import path from 'path';
const nodeModulesDir = path.join(__dirname, 'node_modules');

// 防止重复去解析
const deps = [
  'react/dist/react.min.js',
  'react-dom/dist/react-dom.min.js',
  'react-bootstrap/dist/react-bootstrap.min.js',
];

const config = {
  entry: ['webpack/hot/dev-server', __dirname + '/src/index.js'],

  output: {
    path: __dirname + '/dist',
    publicPath: '/dist/', // for webpack-dev-server 
    filename: 'app.js',
  },

  devtool: 'source-map',

  // 防止重复解析
  resolve: {
    alias: {},
  },

  module: {
    loaders: [
      {
        test: /\.js$/, exclude: /node_modules/, loader: 'babel?stage=1&optional=runtime',
      },
      {
        test: /\.jsx$/, exclude: /node_modules/, loader: 'babel?stage=1&optional=runtime',
      },
      {
        test: /\.css$/, loader: 'style!css',
      },
      {
        test: /\.(eot|woff2|woff|ttf|svg)$/, loader: 'raw',
      },
    ],
    // 防止重复去解析
    noParse: [],
  },

  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      output: {
        comments: false,
        semicolons: true,
      },
      sourceMap: true,
    }),
  ],
};

deps.forEach((dep) => {
  const depPath = path.resolve(nodeModulesDir, dep);
  config.resolve.alias[dep.split(path.sep)[0]] = depPath;
  config.module.noParse.push(depPath);
});

export default config;
