// class Queue<T> {
//   private data: T[] = [];
//   constructor() {
//     // this.data = [];
//   }
//   // private data: any[];
//   // let data = [];
//   push = (item: T) => this.data.push(item);
//   pop = (): T | undefined => this.data.shift();
// }

// const queue = new Queue<number>();

// queue.push(0);
// // queue.push("1");
// console.log("=====", queue);

// type Pick<T, K extends keyof T> = {
//   [P in K]: T[P];
// };

// interface A {
//   name: string;
//   age: number;
// }
// type A1 = Pick<A, "name" | "age">;

// interface User {
//   name: string;
//   age: number;
// }
// type Func = (user: User) => void;
const customPlugin = require("../../custom-plugin.js");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse");
const generate = require("@babel/generator");

const code = "customFunc();";
const ast = parser.parse(code);
traverse.default(ast, customPlugin()); // 调用自定义插件进行转换
const output = generate.default(ast);

console.log(output.code); // 输出转换后的代码
