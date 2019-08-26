/*global Backbone, TodoMVC:true */

var TodoMVC = TodoMVC || {};

(function () {
	'use strict';


	// The Application Object is responsible for kicking off
	// a Marionette application when its start function is called
	//
	// This application has a singler root Layout that is attached
	// before it is started.  Other system components can listen
	// for the application start event, and perform initialization
	// on that event
	TodoMVC.App = new TodoApp();

  // 在开始之前调用一下
	TodoMVC.App.on('before:start', function () {
		TodoMVC.App.setRootLayout();
	});

})();
