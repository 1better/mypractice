function mergeSort(arr) {
  let len = arr.length
  if(len == 1) {
    return arr
  } else {
    let mid = Math.floor(len/2)
    let left = arr.slice(0,mid)
    let right = arr.slice(mid)
    return merge(mergeSort(left),mergeSort(right))
  }
}

function merge(left,right) {
  var all = []
  while(left.length>0&&right.length>0)
  {
    if(left[0]<right[0])
      all.push(left.shift())
    else 
      all.push(right.shift())
  }
  return left.concat(all,right)
}

let arr = [1,2,4,7,8,0,5,6,7,8,9]

console.log(mergeSort(arr))