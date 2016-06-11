'use strict';

// commonjs format
// let gulp = require('gulp');

// es2015 format
import gulp from 'gulp';
import browserify from 'browserify';
import source from 'vinyl-source-stream';

gulp.task('default', () => {
  console.log('from Gulp');

  return browserify('src/app.js')
    .transform('babelify')
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dist'));
});


