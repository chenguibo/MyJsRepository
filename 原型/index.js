/***
 * @Author: cgb
 * @Date: 2023-08-09 14:10:53
 * @LastEditTime: 2023-08-09 14:13:25
 * @LastEditors: cgb
 * @Description:
 * @FilePath: \MyJsRepository\原型与原型链\index.js
 */

/**
 * prototype: 原型
 * __proto__：原型链
 *
 * prototype：函数的一个属性：对象{}
 * __proto__：对象object的一个属性：对象{}
 * 对象的__proto__保存着该对象的构造函数的prototype
 *
 */

function Test() {
  this.a = 1;
}
console.log(Test.prototype);
Test.prototype.b = 2;

const test = new Test();
console.log(test.__proto__);
console.log(test.__proto__ === Test.prototype); // true

console.log(Test.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__); // null
Object.prototype.c = 3;

console.log(test);

/**
 * test(){
 *  a:1,
 *  __proto__: Test.prototype = {
 *    b:2,
 *    __proto__: Object.prototype = {
 *      c:3,
 *    }
 *  }
 * }
 */

console.log(test.a); // 1
console.log(test.b); // 2
console.log(test.c); // 3

console.log(Test.__proto__ === Function.prototype); // true
console.log(Function.__proto__ === Function.prototype); // true

console.log(typeof Object); // function
console.log(Object.__proto__ === Function.prototype); // true
console.log(Object.__proto__ === Function.__proto__); // true

console.log(test.hasOwnProperty("a")); // true
console.log(test.hasOwnProperty("b")); // false
console.log(test.hasOwnProperty("c")); // false
console.log("a" in test); // true
console.log("b" in test); // true
console.log("c" in test); // true

console.log("_____________");

// 指向构造函数
console.log(test.constructor === Test); // true
function Test1() {
  this.a = 11;
}
test.constructor = Test1; // 允许更改
