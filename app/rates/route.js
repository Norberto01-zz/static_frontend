import Ember from 'ember';

export default Ember.Route.extend({
  prefixNumber: undefined,
  currentRate: undefined,
  countryItem: undefined,
  isoCountry: undefined,
  allCountries: undefined,
  model() {
      let store = this.store;
      return Ember.RSVP.hash({
          countries: store.findAll('country'),
      });
  },
  actions: {
    setCountryRate: function (country) {
        this.set('currentRate', country);
        this.set('countryItem', 'HOLA HOLA HOLA');
        console.log(this.get('countryItem'));
        console.log('Paises getCountryRate...');
    },
    getCountryRate: function() {
        this.get('countryItem');
        this.get('currentRate');
        console.log(this.get('countryItem'));
        console.log('Paises getCountryRate...');
    }
  }
});
