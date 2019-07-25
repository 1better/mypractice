var TodoMVC = TodoMVC || {};

(function() {
  TodoMVC.TodoList = Backbone.Collection.extend({});

  TodoMVC.ItemView = Mn.View.extend({
    template: _.template($('#li-template').html()),
    tagName: 'li',
    // ui
    events: {
      'click .toggle': 'onHandleCheck'
    },
    initialize() {
      this.listenTo(this.model,'change',this.reRender)
    },
    onHandleCheck(e) {
      var check = e.target.checked
      if(check) {
        TodoMVC.CompletedNumber ++
      }else {
        TodoMVC.CompletedNumber -- 
      }
      this.model.set('done',check)
    },
    reRender() {
      this.$el.toggleClass('done')
      this.$el.find('.toggle').prop('checked',this.model.get('done'))
    }
  })

  TodoMVC.ListView = Mn.CollectionView.extend({
    childView: TodoMVC.ItemView,
    tagName: 'ul',
    id: 'todo-list'
  })
})();
