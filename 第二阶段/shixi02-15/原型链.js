// 原型链继承
function Person(x) {
  this.colors = ['red','green','blue'] 
}
Person.prototype.showName = function() {
  console.log(this.colors)
}

function Children(x) {
  // Person.call(this,x)
}

Children.prototype = new Person()

let c = new Children()
let d = new Children()

c.colors.push('black')

// 缺点
d.showName()
// [ 'red', 'green', 'blue', 'black' ] 


// 组合继承缺点是调用了两次父构造函数 一次是call的时候  一次是new 的时候 (你new的时候colors也会挂载到原型上)

// 寄生构造函数 call构造函数继承 object.create()实现属性方法的继承
Children.prototype = Object.create(Person.prototype) 
Children.prototype.constructor = Children
console.log(Person.prototype.constructor) // [Function: Person]

// create方法
function create(obj) {
  function f(){}
  f.prototype = obj
  return f
}
Children.prototype = create(Person.prototype) 
Children.prototype.constructor = Children
console.log(Person.prototype.constructor)

// new 方法
function _new(fn) {
  let o = {}
  o.__proto__ = fn.prototype
  // this指向改变
  fn.call(o)
  return o
}

// 昨天的缺点
Children.prototype = Person.prototype
Children.prototype.constructor = Children
console.log(Person.prototype.constructor) // [Function: Children]




