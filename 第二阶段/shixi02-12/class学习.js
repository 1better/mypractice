class Person {
  constructor(x,y) {
    this.x = x
    this.y = y
  }

}

let p = new Person(1,2)

console.log(p.x,p.y)

// 可以使用表达式
let methodName = "getTitle";
class Person {
  [methodName]() {
    return 'title'
  }
}

let p = new Person()
console.log(p.getTitle())

// 立即执行 class
let person = new class{
  constructor(x) {
    this.x = x
  }
}('go')
console.log(person.x) // go

// 私有方法  class不提供私有方法，需要变通方法来实现
// 在方法前面加 _ 不太保险
// 将私有方法移出模块
class Person{
  constructor(x,y) {
    this.x = x
    this.y = y
  }
  getName() {
    return goName()
  }
}
function goName() {
  return '私有方法'
}
let p = new Person(1,2) 
console.log(p.getName()) // 私有方法
// 利用Symbol值的唯一性，将私有方法的名字命名为一个Symbol值

// 类的方法内部如果含有this，它默认指向类的实例 (类似于react的绑定this)
class Person {
  constructor() {
    console.log(this) // Person
    //this.getName = this.getName.bind(this) // 已经将this绑定到上边了，执行环境如何改变都可以
  }
  getName() {
    console.log(this) 
    console.log(this.name())
  }
  name() {
    return '测试name'
  }
}
let p = new Person()
let {getName,name} = p
// 
getName() // undefined Cannot read property 'name' of undefined 报错


let obj = {
  name: 111,
  getName() {
    this.name = this.getName.bind(this)
    console.log(this.name)
  }
}
obj.getName()
let {getName} = obj
getName()

// static关键字
class Person {
  static getName() {
    console.log('静态方法得到的name')
  }
}
let p = new Person()
p.getName() // p.getName is not a function
Person.getName() // 静态方法得到的name
class Man extends Person {

}
Man.getName() // 静态方法得到的name