/***
 * @Author: cgb
 * @Date: 2023-08-08 16:14:30
 * @LastEditTime: 2023-08-08 16:18:39
 * @LastEditors: cgb
 * @Description: 得多看
 * @FilePath: \MyJsRepository\原型.js
 */

// 1.原型的概念：对象天生会有属性__proto__,对应的值是对象，这个对象就是原型。原型通过构造函数的prototype属性也可以访问到。
// 2.原型的作用：原型上面的属性和方法，默认可以被对象使用。
// 3.原型的使用场景：我们通常会将对象公共属性放在原型上。
// 4.原型链的概念：对象一定会有原型，原型是一个对象，是对象就会有原型，所以原型有原型，原型的原型也有原型：当访问对象属性或者方法的时候，先在当前对象找，找不到就去原型中找，再找不到就去原型的原型中找。。。。，直到顶级原型，顶级原型没有，就返回undefind。

// 每个函数都有一个prototype
function Foo1() {}
var a = new Foo1();
console.log(a.__proto__ === Foo1.prototype); // 1 true

function Foo2(a) {
  return a;
}
console.log(Foo2(7)); // 1 7
var Foo21 = new Function("a", "return a");
console.log(Foo21(6)); // 1 6
console.log(Foo2.__proto__ === Function.prototype); // 1 true

function Foo3() {}
console.log(Foo3.prototype.constructor === Foo3); // 1 true
var bar = new Foo3();
console.log(bar.constructor === Foo3); // 1 true

function Foo4() {}
Foo4.prototype = {}; // 新的原型对象
console.log(Foo4.prototype.constructor === Foo4); // 1 false
var bar = new Foo4();
console.log(bar.constructor === Foo4); // 1 false
console.log(bar.constructor === Object); // 1 true

var obj1 = {};
console.log(obj1.__proto__ === Object.prototype); // 2 true

function Foo5() {}
// a的隐式原型 链接到Foo.prototype所指的对象
var a = new Foo5();
console.log(a instanceof Foo5); // true
console.log(Foo5.prototype.isPrototypeOf(a)); // true

// Bar的隐式原型 链接到Foo
var Bar = Object.create(Foo5);
console.log(Foo5.isPrototypeOf(Bar)); // true

// a.prototype这个对象的隐式原型 链接到Foo.prototype
a.prototype = Object.create(Foo5.prototype);
console.log(a.prototype instanceof Foo5); // true
console.log(Foo5.prototype.isPrototypeOf(a.prototype)); // true
