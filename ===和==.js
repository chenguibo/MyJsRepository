/***
 * @Author: cgb
 * @Date: 2023-08-01 09:01:44
 * @LastEditTime: 2023-08-01 09:01:44
 * @LastEditors: cgb
 * @Description:===和==的区别
 * @FilePath: \MyJsRepository\===和==.js
 */

// ===用于比较操作数的值和类型是否完全相等
console.log(5 === 5); // true
console.log("5" === 5); // false
console.log(5 === "5"); // false
console.log(true === true); // true
console.log(null === undefined); // false

// ==类型转换，比较操作数的值相等
console.log(5 == 5); // true
console.log("5" == 5); // true (字符串会被转换为数字)
console.log(5 == "5"); // true (数字会被转换为字符串)
console.log(true == true); // true
console.log(null == undefined); // true (null和undefined被视为相等)
console.log(0 == false); // true (false被转换为数字0)
console.log("" == false); // true (false被转换为空字符串)
