(function(angular) {
    'use strict';

    angular
        .module('pushwoosh.notifications')
        .config(routesConfig);

    /* @ngIngect */
    function routesConfig($routeProvider) {
        $routeProvider.when('/notifications', {
            templateUrl: 'scripts/modules/notifications/notifications.html',
            controller: 'NotificationsController as vm'
        });
    }

}).call(this, angular);
