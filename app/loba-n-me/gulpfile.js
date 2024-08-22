/**
 * [gulp description]
 * @file
 * @author Yangholmes
 */
const gulp = require('gulp');
const less = require('gulp-less');
const babel = require('gulp-babel');

// 默认服务
gulp.task('default', ['goLess', 'goBabel'], function () {
    gulp.watch('assets/style/less/*.less', ['goLess']); // 当所有less文件发生改变时，调用goLess任务
    gulp.watch('assets/js/dev/*.js', ['goBabel']); // 当所有less文件发生改变时，调用goLess任务
});

// less服务
gulp.task('goLess', () => {
    gulp.src('assets/style/less/*.less')
        .pipe(less({
            compress: true // 不使用其他工具，启用压缩
        }))
        // .pipe(cssmin()) // 兼容IE7及以下需设置compatibility属性 .pipe(cssmin({compatibility: 'ie7'}))
        .pipe(gulp.dest('assets/style/css'));
});

// Babel服务
gulp.task('goBabel', () =>
    gulp.src('assets/js/dev/*.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest('assets/js/prod'))
);
