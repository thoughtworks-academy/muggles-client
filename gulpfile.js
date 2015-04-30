'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var browserSync = require('browser-sync');
var reload = browserSync.reload;

var connect = require('gulp-connect');

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

gulp.task('serve', ['less_compiler', 'jade_compiler'], function() {

  gulp.watch([
    './app/views/**/*.jade',
    './app/styles/**/*.less'
  ]).on('change', reload);

  gulp.watch('./app/views/**/*.jade', ['jade_compiler']);
  gulp.watch('./app/styles/**/*.less', ['jade_compiler'])
});

gulp.task('clean', require('del').bind(null, ['.tmp', 'dist']));
