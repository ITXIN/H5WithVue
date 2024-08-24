const { type } = require("os");
const path = require("path");
const { cache } = require("webpack");
// webpack-bundle-analyzer是一个用于分析 Webpack 打包输出的工具。它可以帮助你可视化地了解项目打包后的文件大小、组成以及模块之间的依赖关系，从而有助于优化项目的构建输出
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  mode: "production", //production 如果是development 则产物会有构建,方便
  entry: "./src/index.ts", // 入口文件
  output: {
    // 输出配置
    path: path.resolve(__dirname, "./dist"),
  },
  devtool: false,
  // optimization: {
  //   minimize: true, //启用代码压缩，这有助于去除未使用的代码
  // },
  plugins: [new BundleAnalyzerPlugin()],
  module: {
    rules: [
      {
        test: /\.(ts|js)$/,
        include: path.resolve("src"),
        use: [
          {
            // 多线程打包提升构建速度
            loader: "thread-loader",
            // 有同样配置的 loader 会共享一个 worker 池
            options: {
              // 产生的 worker 的数量，默认是 (cpu 核心数 - 1)，或者，
              // 在 require('os').cpus() 是 undefined 时回退至 1
              workers: require("os").cpus() - 1,

              // 一个 worker 进程中并行执行工作的数量
              // 默认为 20
              workerParallelJobs: 50,

              // 额外的 node.js 参数
              workerNodeArgs: ["--max-old-space-size=1024"],

              // 允许重新生成一个僵死的 work 池
              // 这个过程会降低整体编译速度
              // 并且开发环境应该设置为 false
              poolRespawn: false,

              // 闲置时定时删除 worker 进程
              // 默认为 500（ms）
              // 可以设置为无穷大，这样在监视模式(--watch)下可以保持 worker 持续存在
              poolTimeout: 2000,

              // 池分配给 worker 的工作数量
              // 默认为 200
              // 降低这个数值会降低总体的效率，但是会提升工作分布更均一
              poolParallelJobs: 50,

              // 池的名称
              // 可以修改名称来创建其余选项都一样的池
              name: "my-pool",
            },
          },
        ],
      },
      {
        test: /\.(ts|js)$/,
        use: [
          // {
          //   // 自定义
          //   loader: path.resolve(__dirname, "./loaders/replaceLoader.js"),
          //   options: {
          //     name: "world",
          //   },
          // },

          {
            loader: "babel-loader",
            // options: {
            // 一组plugins的组合,也可以放到babel.config.js中
            // presets: ["@babel/preset-env"],
            // },
          },
        ],
      },
    ],
  },
  resolve: {
    // 解析规则
    extensions: [".ts", ".js"],
  },
  externals: {
    // 使用三方库
    lodash: "_",
  },
  cache: {
    // 使用缓存，提升打包数度
    type: "filesystem",
    allowCollectingMemory: true,
    // buildDependencies: {
    //   config: [__filename],
    // },
  },
};
