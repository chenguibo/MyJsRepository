/***
 * @Author: cgb
 * @Date: 2023-08-01 09:06:05
 * @LastEditTime: 2023-08-01 09:06:05
 * @LastEditors: cgb
 * @Description: null和undefined的区别
 * @FilePath: \MyJsRepository\null和undefined.js
 */

// null和undefined，都用于表示缺少或不存在的值
// null为空值；undefined为未定义，不存在值
// undefined情况：1、函数中没有返回值 2、对象属性不存在时 3、变量被声明但未被赋值
let myVar;
console.log(myVar); // undefined

function myFunction() {}
console.log(myFunction()); // undefined

let obj = {};
console.log(obj.nonExistentProperty); // undefined
console.log(obj); // {}

console.log(null == undefined); // true
console.log(null === undefined); // false
console.log(typeof null); // "object"
console.log(typeof undefined); // "undefined"

// 判断变量是否为null或undefined的几种方法
myVar === null || myVar === undefined;
myVar == null; // myVar 是 null 或 undefined。默认类型转换
typeof myVar === "undefined"; // null为object
