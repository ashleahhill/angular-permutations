var path = require('path'),
 LIVERELOAD_PORT = 35729,
SERVER_ROOT = './tmp',
lr;
// https://gist.github.com/rhumaric/8559206#file-gulpfile-final-js
function startLivereload() {

  lr = require('tiny-lr')();
  lr.listen(LIVERELOAD_PORT);
}

// Notifies livereload of changes detected
// by `gulp.watch()`
function notifyLivereload(event) {

  // `gulp.watch()` events provide an absolute path
  // so we need to make it relative to the server root
  var fileName = path.relative(SERVER_ROOT, event.path);

  lr.changed({
    body: {
      files: [fileName]
    }
  });
}

module.exports = function (gulp) {
gulp.task('server', function () {
  startLivereload();
  gulp.watch('.tmp/**/*', notifyLivereload);

  require('./../server');

});
};

