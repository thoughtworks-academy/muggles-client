'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('index_jade_compiler', function() {

  return gulp.src('app/index.jade')
    .pipe($.jade())
    .pipe(gulp.dest('.tmp/'))
});

gulp.task('jade_compiler', ['index_jade_compiler'], function(){

  return gulp.src('app/views/**/*.jade')
    .pipe($.jade())
    .pipe(gulp.dest('.tmp/views'))
});

gulp.task('less_compiler', function() {

  return gulp.src('app/styles/**/*.less')
    .pipe($.less())
    .pipe(gulp.dest('.tmp/styles'))
});

gulp.task('test', function () {
  return gulp.src('tests/**/*.js')
    .pipe($.sourcemaps.init())
    .pipe($.babel())
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('dist/tests'));
});

gulp.task('serve', ['less_compiler', 'jade_compiler']);

gulp.task('watch', ['less_compiler', 'jade_compiler'], function() {
  gulp.watch([
    '**/*.jade',
    '**/*.less'
  ]).on('change', reload);

  gulp.watch('**/*.jade', ['jade_compiler']);
  gulp.watch('**/*.less', ['less_compiler'])
});

gulp.task('clean', require('del').bind(null, ['.tmp', 'dist']));
