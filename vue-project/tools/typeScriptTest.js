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
