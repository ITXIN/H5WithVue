const path = require('path')
const nodeExternals = require('webpack-node-externals')
const merge = require('webpack-merge')
const base = require('./webpack.base')
/**
 * 引入所需模块：path 用于路径操作，webpack-node-externals 和 webpack-merge 分别用于设置和合并Webpack配置。
导入基础配置：从 webpack.base 文件加载基本Webpack配置。
配置Webpack：设置目标环境为Node.js，入口文件为 ./src/server/index.js，输出目录为 build，输出文件名为 server.js，并使用 nodeExternals 处理外部依赖。
合并配置：将当前配置与基础配置合并后导出。
*/
module.exports = merge(base, {
    target: 'node',
    entry: './src/server/index.js',
    output: {
        path: path.resolve('build'),
        filename: 'server.js'
    },
    externals: [nodeExternals()]
})
