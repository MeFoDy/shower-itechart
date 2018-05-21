const gulp = require('gulp');
const config = require('./config');
const browserSync = require('browser-sync');
require('./build');
require('./copy-static');

/**
 * Serves the site
 *
 * @task {serve}
 * @group {Serve}
 */
gulp.task('serve', gulp.series('build', () => {
    const dist = config.base.dist;
    browserSync.init({
        server: {
            baseDir: dist,
        },
        ghostMode: {
            scroll: true,
        },
        notify: false,
        open: false,
        port: 3001,
        files: [
            `${dist}/images/**/*`,
            `${dist}/pictures/**/*`,
            `${dist}/**/*.css`,
            `${dist}/**/*.js`,
            `${dist}/**/*.html`,
        ],
    });
    gulp.watch(config.paths.images.src, gulp.series('copy:static'));
    gulp.watch(config.paths.styles.watch, gulp.series('build:scss'));
    gulp.watch(`${config.base.src}/index.html`, gulp.series('build:html'));
}));
