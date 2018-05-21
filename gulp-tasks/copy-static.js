const gulp = require('gulp');
const config = require('./config');

/**
 * Copies static files to dist
 *
 * @task {copy:static}
 * @group {Build}
 */
gulp.task('copy:static', gulp.parallel(
    () => {
        const images = config.paths.images;
        return gulp
            .src(`${ images.src }/**/*`)
            .pipe(gulp.dest(images.dist));
    },
    () => {
        const pictures = config.paths.pictures;
        return gulp
            .src(`${ pictures.src }/**/*`)
            .pipe(gulp.dest(pictures.dist));
    },
    () => {
        const vendors = config.paths.vendors;
        return gulp
            .src(`${ vendors.src }/**/*`)
            .pipe(gulp.dest(vendors.dist));
    },
    () => {
        const fonts = config.paths.fonts;
        return gulp
            .src(`${ fonts.src }/**/*`)
            .pipe(gulp.dest(fonts.dist));
    },
    () => {
        const shower = config.paths.shower;
        return gulp
            .src(`${ shower.src }/shower.min.js`)
            .pipe(gulp.dest(shower.dist));
    },
));
