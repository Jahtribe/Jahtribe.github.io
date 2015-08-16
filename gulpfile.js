var gulp = require ("gulp");
var less = require ("gulp-less");
var browserSync = require ("browser-sync");

gulp.task('css', function () {
    gulp.src('./src/less/**/*.less')
        .pipe(less())
        .pipe(gulp.dest("./build/css"))
        .pipe(browserSync.reload({
           stream: true
       }));
});

gulp.task('html', function () {
    gulp.src('./src/**/*.html')
        .pipe(gulp.dest('./build/'))
        .pipe(browserSync.reload({
           stream: true
       }));
});

gulp.task('server', function () {
    browserSync.init({
        server: './build'
    });

    gulp.watch('./src/**/*.html', ['html']);
    gulp.watch('./src/**/*.less', ['css']);
});

gulp.task('default', ['server', 'html', 'css']);
