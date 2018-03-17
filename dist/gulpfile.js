var gulp = require('gulp');

gulp.task('default', function(){
    gulp.watch('jasmine/spec/**/*.js', ['copy-spec']);
});

gulp.task('copy-spec', function(){
    gulp.src('jasmine/spec/**/*.js')
        .pipe(gulp.dest('dist/jasmine/spec'));
});
