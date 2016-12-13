import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  document: attr(),
  ccIso: attr(),
  countryName: attr(),
  peak: attr()

});

