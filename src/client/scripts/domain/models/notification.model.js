(function(angular) {
    'use strict';

    angular
        .module('pushwoosh.domain')
        .factory('Notification', NotificationProvider);

    function NotificationProvider() {

        function Notification() {
            this.id = null;
            this.title = '';
            this.message = '';
            this.unread = true;
        }

        return Notification;
    }

}).call(this, angular);
