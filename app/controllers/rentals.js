import Ember from 'ember';

export default Ember.Controller.extend({
    isYellow:false,
    actions:{
    toggleColor(){
      this.toggleProperty('isYellow');
    },
    ceshi(){
      alert('msg');
    },
    del(p){
      console.log(p);
    },
    falseOthers(pram){
    this.get('model').forEach((arr,i)=>{
      if(pram!=i){this.set('model.'+i+'.checked',false)}
    });
    console.log(this.get('model'));
    }
  },

});
