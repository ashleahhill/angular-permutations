'use strict';

var permutations = require('./lib/permutations'),
  argv = require('minimist')(process.argv.slice(2)); // "The first element will be 'node', the second element will be the name of the JavaScript file. The next elements will be any additional command line arguments."

console.log(permutations.apply(this, argv._));
