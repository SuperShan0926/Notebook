import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return [{name:'刘兴',checked:true},{name:'丁浩',checked:false},{name:'段朦',checked:false}];
  }
});
