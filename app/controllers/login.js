import Ember from 'ember';

export default Ember.Controller.extend({
  sessionService:Ember.inject.service('current-user'),
  actions:{
    save(){
      let userName = this.get('userName');
      let password = this.get('password');
      if(!userName||!password)return alert('请输入正确的用户名和密码!');
      this.store.query('user',{name:userName})
          .then(res=>{
            let payload = res.toArray().get('firstObject');
            if(!payload){
                payload = this.store.createRecord('user',{name:userName,pswd:password});
                payload.save();
              }
            else if( password!==payload.get('pswd'))return alert('密码错误！');
            this.get('sessionService').login(userName);
            this.transitionToRoute('myNote')
          })
  }
  }
});
