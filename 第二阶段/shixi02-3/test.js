new Promise((resolve) => {
  console.log('new Promise');
  resolve();
}).then(() => {     
  // 微任务1
  console.log('micro task 1');    //进入微服务1直接执行
  // 宏任务2
  setTimeout(() => {
    console.log('macro task 1');  //进入宏2后直接执行
  }, 0)
})

setTimeout(() => {
  // 宏任务1
  console.log('macro task 2');   //进入宏2后直接执行
}, 0)


new Promise((resolve) => {
  console.log('new Promise');
  resolve();
}).then(() => {     
  // 微任务1
  console.log('micro task 1');    //进入微服务1直接执行 执行完按照顺序执行宏任务
  // 宏任务2
  setTimeout(() => {
    console.log('macro task 1');  //进入宏任务2后
  }, 0)
})

setTimeout(() => {
  // 宏任务1
  console.log('macro task 2');   //进入宏任务1后
}, 1000)



// 宏任务1
var setTimeout1 = setTimeout(function () {
  console.log('---1---')
}, 1000) 

// 宏任务2
var setTimeout2 = setTimeout(function () {
  Promise.resolve().then(() => {
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

// 6 5 4 3 7 2 1

// 同步代码 -> 微任务 1 -> 宏任务1 -> 宏任务2 -> 宏任务3

// 同步1
console.log('======== 1========');
new Promise(resolve => {
  // 同步2
  console.log('2');
  resolve();
}).then(() => {
  // 微1
  console.log('3');
  // 宏2
  setTimeout(() => {
    console.log('4');
  }, 0);
})

// 同3
console.log('5');
// 宏1 
setTimeout(() => {
  // 微2
  console.log('6');
  new Promise(resolve => {

    console.log('7');
    resolve();
  }).then(() => {
    console.log('8');
  })
  console.log('9');
  setTimeout(() => {
    console.log('10');
  }, 0);
}, 0);

new Promise(resolve => {
  // 同4
  console.log('11');
  resolve();
}).then(() => {
  // 微3
  console.log('12');
})

// 同5
console.log('13');


