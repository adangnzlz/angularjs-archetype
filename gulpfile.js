const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const reload = browserSync.reload;
const jshint = require('gulp-jshint');
const injectCSS = require('gulp-inject-css');
const runSequence = require('run-sequence');
const htmlmin = require('gulp-html-minifier');
const flatten = require('gulp-flatten');


gulp.task('sass', function () {
    return gulp.src(['./src/app/**/*.scss', './src/styles/styles.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(flatten())
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('minify', function () {
    gulp.src('./src/app/**/*.html')
        .pipe(htmlmin({ collapseWhitespace: true, ignorePath: '/assets' }))
        .pipe(flatten())
        .pipe(gulp.dest('./dist/templates'))
});


gulp.task('hint', function () {
    return gulp.src('src/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// inject styles inline
gulp.task('index', function () {
    gulp.src('./src/index.html')
        .pipe(injectCSS())
        .pipe(gulp.dest('./'));
});
// inject styles inline
gulp.task('assets', function () {
    gulp.src("./src/assets/**/*")
        .pipe(flatten())
        .pipe(gulp.dest('dist/assets'));
});

// watch files for changes and reload
gulp.task('serve', function () {
    browserSync({
        server: {
        }
    });
    gulp.watch(['dist/**/*.css', 'src/**/*.scss', 'src/**/*.html'], function (callback) { runSequence('sass', 'minify', 'index') });
    gulp.watch(['src/**/*.js', 'src/index.html'], function (callback) { runSequence('hint', 'minify', 'index') });
    gulp.watch(['index.html'], reload);
});


gulp.task('default', function (callback) { runSequence('assets', 'hint', 'sass', 'minify', 'index', 'serve') });