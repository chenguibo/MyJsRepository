/***
 * @Author: cgb
 * @Date: 2023-08-10 09:55:38
 * @LastEditTime: 2023-08-10 10:17:03
 * @LastEditors: cgb
 * @Description:
 * @FilePath: \MyJsRepository\Map.js
 */

/**
 *
 * Map
 *  Map用来存储键值对结构的数据 (key-value)
 *  object中存储的数据就可以认为是一种键值对结构Map和Object的主要区别:
 *    object中的属性名只能是字符串或符号
 *    Map的key可以取任何类型的值
 */

const obj = {
  name: "cgb",
  age: 18,
  [Symbol()]: "ccc",
  [{}]: "ggg", // {}会自动转成字符串'[object Object]'
};

console.log(obj);
console.log(obj[{}]); // ggg

const map = new Map();
// map.name = "cgb";
map.set("age", 18); // 用set，map.size的值才会增加
map.set(NaN, "haha");
console.log(typeof map); // object
console.log(map.size); // 2
console.log(map.get(NaN)); // haha
map.delete(NaN); // 删除
console.log(map.has(NaN)); // false
// map.clear(); // 清空

// map和数组相互转化
const arr = Array.from(map); // [['name', 'cgb']]
// const arr1 = [...map]; // 效果和上一代码一样
const map2 = new Map([
  ["name", "cgb"],
  ["age", 18],
]);
console.log(map2);

for (const i of map2) {
  console.log(i); // [ 'name', 'cgb' ] ["age", 18];
}
map2.forEach((key, value) => {
  console.log(key, value);
});

console.log(map2.keys()); // [Map Iterator] { 'name', 'age' }
console.log(map2.values()); // [Map Iterator] { 'cgb', 18 }
console.log(map2.entries()); // [Map Entries] { [ 'name', 'cgb' ], [ 'age', 18 ] }
for (const key of map2.keys()) {
  console.log(key); // name age
}
