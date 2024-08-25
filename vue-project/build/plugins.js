const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const chalk = require('chalk');
module.exports = function (options) {
    const plugins = [];
    const minify = {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
    };

    options.modules.chunk.forEach(function (item) {
        const temp = {
            filename: item.filename,
            template: item.template,
            inject: 'body',
            scriptLoading: 'blocking',
            minify: options.env !== 'dev' ? minify : false,
            chunks: [item.chunk],
            env: options.env,
        };
        console.info(chalk.green.bold('打包的模块 plugins item:'), chalk.yellow(JSON.stringify(item)));
        console.info(chalk.green.bold('打包的模块 HtmlWebpackPlugin:'), chalk.yellow(JSON.stringify(temp)));
        plugins.push(new HtmlWebpackPlugin(temp));
    });

    plugins.push(
        new webpack.DefinePlugin({
            ENV: JSON.stringify(options.env),
            RUNTIME: JSON.stringify(options.runtime),
            BRANCH: JSON.stringify(options.branch),
        }),
    );

    // 作用域提升
    plugins.push(new webpack.optimize.ModuleConcatenationPlugin());

    return plugins;
};
