import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // return this.get('store').findAll('prepyge');
    var store = this.store;
    return Ember.RSVP.hash({
        countries: store.findAll('country'),
        amounts: store.findAll('amount')
    });
  }
});
