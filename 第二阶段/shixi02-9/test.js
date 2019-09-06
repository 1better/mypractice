var reg =  /^([\u4E00-\u9FA5]|[a-zA-Z]|[0-9])*((;|；)([\u4E00-\u9FA5]|[a-zA-Z]|[0-9])*)*$/

var str1 = '111;111;；1111'  // true 
var str2 = '嗷嗷;111'   // false
var str3 = '111;;'   // true
var str4 = '111;'    // true
var str5 = ';111'    // true
var str6 = '111'    // true

console.log(reg.test(str1))
console.log(reg.test(str2))
console.log(reg.test(str3))
console.log(reg.test(str4))
console.log(reg.test(str5))
console.log(reg.test(str6))



