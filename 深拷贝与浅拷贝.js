/***
 * @Author: cgb
 * @Date: 2023-08-02 08:15:53
 * @LastEditTime: 2023-08-02 08:19:42
 * @LastEditors: cgb
 * @Description:
 * @FilePath: \MyJsRepository\深拷贝与浅拷贝.js
 */

/**
 * 深拷贝与浅拷贝开始都要创建一个新的对象或数组。
 * 浅拷贝将原始对象或数组的引用复制给新对象或数组。这意味着新旧对象或数组会引用相同的内存地址，它们之间会互相影响。
 * 深拷贝递归地复制原始对象或数组中的所有值，包括嵌套的对象或数组。深拷贝会创建一个完全独立的副本，新旧对象或数组不存在引用关系，它们互不影响。
 *
 */

// 浅拷贝
var obj = { name: "John", age: 30 };
var shallowCopy = obj; // 浅拷贝
shallowCopy.age = 40;
console.log(obj.age); // 输出 40，原始对象也被修改了

// 深拷贝
function deepCopy(obj) {
  // 必须是引用类型
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  // 区分对象和数组
  var newObj = Array.isArray(obj) ? [] : {};

  // 递归深拷贝嵌套的对象或数组
  for (var key in obj) {
    newObj[key] = deepCopy(obj[key]);
  }

  return newObj;
}

var obj1 = { name: "John", age: 30 };
var deepCopy1 = deepCopy(obj); // 深拷贝
deepCopy1.age = 40;
console.log(obj1.age); // 输出 30，原始对象不受影响
