const path = require('path');
const gulp = require('gulp');
//const gulp = require('gulp-help')(require('gulp'));
const pkg = require('./package.json');
const $ = require('gulp-load-plugins')();
const purify = require('gulp-purifycss');
const gulpSequence = require('gulp-sequence');
const importOnce = require('node-sass-import-once');
const gulpWebpack = require('webpack-stream');
const webpack = require('webpack');
const babel = require('gulp-babel');
const bower = require('gulp-bower');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');

const sassOptions = {
  // sourceComments: true,
  outputStyle: 'compact',
  importer: importOnce,
  importOnce: {
    index: true,
    css: true,
    bower: true
  }
};

const config = {
  dest: './dist',
  scripts: {
    main: 'src/index.js',
    src: [
      'src/**/*.js',
      'src/**/*.jsx',
      '!src/**/*.test.js',
      '!src/**/*.test.jsx',
      '!src/**/*.stories.js'
    ]
  },
  styles: {
    dest: './dist/css',
    src: [
      'src/sass/index.scss',
      'src/**/*.scss',
      '!src/**/_*.scss'
    ]
  }
};


gulp.task('rename-js-to-jsx', () =>
  gulp
  .src('src/**/index.stories.js')
  .pipe($.filelog('js'))
  .pipe($.size())
  .pipe($.rename({
    extname: '.jsx'
  }))
  .pipe($.filelog('jsx'))
  .pipe(gulp.dest('./src')));

gulp.task('sassdoc', function () {
  const sassdocOptions = {
    dest: 'sass-docs',
    verbose: true,
    display: {
      access: ['public', 'private'],
      alias: true,
      watermark: true
    },
    groups: {
      undefined: 'Ungrouped'
    }
  };
  return gulp.src(config.styles.src).pipe($.sassdoc(sassdocOptions));
});

// /
gulp.task('clean', function () {
  return gulp.src([
    '.tmp',

    './dist',
    config.styles.dest
  ], {
    read: false
  }).pipe($.clean());
});

// /
gulp.task('clean:dist', function () {
  return gulp.src(['./dist'], {
    read: false
  }).pipe($.clean());
});
// /
gulp.task('clean:dist:files', function () {
  return gulp.src(['./dist/*.*'], {
    read: false
  }).pipe($.clean());
});
// /
gulp.task('clean:es6', function () {
  return gulp.src(['./dist/es'], {
    read: false
  }).pipe($.clean());
});

// /
gulp.task('clean:modules', function () {
  return gulp.src(['./dist/umd'], {
    read: false
  }).pipe($.clean());
});

// /copy sass from src to dist
gulp.task('sass:copy', function () {
  return gulp.src(config.styles.src)
    // .pipe($.filelog())
    // .pipe($.sass(sassOptions).on('error', $.sass.logError))
    .pipe($.size())
    // .pipe($.rename(pkg.name + '.css'))
    // .pipe($.filelog())
    .pipe(gulp.dest(`${config.dest}/es/`));
});
gulp.task('sass:copy:modules', function () {
  return gulp.src(config.styles.src)
    //  .pipe($.filelog())
    // .pipe($.sass(sassOptions).on('error', $.sass.logError))
    .pipe($.size())
    // .pipe($.rename(pkg.name + '.css'))
    //  .pipe($.filelog())
    .pipe(gulp.dest(`${config.dest}/es/`));
});

// /
gulp.task('sass', () => (
  gulp.src(config.styles.src)
  .pipe($.sass(sassOptions).on('error', $.sass.logError))
  .pipe($.size())
  .pipe(gulp.dest(config.styles.dest))
));

gulp.task('sass:themes', () => (
  gulp.src([
    'src/components/px/Theme/*.scss'
  ])
  .pipe($.sass(sassOptions).on('error', $.sass.logError))
  .pipe($.size())
  .pipe(gulp.dest('./dist'))
));

gulp.task('sass:theme', function () {
  return gulp.src(config.styles.src)
    .pipe($.filelog('sass'))
    .pipe($.sass(sassOptions).on('error', $.sass.logError))
    .pipe($.size())
    // .pipe($.rename(pkg.name + '.css'))
    .pipe(gulp.dest(config.styles.dest));
});

// /
gulp.task('sass:all', function () {
  return gulp.src(config.styles.src)
    // .pipe($.filelog())
    .pipe($.sass(sassOptions).on('error', $.sass.logError))
    .pipe($.concat(`${pkg.name}.all.css`))
    .pipe($.size())
    // .pipe($.filelog())
    .pipe(gulp.dest(config.styles.dest));
});

// /
gulp.task('autoprefixer', function () {
  return gulp.src(`${config.styles.dest}/**/*.css`)
    //  .pipe($.filelog('autoprefixer'))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe($.rename({
      // suffix: '.prefixed'
    }))
    //  .pipe($.size())
    .pipe(gulp.dest(config.styles.dest));
});

// /
gulp.task('cssmin', gulp.series('sass', function () {
  return gulp.src([
      `${config.dest}/**/*.css`,
      `!${config.dest}/**/*.min.css`
    ])
    .pipe($.sourcemaps.init())

    .pipe($.cssmin())
    .pipe($.sourcemaps.write('.'))
    .pipe($.rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./dist'))
    .pipe($.size());
}));

// /
gulp.task('postcss', function () {
  return gulp.src([
      `${config.styles.dest}/**/*.css`,
      // `./dist/**/*.css`,
      '!./dist/**/*.min.css',
      `./dist/${pkg.name}.css`
    ])
    .pipe(sourcemaps.init())
    .pipe(postcss({
      cssnext: true
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('purifycss', function () {
  return gulp.src([
      'dist/**/*.css',
      '!dist/**/*.min.css'

    ])
    .pipe($.filelog())
    .pipe($.size())
    .pipe(purify([
      './dist/**/*.js',
      './src/**/*.js'
    ], {
      rejected: true,
      info: true,
      minify: true
    }))
    .pipe($.rename({
      suffix: '.min'
    }))
    .pipe($.size())
    .pipe(gulp.dest('./dist/'));
});

// /
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

// /
gulp.task('autoprefixer:watch', function () {
  gulp.watch('./css/**/*.css', ['autoprefixer']);
});

// /
gulp.task('lint', () => gulp.src(['src/**/*.js', '!node_modules/**'])
  .pipe($.eslint())
  .pipe($.eslint.format())
  .pipe($.eslint.failAfterError()));


// /
gulp.task('webpack', () => gulp.src('src/index.js')
  .pipe(gulpWebpack({
    config: require('./webpack.config.js')('distMin')
  }, webpack))
  .pipe($.size())
  .pipe(gulp.dest('dist/')));

// /
gulp.task('babel-es6', () => {
  process.env.BABEL_ENV = 'es6';
  return gulp.src(config.scripts.src)
    //  .pipe($.filelog())
    .pipe(babel({
      plugins: ['transform-class-properties'],
      presets: ['env']
    }))
    .pipe($.size())
    .pipe(gulp.dest('./dist/es'));
});

gulp.task('babel-modules', () => {
  process.env.BABEL_ENV = 'modules';
  return gulp.src(config.scripts.src)
    // .pipe($.filelog())
    .pipe(babel({
      comments: false,
      plugins: ['transform-class-properties'],
      extends: path.resolve(__dirname, '.babelrc')
    }))
    .pipe($.size())
    .pipe(gulp.dest('./dist/umd'));
});

//
gulp.task('compile:demo', () => gulp.src('./demo/**/*.es6.js')
  .pipe($.filelog())
  .pipe(babel({
    comments: false,
    extends: path.resolve(__dirname, '.babelrc')
  }))
  .pipe($.rename({
    suffix: '.min'
  }))
  .pipe($.size())
  .pipe(gulp.dest('./demo')));

//
gulp.task('watch', gulp.series('sass:watch', 'autoprefixer:watch'));

var spawn = require('child_process').spawn;
gulp.task('bower', () => {
  return spawn('bower', ['install', '--force']);
});

// TODO: Handle all the styles for right now
gulp.task('styles', gulp.series(
  //'bower',
  'sass',
  'sass:themes',
  'autoprefixer',
  'cssmin'
));

// TODO: Handle all the scripts for right now
gulp.task('scripts', gulp.series(
  'lint',
  'babel-es6',
  'babel-modules',
  'webpack'
));



gulp.task('dist', gulp.series(
  'clean:dist',
  'styles',
  'scripts'
));

gulp.task('dist:es6', gulp.series('babel-es6', 'sass:copy'));

gulp.task('dist:modules', gulp.series('babel-modules'));
gulp.task('babel', gulp.series('babel-es6', 'babel-modules'));
gulp.task('default', gulp.series('dist'));
