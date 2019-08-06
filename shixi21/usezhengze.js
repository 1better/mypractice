// 检查是否又重复字符串

function containsRepeatingLetter(str) {
  return /([a-zA-Z])\1/.test(str)
}

// \1 是对(\w)的一个实例化引用, 当(\w) 匹配到A时, \1 被表达成A, 当(\w)匹配9时, \1 被表示成9 

// 检查字母开头 ^  检查结尾 $
var str = 'gorilla'
var res1 = /^(a|A|e|E|i|I|o|O|u|U)/
console.log(res1.test(str))  // false
var res2 = /(a|A|e|E|i|I|o|O|u|U)$/
console.log(res2.test(str))  // true
// ^...$ 检查是否一样
var res3 = /^gorilla$/
var res4 = /^gorill$/
console.log(res3.test(str))  // true
console.log(res4.test(str))  // false

function captureThreeNumbers(str) {
  if(/\d\d\d/.test(str))
    return /\d\d\d/.exec(str)[0]
  else
    return false 
}
var str = '9'
console.log(captureThreeNumbers(str))


// 给定字符串 str，检查其是否符合如下格式 
// 1、XXX-XXX-XXXX
// 2、其中 X 为 Number 类型

function matchesPattern(str) {
  return (/^(\d{3}-\d{3}-\d{4})$/).test(str)
}

// 检查美元格式
/*
  1、以 $ 开始
  2、整数部分，从个位起，满 3 个数字用 , 分隔
  3、如果为小数，则小数部分长度为 2
  4、正确的格式如：$1,023,032.03 或者 $2.03，错误的格式如：$3,432,12.12 或者 $34,344.3
*/

// * 0次或者多次     ？0次或者一次      + 1次或者多次
function isUSD(str) {
  return /^\$(([1-9]\d{0,2}(,\d{3})*)|0)(\.\d{2})?$/.test(str)
}

var fn = function () {return this.greeting + ', ' + this.name + '!!!';}
var obj = {'greeting':'111','name':'222'}
console.log(fn.call(obj))

function removeWithoutCopy(arr, item) {
  arr = arr.filter(function(it){
      return !(it==item)
  })
  return arr
}
console.log(removeWithoutCopy([1, 2, 2, 3, 4, 2, 2], 2))