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
  entry: {
    app: __dirname + '/src/index.js',
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
    // new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
  ],
};
/*
deps.forEach((dep) => {
  const depPath = path.resolve(nodeModulesDir, dep);
  const depName = dep.split(path.sep)[0];
  config.resolve.alias[depName] = depPath;
  config.module.noParse.push(depPath);
  config.entry.vendors.push(depName);
});
const domPath = path.resolve(nodeModulesDir, 'react/lib/ReactDOM.js');
config.resolve.alias['react-dom'] = domPath;
config.module.noParse.push(domPath);
config.entry.vendors.push('react-dom');
console.log(config);
//*/

export default config;
