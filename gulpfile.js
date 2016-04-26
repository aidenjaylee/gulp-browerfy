var gulp = require('gulp'),
  browserSync = require('browser-sync');

var reload = browserSync.reload;


gulp.task('default', []);

gulp.task('serve', [], function () {

   var files = [
      '*/**/*.html'
   ];

   browserSync.init(files, {
      server: {
        baseDir: ['./']
      }
   });


});


gulp.task('watch', function () {

});
