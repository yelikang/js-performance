/*
 * @Description:
 * @Autor: lizi
 * @Date: 2021-11-15 15:30:48
 * @LastEditors: lizi
 * @LastEditTime: 2021-11-15 16:27:48
 * @FilePath: \js performance\04.forEach与map.js
 */

var n = 100000;
// 准备待测数组
var array = [];
for (var count = 0; count < n; count++) {
  array[count] = 1;
}

console.time("forEach");
array.forEach(() => {
    let a = 1;
});
console.timeEnd("forEach");

console.time("map");
array.map(() => {
    let a = 1;
});
console.timeEnd("map");

// 从测试结果可以看出，forEach的性能会优于map；因为:
// 1.map会创建一个与便利数组同等长度的数组作为返回，而forEach没有这部分开销
// 2.
