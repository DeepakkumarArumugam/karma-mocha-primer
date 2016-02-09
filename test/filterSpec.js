'use strict';

describe('Filters', function() {

    beforeEach(module('test-primer.filter'));

    describe('someFilter', function() {

        it('should perform filtering',
            inject(function(someFilter) {
                expect(someFilter('something')).to.equal('somethingFiltered');
            }));
    });
});