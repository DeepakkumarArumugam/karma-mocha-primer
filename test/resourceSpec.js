'use strict';

describe('Resources', function () {

    beforeEach(module('test-primer.resource'));

        describe('SomeResource', function () {

        it('should exist', inject(function (SomeResource) {
            expect(SomeResource).to.exist;
        }));

        it('should have a query function', inject(function (SomeResource) {
            expect(SomeResource.query).to.exist;
        }));
    });
});