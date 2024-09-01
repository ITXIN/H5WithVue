const http = require("http");
const options = {
  hostname: "rsb-stg.pingan.com.cn",
  port: 8080,
  path: "/bron/coss/cust/app/v2/getWindowData?tabCode=JJSC&channelCode=C0012&access_source=H5",
  method: "GET",
};

const req = http.request(options, (res) => {
  console.log(`状态码: ${res.statusCode}`);

  res.on("data", (chunk) => {
    process.stdout.write(chunk);
  });

  res.on("end", () => {
    console.log("响应结束");
  });
});

req.on("error", (error) => {
  console.error(`请求错误: ${error.message}`);
});

req.end();
