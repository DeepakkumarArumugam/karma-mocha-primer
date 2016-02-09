'use strict';

angular.module('test-primer.service', ['test-primer.resource'])

    .service('SomeService', ['SomeResource',
        function (SomeResource) {
            return {
                someService: function () {
                    return SomeResource.query().$promise;
                }
            };
        }]
    );
