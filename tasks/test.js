var gulp = require('gulp');
var karma = require('karma').server;

module.exports = function (gulp) {
/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
  karma.start({
    configFile: __dirname + '/config/karma.conf.js',
    singleRun: true
  }, done);
});
}