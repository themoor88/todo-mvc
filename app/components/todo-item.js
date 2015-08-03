import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editToDo: function() {
      this.set('isEditing', true);
    },

    acceptChangeds: function() {
      this.set('isEditing', false);
      this.sendAction('action', this.get("todo"));
    },

    deleteToDo: function() {
      this.sendAction('deleteToDo', todo);
    }
  }
});
