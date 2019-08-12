//[1,2,3,[4,5,6],[7,8]] 变成 [1,2,3,4,5,6,7,8]的方式

// 递归判断 for循环判断
function becomeOneArray(arr,newArr) {
  for(var i=0;i<arr.length;i++) {
    if(typeof arr[i]=='object') {
      becomeOneArray(arr[i],newArr)
    } else {
      newArr.push(arr[i])
    }
  }
  return newArr
}

var newArr = []
becomeOneArray([1,2,3,[4,5,6],[7,[8,9]]],newArr)
console.log(newArr)

// concat判断
function becomeOneArray(arr) {
  var newArr = []
  arr.forEach(item=>{
    if(typeof item == 'object') 
      newArr = newArr.concat(becomeOneArray(item))
    else 
      newArr.push(item)
  })
  return newArr
}

var newArr = []
newArr = becomeOneArray([1,2,3,[4,5,6],[7,[8,9]]])
console.log(newArr)
