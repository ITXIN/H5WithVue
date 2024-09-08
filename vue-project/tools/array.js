// 1. 拷贝
// export function deepCopy(obj) {
//     if (obj === null || typeof obj !== 'object') {
//         return obj;
//     }
//     let copy;
//     if (Array.isArray(obj)) {
//         copy = [];
//         for (let index = 0; index < obj.length; index++) {
//             copy[index] = deepCopy(obj[index]);
//         }
//     } else if (obj instanceof Date) {
//         copy = new Date(obj);
//     } else if (obj instanceof RegExp) {
//         copy = new RegExp(obj.source, obj.flags);
//     } else {
//         copy = {};
//         for (const key in obj) {
//             if (Object.prototype.hasOwnProperty.call(obj, key)) {
//                 copy[key] = deepCopy(obj[key]);
//             }
//         }
//     }

//     return copy;
// }

// const original = {
//     number: 42,
//     string: 'hello',
//     date: new Date(),
//     regex: /abc/g,
//     array: [1, 2, { nested: 'value' }],
//     object: { key: 'value' },
// };

// const copied = deepCopy(original);

// copied.array[0] = 'changed  ';
// console.log('🚀 ~ copied:', copied);
// console.log('🚀 ~ original:', original);

// const elements = ['Fire', 'Air', 'Water', { name: 'water' }];
// const a = [];
// const b = undefined;
// Reflect.set(a, 'name', 'water');
// console.log('dddddddd', a, a.values(), a.length);

// function logMethod(target, name, descriptor) {
//     const originalMethod = descriptor.value;
//     descriptor.value = function (...args) {
//         console.log(`Calling method ${name} with arguments ${args}`);
//         const result = originalMethod.apply(this, args);
//         console.log(`Method ${name} returned ${result}`);
//         return result;
//     };
//     return descriptor;
// }

// class MyClass {
//     @logMethod
//     myMethod(arg1, arg2) {
//         return arg1 + arg2;
//     }
// }

// const instance = new MyClass();
// instance.myMethod(2, 3);
// console.log('instance', instance);

// function fetchData(callback) {
//     setTimeout(() => {
//         const data = 'callback data test';
//         callback && callback(data);
//     }, 1000);
// }

// fetchData(data => {
//     console.log('data', data);
// });

// class EventEmitter {
//     constructor() {
//         this.events = {};
//     }

//     on(eventName, callback) {
//         if (!this.events[eventName]) {
//             this.events[eventName] = [];
//         }
//         this.events[eventName].push(callback);
//     }

//     emit(eventName, ...args) {
//         if (this.events[eventName]) {
//             const argsTemp = [...args];
//             this.events[eventName].forEach(callback => callback(argsTemp));
//         }
//     }

//     off(eventName, callback) {
//         if (this.events[eventName]) {
//             this.events[eventName] = this.events[eventName].filter(item => item !== callback);
//         }
//     }
// }
// const eventEmitter = new EventEmitter();
// function asyncOperation() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Async operation completed!');
//         }, 2000);
//     });
// }

// async function performAsyncWithPubSub() {
//     eventEmitter.on('operationCompleted', result => {
//         console.log(result);
//     });

//     const result = await asyncOperation();
//     eventEmitter.emit('operationCompleted', result);
// }

// performAsyncWithPubSub();

// const fetchRes = res => {
//     return new Promise((resolve, reject) => {
//         // resolve(res);
//         const error = 'error';
//         reject(error);
//     })
//         .then(data => {
//             return data;
//         })
//         .catch(error => {
//             console.log('🚀 ~ fetchRes ~ error:', error);
//         });
// };
// const fetchAll = () => {
//     return Promise.all([fetchRes('res1'), fetchRes('res2')])
//         .then(data => {
//             console.log('🚀 ~ fetchAll ~ data:', data);
//         })
//         .catch(error => {
//             console.log('🚀 ~ fetchAll ~ error:', error);
//         })
//         .finally(() => {
//             console.log('🚀 ~ .finally ~ done:');
//         });
// };
// fetchAll();

// function test() {
//     console.log('🚀 ~ test ~ arguments1:', arguments);
//     const Con = [].shift.call(arguments);
//     console.log('🚀 ~ test ~ arguments2:', arguments);
//     console.log('🚀 ~ test ~ Con:', Con);
// }
// test('32', 'kk', '劳动力');

// function create() {
//     console.log('🚀 ~ create ~ arguments1:', arguments);
//     // 1、获得构造函数，同时删除 arguments 中第一个参数
//     const Con = [].shift.call(arguments);
//     console.log('🚀 ~ create ~ arguments2:', arguments);
//     console.log('🚀 ~ create ~ Con:', Con);
//     // 2、创建一个空的对象并链接到原型，obj 可以访问构造函数原型中的属性
//     const obj = Object.create(Con.prototype);
//     // var obj = new Object()
//     // obj.__proto_ = Con.prototype

//     // 3、绑定 this 实现继承，obj 可以访问到构造函数中的属性
//     const ret = Con.apply(obj, arguments); // 处理 构造函数 返回值
//     console.log('🚀 ~ create ~ obj:', obj);
//     console.log('🚀 ~ create ~ ret:', ret);
//     // 4、优先返回构造函数返回的对象
//     return ret instanceof Object ? ret : obj;
// }
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// const person = create(Person, 'name', 'age');
// console.log('🚀 ~ person:', person);

// function debounce(fn, wait = 50, immediate) {
//     let timer = null;
//     return function (...args) {
//         if (timer) clearTimeout(timer);
//         // ------ 新增部分 start ------
//         // immediate 为 true 表示第一次触发后执行
//         // timer 为空表示首次触发
//         if (immediate && !timer) {
//             fn.apply(this, args);
//         }
//         // ------ 新增部分 end ------

//         timer = setTimeout(() => {
//             fn.apply(this, args);
//         }, wait);
//     };
// }

// function myDebounce(fn, wait = 50, immediate) {
//     let timer = null;
//     return function (...args) {
//         if (timer) clearTimeout(timer);
//         if (immediate && !timer) {
//             fn.apply(this, args);
//         }
//         timer = setTimeout(() => {
//             fn.apply(this, args);
//         }, wait);
//     };
// }

// DEMO
// // 执行 debounce 函数返回新函数
// const betterFn = debounce(() => console.log('fn 防抖执行了'), 1000, true);
// // 第一次触发 scroll 执行一次 fn，后续只有在停止滑动 1 秒后才执行函数 fn
// document.addEventListener('scroll', betterFn);

// function add(a) {
//     function sum(b) {
//         // 使用闭包
//         a = a + b; // 累加
//         return sum;
//     }
//     sum.toString = function () {
//         // 重写toString()方法
//         return a;
//     };
//     return sum; // 返回一个函数
// }

// add(1); // 1
// console.log('🚀 ~ add(1):', add(1).toString());
// add(1)(2); // 3
// console.log('🚀 ~ add(1)(2):', add(1)(2).toString());
// add(1)(2)(3); // 6
// add(1)(2)(3)(4); // 10

// class Singleton {
//     static instance;
//     constructor(parameters) {
//         console.log(parameters);
//         this.data = { ...parameters };
//     }

//     static getInstance(parameters) {
//         if (!Singleton.instance) {
//             Singleton.instance = new Singleton(parameters);
//         }
//         return Singleton.instance;
//     }

//     someMethod() {
//         console.log('someMethod');
//     }
// }

// const sig1 = Singleton.getInstance('1');
// const sig2 = Singleton.getInstance('2');
// sig2.data = '2';
// console.log('🚀 ~ sig1 === sig2:', sig1 === sig2);
// console.log('🚀 ~ sig1:', sig1.data);
// console.log('🚀 ~ sig2:', sig2.data);

const testCommon = require('./common');
function arrCommon(params) {
    testCommon('arrCommon');
    console.log('🚀 ~ arrCommon ~ params:', params);
    return params;
}

module.exports = arrCommon;
