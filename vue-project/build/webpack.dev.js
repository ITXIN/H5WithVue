const devServer = require('./dev-server');
const baseConfig = require('./webpack.common');
const { merge } = require('webpack-merge');
module.exports = function (options) {
    const webpackBaseConfig = baseConfig(options);
    const plugins = require('./plugins')(options);
    return merge(webpackBaseConfig, {
        mode: 'development',
        devtool: 'source-map',
        devServer: {
            open: true,
            port: process.env.port || 3088,
            compress: true,
            host: '192.168.0.105',
            allowedHosts: ['xxx.com.cn'],
            proxy: [],
        },
        plugins,
        optimization: {
            chunkIds: 'named',
        },
    });
};
