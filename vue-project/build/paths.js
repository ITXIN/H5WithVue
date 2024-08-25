const path = require('path');
const appRoot = process.cwd(); // 命令行运行的根目录
const resolveApp = pathname => {
    return path.resolve(appRoot, pathname); // 获取指定目录的完整绝对路径
};
module.exports = resolveApp;
