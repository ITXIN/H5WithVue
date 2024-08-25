const resolveApp = require('./paths');
const chalk = require('chalk');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const EslintPlugin = require('eslint-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
module.exports = function (options) {
    const env = options.env;
    const version = options.branch || require('../package').version;
    const configBase = require('../config/config.base')({
        env,
        path_prefix: options.path_prefix, // 没有用到
    });
    if (version) {
        configBase.branch = version;
    }
    let cssFinalLoader = env === 'dev' ? 'style-loader' : MiniCssExtractPlugin.loader;
    // npm run build-native 场景
    if (options.scene === 'true') {
        cssFinalLoader = {
            loader: MiniCssExtractPlugin.loader,
            options: {
                publicPath: '../../',
            },
        };
    }
    // 域名
    let pathName = '';
    if (env === 'uat') {
        pathName = 'xxx';
    } else if (env !== 'dev') {
        pathName = configBase.url.common;
    }
    // https:xx.com.cn/a/b/
    // dev 环境 /a/b/
    const PUBLIC_PATH_PREFIX = pathName + options.path_prefix;

    const plugins = [
        new VueLoaderPlugin(),
        new ProgressBarPlugin({
            width: 50,
            format: chalk.blue.bold('build') + chalk.yellow('[:bar] ') + chalk.green.bold(':percent') + ' (:elapsed秒)',
        }),
        new EslintPlugin({
            extensions: ['js', 'vue'],
            exclude: 'node_modules',
        }),
        // new webpack.LoaderOptionsPlugin({
        //     external: {
        //         'vue-router': 'VueRouter',
        //         vue: 'Vue',
        //         vuex: 'Vuex',
        //     },
        // }),
    ];

    console.info(chalk.green.bold('PUBLIC_PATH_PREFIX pathName'), chalk.yellow(pathName));
    console.info(chalk.green.bold('PUBLIC_PATH_PREFIX path_prefix'), chalk.yellow(options.path_prefix));
    console.info(chalk.green.bold('PUBLIC_PATH_PREFIX'), chalk.yellow(PUBLIC_PATH_PREFIX));
    return {
        entry: options.modules.entry,
        output: {
            path: resolveApp(`dist/${env}/${options.path_prefix}`),
            filename: `assets/js/[name].[chunkhash].js`,
            chunkFilename: `assets/js/[name].[chunkhash].js`,
            publicPath: PUBLIC_PATH_PREFIX,
        },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                    include: [resolveApp('src')],
                },
                {
                    test: /\.js$/,
                    use: [
                        'babel-loader',
                        {
                            loader: 'thread-loader',
                            options: {
                                workerParallelJobs: 2,
                            },
                        },
                    ],
                    include: [resolveApp('src')],
                },
                {
                    // 处理html模版
                    test: /\.html$/,
                    use: [
                        'html-loader',
                        {
                            loader: 'super-nunjucks-loader',
                            options: {
                                globals: {
                                    ENV: env,
                                    configBase,
                                    IS_PRD: ['prd'].includes(env),
                                    RUNTIME: options.runtime,
                                },
                                path: resolveApp('src/templates'),
                            },
                        },
                    ],
                    include: [resolveApp('src')],
                },
                {
                    test: /\.css$/,
                    use: [cssFinalLoader, 'css-loader'],
                    include: [resolveApp('src'), resolveApp('static/css')],
                },
                // {
                //     test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                //     type: 'asset',
                //     generator: {
                //         filename: 'assets/images/[name].[contenthash:8][ext]?f=webp',
                //         publicPath: () => {
                //             return PUBLIC_PATH_PREFIX;
                //         },
                //     },
                //     parser: {
                //         dataUrlCondition: {
                //             maxSize: 4 * 1024, // 对图片大小限制，超过4k则复制，否则使用base64
                //         },
                //     },
                // },
                // {
                //     test: /\.(woff2?|eot|ttf|otf|iconfont.*svg)(\?.*)?$/,
                //     type: 'asset/resource', //
                //     generator: {
                //         filename: 'assets/fonts/[name][ext]',
                //     },
                // },
            ],
        },
        resolve: {
            extensions: ['.js', '.vue', '.css'],
            modules: [resolveApp('node_modules')],
            alias: {
                '@src': resolveApp('src'),
                '@static': resolveApp('static'),
            },
        },
        externals: {
            'vue-router': 'VueRouter',
            vue: 'Vue',
            vuex: 'Vuex',
        },
        plugins,
        optimization: {
            minimizer: [],
        },
    };
};
