//  promise 的简单使用

/* let p = new Promise((reslove,reject)=>{
  reslove(1)
})

p.then(data=>{
  console.log(data)
}) */


// 配合ajax使用

/* let p = new Promise(reslove => {

  let xml = new XMLHttpRequest()
  
  xml.open('get','./data.json')

  xml.onreadystatechange = () => {
    if(xml.readyState === 4 && xml.status === 200) {
      reslove(xml.responseText)
    }
  }

  xml.send()
})

p.then(data=>{
  console.log(JSON.parse(data)
}) */

//封装成函数进行链式调用
/* function getData(url) {
  return new Promise(reslove => {
    let xml = new XMLHttpRequest()  
    xml.open('get','./data.json')
    xml.onreadystatechange = () => {
      if(xml.readyState === 4 && xml.status === 200) {
        reslove(JSON.parse(xml.responseText))
      }
    }
    xml.send()
  })
}

getData('./data.json')
  .then(data=>{
    console.log(data)
    return getData('./data.json')
  })
  .then(data=>{
    console.log(data)
    return getData('./data.json')
  })
  .then(data=>{
    console.log(data)
    return getData('./data.json')
  }) */

  //reject 
  let p = new Promise((reslove,reject)=>{
    reject(1)
  })
  let p2 = new Promise((reslove,reject)=>{
    reject(1)
  })
  p.then(data=>{
  },err=>{
    console.log(err)
    return p2
  }).then(data=>{
  },err=>{
    console.log(err)
  })

  const someAsyncThing = function() {
    return new Promise(function(resolve, reject) {
      // 下面一行会报错，因为x没有声明
      resolve(x + 2);
    });
  };
  // catch
  someAsyncThing().then(function() {
    return someOtherAsyncThing();
  }).catch(function(error) {
    console.log('oh no', error);
    // 下面一行会报错，因为y没有声明
    y + 2;
  }).catch(function(error) {
    console.log('carry on', error);
  });


  //Promise.all 以及 Promise.race
  let p1 = new Promise((reslove,reject)=>{
    reslove(1)
  })
  let p2 = new Promise(reslove=>{
    reslove(1)
  })
//接受一个promise的数组  返回一个数组对象
  Promise.all([p1,p2]).then(arr=>{
    console.log(arr)
  })
  Promise.race([p1,p2]).then(data=>{
    console.log(data)
  })


