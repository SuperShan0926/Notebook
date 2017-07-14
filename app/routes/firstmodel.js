import Ember from 'ember';

export default Ember.Route.extend({
  model(){
  return this.store.findAll('firstmodel');
     },
  actions:{
    saveInfo:function(){
      // this.store.createRecord('user',{
      //   name:'丁皓',
      //   pswd:'1111111'
      // }).save();
      var name = this.controller.get('name');
      var note = this.controller.get('note');
      this.store.query('user',{name:name}).then((res)=>{
          this.store.createRecord('firstmodel',{
          note:note,
          skill:'nodejs',
          date:'2015-1-1',
          // user:res.toArray().get('firstObject')
      }).save();
     });
    },
    fiterMy(){
      this.store.query('user',{name:"刘兴"})
       .then(res=>{
        const id = res.toArray().get('firstObject').get('id');
        console.log('id',id);
          var q = this.store.query('firstmodel',{user:id}).then(res=>{
            const w = res.toArray().get('firstObject').get('user');
            console.log(w);
            console.log(w.get('name'));
          });

        });

       // q.then(res=>{
       //    this.controller.set('model',res);
       // })
    }
  }
});
