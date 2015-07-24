(function(angular) {
    'use strict';

    angular
        .module('pushwoosh.dashboard')
        .controller('DashboardController', DashboardController);

    /* @ngInject */
    function DashboardController($location) {
        var vm = this;
        vm.title = 'Dashboard';
        vm.notifications = notifications;

        initialize();

        function initialize() {
        }

        function notifications() {
            $location.path('notifications');
        }
    }

}).call(this, angular);
