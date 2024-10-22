const argv = require('yargs').argv,
    webpack = require('webpack'),
    chalk = require('chalk'),
    fs = require('fs-extra'),
    webpackConfig = require('./webpack.config'),
    resolveApp = require('./paths');

function bootstrap(options = {}) {
    const env = argv.env || 'dev' || 'prd',
        ana = argv.ana,
        smp = argv.smp,
        runtime = argv.runtime || 'online',
        pack = argv.pack || '',
        isTestUat = argv.isTestUat || '',
        fcm = argv.fcm || '';
    const modules = require('./modules')({ env, pack });

    console.info(chalk.cyan.bold('开始构建 argv：'), JSON.stringify(argv));

    webpack(webpackConfig({ env, pack, modules, ana, smp, runtime, fcm, isTestUat }), function (err, stats) {
        if (err) {
            console.error(chalk.red.bold('配置错误'), err);
            return;
        }
        const info = stats.toJson();
        if (stats.hasErrors()) {
            throw new Error('构建出现错误', info.errors);
        }
        // 如果是离线，删除b目录下的assets目录，保留html
        if (runtime === 'offline') {
            fs.removeSync(resolveApp(`dist/${env}/a/b/assets`));
            fs.existsSync(resolveApp(`app.${env}.json`)) &&
                fs.copySync(resolveApp(`app.${env}.json`), resolveApp(`dist/${env}/a/b/app.json`));
        }
    });
}
if (!module.parent) {
    bootstrap();
}
module.exports = bootstrap;
