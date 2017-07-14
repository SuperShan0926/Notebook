import Ember from 'ember';

//优化手段，设置一个变量保存前一个被选中的元素。初始值从model的isChcked字段读取。

export default Ember.Component.extend({
  tagName: 'input',
  type: 'radio',
  name:'notes',
  attributeBindings: ['type', 'htmlChecked:checked','name'],
  htmlChecked:Ember.computed('checked', function() {
    return this.get('checked');
  }),
  click:function(){
    // this.set('checked',true);
    // null值表示还未选择。
    // this.sendAction('othersSholdBeFalse',this.get('prev'),this.get('value'));
    this.sendAction('passIdx',this.get('value'));
    //set prev为当前值。
    // this.set('prev',this.get('value'))
  },
});

