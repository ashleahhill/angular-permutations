'use strict';

var Hapi = require('hapi'),
_=require('lodash');

module.exports = function (options) {
        var project,
            server,
            defaults = {
                host: 'localhost',
                port: '3000'
            },
            settings = _.defaults(defaults, options);


        server = new Hapi.Server();

        server.connection({
            host: settings.host,
            port: settings.port
        });

        server.register({
                register: require('./settings')
            },
            function (err) {
                if (err) {
                    console.error(err);
                    console.trace();
                }
                server.start(function () {
                    console.log('Server running at:', server.info.uri);
                });
            });
};
