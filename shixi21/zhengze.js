// 正则表达式
var res = /\d/

// test方法
console.log(res.test(123)) // true

// search方法 (正则)
var str = 'AAA1233'
var res2 = /\d/
// 前边字符串  方法参数是正则
console.log(str.search(res2)) // 3

// search方法 (字符串)
var str2 = 'ooo23424'
var res3 = '3'
console.log(str2.search(res3)) // 4

// replace方法 (正则)
var str = 'hellow leilei'  
// console.log(str.replace(/h/,'ha'))  // haellow leilei
console.log(str.replace(/l/g,'m'))  // hemmow meimei   g代表全都替换掉

// replace方法 (字符串)
var str = 'ohahahaha'
console.log(str.replace('o','l')) //lhahahaha


// exec方法  exec() 方法是一个正则表达式方法。
// exec() 方法用于检索字符串中的正则表达式的匹配。
//该函数返回一个数组，其中存放匹配的结果。如果未找到匹配，则返回值为 null
var reg = /o/
var str = 'lo lo lo lol'
console.log(reg.exec(str)) //[ 'o', index: 1, input: 'lo lo lo lol', groups: undefined ]
// replace方法不会改变原来的字符串
str = str.replace(/o/,'l')
console.log(reg.exec(str)) //[ 'o', index: 4, input: 'll lo lo lol', groups: undefined ]