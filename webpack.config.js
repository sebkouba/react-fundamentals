// JS compile settings
module.exports = {
    entry: './main.js',
    output: {
        path: './',
        filename: 'index.js' // will be the compiled result
    },
    devServer: {
        inline: true, // hot reoading
        port: 3333
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};