import DS from 'ember-data';
import Ember from 'ember';
export default DS.Model.extend({
  date:DS.attr(),
  content:DS.attr(),
  user:DS.belongsTo('user'),
  // currentUser:Ember.computed.alias('user.name')
});


