const gulp = require('gulp');
const mocha = require('gulp-mocha');
const eslint = require('gulp-eslint');


gulp.task('testMocha', () => {
  return gulp.src('test/**/*_test.js')
    .pipe(mocha({
    reporter: 'spec'
  }));
});

gulp.task('testEslint:non-testFile', () => {
  return gulp.src(['./test/**/*test.js'])
  .pipe(eslint({
    'node': true,
    'es6': true
      }
  ))
  .pipe(eslint.format())
  .pipe(eslint.failOnError());
});

gulp.task('testEslint:non-testFile', () => {
  return gulp.src(['index.js', 'lib/**/*.js', 'gulpfile.js'])
  .pipe(eslint({
    'env': {
      'node': true,
      'es6': true
    }
  }
))
.pipe(eslint.format())
.pipe(eslint.failOnError());
});

gulp.task('test', ['testEslint:non-testFile', 'testEslint:testFile', 'testMocha']);
