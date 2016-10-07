"use strict";

var gulp = require("gulp");
var browserSync = require('browser-sync').create();
var del = require('del');
var changed = require('gulp-changed');
var gutil = require('gulp-util');

// Post-CSS Experiments
// var postcss = require('gulp-postcss');
// var safe = require('postcss-safe-parser');
// var cssnano = require('gulp-cssnano');
// var autoprefixer = require('autoprefixer');


// Clean ALL distribution files
gulp.task('cleanall', function() {
  return del('dist/**/*', gutil.log('Cleanall done...'));
});

// Copy ALL from SRC to distribution directory
gulp.task('copyall', function() {
  return gulp.src('src/**/*') 
    .pipe(gulp.dest('dist/'))
    .on('end', function(){ gutil.log('CopyAll done...'); });
});

// Copy CHANGED
gulp.task('copy', function() {
  return gulp.src('src/**/*')
    .pipe(changed('dist/'))
    .pipe(gulp.dest('dist/'))
    .pipe(browserSync.stream());
});

// Static Server  + Watch ALL files
gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: "dist",
      index: "index.html"
    }
  });

  gulp.watch('./src/**/*', ['copy']);

});

// Type 'gulp' (no args) to start server
gulp.task('default', ['serve']);




