/**
 * Created by Developers on 7/21/2016.
 */
import Ember from 'ember';

export default Ember.Controller.extend({
  checking: '',
  actions: {
    checked() {
      console.log('Login mundo');
      this.set('checking', 'actived login');
    }
  }
});
