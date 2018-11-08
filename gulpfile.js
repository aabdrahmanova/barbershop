var gulp = require('gulp'),
    sass = require('gulp-sass'),
    livereload = require('gulp-livereload');
 
gulp.task('sass', function() {
  gulp.src('source/sass/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('source/css'))
    .pipe(livereload());
});
 
gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('source/sass/**/*.scss', ['scss']);
});

