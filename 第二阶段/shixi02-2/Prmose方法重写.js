// promise的实现

class MyPromise {
  constructor(fn) {
    this.status = 'pending'
    this.successArr = []
    this.failArr = []
    this.data = ''
    fn(this.reslove.bind(this),this.reject.bind(this))
  }
  reslove(value) {
    this.status = 'fullfilled'
    this.data = value
    this.successArr.map(fn=>fn(value))
  }
  reject(value) {
    this.status = 'rejected'
    this.data = value
    this.failArr.map(fn=>fn(value))
  }
  then(successCallback,failCallback) {
    successCallback = (typeof successCallback == 'function' ) ? successCallback : v => v
    failCallback = (typeof failCallback == 'function' ) ? failCallback : v => v

    if(this.status == 'pending') {
      this.successArr.push(successCallback)
      this.failArr.push(successCallback)
    }else if(this.status == 'fullfilled') {
      successCallback(this.data)
    }else {
      failCallback(this.data)
    }
  }
}
MyPromise.all = arr => {
  let result = []
  return new MyPromise((reslove,reject)=>{
    let times = 0
    for(let i=0;i<arr.length;i++) {
      if(arr[i] instanceof MyPromise) {
        arr[i].then(data=>{next(i,data)})
      }else {
        next(i,arr[i])
      }
    }
    function next(index,value) {
      result[index] = value
      times++
      if(times == arr.length) {
        reslove(result)
      }
    }
  })
}
/* MyPromise.race = arr => {
  let i = 0;
  return new MyPromise(reslove=>{
    for(var i=0;i<arr.length;i++) {
      if(arr[i] instanceof MyPromise) {
        arr[i].then(data=>{reslove(data)})
      }else {
        reslove(arr[i])
        break;
      }
    }
  })
} */
MyPromise.race = function(promises){
  if(!Array.isArray(promises)){
    throw new TypeError('You must pass array')
  }

  return new MyPromise(function(resolve,reject){
    function resolver(value){
      resolve(value)
    }

    function rejecter(reason){
      reject(reason)
    }

    for(var i=0;i<promises.length;i++){
      promises[i].then(resolver,rejecter)
    }
  })
}

let p = new MyPromise(reslove => setTimeout(()=>{reslove(1)},1000))
let p2 = new MyPromise(reslove => setTimeout(()=>{reslove(2)},500))
let p3 = new MyPromise(reslove => setTimeout(()=>{reslove(3)},300))
// Promise.all([p,p2,p3]).then(data=>console.log(data))
// MyPromise.all([p,p2,p3]).then(data=>console.log(data))
MyPromise.race([p,p2,p3]).then(data=>console.log(data))

let s1 = new Promise(reslove => reslove(1))
let s2 = new Promise(reslove => setTimeout(()=>{reslove(2)},500))
let s3 = new Promise(reslove => setTimeout(()=>{reslove(3)},300))
// Promise.all([s1,s2,s3]).then(data=>console.log(data)) // 1 2 3 
Promise.race([s1,s2,3]).then(data=>console.log(data))