'use strict';

describe('Services', function() {

    beforeEach(module('test-primer.service'));

    describe('SomeService', function() {

        it('should exist', inject(function (SomeService) {
            expect(SomeService).to.exist;
        }));

        it('should have someService available', inject(function (SomeService) {
            expect(SomeService.someService).to.exist;
        }));

        it('should have access to SomeResource', inject(function (SomeResource) {
            expect(SomeResource).to.exist;
        }));
    });
});