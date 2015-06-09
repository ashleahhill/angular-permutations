'use strict';

var gulp = require('gulp'),
fs = require('fs'),
merge = require('merge-stream'),
rimraf = require('rimraf'),
source = require('vinyl-source-stream'),
buffer = require('vinyl-buffer'),
karma = require('gulp-karma'),
gutil= require('gulp-util'),
browserify= require('browserify'),
gsourcemaps = require('gulp-sourcemaps');

gulp.task('default', ['assets', 'javascript'])
gulp.task('assets', function () {
  // var assets = gulp.src('client/{css,img}/**')
  //   .pipe(gulp.dest('./.tmp'));
  // var vendorJs = gulp.src('client/js/vendor/**')
  //   .pipe(gulp.dest('./.tmp'));
  // var staticBoilerplate = gulp.src('client/*.*')
  //   .pipe(gulp.dest('./.tmp'));

  //   return merge(assets, vendorJs, staticBoilerplate);

  var assets = gulp.src(['client/{css,img}/**','client/*.*'])
    .pipe(gulp.dest('./.tmp'));
    return assets;
})

gulp.task('watch', function(){
 gulp.watch('client/index.html', ['assets']);
});

gulp.task('test', function(done) {
    karma.start({
        configFile: __dirname + '/config/karma.conf.js',
        singleRun: true
    }, done);
});

gulp.task('reset', function (callback) {

  rimraf('./.tmp', callback);
});

require('./tasks/browserify')(gulp);
require('./tasks/test')(gulp);
