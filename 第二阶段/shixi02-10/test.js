class MyPromise {
  constructor(fn) {
    this.status = 'pending'
    this.data = ''
    this.successArr = []
    this.rejectArr = []
    fn(this.reslove.bind(this),this.reject.bind(this))
  }
  reslove(data) {
    this.status = 'fullfilled'
    this.data = data
    this.successArr.map(cb=>cb(this.data))
  }
  reject(data) {
    this.status = 'rejected'
    this.data = data
    this.rejectArr.map(cb=>cb(this.data))
  }
  then(successFn,rejectFn) {
    successFn = typeof successFn == 'function' ? successFn : (v) => v
    rejectFn = typeof rejectFn == 'function' ? rejectFn : (v) => v
    if(this.status == 'pending') {
      this.successArr.push(successFn)
    }else if(this.status == 'fullfilled') {
      successFn(this.data)
    }else {
      rejectFn(this.data)
    }
  }
}

MyPromise.all = (arr) =>  {
  let result = []
  let times = 0
  return new MyPromise(reslove=>{
    arr.forEach( (p,i) => {
      if(p instanceof MyPromise) {
        p.then(data=>next(i,data))
      }else {
        next(i,p)
      }
    })
    function next(i,data) {
    times ++
    result[i] = data
    if(times == arr.length) {
      reslove(result)
    }
  }
  })
  
}

MyPromise.race = (arr) =>  {
  let result = []
  let raceTime = 0
  return new MyPromise(reslove=>{
    arr.forEach( (p,i) => {
      if(p instanceof MyPromise) {
        p.then(data=>next(i,data))
      }else {
        next(i,p)
      }
    })
    function next(i,data) {
    result[i] = data
    if(raceTime==0) {
      for(let i=0;i<result.length;i++) {
        if(result[i]) {
          reslove(result[i])
          raceTime ++
          break
        }
      }
    }
    
  }
  })
  
}

let p1 = new MyPromise(reslove=>{
  setTimeout(()=>{
    reslove(33)
  },2000)
})
let p2 = new MyPromise(reslove=>{
  setTimeout(()=>{
    reslove(44)
  },2000)
})
let p3 = new MyPromise(reslove=>{
  setTimeout(()=>{
    reslove(55)
  },2000)
})

// MyPromise.all([p1,p2,p3]).then(arr=>console.log(arr))
MyPromise.race([p1,p2,p3]).then(arr=>console.log(arr))
