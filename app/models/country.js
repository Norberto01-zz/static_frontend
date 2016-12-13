import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  iso2: attr(),
  name: attr(),
  printName: attr(),
  isoCode: attr(),
  numCode: attr(),
  region: attr(),
  currencyName: attr(),
  currencyCode: attr(),
  prefix: attr()
});
