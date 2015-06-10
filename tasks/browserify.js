'use strict';

var watchify = require('watchify'),
  browserify = require('browserify'),
  gulp = require('gulp'),
  source = require('vinyl-source-stream'),
  buffer = require('vinyl-buffer'),
  gutil = require('gulp-util'),
  sourcemaps = require('gulp-sourcemaps'),
  assign = require('lodash').assign,
  customOpts,
  opts,
  b;

// https://github.com/gulpjs/gulp/blob/master/docs/recipes/fast-browserify-builds-with-watchify.md
  // add custom browserify options here
  customOpts = {
    entries: ['./client/js/main.js'],
    debug: true
  };
  opts = assign({}, watchify.args, customOpts);

  b = watchify(browserify(opts));


module.exports = function (gulp) {

  gulp.task('javascript', bundle); // so you can run `gulp js` to build the file

  b.on('update', bundle); // on any dep update, runs the bundler
  b.on('log', gutil.log); // output build logs to terminal

  function bundle() {
    return b.bundle()
      // log errors if they happen
      .on('error', gutil.log.bind(gutil, 'Browserify Error'))
      .pipe(source('main.js'))
      // optional, remove if you don't need to buffer file contents
      .pipe(buffer())
      // optional, remove if you dont want sourcemaps
      .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
         // Add transformation tasks to the pipeline here.
      .pipe(sourcemaps.write('./')) // writes .map file
      .pipe(gulp.dest('./.tmp/js/'));
  }
}
