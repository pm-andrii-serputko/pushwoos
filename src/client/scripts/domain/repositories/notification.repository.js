(function(angular) {
    'use strict';

    angular
        .module('pushwoosh.domain')
        .factory('notificationRepository', notificationRepositoryProvider);

    function notificationRepositoryProvider($q, notificationResource) {

        var collection = [];

        var notificationRepository = {
            add: add,
            findAll: findAll,
            removeAll: removeAll
        };

        return notificationRepository;

        function add(entity) {
            return $q.when(entity)
                .then(function(entity) {
                    collection.push(entity);
                    return entity;
                });
        }

        function findAll() {
            return $q.when({
                local: $q.when(collection),
                remote: notificationResource.list().then(function(list) {
                    collection = [];
                    list = list.map(function(item) {
                        // create instance of model
                        // add instance to collection

                        return add(item);
                    });
                    return $q.all(list);
                })
            });
        }

        function removeAll() {

        }
    }

}).call(this, angular);
