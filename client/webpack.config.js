const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path');

module.exports = {
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'static')
  },
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
						options: { minimize: true },
					},
				],
			},
		],
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './src/index.html',
			filename: './index.html',
		}),
		new webpack.HotModuleReplacementPlugin(),
	],
	devServer: {
    contentBase: './static',
    proxy: {
      '/colors': `http://localhost:${process.env.SERVER_PORT}`
    }
	},
}
