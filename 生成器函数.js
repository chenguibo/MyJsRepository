/***
 * @Author: cgb
 * @Date: 2023-08-03 10:18:00
 * @LastEditTime: 2023-08-03 10:19:57
 * @LastEditors: cgb
 * @Description:
 * @FilePath: \MyJsRepository\生成器函数.js
 */

// 1、成器函数，形式为function*，并返回generator对象
// 2、当这个迭代器的 next() 方法被首次（后续）调用时，其内的语句会执行到第一个（后续）出现yield的位置为止，yield 后紧跟迭代器要返回的值。或者如果用的是 yield*（多了个星号），则表示将执行权移交给另一个生成器函数（当前生成器暂停执行）。
// 3、next()方法返回一个对象，这个对象包含两个属性：value 和 done，value 属性表示本次 yield 表达式的返回值，done 属性为布尔类型，表示生成器后续是否还有 yield 语句，即生成器函数是否已经执行完毕并返回。
// 4、调用 next()方法时，如果传入了参数，那么这个参数会传给上一条执行的 yield 语句左边的变量，例如下面例子中的x：
// 学习地址：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/function*
// 因为我不常用，所以就写这么多吧。
function* generator(i) {
  yield i;
  yield i + 10;
}

const gen = generator(10);
console.log(gen.next().value); // 10
console.log(gen.next().value); // 20
