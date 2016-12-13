import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
// import sections from '../sections';

export default Ember.Route.extend(ApplicationRouteMixin, {
  authenticator: 'authenticator:django',
  model() {
    // return this.get('store').findAll('prepyge', { show_in_menus: true }).then(function(data) {
    //     return data;
    // });
    // return this.get('store').findAll('prepyge');
    var store = this.store;
    return Ember.RSVP.hash({
        menu: store.findAll('prepyge').then(results => results.filter((pages) => {
            return pages.get('showInMenus') === true;
        }))
    });
  },
  actions: {
    authenticate(credentials) {
      const session = this.get('session');
      if (credentials.identification && credentials.password) {
        session.authenticate(this.get('authenticator'), credentials).then(() => {
          session.set('loginError', false);
        }, () => {
          session.set('loginError', "Invalid credentials. Please retry.");
        });
      }
    },
    invalidate(){
      this.get('session').invalidate();
    }
  }
});
