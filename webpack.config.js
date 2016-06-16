module.exports = {
	entry: './index.js',
	output:{
		filename:'bundle.js'
	},
	module:{
		loaders:[
			{test:/\.scss$/,loader:'style-loader!css-loader!scss-loader'},
			{test:/\.css$/,loader:'style-loader!css-loader'},
			{test:/\.(png|jpg)$/,loader:'url-loader?limit-8192'},
			{test:/\.json$/,loader:'json-loader'}

		]
	}



}
