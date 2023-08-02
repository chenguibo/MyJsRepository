/***
 * @Author: cgb
 * @Date: 2023-08-02 09:06:54
 * @LastEditTime: 2023-08-02 09:06:54
 * @LastEditors: cgb
 * @Description: Promise.race 方法
 * @FilePath: \MyJsRepository\PromiseRace.js
 */

// Promise.race接受一个参数为数组的可迭代对象。在这个数组中的任意一个 Promise 对象变为完成状态（fulfilled）或拒绝状态（rejected）时，返回的 Promise 对象就会跟着变为相应的状态。
// 这个方法常用于将多个 Promise 对象合并，只要有一个满足特定条件，就触发相应的操作，比如超时处理或者多个请求并发的情况下只需要等待最快的响应。
// 在下面示例中，Promise.race 方法用于在 doSomething 方法的 Promise 对象和一个 1000ms 超时的 Promise 对象之间进行竞争。如果 doSomething 方法在给定的时间内成功完成，那么返回的 Promise 对象就会接收到成功状态并输出结果。否则，超时的 Promise 对象会变为拒绝状态并输出错误信息。

function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Timeout"));
    }, ms);
  });
}

function doSomething() {
  return new Promise((resolve, reject) => {
    // 执行某个操作
    // 如果操作成功，调用 resolve(value)；否则，调用 reject(error)
  });
}

Promise.race([doSomething(), timeout(1000)])
  .then((result) => {
    console.log("操作完成:", result);
  })
  .catch((error) => {
    console.log("操作失败:", error);
  });
