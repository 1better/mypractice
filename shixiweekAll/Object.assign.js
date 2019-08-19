// Object.assign和Object.create相关

// Object.assign(target, ...sources) 用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象
let target = {a:1,b:2}
let source = {b:3,c:5}

Object.assign(target,source) // target是目标对象 sources是源对象
console.log(target)  // { a: 1, b: 3, c: 5 }

// Object.create(proto[, propertiesObject])  proto 新创建对象的原型对象  propertiesObject 则是要添加到新创建对象的可枚举属性（即其自身定义的属性，而不是其原型链上的枚举属性
const person = {
  name: '111',
  printP() {
    console.log(this.name)
  }
}
const me = Object.create(person)
me.printP()
console.log(me.name)
console.log(me.__proto__)  // { name: '111', printP: [Function: printP] }