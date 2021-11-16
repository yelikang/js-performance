/*
 * @Description: 
 * @Autor: lizi
 * @Date: 2021-11-15 15:30:48
 * @LastEditors: lizi
 * @LastEditTime: 2021-11-15 15:59:37
 * @FilePath: \js performance\02.for-in与for-of性能对比.js
 */
// =============注意这里直接初始化一个空的数组，for-in循环的测试结果会比for-of更好，因为空数组for-in根本不会执行；所以这里要用实际数据测试=======
// const array = new Array(1000000); 


var n = 10000;
// 准备待测数组
var array = [];
for(var count=0;count<n;count++){
    array[count] = 1;
}

console.time("for in");
for (var i in array) {}
console.timeEnd("for in");

console.time("for of");
for (var i of array) {}
console.timeEnd("for of");

// 从测试结果可以看出，for of的性能比for in性能更好
