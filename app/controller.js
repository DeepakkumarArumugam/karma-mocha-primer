'use strict';

angular.module('test-primer.controller', ['test-primer.service'])

    .controller('SomeCtrl', ['$scope', 'SomeService',
        function ($scope, SomeService) {

            $scope.someAction = function () {
                SomeService.someService().then(function(results) {
                    $scope.someProperty = results;
                });
            };
        }
    ]);
