const path = require('path');
module.exports = {
    // context是一个配置选项，用于指定构建的根目录
    context: path.resolve(__dirname, './'),
    // resolve 选项允许你定义 Webpack 在查找模块时应该遵循的规则。这包括指定模块的扩展名、目录别名以及模块解析的顺序等
    resolve: {
        // extension 用于指定模块的扩展名。当导入模块时，如果没有指定扩展名，Webpack 将尝试使用这些扩展名依次进行查找
        extension: ['.js', '.vue', '.json'],
        // alias 可以为模块路径设置别名。这在项目结构复杂或模块路径较长时非常有用，可以提高代码的可读性和可维护性。
        alias: {
            // 设置别名，方便文件引用
            '@src': path.resolve(__dirname, './src'),
            '@static': path.resolve(__dirname, './static'),
        },
        // modules 指定 Webpack 应该在哪些目录中查找模块。默认情况下，Webpack 会在 node_modules 目录中查找模块。你可以添加其他目录来扩展模块的搜索范围
        // modules: [],
    },
};
