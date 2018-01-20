var gulp = require('gulp');

var plmb = require('gulp-plumber');
var sass = require('gulp-sass');
var prfx = require('gulp-autoprefixer');
var sync = require('browser-sync').create();

var rplc = require('gulp-replace');

gulp.task('browser-sync', function() {
  sync.init({
    server: {
      baseDir: 'docs'
    }
  });
});

gulp.task('reload',function(){
  sync.reload();
});

gulp.task('compile',function(){
  gulp.src('./**/css/*.scss')
  .pipe(plmb({
    errorHandler: function(err){
      console.log(err.massageFormatted);
      this.emit('end');
    }
  }))
  .pipe(sass({
    outputStyle: 'expanded'
  }))
  .pipe(prfx({
    browsers: ['last 2 version']
  }))
  .pipe(gulp.dest(''));
});

gulp.task('default',['browser-sync'],function(){
  gulp.watch('**/css/*.scss',['compile']);
  gulp.watch(['**/*.html','**/css/*.css','**/js/*.js'],['reload']);
});

gulp.task('forCorrect', function () {
  return gulp
    .src(['**/*.html'])
    .pipe(rplc('http://localhost:3000/', '//kumoyama.github.io/test/'))
    .pipe(gulp.dest('./'));
});
gulp.task('forTest', function () {
  return gulp
    .src(['**/*.html'])
    .pipe(rplc('//kumoyama.github.io/test/', 'http://localhost:3000/'))
    .pipe(gulp.dest('./'));
});
