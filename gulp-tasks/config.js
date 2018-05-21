const util = require('gulp-util');

const base = {
    src: '.',
    dist: 'dist',
};

const paths = {
    images: {
        src: `${ base.src }/images`,
        dist: `${ base.dist }/images`,
    },
    pictures: {
        src: `${ base.src }/pictures`,
        dist: `${ base.dist }/pictures`,
    },
    fonts: {
        src: `${ base.src }/fonts`,
        dist: `${ base.dist }/fonts`,
    },
    vendors: {
        src: `${ base.src }/vendors`,
        dist: `${ base.dist }/vendors`,
    },
    shower: {
        src: `${ base.src }/node_modules/shower-core`,
        dist: `${ base.dist }/scripts`,
    },
    styles: {
        src: `${ base.src }/styles/screen.scss`,
        watch: `${ base.src }/styles/**/*.scss`,
        dist: `${ base.dist }/styles`,
    },
};

const autoprefixer = [
    '> 1%',
    'last 2 versions',
    'Firefox ESR',
    'iOS >= 8',
];

const isDev = !util.env.production;

const ratios = ['16/10', '16/9', '4/3'];

module.exports = {
    autoprefixer,
    base,
    paths,
    isDev,
    ratios,
};
