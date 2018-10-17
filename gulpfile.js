var gulp = require('gulp')
var pug = require('gulp-pug')
var scss = require('gulp-sass')
var server = require('gulp-server-livereload')
var autoprefixer = require('gulp-autoprefixer')
var plumberNotifier = require('gulp-plumber-notifier');
var postcss = require('gulp-postcss');

gulp.task('html', function(){
	gulp.src('./dev/*.pug')
	.pipe(plumberNotifier())
	.pipe(pug({
		pretty: true
	}))
	.pipe(gulp.dest('./app/'))
})

gulp.task('watch', function(){
	gulp.watch(['./dev/*.pug', './dev/partials/*.pug'], ['html'])
	gulp.watch(['./dev/scss/**/*.scss'], ['scss'])
	gulp.watch(['./dev/js/*.js'], ['js'])
	gulp.watch(['./dev/img/*'], ['img'])
	gulp.watch(['./dev/fonts/*'], ['fonts'])
})

gulp.task('webserver', function() {
  gulp.src('app')
    .pipe(server({
      livereload: true,
      directoryListing: false,
      open: false
    }));
});
gulp.task('img', function(){
	gulp.src('./dev/img/*')
	.pipe(gulp.dest('./app/img'))
})
gulp.task('fonts', function(){
	gulp.src('./dev/fonts/*')
	.pipe(gulp.dest('./app/fonts'))
})

gulp.task('js', function(){
	gulp.src('./dev/js/*.js')
	.pipe(gulp.dest('./app/js/'))
})

gulp.task('scss', function(){
	return gulp.src('./dev/scss/**/*.scss')
		.pipe(plumberNotifier())
		.pipe(scss())
		.pipe(autoprefixer({
	            browsers: ['last 20 versions'],
	            cascade: false
    }))
	.pipe(gulp.dest('./app/css/'))
})
gulp.task('css', function(){
  gulp.src('./dev/css/*.css')
  .pipe(postcss())
  .pipe(gulp.dest('./app/css/'))
})
gulp.task('default', ['html', 'watch', 'css', 'webserver', 'js', 'scss', 'img', 'fonts'])