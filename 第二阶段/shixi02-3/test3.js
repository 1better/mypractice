// 宏任务1
var setTimeout1 = setTimeout(function () {
  console.log('---1---')
}, 1000) 

// 宏任务2
var setTimeout2 = setTimeout(function () {
  new Promise(reslove=>reslove()).then(() => {
    // 微任务2 
    console.log('---2---')
  })
  console.log('---3---')
}, 0)   // 3 2 

new Promise(function (resolve) {
  // 同步代码
  console.log('---6---')
  // 宏任务3 
  var setTimeout3 = setTimeout(function () {
    console.log('---7---')
  }, 0) 
  console.time("Promise")
  for (var i = 0; i < 1000000; i++) {
    i === (1000000 - 1) && resolve()
  }
  console.timeEnd("Promise")

}).then(function () {
  // 微任务 1
  console.log('---4---')
});

// 同步代码
console.log('---5---')