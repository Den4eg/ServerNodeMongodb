var rename = require('gulp-rename'),
    browserSync = require('browser-sync'),
    sass = require('gulp-sass'),
    clean = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    autoprefixer = require('gulp-autoprefixer'),
    imagemin = require('gulp-imagemin'),
    babel = require('gulp-babel'),
    concat = require('gulp-concat');

var { watch, series, parallel, dest, src, task } = require('gulp');

function imgMin() {
    return src('dev/img/*.*')
        .pipe(
            imagemin({
                progressive: true,
                interlaced: true
            })
        )
        .pipe(dest('public/img'));
}

function sas() {
    return src('dev/sass/**/*.scss')
        .pipe(sass())
        .pipe(dest('dev/css'));
}

function css() {
    return src('dev/css/**/*.css')
        .pipe(
            autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
            })
        )
        .pipe(concat('style.css'))
        .pipe(
            clean({
                level: 2
            })
        )
        .pipe(rename({ suffix: '.min' }))
        .pipe(dest('public/css'))
        .pipe(browserSync.stream());
}

function scripts() {
    return src('dev/js/*.js')
        .pipe(concat('scripts.js'))
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(
            uglify({
                toplevel: true
            })
        )
        .pipe(rename({ suffix: '.min' }))
        .pipe(dest('public/scripts'))
        .pipe(browserSync.stream());
}

// function html() {
//     return src('dev/*.html')
//         .pipe(dest('public/'))
//         .pipe(browserSync.stream());
// }


function watcher() {
    watch('dev/sass/**/*.scss', series(sas, css));
    watch('dev/js/**/*.js', scripts);
};


exports.default = series(sas, css, scripts, watcher);
exports.build = series(imgMin, sas, parallel(css, scripts));