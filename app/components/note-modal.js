import Ember from 'ember';

export default Ember.Component.extend({
  store:Ember.inject.service(),
  actions:{
    cancel(){
      this.get('cls')();
      this.set('showButton',true);
    },
    modifyNote(eNote){
      let time = this.get('date');
      let content = this.get('txtContent');
      if(!content||!time){alert('请输入日期或内容!');return;}
      
      const name = this.get('currUser');
      this.get('store').query('user',{name:name})
        .then(res=>{
          const user = res.toArray().get('firstObject');
          if(eNote){
            this.get('eNote').set('date',time);
            this.get('eNote').set('content',content);
            this.get('eNote').save();
          }
          else{
              const newNote = this.get('store').createRecord('myNote',{
                              date:time,
                              content:content,
                              user:user
                              });
              newNote.save();
              this.sendAction('didChangeView');
            }
        })


      //刷新页面
      this.set('idx',null)
      this.set('showButton',true);
      this.get('cls')();
    },
    getSonData(param){
      //获取子组件数据
      this.set('date',param);
    }
  }
});
