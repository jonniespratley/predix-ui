'use strict';
const path = require('path');
const gulp = require('gulp-help')(require('gulp'));
const pkg = require('./package.json');
const $ = require('gulp-load-plugins')();
const gulpSequence = require('gulp-sequence');
const importOnce = require('node-sass-import-once');
const gulpWebpack = require('webpack-stream');
const webpack = require('webpack');
const babel = require('gulp-babel');
const bower = require('gulp-bower');

const sassOptions = {
  //sourceComments: true,
  outputStyle: 'compact',
  importer: importOnce,
  importOnce: {
    index: true,
    bower: true
  }
};

const config = {
  dest: './dist',
  scripts: {
    main: 'src/index.js',
    src: [
      'src/**/*.js',
      '!src/**/*.test.js',
      '!src/**/*.stories.js'
    ]
  },
  styles: {
    dest: './dist/css',
    src: [
      'src/sass/index.scss',
      'src/**/*.scss'
    ]
  }
};


///
gulp.task('sassdoc', function() {
  const sassdocOptions = {
    dest: 'sass-docs',
    verbose: true,
    display: {
      access: ['public', 'private'],
      alias: true,
      watermark: true
    },
    groups: {
      'undefined': 'Ungrouped'
    }
  };
  return gulp.src(config.styles.src).pipe($.sassdoc(sassdocOptions));
});

///
gulp.task('clean', function() {
  return gulp.src([
    '.tmp',

    './dist',
    config.styles.dest
  ], {
    read: false
  }).pipe($.clean());
});

///
gulp.task('clean:dist', function() {
  return gulp.src(['./dist'], {read: false}).pipe($.clean());
});
///
gulp.task('clean:dist:files', function() {
  return gulp.src(['./dist/*.*'], {read: false}).pipe($.clean());
});
///
gulp.task('clean:es6', function() {
  return gulp.src(['./dist/es'], {read: false}).pipe($.clean());
});

///
gulp.task('clean:modules', function() {
  return gulp.src(['./dist/umd'], {read: false}).pipe($.clean());
});

///copy sass from src to dist
gulp.task('sass:copy', 'Copy all .sass/.scss files', function() {
  return gulp.src(config.styles.src)
    //.pipe($.filelog())
    //.pipe($.sass(sassOptions).on('error', $.sass.logError))
    .pipe($.size())
    //.pipe($.rename(pkg.name + '.css'))
    //.pipe($.filelog())
    .pipe(gulp.dest(config.dest + '/es/'));
});
gulp.task('sass:copy:modules', 'Copy all .sass/.scss files', function() {
  return gulp.src(config.styles.src)
  //  .pipe($.filelog())
    //.pipe($.sass(sassOptions).on('error', $.sass.logError))
    .pipe($.size())
    //.pipe($.rename(pkg.name + '.css'))
  //  .pipe($.filelog())
    .pipe(gulp.dest(config.dest + '/es/'));
});

///
gulp.task('sass', 'Compile all .sass/.scss files', function() {
  return gulp.src(config.styles.src)

    .pipe($.sass(sassOptions).on('error', $.sass.logError))
  //  .pipe($.size())
    //.pipe($.rename(pkg.name + '.css'))
  //  .pipe($.filelog('sass'))
    .pipe(gulp.dest(config.styles.dest));
});

///
gulp.task('sass:all', 'Combine all .sass/.scss files', function() {
  return gulp.src(config.styles.src)
    //.pipe($.filelog())
    .pipe($.sass(sassOptions).on('error', $.sass.logError))
    .pipe($.concat(pkg.name + '.all.css'))
    .pipe($.size())
  //  .pipe($.filelog())
    .pipe(gulp.dest(config.styles.dest));
});


///
gulp.task('autoprefixer', function() {
  return gulp.src(`${config.styles.dest}/**/*.css`)
  //  .pipe($.filelog('autoprefixer'))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe($.rename({
      //suffix: '.prefixed'
    }))
  //  .pipe($.size())
    .pipe(gulp.dest(config.styles.dest));
});

///
gulp.task('cssmin', 'Take all css and min with source maps', function() {
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
  //  .pipe($.filelog('cssmin'))

    .pipe(gulp.dest('./dist'))
    .pipe($.size())
    ;
});

///
gulp.task('postcss', 'Run files throught postcss', function () {
    const postcss    = require('gulp-postcss');
    const sourcemaps = require('gulp-sourcemaps');
    return gulp.src([
      `${config.styles.dest}/**/*.css`,
      //`./dist/**/*.css`,
      `!./dist/**/*.min.css`,
      `./dist/${pkg.name}.css`
    ])
    .pipe( sourcemaps.init() )
    .pipe( postcss({
      cssnext: true
    }) )
    .pipe( sourcemaps.write('.') )
    .pipe( gulp.dest('dist/css') );
});

const purify = require('gulp-purifycss');
gulp.task('purifycss', function() {
  return gulp.src([
    `dist/**/*.css`,
    `!dist/**/*.min.css`

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

///
gulp.task('sass:watch', function() {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

///
gulp.task('autoprefixer:watch', function() {
  gulp.watch('./css/**/*.css', ['autoprefixer']);
});

///
gulp.task('lint', 'Lint all source scripts', () => {
  return gulp.src(['./src/**/*.js','!node_modules/**'])
      .pipe($.eslint())
      .pipe($.eslint.format())
      .pipe($.eslint.failAfterError());
});

///
gulp.task('webpack',  'Run webpack build', () => {
  return gulp.src('src/index.js')
    .pipe(gulpWebpack({
      config : require('./webpack.config.js')('distMin')
    }, webpack))
    .pipe($.size())
    .pipe(gulp.dest('dist/'));
});


///
gulp.task('babel-es6', 'Run scripts through babel to es6', () =>{
  process.env.BABEL_ENV = 'es6';
  return gulp.src(config.scripts.src)
  //  .pipe($.filelog())
    .pipe(babel({
      comments: false,
      extends: path.resolve(__dirname, '.babelrc')
    }))
    .pipe($.size())
    .pipe(gulp.dest(`./dist/es`));
});

///
gulp.task('babel-modules', 'Run scripts through babel to modules', () =>{
  process.env.BABEL_ENV = 'modules';
  return gulp.src(config.scripts.src)
  //.pipe($.filelog())
  .pipe(babel({
    comments: false,
    extends: path.resolve(__dirname, '.babelrc')
  }))
  .pipe($.size())
  .pipe(gulp.dest(`./dist/umd`));
});

///
gulp.task('compile:demo', () =>{
  return gulp.src('./demo/**/*.es6.js')
    .pipe($.filelog())
    .pipe(babel({
      comments: false,
      extends: path.resolve(__dirname, '.babelrc')
    }))
    .pipe($.rename({
      suffix: '.min'
    }))
    .pipe($.size())
    .pipe(gulp.dest(`./demo`));
});
gulp.task('watch', ['sass:watch', 'autoprefixer:watch']);


// TODO: Handle all the styles for right now
gulp.task('styles', gulpSequence(
  'bower',
  'sass',
  'postcss',
  'cssmin'
));

// TODO: Handle all the scripts for right now
gulp.task('scripts', gulpSequence(
  'lint',
  ['babel-es6', 'babel-modules'],
  'webpack'
));


gulp.task('bower', () => {
  return bower();
});

gulp.task('dist', 'Lint, build ES6 and modules.', gulpSequence(
  'clean:dist',
  'styles',
  'scripts'
));

gulp.task('dist:es6', gulpSequence('babel-es6'));
gulp.task('dist:modules', gulpSequence('babel-modules'));
gulp.task('default', gulpSequence('dist'));
