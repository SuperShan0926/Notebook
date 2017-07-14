import Ember from 'ember';

export default Ember.Component.extend({
  date:null,
  actions:{
    getDate(e){
      //hack 因为出发两次action,选择日期但未选定时触发此时e = this.date,故不执行。
      if(this.date!=e&&e){
        console.log('beforeSend');
        this.sendAction('testDate',e)
      }
      this.date = e;
    }
  }
});
