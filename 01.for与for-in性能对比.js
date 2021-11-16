/*
 * @Description:
 * @Autor: lizi
 * @Date: 2021-11-15 15:30:48
 * @LastEditors: lizi
 * @LastEditTime: 2021-11-15 15:54:44
 * @FilePath: \js performance\01.for与for-in性能对比 .js
 */

var n = 10000;
// 准备待测数组
var array = [];
for(var count=0;count<n;count++){
    array[count] = 1;
}

console.time("for");
for (var i = 0; i < array.length; i++) {
//   console.info("for:",typeof i);  for循环的key会是number
}
console.timeEnd("for");

console.time("for in");
for (var key in array) {
//   console.info('for-in',typeof key)  for-in循环的key是string，获取属性array[key]还需要转换
}
console.timeEnd("for in");

// 从测试结果可以看出，单纯的for循环效率会比for-in效率高；因为:
// 1.for-in会遍历所有的属性(包括own properties、以及原型链上的properties)
// 2.for-in循环出的key是string类型，获取属性array[key]还需要转换
