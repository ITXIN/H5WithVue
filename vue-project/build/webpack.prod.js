const baseConfig = require('./webpack.common');
const chalk = require('chalk');
const { merge } = require('webpack-merge');
const resolveApp = require('./paths');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function (options) {
    const env = options.env;
    const webpackBaseConfig = baseConfig(options);
    let plugins = require('./plugins')(options);
    plugins = plugins.concat([
        new MiniCssExtractPlugin({
            filename: 'assets/css/[name].[contenthash].css',
            chunkFilename: 'assets/css/[name].[contenthash].css',
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [resolveApp('dist')],
        }),
    ]);

    return merge(webpackBaseConfig, {
        mode: 'production',
        plugins,
        optimization: {
            concatenateModules: false,
            emitOnErrors: true,
            splitChunks: {
                cacheGroups: {
                    vendors: {
                        chunks: 'all',
                        test(module) {
                            return module.resource && /^(?!.*\.css$).*[\\/]node_modules[\\/].+$/.test(module.resource);
                        },
                        name: 'vendors',
                        priority: -7,
                    },
                    default: false,
                },
            },
            minimizer: [
                new CssMinimizerPlugin(),
                new TerserWebpackPlugin({
                    terserOptions: {
                        format: {
                            beautify: false,
                            comments: false,
                        },
                        compress: {
                            drop_console: options === 'prd',
                        },
                    },
                    extractComments: false, // 注释
                }),
            ],
        },
    });
};
