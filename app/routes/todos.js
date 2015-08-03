import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('todo');
  },

  actions: {
    createToDo: function(newTitle) {
      // Create new Todo model
      var todo = this.store.createRecord('todo', {
        title: newTitle,
        isCompleted: false
      });

      // Clear the "New Todo" text field
      this.controllerFor('todos').set('newTitle', '');

      // Save the model
      todo.save();
    }
  }
});
