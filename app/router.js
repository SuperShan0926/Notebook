import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('rentals');
  this.route('login');
  this.route('abc');
  this.route('myNote');
  this.route('profile');
  this.route('firstmodel');
  this.route('abc',function(){
    this.route('def')
  });
});

export default Router;
