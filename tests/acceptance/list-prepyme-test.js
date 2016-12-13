import { test } from 'qunit';
import moduleForAcceptance from 'frontend/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list prepyme');
// 1
test('should redirect to home route', function (assert) {
  visit('/');
  andThen(function () {
    assert.equal(currentURL(), '/home', 'should redirect automatically');
  });
});
// 2
test('should list available slide pictures.', function (assert) {
  visit('/home');
  andThen(function () {
    assert.equal(this.$('.slide--phone').length, 3, "should have at least 3 Pictures");
  });
});
// 3
test('should link to promotions.', function (assert) {
  visit('/home');
  click('a:contains("Promotions")');
  andThen(function () {
    assert.equal('/', '/promotions', 'should navigate to promotion');
  });
});
// 4
