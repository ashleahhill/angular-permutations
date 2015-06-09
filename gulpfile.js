'use strict';

var gulp = require('gulp'),
fs = require('fs'),
merge = require('merge-stream'),
rimraf = require('rimraf'),
source = require('vinyl-source-stream'),
buffer = require('vinyl-buffer'),
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


gulp.task('reset', function (callback) {

  rimraf('./.tmp', callback);
});

require('./tasks/browserify')(gulp);
// gulp.task('javascript', function () {

// // set up the browserify instance on a task basis
//   var b = browserify({
//     entries: './client/js/main.js',
//     debug: true
//   });

//   return b.bundle()
//     .pipe(source('main.js'))
//     .pipe(buffer())
//     .pipe(gsourcemaps.init({loadMaps: true}))
//         // Add transformation tasks to the pipeline here.
//         .on('error', gutil.log)
//     .pipe(gsourcemaps.write('./'))
//     .pipe(gulp.dest('./.tmp/js/'));
// });

