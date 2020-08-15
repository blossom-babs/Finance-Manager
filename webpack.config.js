const path = require('path');

module.exports = {
    entry: './src/index.js',
    output:{
      path: path.resolve(__dirname, 'build'),
      filename: 'index.bundle.js'  
    },
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            use: 'raw-loader',
            query:{
                presets: ['env']
            }
        }]
    }
}

// stopped at 16:30 traversy media video