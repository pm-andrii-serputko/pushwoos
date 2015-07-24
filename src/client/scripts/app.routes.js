(function(angular) {
    'use strict';

    angular
        .module('pushwoosh')
        .config(routesConfig);

    /* @ngIngect */
    function routesConfig($routeProvider) {
        $routeProvider.otherwise({
            redirectTo: '/dashboard'
        });
    }

}).call(this, angular);
