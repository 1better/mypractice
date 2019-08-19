// 使用instanceof
var arr = []
console.log(arr instanceof Array)
console.log(arr instanceof Object)

// 使用constructor
var arr = []
console.log(arr.constructor)  // Function:Array
console.log({}.constructor)   // Function:Object

// 使用Object.prototype.toString.call().slice(8,-1)
function isArr(arr) {
  return  Object.prototype.toString.call(arr).slice(8,-1)
}
console.log(isArr(arr))  // Array

// 使用es5 的 Array.isArray()
console.log(Array.isArray(arr)) // true