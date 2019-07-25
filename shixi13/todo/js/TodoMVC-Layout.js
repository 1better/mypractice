// 学习一下立即执行函数的使用

var TodoMVC = TodoMVC || {} 

;(function (){
  'use strict'

  // 整体的组件
  TodoMVC.RootLayout = Mn.View.extend({
    el: '#todoapp',

    // 代替的区域
    regions: {
      header: 'header',
      main: 'section#main',
      footer: 'footer'
    }
  })
  TodoMVC.HeaderLayout = Mn.View.extend({

    template: _.template($('#header-template').html()),

    // 为要处理的对象起一个别名
    ui: {
      input: '#new-todo'
    },
    // 事件
    events: {
      'keydown @ui.input':'handleAdd'
    },
    handleAdd(e) {
      if (e.keyCode === 13) {
        if (e.target.value.trim() == "") {
          alert("内容为空不可以输入");
          return;
        }
        var item = {title:e.target.value,done:false}
        this.collection.add(item);
        e.target.value = "";
        $('footer').show()
        $('#main').show()
      }
      
    }
  })

  TodoMVC.FooterLayout = Mn.View.extend({
    template: _.template($('#footer-template').html()),

    // 为模版添加属性 可以这样写
		serializeData: function () {
			var completedNumber = 0;
			var leftNumber = this.collection.length;

			return {
        completedNumber,
        leftNumber
			};
		},
		initialize: function () {
      this.listenTo(this.collection,'add',this.reRender),
      this.listenTo(this.collection,'change',this.reRender),
      this.listenTo(this.collection,'reset',this.reRender)
    }, 
    
    // 为要处理的对象起一个别名
    ui: {
      input: '#clear-completed'
    },
    // 事件
    events: {
      'click @ui.input':'handleFilter'
    },
    // 每次添加触发这个来重新渲染
    /* onRender(){
    }, */
    reRender() {
      var msg = {completedNumber: TodoMVC.CompletedNumber,leftNumber: this.collection.length - TodoMVC.CompletedNumber};
      this.$el.html(this.template(msg))
    },
    // 处理事件
    handleFilter() {
      var collection = this.collection.where({done:false})
      TodoMVC.CompletedNumber = 0
      this.collection.reset(collection)
      new TodoMVC.Controller().ifShow.call(this,this.collection)
    }
  })

  // main部分
  TodoMVC.MainLayout = Mn.View.extend({
    template: _.template($('#main-template').html()),
    events: {
      'click #toggle-all': 'handleAllChange'
    },
    regions: {
      listView: {
        el: 'ul',
        replaceElement: true
      }
    },
    initialize() {
      this.listenTo(this.collection,'change',this.reRender),
      this.listenTo(this.collection,'add',this.reRender)
    },
    onRender() {
      this.showChildView('listView', new TodoMVC.ListView({
        collection: this.collection
      }))
    },
    handleAllChange(e) {
      var check = e.target.checked
      //  应该是同步的 我觉得
      if(check) {
        TodoMVC.CompletedNumber = this.collection.length
      }else {
        TodoMVC.CompletedNumber = 0
      }
      this.collection.each(model=>{
        model.set('done',check)
      })
      
    },
    reRender() {
      if(this.collection.length == TodoMVC.CompletedNumber) {
        $('#toggle-all').prop('checked',true)
      }else {
        $('#toggle-all').prop('checked',false)
      }
    }
  })
})()