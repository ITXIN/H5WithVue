// webpack loader 一定是一个函数
// 自定义
module.exports = function (source) {
  console.log(source);
  return source.replace(/console\.log\(.*\)/g, "console.log('replace...')");
};
