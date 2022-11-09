const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

function sassCompile() {
    return gulp.src('scss/*.scss')
    .pipe(sass())
    .pipe(autoprefixer({
        overridBrowsersList: ['last 2 versions'],
        cascade: false,
    }))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.stream());
}
gulp.task('sass', sassCompile);

function CssPlugins() {
    return gulp.src('css/lib/*.css')
    .pipe(concat('plugins.css'))
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.stream());
}
gulp.task('CssPlugins', CssPlugins);

function gulpJs() {
    return gulp.src('js/scripts/*.js')
    .pipe(concat('all.js'))
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('js/'))
    .pipe(browserSync.stream());
}
gulp.task('alljs', gulpJs);

function JsPlugins() {
    return gulp.src('./js/lib/*.js')
    .pipe(concat('plugins.js'))
    .pipe(gulp.dest('js/'))
    .pipe(browserSync.stream());
}
gulp.task('JsPlugins', JsPlugins);

function browser() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
}
gulp.task('browser-syc', browser);

function watch() {
    gulp.watch('*.html').on('change', browserSync.reload);
    gulp.watch('scss/*.scss', sassCompile);
    gulp.watch('css/lib/*.css', CssPlugins);
    gulp.watch('js/scripts/*.js', gulpJs);
    gulp.watch('js/lib/*.js', JsPlugins);
}
gulp.task('watch', watch);


gulp.task('default', gulp.parallel('watch', 'browser-syc', 'sass', 'CssPlugins', 'alljs', 'JsPlugins'));



// build
function buildSass() {
    return gulp.src('scss/*.scss')
    .pipe(sass())
    .pipe(autoprefixer({
        overridBrowsersList: ['last 2 versions'],
        cascade: false,
    }))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('public/css/'));
}
gulp.task('buildSass', buildSass);

function buildCssPlugins() {
    return gulp.src('css/lib/*.css')
    .pipe(concat('plugins.css'))
    .pipe(gulp.dest('public/css/'));
}
gulp.task('buildCssPlugins', buildCssPlugins);

function buildJs() {
    return gulp.src('js/scripts/*.js')
    .pipe(concat('all.js'))
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('public/js/'));
}
gulp.task('buildJs', buildJs);

function buildJsPlugins() {
    return gulp.src('./js/lib/*.js')
    .pipe(concat('plugins.js'))
    .pipe(gulp.dest('public/js/'));
}
gulp.task('buildJsPlugins', buildJsPlugins);

function buildImages() {
    return gulp.src('./images/*')
    .pipe(gulp.dest('public/images/'));
}
gulp.task('buildImages', buildImages);

function buildIndex() {
    return gulp.src('index.html')
    .pipe(gulp.dest('public/'));
}
gulp.task('buildIndex', buildIndex);

gulp.task('build', gulp.parallel('buildSass', 'buildCssPlugins', 'buildJs', 'buildJsPlugins', 'buildImages', 'buildIndex'));