'use strict';

angular.module('test-primer.filter', [])

    .filter('some', [function () {
        return function (input) {
            return input + 'Filtered';
        };
    }]);
