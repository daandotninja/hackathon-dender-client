var gulp = require('gulp');
var gulpcon = require('gulp-connect');

gulp.task('webserver', function() {
  gulpcon.server();
});

gulp.task('default', ['webserver']);