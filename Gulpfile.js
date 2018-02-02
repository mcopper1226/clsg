'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var nodemon = require('gulp-nodemon');

var paths = {
  styles: './app/sass/*.+(scss|css)'
}


gulp.task('nodemon', function(cb) {
  var started = false;

  return nodemon({
    script: './app/app.js'
  }).on('start', function() {
    if (!started) {
      cb();
      started = true;
    }
  })
});

//Sass
gulp.task('css', function() {
  gulp.src(paths.styles)
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(cssnano())
  .pipe(sourcemaps.write('./app/public/css'))
  .pipe(gulp.dest('./app/public/css'))
});


gulp.task('watch', function() {
  gulp.watch('./app/sass/**/*.scss', ['css']);
});

gulp.task('default', ['nodemon', 'watch']);
