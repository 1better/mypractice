Function.prototype.myCall = function(self,...value) {
  self = self || window
  self.fn = this
  console.log(...value)
  var result = self.fn(...value)
  delete self.fn
  return result
}

function _new(fun) {
  var obj = {}
  // obj.__proto__ = fun.prototype
  // 将this指向改为obj
  fun.myCall(obj)
  return obj
}

var Fun = function() {
  this.name = 'zs'
  this.age = 18
}
/* var obj = _new(F)

console.log(obj) */

var obj = {}
obj.F = function() {
  this.name = 'zs'
  this.age = 18
}
obj.F()
delete obj.F
console.log(obj)