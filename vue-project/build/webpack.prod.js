const baseConfig = require('./webpack.common');
const chalk = require('chalk');
const { merge } = require('webpack-merge');
const resolveApp = require('./paths');
// 插件:在每次构建之前自动清理输出目录（通常是dist文件夹），确保输出目录只包含最新的构建结果。
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// 插件:压缩CSS文件，减少文件体积，提高加载速度。
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
// 插件:压缩JavaScript代码，减少文件体积，提高加载速度。
const TerserWebpackPlugin = require('terser-webpack-plugin');
// 插件:将CSS提取到单独的文件中，而不是打包到JavaScript文件中。有助于提高页面加载性能，因为可以并行加载css和js文件
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
        // devtool: 'source-map', // 生产环境nosources-source-map
        plugins,
        // 优化
        optimization: {
            // 模块合并
            concatenateModules: false,
            // 错误
            emitOnErrors: true,
            //
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
