var TodoMVC = TodoMVC || {};

(function() {
  "use strict";

  TodoMVC.App.on("start", function() {
    // 开始的时候注册一个 控制器  
    var controller = new TodoMVC.Controller();
    // start调用  组件进行渲染
    controller.start();
  });
  // 开始
  TodoMVC.App.start();
  
})();
