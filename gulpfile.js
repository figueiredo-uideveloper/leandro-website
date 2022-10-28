const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

function sassCompile() {
    return gulp.src('scss/*.scss')
    .pipe(sass())
    .pipe(autoprefixer({
        overridBrowsersList: ['last 2 versions'],
        cascade: false,
    }))
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.stream());
}
gulp.task('sass', sassCompile);

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
}
gulp.task('watch', watch);

gulp.task('default', gulp.parallel('watch', 'browser-syc', 'sass'));