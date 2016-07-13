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
gulp.task('styles', function() {
    return gulp.src('client/app/assets/styles/global.less')
        .pipe(less())
        .pipe(gulp.dest('client/dist/assets/css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(cssmin())
        .pipe(gulp.dest('client/dist/assets/css'));
});

gulp.task('scripts', function() {
    return gulp.src('client/app/**/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('client/dist/assets/js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('client/dist/assets/js'))
});

gulp.task('clean', function() {
    return del(['dist/assets/css', 'dist/assets/js']);
});

gulp.task('default', function(){
    gulp.start('server', 'styles', 'scripts', 'connect');
});

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
    root: ['client'],
    port: 1337,
    livereload: true,
    open: {
        browser: undefined,
        file: 'index.html'
    }
}));