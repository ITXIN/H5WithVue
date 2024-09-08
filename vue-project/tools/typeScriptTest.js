/* eslint-disable camelcase */
// // interface User {
// //     name: string;
// //     age: number;
// // }
// // interface UserWithId extends User {
// //     id: number;
// // }

// // class Mymanager implements User {
// //     name: string;
// //     age: number;
// // }

// // class OtherManager extends Mymanager {}

// // interface Shape {
// //     width: number;
// //     height: number;
// // }
// // interface Position {
// //     x: number;
// //     y: number;
// // }

// // interface Color {
// //     color: string;
// // }

// // type Circle = Shape & Position & Color;

// // const circle: Circle = {
// //     width: 100,
// //     height: 100,
// //     x: 0,
// //     y: 0,
// //     color: 'red',
// // };

// // type myCircle = Shape | Position | Color;
// // const myCirclea: myCircle = {
// //     width: 100,
// //     height: 100,
// //     x: 0,
// //     y: 0,
// //     color: 'red',
// // };
// // // myCirclea.width = 89;

// // type Person1 = {
// //     name: string;
// // };

// // interface Student extends Person {
// //     stuNo: number;
// // }
// // class HeightStru implements Student {
// //     stuNo: number;
// //     name: string;
// // }

// // type ICat = {
// //     setName(name: string): void;
// // };

// // class Cat implements ICat {
// //     setName(name: string): void {
// //         // todo
// //     }
// // }
// // type Person = { name: string };

// // // 无法对联合类型Person进行实现
// // // error: A class can only implement an object type or intersection of object types with statically known members.
// // class Student implements Person {
// //     name = '张三';
// //     setName(name: string): void {
// //         // todo
// //     }
// // }

// // interface Queue<T, U, V = string> {}
// interface Phone {
//     name: string;
//     color: string;
//     sayHello(): void;
// }
// type MyPick<V, K extends keyof V> = {
//     [P in K]: V[P];
// };
// const smallPhone: MyPick<Phone, 'name' | 'color' | 'sayHello'> = {
//     name: '小米',
//     color: 'white',
//     sayHello() {},
//     age: 'dd',
// };
// const arrCommon = require('./array');
// console.log('🚀 ~ arrComm:', arrCommon('type test'));
// const testCommon = require('./common');
// console.log('🚀 ~ testCommon:', testCommon('type test'));

// const isBuiltin = require('node:module').isBuiltin;
// console.log('🚀 ~ isBuiltin:', isBuiltin('path'));
// const isBuiltin = require('node:module').isBuiltin;
// console.log(isBuiltin('node:path')); // true
// console.log(isBuiltin('path')); // true
// console.log(isBuiltin('wss')); // false
// const url = require('url');
// const myUrl = new URL(
//     'https://test-b-fat.pingan.com.cn/fin/mobile/fund_product_detail.html?sndTypeCode=2001010302&prdCode=002864&templateId=PrdTempINI003&innerid=h5.P124751.JJSC_RMJJ~708361454840815616.KeqIpwkM.1&isZero=&traceid=fixed_innerid_h5.P124751.JJSC_RMJJ~708361454840815616.KeqIpwkM.1#/ProductDetailScreen?indexContent=1.81&indexName=%E8%BF%91%E5%8D%8A%E5%B9%B4%E6%B6%A8%E5%B9%85&indexDateType=5',
// );
// console.log('🚀 ~ myUrl:', myUrl);

// const process = require('process');
// console.log('🚀 ~ process:', process);
// process.env.mode = 'kk';
// console.log('🚀 ~ process.env:', process.env.mode);
// const EventEmitter = require('node:events');
// const myEmitter = new EventEmitter();

// myEmitter.on('event', function firstListener() {
//     console.log('Helloooo! first listener');
// });

// myEmitter.on('event', function secondListener(arg1, arg2) {
//     console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
// });

// myEmitter.on('event', function thirdListener(...args) {
//     const parameters = args.join(', ');
//     console.log(`event with parameters ${parameters} in third listener`);
// });

// console.log('myEmitter.listeners', myEmitter.listeners('event'));

// myEmitter.emit('event', 1, 2, 3, 4, 5);

// 创建只读流
// const { createReadStream, statSync } = require('node:fs');

// // highWaterMark
// const stream = createReadStream('./demo.txt', { encoding: 'utf8' });

// let totalLength = 0;
// stream.on('data', chunk => {
//     totalLength += Buffer.byteLength(chunk);
// });

// stream.on('end', () => {
//     console.log('数据读取完毕:');
//     console.log(statSync('./demo.txt').size);
//     console.log('数据读取完毕 length', totalLength);
// });
// const { createReadStream, createWriteStream, statSync } = require('node:fs');

// const readStream = createReadStream('./demo.txt', { encoding: 'utf8' });
// const writeStream = createWriteStream('./demo-write.txt', { encoding: 'utf8' });

// 方式1：手动写入
// readStream.on('data', chunk => {
//     writeStream.write(chunk);
// });

// readStream.on('end', () => {
//     console.log('数据写入完毕');
//     console.log(statSync('./demo.txt').size === statSync('./demo-write.txt').size);
// });

// window.onhashchange = function (event) {};

function robot_navigation(grid, k) {
    const rows = grid.length;
    const cols = grid[0].length;

    // 初始位置 左上角，步数为0
    const start = [0, 0, 0]; // [row, col, walls_broken]

    // 目标位置
    const target = [rows - 1, cols - 1];

    // 4个方向，对每一个位置进行检测
    const directions = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
    ];

    // 已访问状态
    const visited = new Set();

    // 队列：初始队列
    const queue = [start];

    while (queue.length > 0) {
        const [row, col, walls_broken] = queue.shift();

        // 已经访问过或超出拆除限制
        const key = `${row},${col},${walls_broken}`;

        console.log('🚀 ~ robot_navigation ~ key:', key);
        if (visited.has(key) || walls_broken > k) {
            console.log('🚀 ~ robot_navigation ~ walls_broken > k:', walls_broken, k);
            continue;
        }
        // console.log('🚀 ~ robot_navigation ~ key:', key);
        visited.add(key);

        // 到达目标位置
        if (row === target[0] && col === target[1]) {
            return true;
        }

        // 向四个方向移动
        for (const [dr, dc] of directions) {
            const newRow = row + dr;
            const newCol = col + dc;

            // 越界检查
            if (newRow < 0 || newRow >= rows || newCol < 0 || newCol >= cols) {
                continue;
            }

            // 新位置的状态
            const newWallsBroken = walls_broken + grid[newRow][newCol];

            // 添加新位置到队列
            queue.push([newRow, newCol, newWallsBroken]);
        }
    }

    return false;
}

// 测试用例
// const grid1 = [
//     [0, 1, 0],
//     [0, 1, 0],
// ];
// const k1 = 0;
// console.log(robot_navigation(grid1, k1)); // 输出：false

// const grid2 = [
//     [0, 1, 0],
//     [0, 1, 0],
// ];
// const k2 = 1;
// console.log(robot_navigation(grid2, k2)); // 输出：true

const grid3 = [
    [0, 1, 0, 0, 0],
    [0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0],
    [0, 0, 0, 1, 0],
];
const k3 = 0;
console.log(robot_navigation(grid3, k3));
