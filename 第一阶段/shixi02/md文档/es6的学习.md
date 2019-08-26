## es6的学习

## promise

> ### promise的简单使用
>
> > ```js
> > let p = new Promise((reslove,reject)=>{
> >   reslove(1)
> > })
> > 
> > p.then(data=>{
> >   console.log(data)
> > })
> > ```
>
> ### promise配合ajax
>
> ```js
> let p = new Promise(reslove => {
>   
>   let xml = new XMLHttpRequest()
>   
>   xml.open('get','./data.json')
> 
>   xml.onreadystatechange = () => {
>     if(xml.readyState === 4 && xml.status === 200) {
>       reslove(xml.responseText)
>     }
>   }
> 
>   xml.send()
> })
> 
> p.then(data=>{
>   console.log(JSON.parse(data)
> })
> ```
>
> ### promise结合函数实现链式调用
>
> > ```js
> > function getData(url) {
> >   return new Promise(reslove => {
> >     let xml = new XMLHttpRequest()  
> >     xml.open('get','./data.json')
> >     xml.onreadystatechange = () => {
> >       if(xml.readyState === 4 && xml.status === 200) {
> >         reslove(JSON.parse(xml.responseText))
> >       }
> >     }
> >     xml.send()
> >   })
> > }
> > 
> > getData('./data.json')
> >   .then(data=>{
> >     console.log(data)
> >     return getData('./data.json')
> >   })
> >   .then(data=>{
> >     console.log(data)
> >     return getData('./data.json')
> >   })
> >   .then(data=>{
> >     console.log(data)
> >     return getData('./data.json')
> >   })
> > ```
>
> ### promise的catch用法（这个没有想出来）
>
> ```js
> //Promise 对象后面要跟catch方法，这样可以处理 Promise 内部发生的错误。catch方法返回的还是一个 Promise 对象，因此后面还可以接着调用then方法。
> //代码运行完catch方法指定的回调函数，会接着运行后面那个then方法指定的回调函数。如果没有报错，则会跳过catch方法。此时，要是最后的then方法里面报错，就与前面的catch无关了。
> const someAsyncThing = function() {
>     return new Promise(function(resolve, reject) {
>       // 下面一行会报错，因为x没有声明
>       resolve(x + 2);
>     });
>   };
>   // catch
>   someAsyncThing().then(function() {
>     return someOtherAsyncThing();
>   }).catch(function(error) {
>     console.log('oh no', error);
>     // 下面一行会报错，因为y没有声明
>     y + 2;
>   }).catch(function(error) {
>     console.log('carry on', error);
>   });
> 
> ```
>
> ### Promise.all 和 promise.race的用法
>
> ```js
> //Promise.all 以及 Promise.race
>   let p1 = new Promise((reslove,reject)=>{
>     reslove(1)
>   })
>   let p2 = new Promise(reslove=>{
>     reslove(1)
>   })
> //接受一个promise的数组  返回一个数组对象
>   Promise.all([p1,p2]).then(arr=>{
>     console.log(arr)
>   })
> //接受一个promise的数组，返回最快的那一个对象
> 	Promise.race([p1,p2]).then(data=>{
>   console.log(data)
> })
> ```
>
>   

## es6的一些操作

> ### … 运算符
>
> ### Set. 去重
>
> ### 默认参数
>
> ### 箭头函数
>
> ### bind的用法
>
> ### 解构赋值

## es6数组的一些方法

> ### map
>
> ```js
> //map 映射
> let arr = [1,3,5,7,9]
> 
> let arr2 = arr.map(arr=>{
>   	return arr*arr
> })
> 
> console.log(arr2) //arr 2 [1,9,25,49,81]
> ```
>
> ### filter
>
> ```js
> // filters 过滤
> let arr = [1,3,5,7,9]
> 
> let arr3 = arr.filter(arr=>{
>   return arr>5
> })
> 
> console.log(arr3)  // arr3 [7,9]
> ```
>
> ### some
>
> ```js
> //some   数组只要有一项数据符合就返回true
> let arr = [1,3,5,7,9]
> 
> let arr4 = arr.some(arr=>{
>   return arr>5
> })
> 
> console.log(arr4)  // true
> ```
>
> ### Every
>
> ```js
> //every   数组只要有一项数据不符合就返回false
> let arr = [1,3,5,7,9]
> 
> let arr5 = arr.every(arr=>{
>   return arr>5
> })
> 
> console.log(arr5) // false
> ```
>
> ### 其他
>
> ```js
> // splice		会修改原数组，删除数组
> // slice concat 删除与拼接 不修改原数组
> // forEach 遍历数组
> ```
>
>  

## 深拷贝

> ```js
> // 1 JSON.parse(JSON.stringify(obj))
> 
> // 2 循环方法
> function getType(obj){
>   // 返回 Array  Object ... 
>   return Object.prototype.toString.call(obj).slice(8,-1);
>  }
>  //循环遍历
>  function deepClone(obj) {
>   let result, objClass = getType(obj);
>   if(objClass == 'Array'){
>       result = [];
>   }else if(objClass == 'Object'){
>       result = {};
>   }else {
>       return obj;
>   }
>   for(let key in obj) {
>       let value = obj[key];
>       if(getType(value) === 'Array' || 'Object'){
>           result[key] = deepClone(value);
>       }else {
>           result[key] = value;
>       }
>   }
>   return result;
>  }
> ```
>
> 