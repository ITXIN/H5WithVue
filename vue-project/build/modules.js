const resoleApp = require('./paths');
const glob = require('glob');
const fs = require('fs'),
    path = require('path');
const chalk = require('chalk');
// 项目views文件的路径
const APP_DIR = resoleApp('src/views/');

// 就是找的views下面文件夹中所有的.html和.js 的文件
function handleEntryConfig(checkPath) {
    const chunk = [];
    // 它接受一个路径模式（checkPath）作为参数，并返回一个包含匹配文件路径的数组，
    // 就是找的views下面文件夹中所有的.js 的文件
    let list = glob.sync(checkPath).map(file => {
        const data = path.parse(file);
        // 对应的js文件路径
        const fileJS = `${data.dir}${path.sep}${data.name}.js`;
        if (fs.existsSync(fileJS)) {
            // 替换掉匹配到的路径中xxx/src/views之前的路径，保留views下面的文件路径 /home/xxx
            const dir_path = data.dir.replace(APP_DIR, '');
            const arr = dir_path.split(path.sep).filter(Boolean);
            const name = arr.join('_');
            // 处理文件命名home_xxx
            let filename = '';
            if (data.name === 'index') {
                filename = name;
            } else {
                filename = `${name}_${data.name}`;
            }
            chunk.push({
                filename: `${filename}.html`,
                template: file,
                chunk: filename,
            });
            return {
                [filename]: fileJS,
            };
        }
    });
    // 把所有的js文件放在一个对象里面每一个都说xxx_xxx:./xxxx/xxx/index.js
    const entry = list.reduce(function (reduce, item) {
        return Object.assign(reduce, item);
    }, {});
    // 示例：
    // const exp = {
    //     entry: {
    //         xxx: 'xxxx/xxx/index.js',
    //     },
    //     chunk: [
    //         {
    //             filename: 'xx_xxx.html',
    //             template: 'xxxx/xxx/index.html',
    //             chunk: 'xx_xxx',
    //         },
    //     ],
    //     listEntry: [
    //         {
    //             xx_xx: 'xxx/xx/index.js',
    //         },
    //     ],
    // };
    return {
        chunk,
        entry,
        listEntry: list,
    };
}

module.exports = function (options) {
    let chunk = [],
        entry = {},
        list = [];
    const checkPath = `${APP_DIR}/**/*.html`; // 查找目录入口，默认查找src/views 下面所有的html
    // 是modules.js 或者 modules.dev.js
    const modules = require('../config/')(options);
    if (options.pages) {
        modules.increase = [options.pages];
    }
    console.info(chalk.green.bold('获取要打包的模块 modules:'), chalk.yellow(JSON.stringify(modules)));
    console.info(chalk.green.bold('获取要打包的模块 options:'), chalk.yellow(JSON.stringify(options)));

    // dev 环境pack 为空或增量，increase 存在配置
    if (['', 'inc'].includes(options.pack) && modules.increase.length > 0) {
        modules.increase.forEach(module => {
            const path = resoleApp(`${APP_DIR}/${module}`);
            const data = handleEntryConfig(`${path}/**/*.html`);
            console.info(chalk.green.bold('获取要打包的模块 data '), chalk.yellow(JSON.stringify(data)));
            data.chunk.forEach(item => {
                chunk.push(item);
            });
            list = list.concat(data.listEntry);
            Object.assign(entry, data.entry);
        });
        console.info(chalk.green.bold('获取要打包的模块 increase entry:'), chalk.yellow(JSON.stringify(entry)));
    } else if (options.pack === 'all' || modules.increase.length === 0) {
        const data = handleEntryConfig(checkPath);
        chunk = data.chunk;
        entry = data.entry;
        list = list.concat(data.listEntry);
    }

    console.info(chalk.green.bold('获取要打包的模块 chunk:'), chalk.yellow(chunk));
    console.info(chalk.green.bold('获取要打包的模块 entry:'), chalk.yellow(entry));
    console.info(chalk.green.bold('获取要打包的模块 listEntry:'), chalk.yellow(list));
    // 找到所有的/src/views/的
    return {
        chunk,
        entry,
        listEntry: list,
    };
};
