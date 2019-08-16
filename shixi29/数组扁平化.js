const arr = [11, [22, 33], [44, 55], 66];

// 第一种  变成字符串再处理
// console.log(arr.join().split(','))  

// console.log(arr.toString().split(','))

// 第二种  flat
// console.log(arr.flat())

// 第三种  reduce和concat
function deepFlat(arr) {
  return arr.reduce((acc,val)=>{
    return Array.isArray(val) ?  acc.concat(deepFlat(val)) : acc.concat(val)
  },[])
}

console.log(deepFlat(arr))