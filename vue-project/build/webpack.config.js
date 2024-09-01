const chalk = require('chalk');
const getBranchVersion = '4.35.5'; // TODO:获取版本号,这里写死，应该读取当前版本分支信息
const devConfig = require('./webpack.dev');
const prdConfig = require('./webpack.prod');

// 是一个用于测量 Webpack 构建性能的插件
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
// 是一个用于测量 Webpack 构建文件大小的插件,生成webpack 打包后的模块分析报告，帮助您了解包的大小和组成
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer');

module.exports = function (options) {
    const params = {
        env: options.env,
        ana: options.ana,
        smp: options.smp,
        pack: options.pack, // 增量（inc）还是全量(all)
        fcm: options.fcm, // 覆盖率的处理
        path_prefix: options.path_prefix || '/a/b/', // 文件路径前缀
        modules: options.modules,
        scene: options.scene, // 静态资源是否走本地（用于所有的资源都离线到本地场景：npm run build-native）
        runtime: options.runtime || 'online', // 部署离线还是在线
        branch: getBranchVersion,
    };

    const moudulesList = [];
    for (const key in params.modules.entry) {
        moudulesList.push[key];
    }
    console.info(chalk.green.bold('项目打包参数'), chalk.yellow(JSON.stringify(params)));
    console.info(chalk.green.bold('项目本次构建模块'), chalk.yellow(JSON.stringify(moudulesList)));
    const config = params.env === 'dev' ? devConfig(params) : prdConfig(params);
    if (params.ana) {
        config.plugins.push(new BundleAnalyzerPlugin());
    }
    // 测量打包性能,实例化该插件后，可以通过它来收集构建过程中的时间和其他性能数据
    if (params.smp === 'true') {
        const smp = new SpeedMeasurePlugin();
        return smp.wrap(config);
    }
    return config;
};
