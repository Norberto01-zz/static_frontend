import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  title: attr(),
  mainImage: attr(),
  body: attr(),
  cat: attr(),
  showInMenus: attr(),
  slug: attr(),
  children: attr()
});
