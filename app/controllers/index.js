import Ember from 'ember';

export default Ember.Controller.extend({
    beforeModel() {
        this.replaceWith('report');
      },
    myStickyOptions: {
        topSpacing: 30, //px, default: 0 
        zIndex: 9999
    },
});
