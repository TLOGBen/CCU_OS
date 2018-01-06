// entry 為進入點，output 為進行完 eslint、babel loader 轉譯後的檔案位置
module.exports = {
    entry: [
        './index.js',
    ],
    output: {
        //path: path.resolve(__dirname, 'build'),
        publicPath: '',
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader?presets[]=es2015&presets[]=react'
            }
        ]
    },
    resolve: {
        modulesDirectories: ['node_modules', 'modules'],
        extension: ['', '.js', '.jsx', '.scss']
    },
    devServer: {
        historyApiFallback: true,
    }
// 啟動開發測試用 server 設定（不能用在 production）
};