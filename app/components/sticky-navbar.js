import Ember from 'ember';

const {
    inject,
    Component
} = Ember;


export default Ember.Component.extend({
    windowscroll: inject.service(),
    didInsertElement: function () {
        this.get('windowscroll').on('scroll', (e) => {
            var Logo = document.getElementById("logo").classList;

            if ($(window).scrollTop() > 30) {
                Logo.remove('company-logo');
                Logo.add("company-logo-small");
            } else {
                Logo.remove('company-logo-small');
                Logo.add("company-logo");
            }
        });
        this.get('resizeService').on('didResize', event => {
            var w =window.innerWidth;
            if(w < 480){
                //TODO: burger menu
            }            
        });
    },
    zIndex: 9999
});
