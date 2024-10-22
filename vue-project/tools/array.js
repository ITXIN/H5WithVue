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

new Promise((resolve, reject) => {
    resolve('begin');
})
    .then(res => {
        console.log('9', res);
        return res + ' then handler';
    })
    .then(res => {
        console.log('10', res);
    })
    .catch(err => {
        console.log('11', err);
    })
    .finally(() => {
        console.log('12');
    });
