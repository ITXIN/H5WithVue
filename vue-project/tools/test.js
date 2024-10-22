// async function handlerAsynFun(list, num = 3) {
//     console.log('🚀 ~ handlerAsynFun ~ handlerAsynFun:', list);
//     const current = list.slice(0, num);
//     let index = num;

//     return await Promise.all(current).then(res => {
//         index = index + num;
//         if (list.length < index) {
//             return res;
//         }
//         return handlerAsynFun(list.slice(index, index + num), num);
//     });
// }

// const arr = [];
// for (let index = 0; index < 20; index++) {
//     const myPromise1 = new Promise((resolve, reject) => {
//         // 异步操作
//         setTimeout(() => {
//             const randomNumber = Math.random();
//             if (randomNumber > 0.5) {
//                 resolve(randomNumber);
//             } else {
//                 resolve('randomNumber < 0.5');
//                 // reject(new Error('randomNumber < 0.5'));
//             }
//         }, 1000);
//     });
//     arr.push(myPromise1);
// }
// handlerAsynFun(arr, 3).then(res => {
//     console.log('🚀 ~ res:', res);
// });

// function requestWithConcurrency(urls, concurrencyLimit) {
//     let inProgressCount = 0;
//     const results = [];
//     let index = 0;

//     function processNext() {
//         if (index >= urls.length) {
//             return;
//         }
//         const url = urls[index];
//         index++;
//         inProgressCount++;
//         fetch(url)
//             .then(response => response.json())
//             .then(data => {
//                 results.push(data);
//             })
//             .finally(() => {
//                 inProgressCount--;
//                 processNext();
//             });
//     }

//     for (let i = 0; i < Math.min(concurrencyLimit, urls.length); i++) {
//         processNext();
//     }

//     return new Promise(resolve => {
//         const interval = setInterval(() => {
//             if (inProgressCount === 0 && index === urls.length) {
//                 clearInterval(interval);
//                 resolve(results);
//             }
//         }, 100);
//     });
// }

// // 示例用法
// const urls = [
//     'https://api.example.com/1',
//     'https://api.example.com/2',
//     'https://api.example.com/3',
//     'https://api.example.com/4',
//     'https://api.example.com/5',
// ];
// const concurrency = 2;
// requestWithConcurrency(urls, concurrency).then(data => {
//     console.log(data);
// });

const module1 = require('./common');
console.log('module1 test 开始打印:', module1);
setTimeout(() => {
    module1.counter = '200';
    console.log('module1 修改后打印:', module1);
    const module2 = require('./common');
    module2.changeObj({ name: 'new name 2', age: 30 });
    console.log('module2 开始打印:', module2);
}, 5000);
