## 学习的东西二

## this.setState在什么周期函数中尽量不要调用

> 1. ### render函数是肯定不可以调用的，因为this.setState会造成数据的重新渲染，会再执行render函数，就会陷入死循环
>
> 2. ### ComponentDidUpdate中可以调用，不过要注意约束条件，如果没有约束条件也会陷入死循环
>
> 3. ### ComponentWillUnmonut 组件将要卸载的时候，这个时候适合清除定时器，如果再this.setState的话又会re-render

## 为什么this.setState是异步的

> 1. ### 保证内部数据的统一，re-render是一个很差的机制，如果this.setState是同步的话获取导致子组件无法同步刷新this.props会造成子组件和父组件的值不一致
>
> 2. ### setState异步更新状态使得并发更新组件成为可能
>
> > #### ```例子:比如你现在正在打字，那么TextBox组件需要实时的刷新。但是当你在输入的时候，来了一个信息，这个时候，可能让信息延后刷新可能更符合交互```
> >
> > #### 异步rendering不仅仅是性能上的优化，而且这可能是react组件模型在发生的根本性的改变

## setState总结

![setState总结](/Users/beisen/Desktop/front-end/myshixi/shixi06/images/setState总结.jpg)



## js任务队列的执行顺序（任务队列的顺序自己再看一看）

> **任务队列的执行顺序**
>
> > **整个的js代码macrotask先执行，同步代码执行完后有microtask执行microtask，没有microtask执行下一个macrotask，如此往复循环至结束**
> >
> > ```
> > //	网上的一段执行顺序代码
> > var setTimeout1 = setTimeout(function () {
> >   console.log('---1---')
> > }, 0) 
> > 
> > var setTimeout2 = setTimeout(function () {
> >   Promise.resolve().then(() => {
> >     console.log('---2---')
> >   })
> >   console.log('---3---')
> > }, 0)   // 3 2 
> > 
> > new Promise(function (resolve) {
> >   	console.time("Promise")
> >   	for (var i = 0; i < 1000000; i++) {
> >     i === (1000000 - 1) && resolve()
> >   }
> >   console.timeEnd("Promise")
> > 
> > }).then(function () {
> >   console.log('---4---')
> > });
> > 
> > console.log('---5---')
> > 
> > //执行顺序为 Promise内的执行时间 5 4 1 3 2
> > ```
> >
> > > 过程分析
> > >
> > > 1. 异步代码加入任务队列 同步代码执行完 打印Promise内的执行时间 和 5
> > > 2. 异步队列 微任务 console.log(4) 宏任务 set1 set2
> > > 3. 执行完微任务 打印4 再按照顺序执行宏任务 set1 set2 set1执行完打印1
> > > 4. set2里边有同步代码 console.log(3) 微任务(console.log(2))
> > > 5. 先打印3 再打印 2
> >
> > 小结
> >
> > > - console.time 和 console.timeEnd 可以看到执行时间
> > > - 一个事件循环(event loop)会有一个或多个任务队列(task queue)
> > > - 每一个 event loop 都有一个 microtask queue
> > > - task queue == macrotask queue != microtask queue
> > > - 一个任务 task 可以放入 macrotask queue 也可以放入 microtask queue 中
> > > - 调用栈清空(只剩全局)，然后执行所有的microtask。当所有可执行的microtask执行完毕之后。循环再次从macrotask开始，找到其中一个任务队列执行完毕，然后再执行所有的microtask，这样一直循环下去
> > >
> > > > microtasks（微任务）:
> > > >
> > > > > - process.nextTick
> > > > > - promise
> > > > > - Object.observe
> > > > > - MutationObserver
> > > >
> > > > mascrotask（宏任务）：
> > > >
> > > > > - setTimeout：
> > > > > - setInterval
> > > > > - setImmediate
> > > > > - I/O
> > > > > - UI渲染
>
> ps: 唉，这个我之前都学习过，但是怎么就给忘记了呢，难受呀。。。

## 观察者的例子

> ```js
> // 学习一下观察者模式  
> class Watcher {
>   constructor() {
>     //处理事件数组
>     this.handles = {}
>   }
> 
>   //订阅事件
>   on(eventType,handle) {
>     if(!this.handles.hasOwnProperty(eventType)){
>       this.handles[eventType] = []
>     }
>     if(typeof handle != 'function') {
>       throw new Error('这不是回调函数！')
>     }
>     this.handles[eventType].push(handle)
>     return this
>   }
> 
>   //发布事件
>   emit(eventType,...args) {
>     if(!this.handles.hasOwnProperty(eventType)){
>       throw new Error(`${eventType}事件未注册！`)
>     }else {
>       this.handles[eventType].forEach( item => {
>         item.apply(null,args)
>       })
>     }
>     return this
>   }
> 
>   //删除事件
>   off(eventType,handle) {
>     if(!this.handles.hasOwnProperty(eventType)) {
>       throw new Error(`${eventType}事件未注册！`)
>     } else if(typeof handle != 'function') {
>       throw new Error('缺少回调函数')
>     }else {
>       this.handles[eventType].forEach( (item,index) => {
>         if(item==handle) {
>           this.handles[eventType].splice(index,1)
>         }
>       })
>     }
>     return this
>   }
> }
> 
> let pubSub = new Watcher()
> 
> function callback() {
>   console.log('good good study')
> }
> 
> pubSub.on('completed',callback)
> 
> pubSub.on('completed',(...args)=>{
>   console.log(args.join(' '))
> })
> 
> pubSub.emit('completed','day','day','up')
> 
> pubSub.off('completed',callback)
> 
> pubSub.emit('completed','学分置换','我凉了','啊哦')
> ```
>
> 

## this的指向再复习一下

> 箭头函数看定义所处的对象
>
> **全局作用域或者普通函数中this指向全局对象window**
>
> **方法调用谁调用this指向谁**
>
> **this的指向可以强制改变**
>
> **对于函数内部的this，谁调用它，它就指向谁；若没有明确的调用对象，即使一个函数定义在另一个函数内部，this仍然指向window**
>
> ### `this`指的是函数运行时所在的环境

## 为什么this的指向会这样

> 文章地址:[http://www.ruanyifeng.com/blog/2018/06/javascript-this.html]
>
> js产生一个对象 比如```var obj = {foo:5}```
>
> 此时先在内存中生成一个对象，然后把这个对象的内存地址赋值给变量，也是说，变量`obj`是一个地址（reference）。后面如果要读取`obj.foo`，引擎先从`obj`拿到内存地址，然后再从该地址读出原始的对象，返回它的`foo`属性
>
> ```js
> {
>   foo: {
>     [[value]]: 5
>     [[writable]]: true
>     [[enumerable]]: true
>     [[configurable]]: true
>   }
> }
> //实际上就是这样
> ```
>
> 当这样时 ```var obj = {foo:function()}```
>
> 此时这个函数也被保存到内存中，然后再将函数的地址赋值给`foo`属性的`value`属性。
>
> 这样函数就是一个单独的值，所以它可以在不同的环境（上下文）执行
>
> JavaScript 允许在函数体内部，引用当前环境的其他变量。由于函数可以在不同的运行环境执行，所以需要有一种机制，能够在函数体内部获得当前的运行环境（context）。所以，`this`就出现了，它的设计目的就是在函数体内部，指代函数当前的运行环境

## 为什么const声明的对象可以修改

> 指针指向内存地址，const仅保证指针不发生改变，修改对象的属性不会改变对象的指针，所以是被允许的。也就是说const定义的引用类型只要指针不发生改变，其他的不论如何改变都是允许的。

## 