const path = require("path");
const gulp = require("gulp");
const util = require("util");
var browserSync = require('browser-sync');

const CSS_PATH = path.join(__dirname, "dist/css");
const JS_PATH = path.join(__dirname, "dist/js");

gulp.task("cssMove", () => {
  return gulp
    .src("src/css/**/*.css")
    .pipe(gulp.dest(CSS_PATH))
});

gulp.task("jsMove", () => {
  return gulp
    .src("src/js/**/*.js")
    .pipe(gulp.dest(JS_PATH))
});

gulp.task('browserSync', function(){
  browserSync({
    server:{
      baseDir: './'
    }
  })
});

// Gulp watch syntax
gulp.task('watch', ['browserSync'], function () {
  gulp.watch(["src/**/*.js", "src/**/*.css"], ["jsMove", "cssMove"]);
  gulp.watch('./*.html', browserSync.reload);
  gulp.watch('./dist/css/*.css', browserSync.reload);
  gulp.watch('./dist/js/*.js', browserSync.reload);
});

gulp.task('default', ['build', 'watch']);

// build
gulp.task('build', [ "jsMove", "cssMove"]);