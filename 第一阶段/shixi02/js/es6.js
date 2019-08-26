// map   映像

/* let arr = [1,3,5,7,9]

let arr2 = arr.map(arr=>{
  return arr*arr
})

console.log(arr2) */

// filters  过滤数组


/* let arr = [1,3,5,7,9]

let arr3 = arr.filter(arr=>{
  return arr>5
})

console.log(arr3) */

// some   数组只要有一项数据符合就返回true

/* let arr = [1,3,5,7,9]

let arr4 = arr.some(arr=>{
  return arr>5
})

console.log(arr4) */

// every   数组只要有一项数据不符合就返回false

let arr = [1,3,5,7,9]

let arr5 = arr.every(arr=>{
  return arr>5
})

console.log(arr5)

function getType(obj){
  // 返回 Array  Object ... 
  return Object.prototype.toString.call(obj).slice(8,-1);
 }
 //循环遍历
 function deepClone(obj) {
  let result, objClass = getType(obj);
  if(objClass == 'Array'){
      result = [];
  }else if(objClass == 'Object'){
      result = {};
  }else {
      return obj;
  }
  for(let key in obj) {
      let value = obj[key];
      if(getType(value) === 'Array' || 'Object'){
          result[key] = deepClone(value);
      }else {
          result[key] = value;
      }
  }
  return result;
 }