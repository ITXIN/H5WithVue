const devServer = require('./dev-server');
const baseConfig = require('./webpack.common');
const { merge } = require('webpack-merge');
const webpack = require('webpack');
module.exports = function (options) {
    const webpackBaseConfig = baseConfig(options);
    const plugins = require('./plugins')(options);
    plugins.push(new webpack.HotModuleReplacementPlugin());
    // HMR 指定哪些模块发生更新时进行HRM
    if (module.hot) {
        module.hot.accept('./xx/xx', () => {
            console.log('Accepting the updated modules!');
        });
    }
    return merge(webpackBaseConfig, {
        mode: 'development',
        devtool: 'source-map',
        devServer: {
            open: true,
            port: process.env.port || 3088,
            compress: true,
            host: 'localhost',
            allowedHosts: ['xxx.com.cn'],
            proxy: [],
            hot: true, // HMR 模块热替换，指在应用程序运行过程径中，替换模块，添加、删除、修改模块，而无需重重新刷新整个应用。
        },
        plugins,
        optimization: {
            chunkIds: 'named',
        },
    });
};
