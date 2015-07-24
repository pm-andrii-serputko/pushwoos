(function(angular) {
    'use strict';

    angular
        .module('pushwoosh')
        .run(pushwooshRunner);

    /* @ngInject */
    function pushwooshRunner(pushwooshService) {
        pushwooshService.registerDevice();
    }

}).call(this, angular);
