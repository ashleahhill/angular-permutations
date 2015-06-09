'use strict';

var factorial = require('./factorial');

/**
 * calulate number of permutations for n=number of things and r= things you are combining into
 * @param  {number} n Number of things will be rounded to nearest integer
 * @param  {number} r Options for things will be rounded to nearest integer
 * @param  {boolean=false} Whether things can be used more than once
 * @return {number} number of permutations
 */
function permutations (n,r,repeat) {
	repeat = !!repeat;

n = Math.abs(Math.round(n));
r = Math.abs(Math.round(r));
	if (repeat) {
    // repeats ok
	return n * r;
	} else {
    // no repeats
    return factorial(n) / factorial(n-r);
  }
}

module.exports = permutations;