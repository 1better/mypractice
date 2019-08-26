//  构造函数继承
function Person(name,age) {
  this.name = name
  this.age = age
}

Person.prototype.showName = function() {
  return this.name
}

function Man(name,age) {
  Person.apply(this,[name,age])
}



// 原型链继承
Man.prototype = new Person()

var man = new Man('zs',18)
console.log(man.name)
console.log(man.age)
// man.showName is not a function 构造函数不能继承原型上的方法
console.log(man.showName())
