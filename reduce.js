/***
 * @Author: cgb
 * @Date: 2023-08-04 19:17:52
 * @LastEditTime: 2023-08-04 19:19:35
 * @LastEditors: cgb
 * @Description:
 * @FilePath: \MyJsRepository\reduce.js
 */

// arr.reduce(function(prev,cur,index,arr){}, init);
// prev 必需。累计器累计回调的返回值; 表示上一次调用回调时的返回值，或者初始值 init;
// cur 必需。表示当前正在处理的数组元素；
// index 可选。表示当前正在处理的数组元素的索引，若提供 init 值，则起始索引为- 0，否则起始索引为1；
// arr 可选。表示原数组；
// init 可选。表示初始值。

const arr = [1, 2, 3, 4];
// 1、求和
console.log(arr.reduce((a, b) => a + b)); // 10
console.log(arr.reduce((a, b) => a * b)); // 24

// 2、每个元素出现次数
const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice", "Bob", "Bob"];
console.log(
  names.reduce((a, b) => {
    if (b in a) {
      a[b]++;
    } else {
      a[b] = 1;
    }
    return a;
  }, {})
); // { Alice: 2, Bob: 3, Tiff: 1, Bruce: 1 }

// 3、数组去重
const nums = [1, 1, 2, 2, 3, 3, 4, 4];
console.log(
  nums.sort().reduce((a, b) => {
    if (a.length === 0 || a[a.length - 1] !== b) {
      a.push(b);
    }
    return a;
  }, [])
); // [1, 2, 3, 4];
