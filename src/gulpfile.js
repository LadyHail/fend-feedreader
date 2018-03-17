var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('default', function(){
    return gulp.src('jasmine/spec/*.js')
        .pipe(watch('jasmine/spec/*.js'))
        .pipe(gulp.dest('../dist/jasmine/spec'));
});
