var Path = require('path');

exports.register = function (server, options, next) {
    var subDirectories = ['fonts', 'js', 'css', 'templates', 'images'],
    path = '.tmp';

    subDirectories.forEach(function (subDirectory) {
        server.route({
            path: '/' + subDirectory + '/{param*}',
            method: 'GET',
            handler: {
                directory: {
                    path: Path.join(__dirname, '..', path, subDirectory),
                    index: false
                }
            },
            config: {
                auth: false
            }
        });
    });

     server.route({
        path: '/{param*}',
        method: 'GET',
        config: {
            auth: false
        },
        handler: function (req, reply) {

            return reply.file('./.tmp/index.html');
        }
    });

    next();
};

exports.register.attributes = {
    pkg: require('./../package.json')
};