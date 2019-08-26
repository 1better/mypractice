function MyPromise(fn) {
  this.status = 'pending'
  fn(data=> {
    this.status = 'fullfilled',
    this.data = data
  },err => {
    this.status = 'rejected',
    this.err = err
  })
  fn(reslove,reject)
}

MyPromise.prototype.then = function(onFulfilled, onRejected) {
  console.log(this.status)
  if(this.status = 'fullfilled') {
    onFulfilled(this.data)
  }
}

let p = new MyPromise((reslove,reject)=>{
  reslove(1)
  /* setTimeout(
    ()=>{reslove(1)},5000
  ) */
})

p.then(data=>console.log(data))