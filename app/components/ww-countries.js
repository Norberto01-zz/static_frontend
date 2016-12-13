import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  prefixNumber: undefined,
  flagClass: undefined,
  flag: undefined,
  iso: undefined,
  inFlag: 525,
  operator: undefined,

  init(){
    this._super(...arguments);
    Ember.run.scheduleOnce('afterRender', this, function() {
    });
  },
  actions: {
    phoneVal(){
      // this.sendAction('stateSetPrefix', prefix);
      // alert("Revisando numero...");

      const phone = this.$("#phonenumber");
      // const iso = this.get("iso");
      const prefix = this.get("flag");
      // const
      console.log(prefix);
      console.log("Prefix Number");
      console.log(phone.val());
      console.log("Phone TextBook!");
      /*
      Ember.$.getJSON('http://127.0.0.1:8000/api/v1/validators/'+phone.val().toString()+'/'+iso+'/'+prefix, function (result) {
        Ember.$('#id-opc').val(result.operator);
      });
      console.log( Ember.$('#id-opc').val());
      if( !Ember.$(phone).val() ) {
        this.set("operator", undefined);
      }else{
        this.set("operator",Ember.$('#id-opc').val());
      }
      */
    },
    checkPrefix() {
      const whoto = this.$("#whoto option:selected");
      const fg = whoto.attr('data-prefix');
      this.set("flag", fg);
      this.set("iso", whoto.text());
      const prefix = this.get('store').findAll('operator');

      if (whoto.attr('value') === '0'){
        this.set("flagClass", null);
      }else{
        this.set("flagClass", 'dn-flag-rounded-small dn-flag-rounded-small-'+whoto.text().toLowerCase());
      }

      this.set("prefixNumber", prefix);
      this.sendAction('stateSetPrefix', prefix);
    }
  }
});
