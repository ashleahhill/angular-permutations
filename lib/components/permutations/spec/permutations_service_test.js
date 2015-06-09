'use strict';


var chai = require('chai'),
    expect = chai.expect,
    sinon = require('sinon'),
    sinonChai = require('sinon-chai');

chai.use(sinonChai);


require('./../index.js');

describe('Permutations Module', function () {

    beforeEach(angular.mock.module('permutations'));

    describe('Permutations Service', function () {

        describe('get method', function () {

            it('should allow you to enter 2 numbers');
            it('should accept two arrays as arguments');
            it('should allow you to choose combinations or permutations');
            it('should still work if n is less than r');
        });
    });
});
