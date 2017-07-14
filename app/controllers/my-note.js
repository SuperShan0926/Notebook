import Ember from 'ember';


  const strategies = {
      create:{
          headText:"新笔记",
          buttonText:"保存"
      },
      edit:{
          headText:"修改笔记",
          buttonText:"确认修改"
      },
      view:{
          headText:"查看笔记",
          buttonText:null
      }
    }

export default Ember.Controller.extend({
  sessionService:Ember.inject.service('current-user'),
  user:null,
  //nav框是否显示
  isShow:false,
  //modal是否显示
  showModal:false,
  //按钮是否组件显示
  buttonShow:true,
  //render到界面上的text
  renderTxt:null,
  currIndx:null,
  //hack null == 0 的问题。
  // hasValue:Ember.computed('currIndx',function(){
  //     return typeof this.get('currIndx') == 'number';
  // }),
  //component中无法直接通过currIndex获取model,故拿到需要修改的单条数据注入。
  eNote:null,
  actions:{
    toggleShow(){
      this.toggleProperty('isShow')
    },
     newNote(){
      this.set("renderTxt",strategies.create);
      this.set("currIndx",null);
      this.set("eNote",null);
      this.set('showModal',true);
      this.set('buttonShow',false);
    },
    viewNote(idx){
      this.set("renderTxt",strategies.view);
      this.set('showModal',true);
      this.set('buttonShow',false);
      const vNote =this.get('model').toArray()[idx];
      // const noteData = getNoteData(sessionStorage.currentUser)[idx];
      this.set('myNote',vNote);
    },
    hide(){
      this.set('showModal',false);
    },
    quit(){
      this.set('showModal',false);
      this.set('isShow',false);
      this.get('sessionService').logout();
      console.log(this.get('model'));
      this.transitionToRoute('login');
    },
    deleteNote(){
      const delIndex = this.get('currIndx');
      if(typeof delIndex!=="number"){alert('请选择需要删除的笔记!');return;}
      const delNote = this.get('model').toArray()[delIndex];
      delNote.destroyRecord();
      this.set('currIndx',null);
      //更新视图
    },
    editNote(){
      const editIndex = this.get('currIndx');
       if(typeof editIndex!=="number"){alert('请选择需要修改的笔记的笔记!');return;}
      const eNote = this.get('model').toArray()[editIndex];
      this.set('eNote',eNote);
      this.set("renderTxt",strategies.edit);
      this.set('showModal',true);
      this.set('buttonShow',false);
    },
    passIdx(curr){
      this.set('currIndx',curr)
    },
    refreshView(){
          let route = Ember.getOwner(this).lookup("route:myNote");
          route.refresh();
    }
  }
});
