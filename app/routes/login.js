import Ember from 'ember';

export default Ember.Route.extend({
  currentUser:Ember.inject.service('current-user'),
  beforeModel(){
    const user = this.get('currentUser').getUser();
    if(user) this.replaceWith('myNote');
  },
  model(){
  }
});
