'use strict';

var server = require('./server'),
  argv = require('minimist')(process.argv.slice(2));

function startServer () {
    server(argv);

}



module.exports = startServer();