/**
 * [gulp description]
 * @file
 * @author Yangholmes
 */
const gulp = require('gulp');
const less = require('gulp-less');

// 默认服务
gulp.task('default', ['less'], function () {
    gulp.watch('*.less', ['less']); // 当所有less文件发生改变时，调用goLess任务
});

// less服务
gulp.task('less', () => {
    gulp.src('*.less')
        .pipe(less({
            compress: true
        }))
        .pipe(gulp.dest(''));
});
