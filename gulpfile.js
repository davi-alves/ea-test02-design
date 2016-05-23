var gulp = require('gulp')
var browserSync = require('browser-sync').create()

gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: './'
    }
  })
})

gulp.task('default', [ 'browser-sync' ], function () {
  gulp.watch('css/style.css').on('change', browserSync.reload)
  gulp.watch('js/main.js').on('change', browserSync.reload)
  gulp.watch(['index.html', 'blog.html', 'contact.html']).on('change', browserSync.reload)
})
