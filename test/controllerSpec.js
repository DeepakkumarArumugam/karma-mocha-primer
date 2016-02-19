'use strict';

describe('Controllers', function () {

    beforeEach(module('test-primer.controller'));

    describe('SomeCtrl', function () {
        var scope, ctrl, $httpBackend;

        beforeEach(inject(function (_$httpBackend_, $rootScope, $controller) {
            scope = $rootScope.$new();

            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('api/someData.json').respond([
                {
                    'id': 1,
                    'someValue': 77
                },
                {
                    'id': 2,
                    'someValue': 88
                }
            ]);

            ctrl = $controller('SomeCtrl', {$scope: scope});
        }));

        it('should exist', inject(function () {
            expect(ctrl).to.exist;
        }));

        it('should provide someAction', function () {
            expect(scope.someAction).to.exist;
        });

        it('should set scope appropriately when someAction is called', function () {
            expect(scope.someProperty).to.not.exist;
            scope.someAction();
            $httpBackend.flush();
            expect(scope.someProperty.length).to.equal(2);
        });
    });
});