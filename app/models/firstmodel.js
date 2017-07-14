import DS from 'ember-data';

export default DS.Model.extend({
  note:DS.attr(),
  skill:DS.attr(),
  date:DS.attr(),
  user:DS.belongsTo('user')
});
