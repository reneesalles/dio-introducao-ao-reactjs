const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const port = 3000;
let publicUrl = `ws://localhost:${port}/ws`;
if (process.env.GITPOD_WORKSPACE_URL) {
    const [schema, host] = process.env.GITPOD_WORKSPACE_URL.split('://');
    publicUrl = `wss://${port}-${host}/ws`;
}
console.log("publicUrl", publicUrl);

module.exports = {
    // mode: 'production',
    devtool: 'source-map',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        })
    ],
    devServer: {
        port,
        hot: true,
        allowedHosts: "all",
        historyApiFallback: true,
        static: {
          directory: path.resolve(__dirname, "dist"),
        },
        client: {
          webSocketURL: publicUrl
        },
    }
};