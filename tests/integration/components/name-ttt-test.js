import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('name-ttt', 'Integration | Component | name ttt', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{name-ttt}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#name-ttt}}
      template block text
    {{/name-ttt}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
