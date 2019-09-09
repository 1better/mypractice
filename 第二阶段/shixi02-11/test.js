const arr = [11, [22, 33], [44, 55], 66];

// let arr1 = arr.toString().split(',')

// let arr1 = arr.join(',').split(',')

// console.log(arr1)

// 浏览器支持  node 11.0.0及以上支持
// let arr1 = arr.flat(1)

// console.log(arr1)

// 自己封装方法
function deepFlat(arr) {
  return arr.reduce((acc, val) => {
    return Array.isArray(val) ? acc.concat(deepFlat(val)) : acc.concat(val);
  }, []);
}

let arr1 = deepFlat(arr);
console.log(arr1);

let arr = [1, 3, 4, 5, 6, 3, 4];
/* let arr2 = arr.filter((item,index)=>{
  return arr.indexOf(item) === index
})
console.log(arr2) */

let obj = {},
  result = [];
for (let i of arr) {
  if (!obj[i]) {
    result.push(i);
    obj[i] = 1;
  }
}

let arr = [1, 3, 4, 5, 6, 3, 4];
let obj = {},
  result = [];
arr.forEach(item => {
  if (!obj[item]) {
    result.push(item);
    obj[item] = 1;
  }
});
console.log(result);

let a = (...arg) => {
  return 1 + Number(arg);
};
let b = (...arg) => {
  return 2 + Number(arg);
};
let c = (...arg) => {
  return 3 + Number(arg);
}
let arr = [a,b,c];
/* let sum = arr.reduce((a,b)=> a+b)
  console.log(sum) // 9 */
let sum2 = arr.reduce((a, b) => (...args) => a(b(...args)));
let d = () => {
  return 3;
};

let sum3 = arr.reduce(function(a,b){
  return function(d) {
    /* console.log(a()) //1  // 3  // 1
    console.log(d)  //    // 3  // 6
    console.log(b(d)) // 2  // 6   // 8 */
    return a(b(d)) 
  }
})

// console.log(a(b(c(d())))); // 9
console.log(sum3(d())); // 1这样返回9   1 2 3 6 


let arr = [1,3,5,7,9]
let [one,two] = arr
console.log(one,two) // one 1 two 3
let [...last] = arr
console.log(last)  // last 1 3 5 7 9
let [...last,last2] = arr // 会报错


function create(obj) {
  let o = function () {}
  o.prototype = obj
  return new o()
}
let person = {
  name:111
}
let p = create(person)
console.log(p.__proto__)