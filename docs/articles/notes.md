# 学习笔记

mixin混入

1、组件data优先级高于mixin data优先级

2、生命周期函数，mixin和组件里都写的话，先执行mixin里的，再执行组件里的



数组中10万个数据，取第1个元素和第10万个元素的时间差多少？

完全一样（CPU算加法时间一样）



判断数组方法：

Object.prototype.toString().call(arr)  // '[object Array]' 兼容性最好 判断麻烦

arr instanceof Array / Array.prototype instanceof Array => false

Array.isArray(arr) 性能最好 / Array.isArray(Array.prototype)=>true



数组数字排序

arr.sort((n1,n2)=>n1-n2)



shallowReactive()在挂载之前赋值生效，页面挂载之后对象深层操作无响应式

