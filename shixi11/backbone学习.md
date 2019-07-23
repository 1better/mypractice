## backbone的学习二

## backbone与服务器交互常用方法（Restful风格）

> ```js
> var Task = Backbone.model.extends({
>       // 
>       // idAttribute:'guid', 唯一标识更改  默认是id
>       urlRoot: 'url' // 必须  与远程服务器进行连接
>     })
> 
> 
> 
>     var task = new Task({
>       
>       'title':'course1',
>       'description':'des1'
>     })
> 
>     task.save() // 没有id值时 发送 POST请求  给一个id
>     // 有 id值时 发送PUT或者PATCh请求
> 
>     task.save('title','course2') // 更改值
> 
>     task.fetch() //抓取远程服务器的内容  GET请求
> 
>     task.destroy() //删除  PUT请求
> 
>     // sync 事件 只要和服务器交互都会触发
> ```
>
>  

## 什么叫restful风格

> 非restful示例
>
> ```js
> http://localhost:8080/employee/get/{id} GET
> http://localhost:8080/employee/delete/{id} POST/GET
> http://localhost:8080/employee/create POST
> http://localhost:8080/empliyee/update POST
> ```
>
> restful示例
>
> ```js
> http://localhost:8080/employee/{id} GET
> http://localhost:8080/employee DELETE
> http://localhost:8080/employee POST
> http://localhost:8080/empliyee PUT
> ```
>
> 就是按照严格的http请求来处理  get 获取。post 增加。delete 删除 put / patch 更改
>
> 这样有利于前端和后端的交互就有了一个标准，便于之间的交互以及错误的查找

## jquery操作dom表单

> ```js
> // jQuery1.6以后的版本用到的是prop。用attr的话不会多次实现，因为attr不会记录当前checkbox的选中状态
> ```
>
> 遇到的坑
>
> ```js
> this.collection.each(model=>{
>             // 这个model改变
>             model.set("done",check);      
>           })
>           $('.toggle').prop('checked',check)
>           // 当用下面的方法的时候 显示有bug 可能是因为attribute和属性值的问题        
>           //$('.toggle').attr('checked',check)
> ```
>
>  原生js 的属性和attributes的区别
>
> > ```html
> > <input type="text" id='mytext'>
> >   <script>
> > 		var mytext = document.getElementById('mytext')
> >     console.log(mytext.id) //mytext
> >     console.log(mytext.value) // ''
> >     console.log(mytext.aaa) // undefined
> > 
> >     /* mytext.setAttribute('value','111')
> >     console.log(mytext.getAttribute('value')) // 111
> >     console.log(mytext.value) // 111
> >     mytext.value = '222'
> >     console.log(mytext.getAttribute('value')) // 111 */
> > 
> >     /* mytext.value = 111
> >     console.log(mytext.getAttribute('value')) //null */
> > 
> >    /*  mytext.setAttribute('aaa','333')  // 这样页面上是 <input type="text" id='mytext' 		aaa='333'>
> >     console.log(mytext.getAttribute('aaa')) // 333
> >     console.log(mytext.aaa) // undefined */
> > 
> >     /* mytext.aaa = 333 // 这样页面上还是 <input type="text" id='mytext'>
> >     console.log(mytext.getAttribute('aaa')) // null
> >     console.log(mytext.aaa)  // 333 */
> > 
> >  // 只要点语法或者中括号语法能获取到不是undefined的值的时候 用setAttribute改变这样属性值也改变
> > 
> > // setAttribute改变的值或者添加的属性会反映到页面上。而属性操作的方式不会反映到页面上
> >     
> > // 它们两个的操作除了这个互不影响，所以最好如果用属性值添加时就用属性值获取，setAttribute的方式就用get。。来获取
> >  </script>
> >     
> > ```
> >
> > 复选框
> >
> > > ```html
> > > <input type="checkbox" id="mycheck1" >111
> > >   <script>
> > >     var check = document.getElementById('mycheck1')
> > >     /* console.log(check.checked) false
> > >     check.checked = true  // 这样可以更改 */
> > > 
> > >     console.log(check.getAttribute('checked')) // null
> > >     check.setAttribute('checked',false) // 设定什么值都会改变为true
> > > 
> > >     console.log(check.checked)  // 得到的一直是true
> > >     check.checked = false  // 只要这样操作了 setAttrbute就不管用了
> > >     
> > >     check.setAttribute('checked','222') 
> > >     
> > >     // 可能因为这个jquery操作时有了显示的bug
> > >   </script> 
> > > ```
> > >
> > >  

## Backbone的事件原型的原理 （简单）

> ```js
> var Cat = function() {
> 
>     }
>     // 都是继承 Backbone.Events 来实现的事件的监听以及绑定(on listenTo off ...)
>     _.extend(Cat.prototype,Backbone.Events)
> 
>     var jerry = new Cat()
>     var tom = new Cat()
>     tom.on('run',function(){
>       console.log('tom run')
>     })
>     jerry.listenTo(tom,'run',function(){
>       console.log('jerry watch tom run')
>     })
> ```
>
> ```js
> var jerry = {}
> var tom = {}
> _.extend(tom,Backbone.Events)
> _.extend(jerry,Backbone.Events)
> 	jerry.listenTo(tom,'run',function(){
>       console.log('jerry watch tom run')
>     })
> ```
>
>  

## Backbone的路由简单学习

> ```js
> <!-- backbone 的 路由的用法 -->
>   <script>
>     var appRouter = Backbone.Router.extend({
>       routes: {
>         'page1': 'showPage1',
>         'page2': 'showPage2',
>       },
>       initialize() {
>         $('#page1').hide()
>         $('#page2').show()
>       },
>       showPage1() {
>         $('#page2').hide()
>         $('#page1').show()
>       },
>       showPage2() {
>         $('#page2').show()
>         $('#page1').hide()
>       },
>     })
>     
>     var app = new appRouter()
> 
>     Backbone.history.start()
> 
>     // pushState 导航 
>     // 服务端固定返回某个页面 
>     // a连接导航 会刷新页面
>     // Router.navigate导航 不会刷新页面
> 
>     // hash # 导航
>     // a 连接导航 url 不会刷新页面
>     // Router.navigate导航  url会自动添加 #
> ```
>
>  

