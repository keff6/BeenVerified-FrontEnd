import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
    this.route('settings', {path: 'settings'});
    this.route('report', {path: 'report'});
    this.route('login', {path: 'login'});
});

export default Router;
