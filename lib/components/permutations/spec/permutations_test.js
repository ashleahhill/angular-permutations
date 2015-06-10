'use strict';


var chai = require('chai'),
    expect = chai.expect,
    sinon = require('sinon'),
    sinonChai = require('sinon-chai');

chai.use(sinonChai);


require('./../index.js');

describe('Permutations Module', function () {

    beforeEach(angular.mock.module('permutation'));

    describe('Permutations Directive', function () {

        describe('inputs', function () {

            it('should allow you to enter 2 numbers');
            it('should allow you to choose combinations or permutations');
            it('should provide text fields to allow user to input things to be permuted');
        });

        describe('display', function () {
            it('should display number of permutations');
            it('should visualize each permutation');
        });
    });
});