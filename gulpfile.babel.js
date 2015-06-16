'use strict';

import gulp from 'gulp';
import rename from 'gulp-rename';
import bump from 'gulp-bump';
import gutil from 'gulp-util';
import uglify from 'gulp-uglify';
import sourcemaps from 'gulp-sourcemaps';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import browserify from 'browserify';
import babelify from 'babelify';
import del from 'del';
import path from 'path';

let src = './src.js';
let minext = '.min';
let pack = require('./package.json');

// clean up
function clean(done) {
  let d = path.dirname(pack.main);
  let e = path.extname(pack.main);
  let b = path.basename(pack.main);
  let n = b.replace(e, '');
  let mapf = path.join(d, b + '.map');
  let minf = path.join(d, n + minext + e);

  del([pack.main, mapf, minf, '*.log'], done);
}

// umd standalone library with sourcemaps
function umd() {
  let bundler = browserify(src, { debug: true, standalone: 'luhn' })
    .transform(babelify) // .configure({ optional: ['runtime'] })
    .bundle();

  return bundler
    .pipe(source(pack.main)) // gives streaming vinyl file object
    .pipe(buffer()) // convert from streaming to buffered vinyl file object
    .pipe(sourcemaps.init({ loadMaps: true })) // loads map from browserify file
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./'));
}

// minified umd standalone library
function min() {
  return gulp.src(pack.main)
    .pipe(uglify())
    .on('error', gutil.log)
    .pipe(rename({ extname: minext + '.js' }))
    .pipe(gulp.dest('./'));
}

function bumpall() {
  return gulp.src(['./package.json', './bower.json'])
      .pipe(bump({ type: 'patch' }))
      .pipe(gulp.dest('./'));
}

let development = gulp.series(clean, umd);
let production = gulp.series(development, min);

gulp.task('bump', bumpall);
gulp.task('clean', clean);
gulp.task('development', development);
gulp.task('production', production);
gulp.task('default', production);
