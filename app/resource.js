'use strict';

angular.module('test-primer.resource', ['ngResource'])

    .factory('SomeResource', ['$resource',
        function ($resource) {
            return $resource('api/:id.json', {}, {
                query: {method: 'GET', params: {id: 'someData'}, isArray: true}
            });
        }]
    );
