/*global describe, beforeEach, it, expect */
/*jshint expr: true */
(function() {
    'use strict';

    describe('pushwoosh module', function() {

        var module;
        beforeEach(function() {
            module = angular.module('pushwoosh');
        });

        it('should be registered', function() {
            expect(module).not.to.equal(null);
        });
    });

}).call(this);
