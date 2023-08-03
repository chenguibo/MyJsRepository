/***
 * @Author: cgb
 * @Date: 2023-08-03 09:22:31
 * @LastEditTime: 2023-08-03 09:25:12
 * @LastEditors: cgb
 * @Description:
 * @FilePath: \MyJsRepository\sort.js
 */

function compare(val1, val2) {
  if (val1 < val2) {
    return -1;
  } else if (val1 > val2) {
    return 1;
  } else {
    return 0;
  }
}

// 注意: sort()会先将数字转字符串再排序。
// sort()内部使用Timsort排序算法，结合归并排序和二分插入排序。
var arr = [2, 15, 8, 11, 7, 4];
console.log(arr.sort()); // [ 11, 15, 2, 4, 7, 8 ]
console.log(arr.sort(compare)); // [ 2, 4, 7, 8, 11, 15 ]
console.log(arr.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0))); // [ 2, 4, 7, 8, 11, 15 ]
