import Ember from 'ember'; 
export default Ember.Controller.extend({
  isoCountry: '',
  currentRate: null,
  actions: {
    filterByIso(value) {
      console.log(value);
      if (value === '') {
        this.set("isoCountry", this.get('store').findAll('rate'));
      } else {
        let isoIso = [];
        let isoItems;
        isoItems = this.get('store').findAll('rate').then(
          results => results.filter(
            (item) => {
              if (item.get('ccIso') === value){
                isoIso[item.get('id')] = item;
              }
            }
          )
        );
        this.set("currentRate", value);
        this.set("isoCountry", isoIso);
      }
    }
  }
});
