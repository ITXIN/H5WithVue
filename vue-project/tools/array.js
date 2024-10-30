// // function findPairs(arr, target) {
// //     const pairs = [];
// //     const visited = new Set();
// //     for (let i = 0; i < arr.length; i++) {
// //         if (visited.has(arr[i])) continue;
// //         for (let j = i + 1; j < arr.length; j++) {
// //             if (arr[i] + arr[j] === target) {
// //                 pairs.push([i, j]);
// //             }
// //         }
// //         visited.add(arr[i]);
// //     }
// //     return pairs;
// // }

// // function foo() {
// //     console.log(this.a, globalThis.a);
// // }

// // const obj = {
// //     a: 1,
// //     foo: () => {
// //         console.log(this.a);
// //     },
// // };
// // const a = 3;
// // const obj2 = obj.foo;
// // obj.foo();
// // obj2();

// console.log('0');

// setTimeout(() => {
//     console.log('7');
// }, 0);
// setTimeout(() => {
//     console.log('13');
// }, 0);
// const promise = new Promise((resolve, reject) => {
//     console.log('1');
//     setTimeout(() => {
//         console.log('15');
//         resolve('res');
//     }, 0);
//     console.log('2');
// })
//     .then(res => {
//         console.log('3');
// return new Promise((resolve, reject) => {
//     resolve();
// })
//     .then(res => {
//         console.log('9');
//     })
//     .finally(() => {
//         console.log('10');
//     });
//     })
//     .then(() => {
//         console.log('4');
//         return new Error('error');
//     })
//     .catch(err => {
//         console.log('5', err);
//     })
//     .finally(() => {
//         console.log('6');
//     });

// setTimeout(() => {
//     console.log('11');
// }, 0);
// const p = Promise.resolve().then(res => {
//     console.log('12');
// });
// p.finally(() => {
//     console.log('14');
// });
// console.log('8');

// function toStr(str) {
//     const arr = Array.from(str).map(item => {
//         console.log(item);
//         return item === item.toUpperCase() ? item.toLowerCase() : item.toUpperCase();
//     });
//     return arr.join('');
// }
// console.log(toStr('BeT'));

// const handleData = data => {
//     const { user } = data || {};
//     const { id, name } = user || {};
//     console.log('🚀 ~ handleData ~ id, name:', id, name);
// };
// handleData(null);
// const handleData = data => {
//     const { userList } = data;
//     const newList = userList?.map?.(item => item.name);
//     console.log('🚀 ~ handleData ~ newList:', newList);
// };
// handleData({ userList: null });
// handleData({ userList: 123 });

// const handleData = data => {
//     const { userList } = data;
//     const newList = userList.map(item => item?.name);
//     console.log('🚀 ~ handleData ~ newList:', newList);
// };
// handleData({ userList: [null, undefined] });

// new Promise((resolve, reject) => {
//     resolve('begin');
// })
//     .then(res => {
//         console.log('9', res);
//         return res + ' then handler';
//     })
//     .then(res => {
//         console.log('10', res);
//     })
//     .catch(err => {
//         console.log('11', err);
//     })
//     .finally(() => {
//         console.log('12');
//     });
// const o = undefined;
// if (o) {
//     console.log('1');
// } else {
//     console.log('2');
// }
// const arr = [1, 2, 3];
// const add = () => {
//     arr.push('4');
//     console.log('add', arr);
// };
// add();
// const tem = add;
// tem();
// const name = 'test';
// function foo() {
//     console.log(this.name);
// }
// // console.log(window?.name);
// foo();
// global?.foo();
// console.log(global.name);

// console.log('a.b', typeof null);

// // if (typeof a !== 'undefined') {
// //     console.log('a');
// // }
// Object.prototype.toString.call({});
// function getType(obj) {
//     const type = typeof obj;
//     if (type === 'object') {
//         return Object.prototype.toString.call(obj).slice(8, -1);
//     } else {
//         return type;
//     }
// }
// console.log(getType(1));

// const a = 2;
// function foo() {
//     console.log(a);
// }
// function bar() {
//     const a = 3;
//     foo();
// }
// bar();
// const name = 'test';
// const obj = {
//     name: 'jack',
//     age: 19,
//     foo: function () {
//         console.log('foo', this.name);
//     },
// };

// const fo = obj.foo;
// fo();
// var a = 101;
// const o = {
//     a: 10,
//     b: {
//         a: 11,
//         fn: function () {
//             console.log(this.a);
//             console.log(this);
//         },
//     },
// };
// var j = o.b.fn;
// j.apply(o);
// j();
// const obj = {
//     sayThis: () => {
//         console.log(this);
//     },
// };
// obj.sayThis();
// const globalSay = obj.sayThis;
// globalSay();
// function newCreate() {
//     const constructor = [].shift.call(arguments);
//     const obj = Object.create(constructor.prototype);
//     const result = constructor.apply(obj, arguments);
//     return typeof result === 'object' ? result : obj;
// }
// function testArg(a, b) {
//     console.log(a, b);
//     a.name = 10;
//     b = 20;
//     console.log(a, b);
// }
// const a = {
//         name: 1,
//     },
//     b = 2;
// testArg(a, b);
// console.log(a, b);

// const name = 'lucy';
// const obj = {
//     name: 'martin',
//     say: function () {
//         console.log('name', this.name);
//     },
// };
// setTimeout(obj.say, 0);
// setTimeout(obj.say.bind(obj), 0);
// // obj.say(); // martin this obj

// obj.say.apply(obj, [1, 12]);
// obj.say.call(obj, 1, 2, 3, 4);
// obj.say.bind(obj);
// function getArea(width) {
//     return height => {
//         return width * height;
//     };
// }
// const width = getArea(10);
// console.log(width(20));
// function MyObject(name, message) {
//     this.name = name;
//     this.message = message;
//     this.getName = function () {
//         return this.name;
//     };
//     this.getMessag = function () {
//         return this.message;
//     };
// }

// const obj = new MyObject('martin', 'hello world');

// const obj1 = new MyObject('martin1', 'hello world1');
// obj.name = 'jack';
// console.log(obj1.getName());
// console.log(obj.getName());

// function throttled(fn, delay = 500) {
//     let timer = null;
//     let starttime = Date.now();
//     return function () {
//         const curTime = Date.now();
//         const remaining = delay - (curTime - starttime);
//         const context = this;
//         const args = arguments;
//         clearTimeout(timer);
//         if (remaining <= 0) {
//             fn.apply(context, args);
//             starttime = Date.now();
//         } else {
//             timer = setTimeout(fn, remaining);
//         }
//     };
// }

// function debounce(fn, delay = 100, immediate) {
//     let timeout;
//     return function () {
//         const context = this;
//         const args = arguments;
//         timeout && clearTimeout(timeout);
//         if (immediate) {
//             // immediate 为 true，第一次调用时会立即执行 fn，之后在 delay 时间内不再执行，直到 delay 时间过后重新计时。
//             const callNow = !timeout;
//             timeout = setTimeout(() => {
//                 timeout = null;
//             }, delay);
//             callNow && fn.apply(context, args);
//         } else {
//             timeout = setTimeout(() => {
//                 fn.apply(context, args);
//             }, delay);
//         }
//     };
// }

// function throttled1(fn, delay = 500) {
//     let start = Date.now();
//     let timer = null;
//     return function () {
//         const remaining = delay - (Date.now() - start);
//         timer && clearTimeout(timer);
//         if (remaining <= 0) {
//             fn.apply(this, arguments);
//             start = Date.now();
//         } else {
//             timer = setTimeout(fn, remaining);
//         }
//     };
// }
const obj = {
    a: 1,
    b: 2,
    c: 3,
    double: function (v) {
        return v * 2;
    },
};

const keys = Object.keys(obj);
const values = Array.from(
    keys,
    function (key) {
        return this[key] * 2; // 'this' 指向 obj
    },
    obj,
);

console.log('values', values); // 输出: [2, 4, 6]
