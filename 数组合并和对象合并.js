/***
 * @Author: cgb
 * @Date: 2023-08-02 08:26:42
 * @LastEditTime: 2023-08-02 08:28:43
 * @LastEditors: cgb
 * @Description:
 * @FilePath: \MyJsRepository\数组合并和对象合并.js
 */

// 一、合并数组
let arr1 = ["cc", "gg"];
let arr2 = ["bbb", "lll"];
let arr3 = ["ff"];

// 1、Array.concat() 合并数组, 返回新数组，不会改变原数组
const Arr1 = arr1.concat(arr2, arr3);
console.log(Arr1); // ["cc", "gg", "bbb", "lll", "ff"]

// 2、展开运算符(…)
const Arr2 = [...arr1, ...arr2, ...arr3];
console.log(Arr2); // ["cc", "gg", "bbb", "lll", "ff"]

// 3、push 会更改原数组
arr1.push(...arr2, ...arr3);
console.log(arr1); // ["cc", "gg", "bbb", "lll", "ff"]

// 二、合并对象
let obj1 = { name: "cgb" };
let obj2 = { age: "24" };

// 1、Object.assign()，第一个参数是目标对象，后面的参数都是源对象
const Obj = Object.assign({}, obj1, obj2);
console.log(Obj); // {name: "cgb", age: "24"}

// 注意：Object.assign()是浅拷贝。如果对象的属性也是一个对象，那么目标对象得到的是这个对象的引用
let obj3 = { Name: { Chinese: "陈陈陈", English: "cgb" } };
const Obj3 = Object.assign({}, obj3);
Obj3.Name.English = "lll";
console.log(Obj3); //{ Name: { Chinese: "陈陈陈", English: "lll" } }
console.log(obj3); //{ Name: { Chinese: "陈陈陈", English: "lll" } }
