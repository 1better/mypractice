// function 是引用类型
let a = function() {
  console.log(1)
}
let b = a
console.log(b===a)
b = function() {
  console.log(2)
}

// 为什么函数可以修改呢
a()
b()

var arr = [1,3,4,[5,[6,8]],7]
// var arr2 = arr
// arr[1] = 1
// console.log(arr2)

var arr2 = [...arr]

// arr2[3][1] = 7
arr[0] = 3
console.log(arr2)
console.log(arr)

var a = {name:111}
const b = a
b = {age:222}
console.log(a) // {name: 111}
console.log(b) // {age: 222}
