import webpack from 'webpack';

const config = {
  entry: __dirname + '/src/app.jsx',

  output: {
    path: __dirname + '/dist',
    filename: 'app.js',
  },

  devtool: 'source-map',

  module: {
    loaders: [
      {
        test: /\.js$/, exclude: /node_modules/, loader: 'babel?stage=1&optional=runtime',
      },
      {
        test: /\.jsx$/, exclude: /node_modules/, loader: 'babel',
      },
      {
        test: /\.css$/, loader: 'style!css',
      },
      {
        test: /\.(eot|woff2|woff|ttf|svg)$/, loader: 'raw',
      }
    ],
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

export default config;
