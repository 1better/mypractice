var TodoMVC = TodoMVC || {};

(function() {
  "use strict";

  // Application 
  var TodoApp = Mn.Application.extend({
    setRootLayout: function() {
      // 将根布局注册
      this.root = new TodoMVC.RootLayout();
    }
  });

  TodoMVC.App = new TodoApp();

  //    开始之前调用一下
  TodoMVC.App.on("before:start", function() {
    TodoMVC.App.setRootLayout();
  });
})();
