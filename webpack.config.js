const webpack = require('webpack')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { WebpackOpenBrowser } = require('webpack-open-browser');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const webpackDevClientEntry = require.resolve(
    'react-dev-utils/webpackHotDevClient'
);
const reactRefreshOverlayEntry = require.resolve(
    'react-dev-utils/refreshOverlayInterop'
);

const theme = require('./src/styles/theme')

const port = 9000

const url = 'http://localhost:' + port

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].js',
    },
    mode: 'development',
    devtool: 'cheap-module-source-map',
    devServer: {
        port,
        hot: true,
        historyApiFallback: true,
    },
    resolve: {
        extensions: ['.jsx', '.js', '.json'],
        alias: {
            '~': path.join(__dirname, 'src'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /(node_modules)/,
                include: path.join(__dirname, 'src'),
                loader: require.resolve('babel-loader'),
            },
            {
                test: /\.(css|less)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions: {
                                modifyVars: {
                                    'font-family': theme.fontFamily,
                                    'primary-color': theme.primaryColor,
                                    'layout-header-background':
                                        theme.secondaryColor,
                                },
                                javascriptEnabled: true,
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(ttf)$/,
                use: {
                    loader: 'url-loader',
                },
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'icon',
                },
            },
        ],
    },
    plugins: [
        new WebpackOpenBrowser(
            { url, browser: 'chrome' },
        ),
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './public/index.html',
            title: 'App'
        }),
        new ReactRefreshWebpackPlugin({
            overlay: {
                entry: webpackDevClientEntry,
                module: reactRefreshOverlayEntry,
                sockIntegration: false,
            },
        }),

    ],
}
