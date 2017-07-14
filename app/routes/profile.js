import Ember from 'ember';
export default Ember.Route.extend({
   currentUser:Ember.inject.service('current-user'),
  model(){
    const user = this.get('currentUser').getUser();
     return this.store.query('user',{name:user}).then(res=>{
      return res.toArray().get('firstObject');
    })
  }
});
