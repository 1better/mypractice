/*global TodoMVC: true, Backbone */

var TodoMVC = TodoMVC || {};

(function () {
	'use strict';

  //  广播   
	var filterChannel = Backbone.Radio.channel('filter');

	// Todo List Item View
	// -------------------
	//
	// Display an individual todo item, and respond to changes
	// that are made to the item, including marking completed.
	TodoMVC.TodoView = Mn.View.extend({

		tagName: 'li',

		template: '#template-todoItemView',

		className: function () {
			return this.model.get('completed') ? 'completed' : 'active';
		},

    // ui 是？
		ui: {
			edit: '.edit',
			destroy: '.destroy',
			label: 'label',
			toggle: '.toggle'
		},

		events: {
      // 点击事件
      'click @ui.destroy': 'deleteModel',
      // 双击事件
      'dblclick @ui.label': 'onEditClick',
      // 鼠标按下去的事件
      'keydown @ui.edit': 'onEditKeypress',
      // 
      'focusout @ui.edit': 'onEditFocusout',
      // 点击事件
			'click @ui.toggle': 'toggle'
		},

		modelEvents: {
			change: 'render'
		},

		deleteModel: function () {
			this.model.destroy();
		},

		toggle: function () {
			this.model.toggle().save();
		},

		onEditClick: function () {
			this.$el.addClass('editing');
			this.ui.edit.focus();
			this.ui.edit.val(this.ui.edit.val());
		},

		onEditFocusout: function () {
			var todoText = this.ui.edit.val().trim();
			if (todoText) {
				this.model.set('title', todoText).save();
				this.$el.removeClass('editing');
			} else {
				this.destroy();
			}
		},

		onEditKeypress: function (e) {
			var ENTER_KEY = 13;
			var ESC_KEY = 27;

			if (e.which === ENTER_KEY) {
				this.onEditFocusout();
				return;
			}

			if (e.which === ESC_KEY) {
				this.ui.edit.val(this.model.get('title'));
				this.$el.removeClass('editing');
			}
		}
	});

	// Item List View Body
	// --------------
	//
	// Controls the rendering of the list of items, including the
	// filtering of items for display.
	TodoMVC.ListViewBody = Mn.CollectionView.extend({
		tagName: 'ul',

		className: 'todo-list',

		childView: TodoMVC.TodoView,

		filter: function (child) {
      // 这一步是干啥？
      var filteredOn = filterChannel.request('filterState').get('filter');
      // console.log(filteredOn)
			return child.matchesFilter(filteredOn);
		}
	});

	// Item List View
	// --------------
	//
	// Manages List View
	TodoMVC.ListView = Mn.View.extend({

		template: '#template-todoListView',

    // 区域  这又是干什么？？？
		regions: {
			listBody: {
        el: 'ul',
        //要el使用内部视图的呈现内容覆盖区域的父级，请使用replaceElement
				replaceElement: true
			}
		},

		ui: {
			toggle: '.toggle-all'
		},

		events: {
			'click @ui.toggle': 'onToggleAllClick'
		},

		collectionEvents: {
			'change:completed': 'render',
			all: 'setCheckAllState'
		},

		initialize: function () {
			this.listenTo(filterChannel.request('filterState'), 'change:filter', this.render, this);
		},

		setCheckAllState: function () {
			function reduceCompleted(left, right) {
				return left && right.get('completed');
			}

			var allCompleted = this.collection.reduce(reduceCompleted, true);
			this.ui.toggle.prop('checked', allCompleted);
			this.$el.parent().toggle(!!this.collection.length);
		},

		onToggleAllClick: function (e) {
			var isChecked = e.currentTarget.checked;

			this.collection.each(function (todo) {
				todo.save({ completed: isChecked });
			});
		},

    // 渲染
		onRender: function () {
			this.showChildView('listBody', new TodoMVC.ListViewBody({
				collection: this.collection
			}));
		}
	});
})();
