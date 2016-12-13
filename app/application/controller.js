import Ember from 'ember';

export default Ember.Controller.extend({
  currentPath: '', 
  updateCurrentPath:  Ember.computed('currentPath', function() {
    this.set('currentPath', this.get('currentPath'));
  }),
  actions: {
  }
});
