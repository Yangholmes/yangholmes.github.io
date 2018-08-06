const gulp = require('gulp');
const stylus = require('gulp-stylus');

gulp.task('default', () => {
  // 将你的默认的任务代码放在这
});

gulp.task('stylus',  () => {
    return gulp.src('./assets/style/stylus/*')
        .pipe(stylus())
        .pipe(gulp.dest('./assets/style/css/'));
});
