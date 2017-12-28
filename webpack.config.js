const webpack = require('webpack')

module.exports = {
    // entry entrada dos dados
    // __dirname do node reconhece como a pasta raiz 
    entry: './src/index.jsx',
    output: {
        path: __dirname + '/public',
        filename: './bundle.js'
    },
    devServer: {
       port: 8080,
       contentBase: './public',     
    },
    //Com isso pode tirar na hora de importar a extensao do arquivo .js , .jsx , e vazio
    resolve: {
        extensions: ['','.js','.jsx']
    },
    // Test - Ler qualquer arquivo em extensao jsx 
    // Exclude - Tirar o arquivo node_modules
    // Usar os presets do es2015 e do react
    module: {
        loaders: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015','react'],
                plugins: ['transform-object-rest-spread']
            }
        }]
    }
}