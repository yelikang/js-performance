/*
 * @Description:
 * @Autor: lizi
 * @Date: 2021-11-15 15:30:48
 * @LastEditors: lizi
 * @LastEditTime: 2021-11-15 16:15:05
 * @FilePath: \js performance\02.for与forEach性能对比.js
 */

var n = 10000;
// 准备待测数组
var array = [];
for(var count=0;count<n;count++){
    array[count] = 1;
}

console.time("for");
for (var i = 0; i < array.length; i++) {
}
console.timeEnd("for");

console.time("forEach");
array.forEach(()=>{})
console.timeEnd("forEach");

// 从测试结果可以看出，for循环性能比forEach高，但是差别不大
