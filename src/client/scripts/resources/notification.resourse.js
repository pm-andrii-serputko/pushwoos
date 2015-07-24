(function(angular) {
    'use strict';

    angular
        .module('pushwoosh.resources')
        .factory('notificationResource', notificationResourceProvider);

    /* @ngInject */
    function notificationResourceProvider($q, $resource, mongoidParser) {

        var notificationResource = {
            list: list,
            markAllAsRead: markAllAsRead
        };

        return notificationResource;

        function list() {
            return resource().list().$promise.then(function(list) {
                return list.map(mongoidParser);
            });
        }

        function markAllAsRead() {
            return resource({id: 'read'}).update().$promise;
        }

        function resource(params) {
            return $resource('http://notifications-dev.herokuapp.com/api/notifications/:id', params, {
                list: {
                    isArray: true,
                    method: 'GET'
                },
                create: {
                    method: 'POST'
                },
                update: {
                    method: 'PUT'
                },
                remove: {
                    method: 'DELETE'
                }
            });
        }
    }

}).call(this, angular);
