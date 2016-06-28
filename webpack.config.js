var path = require('path');
var webpack = require('webpack');

var nodeModulesPath = path.resolve(__dirname, 'node_modules');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {
	devtool: 'sourcemap',
	devServer: {
		contentBase: './src/',
		historyApiFallback: true,
		inline: true,
		hot: true,
		noInfo: false
	},
	entry: {
		'js/index': './src/js/index.js',
		'js/login': './src/js/login',
		'js/utils': ['jquery', 'moment']
	},
	// resolve: {

	// },
	output: {
		path: './dist/assets/',
		filename: '[name].js',
		publicPath: '/assets/'
	},
	module: {
		preLoaders: [{
			test: /\.(js|jsx)$/,
			include: [path.resolve(__dirname, "src")],
			exclude: [nodeModulesPath],
			loader: 'eslint-loader'
		}],
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loaders: ['babel-loader?presets[]=es2015']
		}, {
			test: /\.css$/,
			loader: 'style-loader!css-loader'
			// loader: ExtractTextPlugin.extract("style-loader", "css-loader")
		}, {
			test: /\.(ico|png|jpg|gif)$/,
			loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
		}]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),	
		new webpack.NoErrorsPlugin(),
		new webpack.optimize.DedupePlugin(), // 检查相似文件或文件中重复的内容，并在output中将其去除掉。
		// new webpack.optimize.UglifyJsPlugin(),
		// new ExtractTextPlugin("css/[name].css"),
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery"
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'commons',
			filename: 'js/commons.js',
			chunks: ['js/index', 'js/login']
		}),
		new HtmlWebpackPlugin({
			title: 'webpack',
			template: './src/index.html',
			filename: './index.html',
			chunks: []
		})
	]
};

module.exports = config;