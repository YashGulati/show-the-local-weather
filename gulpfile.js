var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

// watch files for changes and reload
gulp.task('default', function() {
  browserSync({
    server: {
      baseDir: './'
    }, notify: false, ui: false
  });

  gulp.watch(['**/*.js','**/*.css','**/*.html'], {cwd: './'}, reload);
});
