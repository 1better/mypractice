/* Function.prototype.myCall = function(self,...value) {
  self = self || window
  self.fn = this
  console.log(...value)
  var result = self.fn(...value)
  delete self.fn
  return result
}

var f = function() {
  return [].slice.myCall(arguments,1,3)
  return [].slice.myApply(arguments,[1,3])
}

Function.prototype.myApply = function(self,arr) {
  self = self || window
  self.fn = this
  console.log(...arr)
  var result = self.fn(...arr)
  delete self.fn
  return result
}

console.log(f(1,3,4,5,6,7)) */

Function.prototype.myBind = function(self,...arg) {
  self = self || window
  self.fn = this
  return function(...arg2) {
    arg = arg.concat(arg2)
    var result = self.fn(...arg)
    return result
  }
}

var f = function() {
  return [].slice.myBind(arguments,1)
}
console.log(f(1,3,4,5,6,7)(3))


