import Ember from 'ember';

export default Ember.Controller.extend({
  resetStatus:false,
  actions:{
    resetPswd(){
      this.set('resetStatus',true);
    },
    cofirmReset(){
      const psw = this.get('newPswd');
      this.get('model').set('pswd',psw);
      this.get('model').save();
      this.set('resetStatus',false);
    },
    cancel(){
      this.set('resetStatus',false);
    },
    back(){
       this.transitionToRoute('myNote');
    }
  }
});
