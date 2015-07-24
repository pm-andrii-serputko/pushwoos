(function(angular) {
    'use strict';

    angular
        .module('pushwoosh.resources')
        .factory('mongoidParser', mongoidParserProvider);

    /* @ngInject */
    function mongoidParserProvider() {

        return function mongoidParser(data) {
            var mapper = {
                '_id': 'id'
            };
            var alarm = {};

            Object.keys(data).forEach(function(key) {
                var value = data[key];
                key = mapper[key] || key;
                alarm[key] = value;
            });

            return alarm;
        };
    }

}).call(this, angular);
