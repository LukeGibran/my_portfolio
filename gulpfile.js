const gulp = require("gulp");
const concat = require("gulp-concat");
const sass = require("gulp-sass");
const uglify = require("gulp-uglify");
var pipeline = require("readable-stream").pipeline;

gulp.task("sass", function() {
  return new Promise((res, rej) => {
    gulp
      .src("scss/*.scss")
      .pipe(sass().on("error", sass.logError))
      .pipe(gulp.dest("dist/css"));

    res();
  });
});

gulp.task("script", function() {
  return new Promise((res, rej) => {
    gulp
      .src("js/*.js")
      .pipe(concat("main.js"))
      .pipe(gulp.dest("dist/js"));

    res();
  });
});

gulp.task("watch", function() {
  gulp.watch("scss/*.scss", gulp.series("sass"));
  gulp.watch("js/*.js", gulp.series("script"));
});
