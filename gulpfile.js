var gulp = require('gulp');
var Server = require('karma').Server;
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var watchify = require('watchify');
var babel = require('babelify');

browserify().external('react/addons')
browserify().external('react/lib/ReactContext')
browserify().external('react/lib/ReactExecutionEnvironment')

function compileOnce(){
   var bundler = browserify({ entries: ['./src/index.js'],debug: true }).transform(babel,{presets: ["es2015", "react"]});
   function rebundle() {
    bundler.bundle()
      .on('error', function(err) { console.error(err); this.emit('end'); })
      .pipe(source('build.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./build'));
  }
  rebundle();
}
function compile(watch) {
  var bundler;
   if(watch){
     bundler = watchify(browserify({ entries: ['./src/index.js'],debug: true }).transform(babel,{presets: ["es2015", "react"]}));
   }
   else{
    bundler = browserify({ entries: ['./src/index.js'],debug: true }).transform(babel,{presets: ["es2015", "react"]});
  }
  function rebundle() {
    bundler.bundle()
      .on('error', function(err) { console.error(err); this.emit('end'); })
      .pipe(source('build.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./build'));
  }

   if (watch) {
     bundler.on('update', function() {
       console.log('-> bundling...');
       rebundle();
     });
   }

  rebundle();
}

function watch() {
  return compile(true);
};

gulp.task('build', function() { return compileOnce(); });
gulp.task('watch', function() { return watch(); });

gulp.task('default', ['build']);
gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    autoWatch: true,
    singleRun: false
  }, done).start();
});
