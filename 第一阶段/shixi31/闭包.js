// 以下代码返回什么？
var scope = 'global scope'
function checkScope() {
  var scope = 'local scope'
  function f() {
    return scope
  }
  return f()
}

console.log(checkScope())   // local scope

var s = 'global scope'
function checkScope() {
  var scope = 'local scope'
  return function () {
    return s
  }
}

var b = checkScope()
console.log(b())  
// 相当于
var s = function (){
  var scope = 'local scope'
  var i = 0
  return function () {
    console.log(this)
    return ++i
  }
}
var s1 = s()
console.log(s1())
console.log(s1())

var i = 0
var l = function () {
  var i = 1;
  return ++i
}
console.log(l())
console.log(l())


// 实现自增
var couAdd = function() {
  var counter = 1;
  console.log(counter)
  return function() {
    return counter++
  }
}

couAdd()()
couAdd()()
console.log(couAdd()())

var a = 10;
function b () {
    console.log('全局的b函数')
};
function bar(a, b) {
    var a
    console.log('1', a, b) 
    a = 1
    function b() {
        console.log('bar下的b函数')
    }
    console.log('2', a, b) 
}
bar(2, 3)
console.log('3', a, b)

foo() 
var foo = function() {console.log(1)}
function foo() {console.log(2)}

foo() 
function foo() {console.log(2)}
var foo = function() {console.log(1)}

var foo = function() {console.log(1)}
function foo() {console.log(2)}
foo()