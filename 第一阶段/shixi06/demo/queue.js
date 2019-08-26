/* var p = new Promise(reslove => {
  setTimeout(()=>{
    console.log(1)
    reslove(2)
  },3000)
})

p.then(data=>{
  console.log(data)
})

setTimeout(()=>{
  var p2 = new Promise(reslove => {
    setTimeout(()=>{
      console.log(3)
      reslove(4)
    },1000)
  })
  p2.then(data=>console.log(data))
},1000)

 */

var setTimeout1 = setTimeout(function () {
  console.log('---1---')
}, 0) 

var setTimeout2 = setTimeout(function () {
  Promise.resolve().then(() => {
    console.log('---2---')
  })
  console.log('---3---')
}, 0)   // 3 2 

new Promise(function (resolve) {
  console.time("Promise")
  for (var i = 0; i < 1000000; i++) {
    i === (1000000 - 1) && resolve()
  }
  console.timeEnd("Promise")

}).then(function () {
  console.log('---4---')
});

console.log('---5---')