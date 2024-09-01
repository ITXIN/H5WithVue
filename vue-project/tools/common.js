// const mock = require('../mock/test.json');
// console.log('mock', mock);
// function test() {
//     const a = 'outa';
//     const b = 'd';
//     if (b) {
//         // eslint-disable-next-line no-use-before-define
//         console.log('a ', a);
//         // const a = 'in';
//     }
// }

// test();
// const str = 'fdlsjafldjlflafdjflsafld';
// const names = ['Alice', 'Bob', 'Tiff', 'Alice', 'Tiff'];
// const names = str.split('');
// const names = [...str];
// const names = Array.from(str);
// const countedNames = names.reduce((allNames, name) => {
//     if (name in allNames) {
//         allNames[name]++;
//     } else {
//         allNames[name] = 1;
//     }
//     return allNames;
// }, {});
// console.log(countedNames);

// function Fn() {
//     this.name = 'testname';
//     return null;
// }
// const fn1 = new Fn();
// console.log('🚀 ~ fn1:', fn1.name);
// const uri = 'https://example.com/page?param1=value1&param2=value2';
// console.log('🚀 ~ uri:', encodeURIComponent(uri));
// console.log(encodeURI(uri));

// const obj1 = {};
// const obj2 = {};
// obj1.child = obj2;
// obj2.child = obj1;

// try {
//     JSON.stringify(obj1);
//     console.log('不存在循环引用');
// } catch (error) {
//     console.log('存在循环引用', error);
// }

// function hasCycle(obj) {
//     const visited = new Set();
//     const stack = [obj];
//     while (stack.length > 0) {
//         const current = stack.pop();
//         if (visited.has(current)) {
//             return true;
//         }
//         visited.add(current);
//         for (const key in current) {
//             if (typeof current[key] === 'object') {
//                 stack.push(current[key]);
//             }
//         }
//     }
// }
// const obj = {};
// console.log('🚀 ~ Object.prototype.toString.call(obj);:', Object.prototype.toString.call(obj));

// export function Persion() {}
// const p1 = new Persion();
// console.log('🚀 ~ p1:', p1.constructor, Persion);
// test('okk');
// function test() {
//     console.log('ds', arguments);
// }
// const fn = function (params) {
//     console.log('🚀 ~ fn ~ params:', params);
// };
// fn('dsa');

// globalThis.name = 'global';
// const obj = {
//     name: 'John',
//     sayHello: () => {
//         console.log('🚀 ~ this:', this);
//         console.log(`Hello, my name is ${this.name}`); // 这里的 this 不是 obj 对象
//     },

//     sayHelloNormal: function () {
//         console.log(`Hello, my name is ${this.name}`); // 这里的 this 是 obj 对象
//     },
// };
// obj.sayHello = obj.sayHello.bind(obj);
// obj.sayHello();
// obj.sayHelloNormal();
// const obj = {
//     name: 'John',
//     sayHello: () => {
//         console.log(`Hello, my name is ${this.name}`);
//     },
//     sayHelloNormal: function () {
//         console.log(`Hello, my name is ${this.name}`);
//     },
// };

// // 显式绑定 this
// obj.sayHello = obj.sayHello.bind(obj);

// obj.sayHello(); // 输出 "Hello, my name is John"
// obj.sayHelloNormal(); // 输出 "Hello, my name is John"
// function curry(fn) {
//     return function curriedFn() {
//         const args = Array.prototype.slice.call(arguments);
//         if (args.length < fn.length) {
//             return function () {
//                 return curriedFn.apply(null, args.concat(Array.prototype.slice.call(arguments)));
//             };
//         }
//         return fn.apply(null, args);
//     };
// }

// function add(x, y) {
//     return x + y;
// }

// const curryAdd = curry(add);
// const curryX = curryAdd(1);
// const b = curryX(1);
// console.log('🚀 ~ b:', b);

// 使用set函数和get函数来监视对象属性的读取和设置
// const obj5 = { a: 1 };
// const handler = {
//     get(target, key, receiver) {
//         console.log('🚀 ~ get ~ target, key, receiver:', target, key, receiver);
//         // console.log(`Getting property ${key}`);
//         return Reflect.get(target, key, receiver);
//     },
//     set(target, key, value, receiver) {
//         console.log('🚀 ~ set ~ target, key, value, receiver:', target, key, value, receiver);
//         // console.log(`Setting property ${key} to ${value}`);
//         return Reflect.set(target, key, value, receiver);
//     },
// };
// const proxy = new Proxy(obj5, handler);
// proxy.a; // 输出：Getting property a
// proxy.a = 2; // 输出：Setting property a to 2

// await 实现原理
// function awaitFun(generatorFun) {
//     const g = generatorFun();
//     function handleResult(result) {
//         if (result.done) {
//             return Promise.resolve(result.value);
//         }
//         return Promise.resolve(result.value).then(res => handleResult(g.next(res)));
//     }

//     try {
//         return handleResult(g.next());
//     } catch (error) {
//         Promise.reject(error);
//     }
// }

// let a;
// console.log('====a1', a);
// a = '3';
// console.log('====a2', a);
// a = 4;
// console.log('====a3', a);

// const obj = { a: 1, b: 2 };
// Object.prototype.c = 3;
// for (const key in obj) {
//     console.log(key); // 输出 "a"、"b" 和 "c"
// }
// 模板字符串
// const tagFn = (temp, ...args) => {
//     console.log('🚀 ~ tagFn:', temp, ...args);
//     let str = '';
//     for (let index = 0; index < temp.length; index++) {
//         str += temp[index] + args[0];
//     }
//     return str;
// };
// const a = 'jfldslf';
// const b = 'df浪费了都是';
// const q = tagFn`fdlsfl hello： ${a},发多少：${b}`;
// console.log('🚀 ~ q:', q);

const p = { name: 'ok' };
const re = {};
Reflect.set(p, 'age', '10', re);
console.log('🚀 ~ p:', p, re);
