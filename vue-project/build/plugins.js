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
        // 允许在编译时创建全局变量，常用于根据环境配置不同的变量
        new webpack.DefinePlugin({
            ENV: JSON.stringify(options.env),
            RUNTIME: JSON.stringify(options.runtime),
            BRANCH: JSON.stringify(options.branch),
        }),
    );

    // 作用域提升
    // 该代码行将 ModuleConcatenationPlugin 插件添加到 Webpack 的插件列表中。此插件的作用包括：
    // 优化代码：合并小型模块到单个输出文件中，减少请求数量。
    // 提升加载性能：通过减少文件数量来加快资源加载速度。
    plugins.push(new webpack.optimize.ModuleConcatenationPlugin());

    return plugins;
};
