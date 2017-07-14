import Ember from 'ember';

export default Ember.Service.extend({
  user:null,
  init() {
    this._super(...arguments);
  },

  login(user){
    this.set('user',user);
    sessionStorage.setItem('user',user);
  },
  logout(){
    this.set('user',null);
    sessionStorage.clear();
  },
  getUser(){
    const user = this.get('user');
    if(user)return user;
    const found = sessionStorage.user;
    this.set('user',found);
    return found
  }
});
