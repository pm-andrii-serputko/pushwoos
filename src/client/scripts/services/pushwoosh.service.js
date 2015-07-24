/*global cordova*/
(function(angular) {
    'use strict';

    angular
        .module('pushwoosh.services')
        .factory('pushwooshService', pushwooshServiceProvider);

    /* @ngInject */
    function pushwooshServiceProvider() {

        var pushwoosh;

        var pushwooshService = {
            registerDevice: registerDevice,
            updateBadge: updateBadge,
            clearBadge: clearBadge
        };

        return pushwooshService;

        function registerDevice() {
            if (!pushwoosh) {
                return;
            }
            pushwoosh.onDeviceReady({'pw_appid': '7741C-ADBD8'});
            pushwoosh.registerDevice(
                function(status) {
                    var deviceToken = status['deviceToken'];
                    console.warn('registerDevice: ' + deviceToken);
                },
                function(status) {
                    console.warn('failed to register : ' + JSON.stringify(status));
                    window.alert(JSON.stringify(['failed to register ', status]));
                }
            );
        }

        function updateBadge(value) {
            if (!pushwoosh) {
                return;
            }
            pushwoosh.setApplicationIconBadgeNumber(value);
        }

        function clearBadge() {
            updateBadge(0);
        }
    }

}).call(this, angular);
