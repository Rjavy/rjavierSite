var gulp = require('gulp');
var watchLess = require('gulp-watch-less');
var less = require('gulp-less');
var path = require('path');
var concat = require('gulp-concat');

gulp.task('watchLess', function(){
	gulp.watch('less/*.less', ['compiling-less']);
});

gulp.task('watchCss', function(){
	gulp.watch('less/*.less', ['get_once_css_file']);
});

gulp.task('compiling-less', function () {
  return gulp.src('less/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('cssFiles'));
});

gulp.task('get_once_css_file', function() {
  return gulp.src('cssFiles/*.css')
    .pipe(concat('main.css'))
    .pipe(gulp.dest('css/'));
});