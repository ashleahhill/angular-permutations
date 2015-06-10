'use strict';


var chai = require('chai'),
    expect = chai.expect,
    sinon = require('sinon'),
    sinonChai = require('sinon-chai');

chai.use(sinonChai);


require('./../index.js');

describe('Permutations Module', function () {

    beforeEach(angular.mock.module('permutation'));

    describe('Permutations Service', function () {

        var permutations;

        beforeEach(angular.mock.inject(function (_permutations_) {
            permutations = _permutations_;
        }));

        describe('get method', function () {

            it('should allow you to enter 2 numbers', function () {
                var output = permutations.get(5,4);

                // http://www.wolframalpha.com/input/?i=4+p+5

                expect(output).to.equal(120);
            });
            it.skip('should accept two arrays as arguments', function () {
              var array1 = ['live','strong','lance armstrong'],
                array2 = ['pizza', 'cookies', 'german lance armstrong cake'],
                output = permutations.get(array1, array2);

                expect(output).to.equal(6);
            });
            it('should allow you to choose combinations or permutations', function () {
                var output = permutations.get(5,4,true);

                // http://www.wolframalpha.com/input/?i=4+c+5

                expect(output).to.not.equal(5);
            });
            it('should still work if n is less than r', function () {
                expect(permutations.get(4,5));
            });
        });
    });
});
