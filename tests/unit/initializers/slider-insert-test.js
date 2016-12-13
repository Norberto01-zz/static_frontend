import Ember from 'ember';
import SliderInsertInitializer from 'frontend/initializers/slider-insert';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | slider insert', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  SliderInsertInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
