// 在对象里边function可以省略
var obj = {
  name: 111,
  showName() {
    console.log(this.name)
  }
}
obj.showName() // 111

// 属性名和变量名一样可以省略写
var age = 18
var obj2 = {
  age,
  showAge() {
    console.log(this.age)
  }
}
obj2.showAge() // 18

// ... 展开运算符 可以将数组元素分开
let arr = [1,3,5]
console.log(...arr) // 1 3 5

// 增加了 let const 块级作用域变量声明

// 解构赋值 
// 1 对象的
let obj3 = {
  age: 36,
  name: 's',
  showAge() {
    console.log(this.age)
  }
}

let {age,...otherObj} = obj3
console.log(age) // 36
console.log(otherObj) //{ name: 's', showAge: [Function: showAge] } 

// 2 数组的 按照索引
let arr = [1,4,5]
let [one,...otherArr] = arr
console.log(one) // 1
console.log(otherArr) // [4,5]

// 模板字面量
let s = '1234445'
console.log(`我觉得模板字面量很好用，看s:${s}`)