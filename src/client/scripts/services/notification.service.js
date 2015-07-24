(function(angular) {
    'use strict';

    angular
        .module('pushwoosh.services')
        .factory('notificationService', notificationServiceProvider);

    /* @ngInject */
    function notificationServiceProvider($q, notificationResource, pushwooshService) {

        var notificationService = {
            getNotifications: getNotifications,
            markAllAsRead: markAllAsRead
        };

        return notificationService;

        function getNotifications() {
            return notificationResource.list();
        }

        function markAllAsRead() {
            return $q.when()
                .then(notificationResource.markAllAsRead)
                .then(pushwooshService.clearBadge);
        }
    }

}).call(this, angular);
