var TodoMVC = TodoMVC || {};

(function() {
  "use strict";

  TodoMVC.App.on("start", function() {
    var controller = new TodoMVC.Controller();
    controller.start();
  });
  TodoMVC.App.start();
  
})();
