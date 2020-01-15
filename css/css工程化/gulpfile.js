const gulp = require('gulp');
const atImport = require('postcss-import');
const nano = require('cssnano');
const autoprefixer = require('autoprefixer');


gulp.task('postcss', function () {

    const postcss = require('gulp-postcss')

    return gulp.src('src/2-plugins-main.css')
        .pipe(
            postcss([
                atImport,
                autoprefixer(),
                nano
            ])
        )
        .pipe(gulp.dest('build/gulp'))
});

gulp.task('default', gulp.series('postcss'))