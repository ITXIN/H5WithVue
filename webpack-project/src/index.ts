// import { functionA } from "./moduleA";
// import { home } from "./home";
// import { detail } from "./detail";
const a = (n: number) => console.log(n);
const count: number = 2;
a(count);
// functionA();
// const b = "const test";
// let c = "let test";
if (count > 1) {
  // 异步导入 React.lazy 、Vue defineAsyncComponent
  import(/* webpackChunkName: 'homeChunk' */ "./home").then((module) => {
    module.home();
  });
}
if (count < 1) {
  import(/* webpackChunkName: 'detailChunk' */ "./detail").then((module) => {
    module.detail();
  });
}
// home();
// detail();
