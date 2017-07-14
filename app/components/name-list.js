import Ember from 'ember';

const ComponentWithParam  = Ember.Component.extend({
  isRed:false,
  tagName : 'nav',
  attributeBindings: ['htmlChecked:type'],
  htmlChecked:'celtics',
  actions:{
    toggleColor(){
      this.toggleProperty('isRed');
    },
    change(param){
      console.log(this.set('suxiaoyan.name',param)); 
    }
  },
  click(){
    console.log(123);
    this.get('mm')();
  }
});

// ComponentWithParam.reopenClass({
//   positionalParams:['name','value']
// })

export default ComponentWithParam;