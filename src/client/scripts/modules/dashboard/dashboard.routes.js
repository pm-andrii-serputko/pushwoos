(function(angular) {
    'use strict';

    angular
        .module('pushwoosh.dashboard')
        .config(routesConfig);

    /* @ngIngect */
    function routesConfig($routeProvider) {
        $routeProvider.when('/dashboard', {
            templateUrl: 'scripts/modules/dashboard/dashboard.html',
            controller: 'DashboardController as vm'
        });
    }

}).call(this, angular);
