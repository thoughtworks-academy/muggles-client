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

gulp.task('serve', ['less_compiler', 'jade_compiler']);

//gulp.task('serve', ['jade_compiler'], function () {
//  browserSync({
//    notify: false,
//    port: 9000,
//    server: {
//      baseDir: ['.tmp', 'app'],
//      routes: {
//        '/node_modules': 'node_modules',
//        '/images': 'images'
//      }
//    }
//  });
//
//  gulp.watch([
//    'app/*.html',
//    'app/scripts/**/*.js',
//    'app/styles/**/*.less',
//    '**/*.jade'
//  ]).on('change', reload);
//
//  gulp.watch('**/*.jade', ['jade_compiler'])
//});
//
//gulp.task('connect', function() {
//  connect.server({
//    root: '.',
//    livereload: true
//  });
//});
//
gulp.task('clean', require('del').bind(null, ['.tmp', 'dist']));

// Start the tasks
gulp.task('default', ['connect']);
