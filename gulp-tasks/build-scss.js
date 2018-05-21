const gulp = require('gulp');
const gulpif = require('gulp-if');
const config = require('./config');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const utils = require('./utils');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const header = require('gulp-header');
const rename = require('gulp-rename');
const replace = require('gulp-replace');
const pkg = require('../package.json');

const banner = `/**
* ${ pkg.description }
* ${ pkg.name } v${ pkg.version }, ${ pkg.homepage }
* @copyright 2010–${ new Date().getFullYear() } ${ pkg.author.name }, ${ pkg.author.url }
* @license ${ pkg.license }
*/
`;
const src = config.paths.styles.src;
const dist = config.paths.styles.dist;

const tasks = config.ratios.map((ratio) => {
    return () => {
        return gulp
            .src(src)
            .pipe(replace('[RATIO]', ratio))
            .pipe(gulpif(config.isDev, sourcemaps.init()))
            .pipe(
                sass({
                    errLogToConsole: true,
                    outputStyle: 'nested',
                }).on('error', utils.notifyError('Sass Error'))
            )
            .pipe(autoprefixer({
                browsers: config.autoprefixer,
                cascade: false,
            }))
            .pipe(csso().on('error', utils.notifyError('Csso Error')))
            .pipe(header(banner, { pkg: pkg }))
            .pipe(rename((path) => {
                path.basename += `-${ ratio.replace('/', 'x') }`;
            }))
            .pipe(gulpif(config.isDev, sourcemaps.write('.')))
            .pipe(gulp.dest(dist));
    };
});

/**
 * Builds styles files
 *
 * @task {build:scss}
 * @group {Build}
 */
gulp.task('build:scss', gulp.series(...tasks));
