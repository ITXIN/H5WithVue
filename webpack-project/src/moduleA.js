// // moduleA.js
// export const functionA = () => {
//   console.log("Function A");
// };

// export const functionB = () => {
//   console.log("Function B");
// };
const express = require("express");
const app = express();

// 使用内置中间件，解析 JSON 请求体
app.use(express.json());

// 使用第三方中间件，记录请求日志
const morgan = require("morgan");
app.use(morgan("combined"));

// 自定义中间件，验证用户身份
const authMiddleware = (req, res, next) => {
  console.log("Authenticating request...", req, res, next);
  // 假设这里进行用户身份验证逻辑
  if (req.headers.authorization === "Bearer valid-token") {
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};
app.use(authMiddleware);

// 路由处理函数
app.get("/api/data", (req, res) => {
  res.send("Hello, World!");
});

// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });

/**
 * 使用 http 模块创建一个简单的服务器
 */
const http = require("http");

// 创建服务器
const server = http.createServer((req, res) => {
  // 设置响应头
  res.setHeader("Content-Type", "text/plain");
  // console.log("🚀 ~ server ~ req:", JSON.stringify(res));
  console.log("🚀 ~ server ~ res:", res);
  // 根据请求路径返回不同的响应
  if (req.url === "/") {
    res.end("Hello, World!");
  } else if (req.url === "/about") {
    res.end("This is the about page.");
  } else {
    res.statusCode = 200;
    res.end("res");
  }
});

// 指定服务器监听的端口号
const port = 8080;
server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
