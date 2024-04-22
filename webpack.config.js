// entry -> output

const path = require("path")
console.log(path.resolve(__dirname, 'public'))

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node.modules/
        },
        {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
        }
        ]
    }
};