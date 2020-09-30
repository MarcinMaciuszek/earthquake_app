module.exports = {
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.css$/,
				use: "css-loader"
			},
			{
				test: /\.(png|jpe?g)/i,
				use: "file-loader"
			}
		]
	}
};