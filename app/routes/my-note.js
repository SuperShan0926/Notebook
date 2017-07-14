import Ember from 'ember';

export default Ember.Route.extend({
  currentUser:Ember.inject.service('current-user'),
  beforeModel(){
    const user = this.get('currentUser').getUser();
    if(!user) this.replaceWith('login');
    this.controllerFor('my-note').set('user',user);
  },
  model(){
          const user = this.get('currentUser').getUser();
          //get userID first.
          return this.store.query('user',{name:user})
                .then(res=>{
                    const id = res.toArray().get('firstObject').get('id');
                    return this.store.query('myNote',{user:id})
                  });
          },
  });












