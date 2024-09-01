module.exports = {
    root: true,
    env: {
        browser: true,
        es2020: true,
    },
    globals: {
        ENV: false,
    },
    extends: ['eslint:recommended', 'plugin:vue/essential', 'standard', 'plugin:prettier/recommended'],
    overrides: [],
    // 用于配置解析器的选项
    parserOptions: {
        // 指定使用@babel/eslint-parser作为解析器
        parser: '@babel/eslint-parser',
        // 指定ECMAScript的版本
        ecmaVersion: 2015,
        // 表示不要求存在特定的 ESLint 配置文件。通常，ESLint 会在项目目录中查找.eslintrc.js等配置文件。设置为false意味着即使没有找到配置文件，ESLint 也不会报错，而是使用默认的规则集进行检查。
        requireConfigFile: false,
        sourceType: 'module',
        // 启用实验性的对象展开（object rest spread）语法特性。这个特性允许在对象字面量中使用展开运算符（...）来合并对象属性，或者在函数参数中使用剩余参数（...args）来收集多个参数。虽然在 ES6 中引入了数组的展开和剩余参数，但对象的展开是一个实验性的特性，需要明确启用
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
        },
    },
    plugins: ['vue', 'prettier'],
    rules: {
        'no-unused-vars': 'off',
        'prettier/prettier': 'error',
        'no-debugger': 'off',
        quotes: [2, 'single'], // 引号风格
        semi: [2, 'always'], // 强制语句分号结尾
        'one-var': [0, 'always'], // 不强制变量声明在一起
        'no-new': [0], // 允许new 一个实例后不赋值或者不比较
        camelcase: [2, { properties: 'never' }], // 强制使用驼峰
        'linebreak-style': 0, // 不强制执行一致的换行样式
        'no-unused-vars': 1, // 警告，不允许有声明后未使用的变量或参数
        'no-underscore-dangle': 0, // 允许下划线开始变量
        'no-unused-expressions': 1, // 建议不要使用 && 来执行方法，不允许无用的表达式
        'import/prefer-default-export': 0, // 这个规则要求尽可能使用默认导出。设置为 0 表示关闭该规则，即不强制要求使用默认导出
        'import/no-cycle': 0, // 禁止模块之间的循环依赖。设置为 0 表示不检查循环依赖。
        'no-param-reassign': 0, // 禁止对函数参数进行重新赋值。0 = off, 1 = warn, 2 = error，可能是允许在特定情况下进行重新赋值，或者是根据具体的配置进行了调整
        'accessor-pairs': 0, // 要求对象有设置和获取属性的方法时成对出现。设置为 0 表示关闭该规则。
        'standard/no-callback-literal': 0, // 可能是针对某种特定的回调函数字面量的规则。设置为 0 表示关闭该规则 解决error callback 入参报错问题,
        'class-methods-use-this': 0, // 要求类方法中如果没有使用 this，则应该将其定义为静态方法。设置为 0 表示关闭该规则
        'vue/multi-word-component-names': 'off', // 即不强制要求组件名称使用多个单词
    },
};
