/* 
* 

*/


let obj = {
  add:function(){
    console.log('jia')
  }
}

let next = obj.add

obj.add = function() {
  console.log('我不加')
}

obj.add()
next()


let addSum = (a) => (b) => {
  console.log(a+'-----'+b)
  return (a+b)
}

let sum = addSum(1)(3)

console.log(sum)

function add(a) {
  return function(b) {
    return a+b
  }
}

let sum2 = add(1)(3)

console.log(sum2)