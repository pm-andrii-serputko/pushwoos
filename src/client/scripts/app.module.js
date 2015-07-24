(function(angular) {
    'use strict';

    angular
        .module('pushwoosh', [
            // Angular Modules
            'ngRoute',
            'ngResource',
            'ngAnimate',

            // 3-rd Part modules

            // Application Modules
            'pushwoosh.resources',
            'pushwoosh.domain',
            'pushwoosh.services',
            'pushwoosh.dashboard',
            'pushwoosh.notifications'
        ]);

    function onDeviceReady() {
        angular.element(document).ready(function() {
            angular.bootstrap(document, ['pushwoosh']);
        });
    }

    if (window.cordova) {
        document.addEventListener('deviceready', onDeviceReady, false);
    } else {
        onDeviceReady();
    }

}).call(this, angular);
