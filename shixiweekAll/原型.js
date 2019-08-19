// 创建对象的方式
var a = {name:111}
var b = new Object({'age':222})
console.log(b)

function Person(name) {
  this.name = name
}
var p = new Person('zs')
console.log(p)

var obj = {
  name:111
}
var object = Object.create(obj)
console.log(object.name)

// 原型
function Animal(name) {
  this.name = name
}

Animal.prototype.showName = function() {
  console.log(this.name)
}

function Dog(bark) {
  this.bark = bark
}

Dog.prototype = new Animal()
// console.log(Animal.prototype.constructor === Animal)  // true
// console.log(a.__proto__ === Animal.prototype) // true

console.log(Dog.prototype) 
console.log(Dog.prototype.__proto__ === Animal.prototype)  // true
console.log(Animal.prototype.__proto__ === Object.prototype) // true
console.log(null === Object.prototype.__proto__)


