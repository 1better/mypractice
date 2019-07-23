// 原型链的继承   prototype = 

/* // 存在问题
function SuperType() {
  this.colors = ['haonan','xianggaibug','buxiangwendang']
}

function Super() {

}

Super.prototype = new SuperType()

var ins1 = new Super()

console.log(Super.prototype)

// colors 3

// ins1.colors.push('好好学习吧')

// 这样操作等于为ins1添加了一个新的属性  原型链上的属性不会改变
// ins1.colors = '正常'

console.log(Super.prototype)

// colors 4

// 改变原型上的数据  都会改变 */



/* // 使用call方法调用  构造函数继承

function SuperType() {
  this.name = 'zs'
}

function Super() {
  // 就等于 在Super中 这样 this.name = 'zs
  SuperType.call(this)
}

var s = new Super() 

var s2 = new Super() 

s.name = 'ls'

console.log(s)

console.log(s2) 

问题  不能实现函数复用

*/