module.exports = {
    entry: "./app/app.js",
    output: {
        path: __dirname,
        filename: 'bundle.js',
        sourceMapFilename: "bundle.map"
    },
    // devtool: '#source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: { presets: [ 'es2015', 'react' ] }
            }
        ]
    }
}
