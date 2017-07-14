import DS from 'ember-data';

export default DS.Model.extend({
    name:DS.attr(),
    pswd:DS.attr(),
    note:DS.hasMany('myNote')
});
