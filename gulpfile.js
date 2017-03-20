var gulp   = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var watch  = require('gulp-watch');
var batch  = require('gulp-batch');

gulp.task('default', function() {
    gulp.src([
        'js/src/app.js',
        'js/src/**/*.js'
    ])
    .pipe(concat('project.min.js'))
    //.pipe(uglify())  //commented for development mode
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
    watch('js/src/**/*.js', batch(function (events, done) {
        gulp.start('default', done);
    }));
});
