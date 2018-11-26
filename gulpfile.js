/*
* Dependencias
*/
var exec = require('child_process').exec
var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify');

  

/*
* Configuración de la tarea 'demo'
*/
var gulp = require('gulp');


gulp.task('compilar angular', function(cb) {
  
    exec('run.bat',{ maxBuffer: 500 * 1024 }, function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
      });

  
 
});

gulp.task('limpiar carpeta destino', function(cb) {
    exec('limpiar.bat',{ maxBuffer: 500 * 1024 }, function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
      });

//   gulp.src(['C:/GIT/portal del socio/dist/**/*']).pipe(gulp.dest('C:/prueba'));
});

gulp.task('copiar dist', function(cb) {
    exec('run2.bat',{ maxBuffer: 500 * 1024 }, function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
      });

//   gulp.src(['C:/GIT/portal del socio/dist/**/*']).pipe(gulp.dest('C:/prueba'));
});
gulp.task('compilar java', function(cb) {
    exec('run3.bat',{ maxBuffer: 500 * 1024 }, function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
      });
  });
  gulp.task('4', function(done) {
    // do things
    done();
  });

gulp.task('all', gulp.series('limpiar carpeta destino','compilar angular',  'copiar dist', 'compilar java', '4'));
gulp.task('java', gulp.series( 'compilar java', '4'));