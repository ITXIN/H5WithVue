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

// import modules = require("../build/modules");

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

// const p = { name: 'ok' };
// const re = {};
// Reflect.set(p, 'age', '10', re);
// console.log('🚀 ~ p:', p, re);
// function makeArrayReactive(arr) {
//     const observers = [];

//     // 拦截 push 方法
//     const originalPush = arr.push;
//     Object.defineProperty(arr, 'push', {
//         value: function (...items) {
//             console.log('🚀 ~ push push:', arr);
//             console.log('🚀 ~ push items:', items);
//             const result = originalPush.apply(this, items);
//             console.log('🚀 ~ push observers1:', observers);
//             // 通知所有观察者
//             observers.forEach(observer => observer(this));
//             console.log('🚀 ~ push this:', this);
//             console.log('🚀 ~ push observers2:', observers);
//             console.log('🚀 ~ push result:', result);
//             return result;
//         },
//     });

//     // 添加观察者
//     function observe(observer) {
//         console.log('🚀 ~ observe:', observer);
//         observers.push(observer);
//     }

//     // 返回增强后的数组和观察函数
//     return {
//         array: arr,
//         observe,
//     };
// }

// // 使用示例
// const { array, observe } = makeArrayReactive([]);

// observe(function (updatedArray) {
//     console.log('Array updated:', updatedArray);
// });

// array.push(1, 2, 3); // 控制台输出: Array updated: [1, 2, 3]

// function makeArrayReactive(arr) {
//     const observers = [];

//     const proxyArr = new Proxy(arr, {
//         set(target, key, value, receiver) {
//             const result = Reflect.set(target, key, value, receiver);
//             observers.forEach(observer => observer(target));
//             return result;
//         },
//     });
//     function observe(observer) {
//         observers.push(observer);
//     }
//     return {
//         array: proxyArr,
//         observe,
//     };
// }

// const { array, observe } = makeArrayReactive([]);
// observe(function (updatedArray) {
//     console.log('Array updated:', updatedArray);
// });
// array.push(1, 2, 3);
// array[0] = 4;
// array.pop();
// const arrCommon = require('./array');
// console.log('🚀 ~ arrComm:', arrCommon('type test'));
// function testCommon(params) {
//     console.log('🚀 ~ testCommon ~ params:', params);
//     // arrCommon('testCommon');
//     return params;
// }
// module.exports = testCommon;
// const { name } = require('./typeScriptTest');
// import { name } from './typeScriptTest';
// console.log('🚀 ~ name:', name);
// const map = new Map([
//     ['user', 'xiaoru'],
//     ['age', 18],
// ]);
// map.set('name', 'dfas');
// map.set({ name: 'test' }, 'kkk');
// console.log('🚀 ~ map:', map);
// const arr = [1, 2, 3, 5, 6, 2, 1];
// const arr2 = [...new Set(arr)];
// console.log('🚀 ~ arr2:', arr2);

// function strong(target) {
//     target.AK = true;
// }

// class soldier {}
// import { name, obj } from './typeScriptTest';
// console.log('🚀 ~ name:', name, obj);
// const obj1 = { name: 'kkk' };
// const obj2 = { age: '12' };
// const weakSet = new WeakSet([obj1, obj2]);
// console.log('🚀 ~ weakSet:', weakSet);

// console.log('🚀 ~ weakSet:', weakSet);
// const f = () => {
//     // const re = { ...rest };
//     // console.log('🚀 ~ f ~ re:', ...rest);
//     // return re;
// };
// const eventEmitter = require('events');
// class MyEmitter extends eventEmitter {}
// const myEmitter = new MyEmitter();
// myEmitter.on('event', function (a, b) {
//     console.log('🚀 ~ a, b:', a, b);
// });
// myEmitter.emit('event', 'a', 'b');

// class EventEmitter {
//     constructor() {
//         this.events = {};
//     }

//     on(type, handler) {
//         if (!this.events[type]) {
//             this.events[type] = [];
//         }
//         this.events[type].push(handler);
//     }

//     addListener(type, handler) {
//         this.on(type, handler);
//     }

//     prependListener(type, handler) {
//         if (!this.events[type]) {
//             this.events[type] = [];
//         }
//         this.events[type].unshift(handler);
//     }

//     removeListener(type, handler) {
//         if (!this.events[type]) {
//             return;
//         }

//         this.events[type] = this.events[type].filter(item => item !== handler);
//     }

//     off(type, handler) {
//         this.removeListener(type, handler);
//     }

//     emit(type, ...args) {
//         if (this.events[type]) {
//             // this.events[type].forEach(callback => callback(args));
//             this.events[type].forEach(element => {
//                 Reflect.apply(element, this, args);
//             });
//         }
//     }

//     once(type, handler) {
//         const onceHandler = function (...args) {
//             handler(...args);
//             this.off(type, onceHandler);
//         };
//         this.on(type, onceHandler);
//     }
// }
// const arrayLike = {
//     0: 'a',
//     1: 'b',
//     2: 'c',
//     length: 3,
// };
// const arr2 = Array.from(arrayLike);
// console.log('🚀 ~ arr2:', arr2);

// function defineReactive(obj, key, val, cb) {
//     // 确保属性是响应式的
//     const dep = new Dep();

//     // 递归地将对象转换为响应式对象
//     observe(val);

//     // 使用 Object.defineProperty 来定义响应式属性
//     Object.defineProperty(obj, key, {
//         enumerable: true,
//         configurable: true,
//         get: function reactiveGetter() {
//             // 当属性被访问时，通知依赖
//             Dep.target && dep.depend();
//             return val;
//         },
//         set: function reactiveSetter(newVal) {
//             // 当属性值变化时，更新值并通知依赖
//             if (newVal === val) return;
//             val = newVal;
//             observe(newVal); // 确保新值也是响应式的
//             dep.notify(); // 通知所有依赖进行更新
//         },
//     });
// }

// // 依赖收集类
// class Dep {
//     constructor() {
//         this.subscribers = new Set();
//     }

//     depend() {
//         if (Dep.target) {
//             this.subscribers.add(Dep.target);
//         }
//     }

//     notify() {
//         this.subscribers.forEach(sub => {
//             sub.update();
//         });
//     }
// }

// // 全局的 Dep.target，用于依赖收集
// Dep.target = null;

// // 观察一个对象，使其所有属性都是响应式的
// function observe(value) {
//     if (!isObject(value)) {
//         return;
//     }
//     Object.keys(value).forEach(key => {
//         defineReactive(value, key, value[key]);
//     });
// }

// function isObject(value) {
//     return value !== null && typeof value === 'object';
// }

// // 示例使用
// const data = { name: 'Vue', age: 20 };
// observe(data);

// // 模拟 Vue 的 watcher 机制
// function Watcher(cb) {
//     Dep.target = this;
//     cb();
//     Dep.target = null;
// }

// new Watcher(function () {
//     console.log('Watcher'); // 触发 getter，进行依赖收集
//     // 假设这里还有其他逻辑
// });

// // 修改数据，触发 setter，进行更新
// data.name = 'React';
// data.obj = { name: 'React' };
// console.log('🚀 ~ data:', data);

// function observe(data) {
//     if (!data || typeof data !== 'object') {
//         return;
//     }
//     Object.keys(data).forEach(key => {
//         const value = data[key];
//         observeValue(data, key, value);
//     });
// }

// function observeValue(obj, key, value) {
//     observe(value);
//     Object.defineProperty(obj, key, {
//         enumerable: true,
//         configurable: true,
//         get() {
//             return value;
//         },
//         set(newValue) {
//             if (newValue === value) {
//                 return;
//             }
//             value = newValue;
//             console.log(`属性 ${key} 的值从 ${value} 变为 ${newValue}`);
//             observe(newValue);
//         },
//     });
// }

// const data = {
//     message: 'Hello Vue!',
//     count: 0,
// };

// observe(data);

// data.message = 'New message';
// data.count = 10;
// data.key = {
//     key: 'value',
// };
// console.log(data);
// data.key.key = 'new value';
// console.log(data);

// // 简化版的Vue2响应式系统核心代码
// function defineReactive(obj, key, val) {
//     // 对象属性的Observer
//     const dep = new Dep();

//     // 递归的convert属性
//     convert(val);

//     Object.defineProperty(obj, key, {
//         enumerable: true,
//         configurable: true,
//         get: function reactiveGetter() {
//             console.log('getter', val);
//             // 添加依赖
//             Dep.target && dep.addSub(Dep.target);
//             return val;
//         },
//         set: function reactiveSetter(newVal) {
//             console.log('🚀 ~ reactiveSetter ~ newVal:', newVal);
//             if (newVal === val) return;
//             val = newVal;
//             // 新值可能是个对象，递归转换
//             convert(newVal);
//             // 触发依赖的更新
//             dep.notify();
//         },
//     });
// }

// // 转换对象的属性为响应式
// function convert(obj) {
//     if (obj && typeof obj === 'object') {
//         Object.keys(obj).forEach(key => {
//             defineReactive(obj, key, obj[key]);
//         });
//     }
// }

// // 依赖收集类
// class Dep {
//     constructor() {
//         this.subs = [];
//     }

//     addSub(sub) {
//         this.subs.push(sub);
//     }

//     notify() {
//         this.subs.forEach(sub => {
//             sub();
//         });
//     }
// }

// // 全局Dep.target设置
// Dep.target = null;

// // 使用示例
// const data = { name: 'Vue' };
// convert(data);

// // 观察者
// function watcher(fn) {
//     Dep.target = fn;
//     fn(); // 触发依赖收集
//     Dep.target = null;
// }

// // 观察data的变化
// watcher(() => {
//     console.log('data.name changed:', data.name);
// });

// // 修改数据，触发watcher
// data.name = 'Vue 2';
// function reactive(target) {
//     if (!target || typeof target !== 'object') {
//         return target;
//     }

//     const deepMap = new WeakMap();
//     function deepReactive(obj) {
//         if (deepMap.has(obj)) {
//             return obj;
//         }
//         deepMap.set(obj, true);
//         const handler = {
//             get(target, key, receiver) {
//                 const value = Reflect.get(target, key, receiver);
//                 console.log('get:', key, value, target);

//                 if (typeof value === 'object' && value !== null && !deepMap.has(value)) {
//                     return deepReactive(value);
//                 }
//                 return value;
//             },
//             set(target, key, value, receiver) {
//                 const result = Reflect.set(target, key, value, receiver);
//                 console.log('set:', key, value, target);
//                 return result;
//             },
//             deleteProperty(target, key) {
//                 console.log('🚀 ~ deleteProperty ~ target, key:', target, key);
//                 const result = Reflect.deleteProperty(target, key);
//                 return result;
//             },
//         };

//         return new Proxy(obj, handler);
//     }
//     return deepReactive(target);
// }
// const obj = {
//     name: 'hello',
//     age: 24,
//     data: {
//         code: 122,
//         list: [{ key: 'ee' }],
//     },
// };
// const proxyObj = reactive(obj);
// delete proxyObj.age;
// proxyObj.name = 'change jack';
// proxyObj.data.code = 400;
// console.log(proxyObj.data.code);
// obj.name = 'change jack1';

// function debounce(fn, wait = 50) {
//     let timer = null;
//     return function (...args) {
//         if (timer) clearTimeout(timer);
//         timer = setTimeout(() => {
//             fn.apply(this, args);
//         }, wait);
//     };
// }

// function throttle(fn, wait) {
//     let timer = null;
//     let preTimer = 0;
//     return function (...args) {
//         const now = +new Date();
//         if (now - preTimer < wait) {
//             if (timer) clearTimeout(timer);
//             timer = setTimeout(() => {
//                 preTimer = now;
//                 fn.apply(this, args);
//             }, wait);
//         } else {
//             preTimer = now;
//             fn.apply(this, args);
//         }
//     };
// }
// function create() {
//     const constr = [].shift.call(arguments);
//     const obj = Object.create(constr.prototype);
//     const result = constr.apply(obj, arguments);
//     return typeof result === 'object' ? result : obj;
// }
// function deepCopy(obj) {
//     if (obj === null || typeof obj !== 'object') {
//         return obj;
//     }
//     let copy;
//     if (Array.isArray(obj)) {
//         copy = [];
//         obj.forEach(item => {
//             copy.push(deepCopy(item));
//         });
//     } else if (obj instanceof Date) {
//         copy = new Date(obj);
//     } else if (obj instanceof RegExp) {
//         copy = new RegExp(obj.source, obj.flags);
//     } else {
//         copy = {};
//         Object.keys(obj).forEach(key => {
//             if (Object.prototype.hasOwnProperty.call(obj, key)) {
//                 copy[key] = deepCopy(obj[key]);
//             }
//         });
//     }
//     return copy;
// }

// function hasCycle(obj) {
//     const stack = [obj];
//     const visited = new Set();
//     while (stack.length > 0) {
//         const current = stack.pop();
//         if (visited.has(current)) {
//             return true;
//         }
//         visited.add(current);
//         for (const key in current) {
//             const value = current[key];
//             if (typeof value === 'object' && value !== null) {
//                 stack.push(value);
//             }
//         }
//     }
//     return false;
// }
// let num = 1;
// function add() {
//     num++;
//     console.log('add', num);
// }
// module.exports = {
//     num,
//     add,
// };

// export const obj = {
//     num: 1,
// };
// // 导出单个变量
// export const name = 'ES6 Module';

// // 导出函数
// export let num = 1;
// export function sayHello() {
//     num++;
//     console.log('Hello from ES6 module!', num);
// }

// // 导出类
// export class Person {
//     constructor(name) {
//         this.name = name;
//     }
// }

// let counter = 3;
// function incCounter() {
//     counter++;
// }
// module.exports = {
//     counter,
//     // get counter() {
//     //     return counter;
//     // },
//     incCounter,
// };
// var a = 100;

// function test(arg) {
//     const arg1 = '22';
//     // a = 10;
//     // console.log('a0:', a);
//     // a = 20;
// }
// console.log('a1:', a);
// test();
// var a = 123;
// if (true) {
//     a = 456;
//     let a;
// }
// console.log('a', a);

// let a = 200;
// const b = a;
// console.log(a, b);
// a = 300;
// console.log(a, b);
// let counter = '3';
// function changeDatatype(num) {
//     counter = num;
// }
// const obj = {
//     name: 'jack',
//     age: 19,
// };
// function changeObj({ name, age }) {
//     obj.name = name;
//     console.log('🚀 ~ changeObj ~ obj:', obj);
//     obj.age = age;
// }
// const arr = ['default'];
// function changeArr(...args) {
//     arr.push(...args);
// }
// setTimeout(() => {
//     changeDatatype('4');
//     changeObj({ name: 'new name', age: 20 });
//     changeArr('1', '2', 3);
//     console.log('module内部 改变 counter:', counter);
//     console.log('module内部 改变 obj:', obj);
//     console.log('module内部 改变 arr:', arr);
// }, 2000);

// module.exports = {
//     counter,
// obj,
// arr,
// changeDatatype,
// changeArr,
// changeObj,
// };

// let counter = '3';
// function changeDatatype(num) {
//     counter = num;
//     console.log('module内部 改变 counter:', counter);
// }
export const obj = {
    name: 'jack',
    age: 19,
};
export function changeObj({ name, age }) {
    obj.name = name;
    obj.age = age;
    console.log('改变 obj:', obj);
}
export const arr = ['default'];
export function changeArr(...args) {
    arr.push(...args);
    console.log('改变 arr:', arr);
}
setTimeout(() => {
    changeObj({ name: 'new name', age: 20 });
    changeArr('1', '2', 3);
}, 2000);

// export default {
//     obj,
//     arr,
//     changeArr,
//     changeObj,
// };
// module.exports = {
//     obj,
//     arr,
//     changeArr,
//     changeObj,
// };
