var path = require('path')
console.log(path.resolve(__dirname, '../static/js'))

module.exports = {
  entry: ['./index.js'],
  output: {
    path: path.resolve(__dirname, '../static/js'),
    // publicPath: '../static/',
    filename: 'bundle.js'
  },
  module : {
    loaders: [{
            test   : /.js$/,
            exclude: /node_modules/,
            loader : 'babel-loader',
            query: {
                presets: ['react', 'es2015', 'stage-2']
            } 
        },
        {
            test: /\.html$/,
            loader: "raw-loader"
        }
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname), "node_modules"],
  },
  watchOptions: {
    ignore: /node_modules/
  },
  devServer: {
    contentBase: "../static"
},
}