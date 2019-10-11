// 数组扁平化中的reduce
function deepFlat(arr) {
  return arr.reduce((pre,current)=>{
    return pre.concat(Array.isArray(current)? deepFlat(current):current)
  },[])
}

const arr = [11, [22, 33], [44, 55,[77]], 66];

arr2 = deepFlat(arr)

console.log(arr2)


function TestZone() {
  let from = function(a) {
    console.log(111)
  }
  with(Array) {
    // 说明with延长作用域链是放在最前端的
    console.log(from(new Set([1,3,4,4,5,6])))
  }
  from(new Set([1,3,4,4,5,6])) // 111
}

TestZone()



Function.prototype.myBind = function(self,...arg) {
  self = self || window
  self.fn = this
  return function(...arg2) {
    arg = arg.concat(arg2)
    var result = self.fn(...arg)
    return result
  }
 }
// call封装
Function.prototype.myBind = function (self,...arr1) {
  self.fn = this
  return function(...arr2) {
    let arr = arr1.concat(arr2)
    let result = self.fn(...arr)
    delete self.fn
    return result
  }
}

function test() {
  return ([].slice.myBind(arguments,1)(2))
}

console.log(test(1,3,5,7))