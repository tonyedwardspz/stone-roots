
// required plugin files
var gulp = require('gulp'),
		concat = require('gulp-concat'),
		rename = require('gulp-rename'),
		uglify = require('gulp-uglify'),
		concatCss = require('gulp-concat-css'),
		connect = require('gulp-connect-php'),
		browserSync = require('browser-sync'),
		clean = require('gulp-clean'),
		runSequence = require('run-sequence'),
		minifyCss = require('gulp-minify-css'),
    stripDebug = require('gulp-strip-debug');


// Clean the dist folder
gulp.task('clean', function () {
    return gulp.src('dist/', {read: false})
        .pipe(clean());
});


// Concatenate and minify js
gulp.task('scripts', function() {
  return gulp.src(['js/*.js'])
    .pipe(concat('script.js'))
    //.pipe(stripDebug())
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});


// Concatenate css
gulp.task('css', function(){
	return gulp.src(['css/*.css'])
    .pipe(concatCss("style.css"))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('js-watch', ['scripts', 'css'], browserSync.reload);


// Serve the project and set up browser sync
gulp.task('connect', function() {
  connect.server({}, function (){
    browserSync.init({
			server: {
					baseDir: "./"}
    });
  });

  gulp.watch(['js/*.js','css/*.css'], ['js-watch']);
  gulp.watch(['*.html']).on('change', function () {
    browserSync.reload();
  });
});


///////////////////// Run Tasks ////////////////////////////

// Serve the project. Call from the command line using 'gulp'
gulp.task('default', function(callback) {
  runSequence('clean',
              ['scripts','css'],
              'connect',
              callback);
});
