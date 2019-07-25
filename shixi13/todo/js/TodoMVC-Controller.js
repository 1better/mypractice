var TodoMVC = TodoMVC || {} ;


(function() {
  'use strict'

  //  为TodoMVC设定一个完成项的参数
  TodoMVC.CompletedNumber = 0
  TodoMVC.Controller = Mn.MnObject.extend({
    initialize() {
      // 测试数据
      var list = [
        {title: '222',done: false}
      ]
      this.todoList = new TodoMVC.TodoList(list);
    },
    start() {
      this.showHeader(this.todoList)
      this.showFooter(this.todoList)
      this.showMain(this.todoList)
      // 判断todoList的长度 
      this.ifShow(this.todoList)
    },
    // 
    ifShow(todoList) {
      if(todoList.length) {
        $('#main').show()
        $('footer').show()
      }else {
        $('#main').hide()
        $('footer').hide()
      }
    },

    // 头部组件 渲染显示
    showHeader(todoList) {
      var header = new TodoMVC.HeaderLayout({
        collection: todoList
      })

      TodoMVC.App.root.showChildView('header',header)
    },
    // 底部组件 渲染显示
    showFooter(todoList) {

      var footer = new TodoMVC.FooterLayout({
        collection: todoList
      })

      TodoMVC.App.root.showChildView('footer',footer)
    },
    showMain(todoList) {
      var main = new TodoMVC.MainLayout({
        collection: todoList
      })

      TodoMVC.App.root.showChildView('main',main)
    }
  })


})();
