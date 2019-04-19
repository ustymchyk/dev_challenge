'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css')
const htmlmin = require('gulp-htmlmin');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify')

sass.compiler = require('node-sass');

gulp.task('sass', () => {
    gulp.src('./src/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cleanCSS({
            compatibility: 'ie11'
        }))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('html', () => {
    gulp.src('./src/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('js', () =>
    gulp.src('./src/main.js')
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/'))
)

gulp.task('default', function () {
    gulp.watch('./src/*.scss', ['sass']);
    gulp.watch('./src/*.html', ['html']);
    gulp.watch('./src/*.js', ['js']);
}); 