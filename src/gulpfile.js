var gulp = require('gulp'),
    cssmin = require('gulp-cssmin'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect-multi')(),
    del = require('del'),
    less = require('gulp-less'),
    sourcemaps = require('gulp-sourcemaps'),
    LessAutoprefix = require('less-plugin-autoprefix'),
    autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] }),
    nodemon = require('gulp-nodemon');

// define tasks here

// handle less compilation and minification
gulp.task('styles', function() {
    return gulp.src('client/app/assets/styles/global.less')
        .pipe(less())
        .pipe(gulp.dest('client/dist/assets/css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(cssmin())
        .pipe(gulp.dest('client/dist/assets/css'));
});

// handle javascript concatenation and minification
gulp.task('scripts', function() {
    return gulp.src('client/app/**/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('client/dist/assets/js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('client/dist/assets/js'))
});

// default task:  gets styles and scripts taken care of, kicks off nodejs server and then launches front-end app
gulp.task('default', function(){
    gulp.start('styles', 'scripts', 'server', 'connect');
});

// watch for less and js changes and run compile / concat respectively
gulp.task('watch', function() {
    // Watch .scss files
    gulp.watch('client/app/assets/styles/global.less', ['styles']);
    // Watch .js files
    gulp.watch('client/app/**/*.js', ['scripts']);
});

// start our server and listen for changes
gulp.task('server', function () {
    nodemon({
        script: 'server/server.js',
        ext: 'js'
    });
});

// launch front-end
gulp.task('connect', connect.server({
    host: "127.0.0.1",
    root: ['client'],
    port: 5555,
    livereload: true,
    open: {
        browser: undefined,
        file: 'index.html'
    }
}));