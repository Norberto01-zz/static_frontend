import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  iso_country: attr(),
  iso_operator: attr(),
  operator_name: attr(),
  prefix: attr()
});

