module.exports = function customPlugin(babel) {
  const { types: t } = babel; // 获取 Babel types API

  return {
    name: "custom-plugin", // 插件名称
    visitor: {
      // 访问者对象，用于访问抽象语法树节点
      CallExpression(path, state) {
        // 如果调用的函数名是 "customFunc"，则在函数调用前添加一条日志
        if (path.node.callee.name === "customFunc") {
          const logStatement = t.StringLiteral("Calling customFunc...");
          path.insertAfter(t.ExpressionStatement(logStatement));
        }
      },
    },
  };
};
