## backbone的学习

## 需要js文件

> + Backbone.js
> + underScore.js
> + jquery.js

## backbone的model的用法以及事件

> ```js
> var obj = {
>       'title': 'task1',
>       'description': 'description'
>     }
> 
>     var TodoItem = Backbone.Model.extend({})
> 
>     var todoItem = new TodoItem(obj)
> 
>     console.log(todoItem)
> 
>     // todoItem.JSON().title = 'task3' 并没有起作用  再次toJSON还是原来的数据
> 
>     // get 获取  set 对某一属性赋值
> ```
>
> ```js
> var obj = {
>       'title': 'task1',
>       'description': 'description'
>     }
> 
>     var TodoItem = Backbone.Model.extend({})
> 
>     var todoItem = new TodoItem(obj)
> 
> 
>     // 内部会进行属性的比较  如果没有变化不会触发change事件，需要属性变化才会触发change事件 
>     // set 中有一个option  slient:true 可以更改内容不触发onchange事件
>     todoItem.on('change',function(){
>       if(this.hasChanged('title')){
>         console.log('changed title')
>       }
>     })
>     // trigger可以触发自定义事件
> 
>     // on('change:title') 只针对title属性进行监听
> 
>     //取消监听  off() 没有参数就全部取消
> 
>     // off('change:title') 把这个监听的取消掉
> 
>     // once 只执行一次  相当于 on 了之后 就  off掉
> 
>     var todoItem2 = new TodoItem()
> 
>     // todoItem2监听todoItem  
>     todoItem2.listenTo(todoItem,'change:title',function(){
>       console.log(this) // 这个this指向 todoItem2
> 
>       // listenToOnce 
>     })
> ```
>
>  

## backbone的view的用法以及事件

> ```js
>  var TodoItemView = Backbone.View.extend({
>         // 三个内置属性
>         tagName: "p",
>         className: "haha",
>         id: "pp",
>         //如果其它属性的话  需要在attributes里边写
>         // attributes:{
>         //   style: 'color:red;'
>         // },
>         // 页面上有值可以这样写
>         // el:'div#header',
>         render: function() {
>           this.$el.html("<span>1111</span>");
>           return this;
>         }
>       });
> 
>       var todoItemView = new TodoItemView({
>       });
> 
>       todoItemView.render().$el.appendTo("body");
> 
>       console.log(todoItemView);
> 
>       // todoItemView.remove()  这个方法内置 可以把界面上的元素移除
> ```
>
> ```js
> var ToDoItem = Backbone.Model.extend({
> 
>     })
> 
>     var todoItem = new ToDoItem({
>       title:'task',
>       des: 'des'
>     })
> 
>     var todoItem2 = new ToDoItem({
>       title:'task2',
>       des: 'des2'
>     })
>     
>     var  ToDoItemView = Backbone.View.extend({
>       tagName: 'div',
>       className: 'todo-Item',
>       // 触发事件
>       events: {
>         // 后边字符串就是定义的方法
>         // 'click': 'handleClick'
>         // 后边可以跟jq选择器来指定某一个元素使用这个用法
>         'click button': 'handleClick'
>       },
>       // 这一步写错了 怪不得  initialize 拼错  尴尬。。。
>       initialize: function() {
>         this.listenTo(this.model,'change',this.render)
>         this.listenTo(this.model,'destroy',this.remove)
>       },
>       render:function() {
>         var json = this.model.toJSON()
>         this.$el.html('<h3>'+json.title+'<br/>'+json.des+'</h3><button>delete</button>')
>         return this
>       },
>       handleClick: function() {
>         console.log('为什么不行啊')
>         console.log(this.model)
>         this.model.destroy()
>       }
> 
>     })
> 
>     var todoItemView = new ToDoItemView({
>       model:todoItem
>     })
> 
>     var todoItemView2 = new ToDoItemView({
>       model:todoItem2
>     })
> 
>     todoItemView.render().$el.appendTo($('body'))
>     todoItemView2.render().$el.appendTo($('body'))
> ```
>
> 

## backbone的collection事件以及一个demo

> ```js
> var objList = [
>       {title:'aaa'},
>       {title:'bb'},
>       {title:'cccc'},
>     ]
> 
>     var MyList = Backbone.Collection.extend({
>  
>       // sort函数进行排序   必须要有一个返回值  只是单纯的返回一个 true或者false值的话不调用这一个函数
>       // return model.get('title').length < model2.get('title').length 这样不行
>       comparator: function(model,model2) {
>         if(model.get('title').length < model2.get('title').length)
>           return -1
>         else if(model.get('title').length = model2.get('title').length)
>           return 0
>         else {
>           return 1
>         }
>       }
>       // 为什么不排序啊啊啊？
>       // comparator: function(model,model2) {
>       //   console.log(model)
>       //   console.log(model2)
>       //   return model.get('title').length 
>       //   /* console.log(model.get('title'))
>       //   console.log(model2.get('title')) */
>       // }
>       /* function(a,b) {
>         return a.get('title') < b.get('title')
>       } */
>     })
> 
>     var aList = new MyList(objList)
> 
>     var ItemView = Backbone.View.extend({
>       tagName: 'li',
>       className: 'list-item',
>       render() {
>         // get方法
>         this.$el.html(this.model.get('title'))
>         return this
>       }
>     })
> 
>     //   方法
>     var ListView = Backbone.View.extend({
>       initialize: function() {
>         if(this.collection) {
>           this.byId = {}
>           this.views = []
>           // each方法 为每一个都注册上
>           this.collection.each(this.registerView,this)
>           this.listenTo(this.collection,'add',this.addView)
>           this.listenTo(this.collection,'remove',this.removeView)
>           this.listenTo(this.collection,'reset',this.resetView)
>           this.listenTo(this.collection,'change',this.updateView)
>           this.listenTo(this.collection,'sort',this.resetView)
>         }
>       },
>       registerView(model) {
>         var view = new ItemView({model})
>         // cid 是每个model的唯一值
>         this.byId[model.cid] = view
>         this.views.push(view)
>       },
>       render() {
>         var _this = this
>         this.$el.empty()
>         _.each(this.views,function(view){
>           $_el = view.render().$el
>           _this.$el.append($_el)
>         })
>         return this
>       },
>       addView(model) {
>         // 只要下边添加  model中就有了
>         var view = new ItemView({model})
>         var at = this.collection.indexOf(model)
>         this.byId[model.cid] = view
>         var $before = this.views[at-1].$el
>         $before.after(view.render().$el)
>         this.views.splice(at,0,view)
>       },
>       removeView(model) {
>         // 这个是新添加一个用的  明明是删除  怎么可以这样用呢？？？  尴尬
>         // var view1 = new ItemView({model})
>         var view = this.byId[model.cid]
>         // model删除了  不能用collection 来查找   view删除  this.views也同步删除
>         view.remove()
>         delete this.byId[model.cid]
>         // 因为这个时候已经删除了 所以下边这样找是找不到的  需要使用views来寻找这个
>         // var index = this.collection.indexOf(model)
>         var index = _.indexOf(this.views,view)
>         this.views.splice(index,1)
>       },
>       resetView() {
>         console.log(1)
>         // 重新清空  再来一次
>         this.byId = {}
>         this.views = []
>         this.collection.each(this.registerView,this)
>         this.render()
>       },
>       updateView(model) {
>         var view = this.byId[model.cid]
>         view.render()
>       }
>      
>     })
> 
>     var aView = new ListView({el:'#aView',collection:aList})
> 
>     aView.render()
> 
>     aList.add({
>       title: 'title.add', 
>     },{at:2})
> 
>     aList.add({
>       title: 'title.add2', 
>     },{at:3})
> 
>     var newObj = [
>       {title: '6666'},
>       {title: '66666'},
>       {title: '777777'},
>     ]
> ```
>
>  

## 未完成  明天再写

