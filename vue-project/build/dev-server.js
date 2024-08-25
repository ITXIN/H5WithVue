const webpackConfig = require('./webpack.config');
const chalk = require('chalk');
module.exports = function () {
    // 获取要打包的模块
    const modules = require('./modules')({ env: 'dev', pack: '' });
    console.info(chalk.green.bold('获取要打包的模块'), chalk.yellow(JSON.stringify(modules)));
    return webpackConfig({
        env: 'dev',
        modules,
    });
};
