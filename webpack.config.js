const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractWebpackPlugin = require("mini-css-extract-plugin");
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");




module.exports = {
    mode: "development",
    entry: "./src/js/script.js",
    output: {
        filename: `./js/bundle.[contenthash].js`,
        path: path.resolve(__dirname, "./build")
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'build'),
        },
        historyApiFallback: true,
        hot: true,
        open: true,
        compress: true,
        port: 7777,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            inject: "body"
        }),
        new MiniCssExtractWebpackPlugin({
            filename: `./css/style.[contenthash].css`
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: "./src/img",
                    to: "./img"
                },
                // {
                //     from: "./config.json",
                //     to:"./config.json"
                // },
            ]
        }),
        new CleanWebpackPlugin()
    ],
    // devtool: isProd ? false : 'source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractWebpackPlugin.loader,
                    "css-loader"
                ]
            }
        ]
    },
    optimization: {
        minimizer: [
            new CssMinimizerWebpackPlugin(),
            "..."
        ]
    },
    performance : {
        hints : false
    }
}