// Importações em variáveis
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const sourcemaps = require('gulp-sourcemaps');

// Compilar o SASS
function compileSass() {
  return gulp.src('./source/styles/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({style: 'compressed'}))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./build/styles'));
}

// Comprimir o JavaScript
function compressJavascript() {
  return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts'));
}

// Comprimir as imagens
function compressImage() {
  return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'));
}

// Observar o processo
function watchFiles() {
  gulp.watch('./source/styles/*.scss', compileSass);
  gulp.watch('./source/scripts/*.js', compressJavascript);
  gulp.watch('./source/images/*', compressImage);
}

// Exportações e padrão
exports.sass = compileSass;
exports.js = compressJavascript;
exports.img = compressImage;
exports.watch = watchFiles;
exports.default = gulp.parallel(compileSass, compressJavascript, compressImage);
