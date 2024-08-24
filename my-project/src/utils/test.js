// let map = new Map()
// map.set('key','value1')
// map.set('key','value2')
// console.log('====map',map.has('key1'));



function outerFunction(params) {
    let counter = 0;
    let allParm = {...params}
    return function innerFunction(options) {
      counter++;
      allParm = {...params,...options}
      console.log('counter',counter,allParm);
    };
  }
  
//   let increment = outerFunction({begin:'bengin'});
//   increment({test:'one'}); 
//   increment({test:'two'});

//   var obj ={
//     num1:117
//   }
//   var res = obj;

//   obj.child = obj = {
//     num2:935
//   }
//   console.log(obj);
//   console.log(res);
  
//   var o = {
//     a:10,
//     b:{
//         a:13,
//         fn:function(){
//             console.log('fn this:',this)
//             console.log('fn this.a:',this.a)
//         }
//     }
//   }
// //   o.b.fn()
// var j = o.b.fn
// j()
// setTimeout(() => {
//     console.log('宏任务 1');
//   }, 0);
  
// console.log('同步任务 1');

// async function nameFn (){
//     console.log('同步任务 1.2');
//     await Promise.resolve()
//     console.log('同步任务 1.3');
// }
// nameFn()
// console.log('同步任务 1.1');

// console.log('同步任务 2');
// setTimeout(function(){
//     console.log('定时器开始啦')
// });

// new Promise(function(resolve){
//     console.log('马上执行for循环啦');
//     for(var i = 0; i < 10000; i++){
//         i == 99 && resolve();
//     }
// }).then(function(){
//     console.log('执行then函数啦')
// });

// console.log('代码执行结束');

// 作者：虚竹子
// 链接：https://juejin.cn/post/6844903832435032072
// 来源：稀土掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

// console.log('1');

// setTimeout(function() {
//     console.log('2');
//     process.nextTick(function() {
//         console.log('3');
//     })
//     new Promise(function(resolve) {
//         console.log('4');
//         resolve();
//     }).then(function() {
//         console.log('5')
//     })
// })
// process.nextTick(function() {
//     console.log('6');
// })
// new Promise(function(resolve) {
//     console.log('7');
//     resolve();
// }).then(function() {
//     console.log('8')
// })

// setTimeout(function() {
//     console.log('9');
//     process.nextTick(function() {
//         console.log('10');
//     })
//     new Promise(function(resolve) {
//         console.log('11');
//         resolve();
//     }).then(function() {
//         console.log('12')
//     })
// })

// var obj = {
//     '2':3,
//     '3':4,
//     'splice':Array.prototype.splice,
//     'push':Array.prototype.push
// }
// obj.push(1)
// obj.push(2)
// console.log('=====obj',obj);

// setTimeout(function() {
//     console.log('setTimeout');
// })

// new Promise(function(resolve) {
//     console.log('promise1');
//     resolve();
//     console.log('resolve1');
// }).then(function() {
//     console.log('then1');
// })
// new Promise(function(resolve) {
//     console.log('promise2');
//     resolve();
//     console.log('resolve2');
// }).then(function() {
//     console.log('then2');
// })

// console.log('console');

// 作者：虚竹子
// 链接：https://juejin.cn/post/6844903832435032072
// 来源：稀土掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

// const to = Object.prototype.toString
// console.log(to.call(2));
// console.log(to.call(null));
// console.log(to.call([null]));
// console.log(to.call({}));
// console.log(to.call(function(){}));
// console.log(to.call(undefined));
// undefined = 'testundefined'
// var test=undefined 
// console.log(test,undefined);
// console.log(void 0);
// let a = 'str'
// console.log(Object(a),a.valueOf());
// var a = new Boolean(false)
// if(!a){
//     console.log('Oops');
    
// }else{
//     console.log('else ',Number.MAX_SAFE_INTEGER); 
// }
// const sym =  Symbol('date')
// const obj = {
//     [sym]:Symbol(`${new Date()}`),
//     // reg:/\.js$/
// }
// console.log(obj,JSON.stringify(obj),Object.keys(obj));
// delete obj[sym]
// console.log(obj,JSON.stringify(obj),Object.keys(obj));
// function create(){
//     var obj = new Object()
//     Con = [].shift.call(arguments)
//     obj.__proto__ = Con.prototype

//     var ret = Con.apply(obj,arguments)

//     return ret instanceof Object? ret:obj


// }
// console.log('this1',this);
// const obj = {
//     test(params){
//         console.log('this2',this === obj,params);
//         var testfn = (parm)=>{
//             console.log('this3',this === global,parm);
            
//         }
//         testfn(params)
//     }
// }
// obj.test('alfdlf')
// function fn(){
//     this.user = 'xxx'
//     console.log('this',this);
//     setTimeout(()=>{
//         console.log('timeout this',this);
        
//     },3000)
//     return {
//         name:'testName'
//     }
// }
// var a = new fn()
// console.log(a,a.user);

// let bar = {a:1,b:2,obj:{key:'value'}}
// let baz = {...bar}
// console.log(baz);
// console.log(bar);
// bar.a  = 10
// bar.obj = {}
// console.log(baz);
// console.log(bar);

// function add(x,y){
//     console.log('========argument',arguments);
    
//     return x+y
// }
// const numbers = [1,3,4,5]
// console.log( add(...numbers));



// let data = {
//     name: 'John',
//     age: 25
//   };
  
//   let handler = {
//     get: function(target, key) {
//       console.log(`获取属性: ${key}`);
//       return target[key];
//     },
//     set: function(target, key, value) {
//       console.log(`设置属性: ${key} 为 ${value}`);
//       target[key] = value;
//     }
//   };
  
//   let proxyData = new Proxy(data, handler);
  
//   proxyData.name = 'Jane'; 
//   console.log(proxyData.name); 

let xhr = new XMLHttpRequest()
xhr.open('GET',url,true)
xhr.onreadystatechange = function(){

}
xhr.onerror = function(){

}
xhr.responseType = 'json'
xhr.setRequestHeader("Accept",'application/json')
xhr.send(null)
