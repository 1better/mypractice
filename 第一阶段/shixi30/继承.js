// 构造函数继承
function Person(name) {
  this.name = name
}

function Child(name) {
  Person.call(this,name)
}

Person.prototype.showName = function() {
  console.log(this.name)
}

Child.prototype = Object.create(Person.prototype)
// Object.create(Person.prototype)
Child.prototype.constructor = Child
Child.prototype.__proto__.age = 'w'

var c = new Child('ls')
var p = new Person('zs')
// 构造函数
//    优点    
//        可以传递参数
//    缺点
//        因为方法和属性只能写在构造函数中,因此不能实现函数复用 只能继承父类的实例属性和方法，
//        不能继承原型属性/方法 (原型中定义的方法和属性对于子类是不可见的)

console.log(c.__proto__)
console.log(p.__proto__)


// 原型链继承

