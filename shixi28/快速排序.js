function quickSort(arr) {
  let len = arr.length
  if(len==0||len==1) return arr
  else {
    let left = [],right = []
    let mid = Math.floor(len/2)
    let arrMid = arr[mid]
    arr.splice(mid,1)
    while(arr.length>0) {
      if(arr[0]<arrMid) {
        left.push(arr.shift())
      }else {
        right.push(arr.shift())
      }
    }
    return quickSort(left).concat(arrMid,quickSort(right))
  }
}

let arr = [1,2,4,7,8,0,5,6,7,8,9]

console.log(quickSort(arr))