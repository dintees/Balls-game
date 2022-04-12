const path = require("path")
module.exports = {
    entry: {
        index: './src/index.ts',
        board: './src/Board.ts',
        ball: './src/Ball.ts',
        leftPanel: './src/LeftPanel.ts',
        // nazwa_pliku_wynikowego_1: './src/plik1.ts',
        // nazwa_pliku_wynikowego_2: './src/plik2.ts'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    watch: true
}