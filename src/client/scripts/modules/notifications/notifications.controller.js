(function(angular) {
    'use strict';

    angular
        .module('pushwoosh.notifications')
        .controller('NotificationsController', NotificationsController);

    /* @ngInject */
    function NotificationsController($window, $timeout, notificationService, notificationRepository) {
        var vm = this;
        vm.title = 'Notifications';
        vm.back = back;
        vm.notifications = [];
        vm.isLocalDataReady = false;
        vm.isRemoteDataReady = false;
        vm.isDataError = false;

        initialize();

        function initialize() {
            notificationRepository
                .findAll()
                .then(function(data) {
                    vm.isLocalDataReady = false;
                    vm.isRemoteDataReady = false;
                    vm.isDataError = false;

                    data.local
                        .then(updateVMNotifications)
                        .then(function(notifications) {
                            vm.isLocalDataReady = true;
                            console.log('local items:', notifications);
                        })
                        .then(function() {
                            return data.remote;
                        })
                        .then(updateVMNotifications)
                        .then(function(notifications) {
                            vm.isRemoteDataReady = true;
                            console.log('remote items:', notifications);
                        })
                        .then(notificationService.markAllAsRead)
                        .then(function(notifications) {
                            console.log('mark all notifications as read');
                        })
                        .then(function() {
                            $timeout(function() {
                                vm.notifications = vm.notifications.map(function(notification) {
                                    notification.unread = false;
                                });
                            }, 5000);
                        })
                        .catch(function() {
                            vm.isDataError = true;
                        });
                });
        }

        function back() {
            $window.history.back();
        }

        function updateVMNotifications(notifications) {
            vm.notifications = notifications;
            return notifications;
        }
    }

}).call(this, angular);
