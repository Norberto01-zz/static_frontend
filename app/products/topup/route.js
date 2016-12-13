import Ember from 'ember';

export default Ember.Route.extend({
  prefixNumber: undefined,
  model() {
    var store = this.store;
    return Ember.RSVP.hash({
        countries: store.findAll('country').then(results => results.filter((pages) => {
            return pages.get('prefix') !== null;
        }))
    });
  },
  actions: {
    setPrefix: function (prefix) {
        this.set('prefixNumber', prefix);
    },
    getPrefix: function() {
        this.get('prefixNumber');
    }
  }
});
