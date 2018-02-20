const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const reload = browserSync.reload;
const jshint = require('gulp-jshint');
const injectCSS = require('gulp-inject-css');
const runSequence = require('run-sequence');
const htmlmin = require('gulp-html-minifier');
const minify = require('gulp-minify');
const flatten = require('gulp-flatten');
var inject = require('gulp-inject');
historyApiFallback = require('connect-history-api-fallback')
var modRewrite = require('connect-modrewrite');

// sass processor
gulp.task('sass', function () {
    return gulp.src(['./src/app/**/*.scss', './src/styles/styles.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(flatten())
        .pipe(gulp.dest('./dist/css'));
});
// minify html
gulp.task('minifyhtml', function () {
    gulp.src('./src/app/**/*.html')
        .pipe(htmlmin({ collapseWhitespace: true, ignorePath: '/assets' }))
        .pipe(flatten())
        .pipe(gulp.dest('./dist/templates'))
});

// minify js
gulp.task('jsmin', function () {
    gulp.src('src/app/**/*.js')
        .pipe(minify({
            ext: {
                src: '-debug.js',
                min: '.js'
            },
            exclude: ['tasks'],
            mangle: false,
            ignoreFiles: ['.combo.js', '-min.js']
        }))
        .pipe(gulp.dest('dist/js'))
});

// check js errors
gulp.task('hint', function () {
    return gulp.src('src/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// inject styles inline
gulp.task('index', function () {
    gulp.src('./src/index.html')
        .pipe(injectCSS())
        .pipe(gulp.dest('./dist'));
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
            baseDir: ['.tmp', 'dist'],
            middleware: [historyApiFallback()]
        }
    });
    gulp.watch(['src/assets/**/*'], function (callback) { runSequence('assets') });
    gulp.watch(['dist/**/*.css', 'src/**/*.scss', 'src/**/*.html'], function (callback) { runSequence('sass', 'minifyhtml', 'index') });
    gulp.watch(['src/**/*.js', 'src/index.html'], function (callback) { runSequence('hint', 'minifyhtml', 'jsmin', 'index') });
    gulp.watch(['dist/index.html'], reload);
});


gulp.task('default', function (callback) { runSequence('assets', 'hint', 'sass', 'minifyhtml', 'jsmin', 'index', 'serve') });