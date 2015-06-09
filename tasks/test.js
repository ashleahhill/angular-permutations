var gulp = require('gulp'),
karma = require('karma').server,
path = require('path');


module.exports = function (gulp) {
/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
  karma.start({
    configFile: __dirname + '/../config/karma.conf.js',
    singleRun: true
  }, done);
});
}