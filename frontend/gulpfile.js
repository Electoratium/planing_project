// export PATH=./node_modules/.bin:$PATH

const gulp = require('gulp'),
    cached = require('gulp-cached'),
    sass = require('gulp-sass'),
    cleanCss = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    jsMin = require('gulp-jsmin'),
    babel = require('gulp-babel'),
    newer = require('gulp-newer'),
    path = require('path'),
    del = require('del'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload;


const assetsPath = `${__dirname}/static/static_dev`,
   buildPath = `${__dirname}/static/static_compile`,
    templatesPath = `${__dirname}/templates`;


gulp.task('html:reload', () => {
    return gulp.src(`${templatesPath}/*.html`)
        .pipe(cached())
        .pipe(reload({
            stream: true
        }));
});

gulp.task('styles', () => {
    return gulp.src(`${assetsPath}/css/*.sass`)
        .pipe(cached()) //запоминает содержимое и имя файла (since просто смотрит на дату модификации)
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCss())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(`${buildPath}/css`))
        .pipe(reload({stream: true}));
});


gulp.task('scripts', () => {
    return gulp.src(`${assetsPath}/js/*.js`, {since: gulp.lastRun('scripts')})
        .pipe(cached())
        .pipe(babel())
        .pipe(jsMin())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(`${buildPath}/js`))
        .pipe(reload({stream: true}));

});

gulp.task('assets', () => {
   return gulp.src([`${assetsPath}/**/*.*`, `!${assetsPath}/{css,css/**,js,js/**}`],
       {since: gulp.lastRun('assets'), allowEmpty: true})
       .pipe(newer(buildPath))
       .pipe(gulp.dest(buildPath))
       .on('end', reload)
});

gulp.task('serve', () => {
    browserSync.init({
        notify: false,
        port: 8000,
        proxy: "localhost:8000"
    });
});



gulp.task('watch', function () {
    gulp.watch(`${assetsPath}/css/*.sass`, gulp.series('styles') )
        .on('unlink', fileName => deleteStaticFile(fileName, '.min.css'));

    gulp.watch(`${assetsPath}/js/*.js`, gulp.series('scripts') )
        .on('unlink', fileName => deleteStaticFile(fileName, '.min.js'));

    gulp.watch([`${assetsPath}/**/*.*`, `!${assetsPath}/{css,css/**,js,js/**}`], gulp.series('assets') )
        .on('unlinkDir', folderName => deleteElement(folderName))
        .on('unlink', filepath => deleteElement(filepath));

    gulp.watch(`${templatesPath}`, gulp.series('html:reload'));

    function deleteStaticFile(fileName, new_suffix) {
        let folderName = 'css',
            oldSuffix = path.extname(fileName);
        if(new_suffix === '.min.js') {
            folderName = 'js';
        }

        let newFileName = `${path.basename(fileName, oldSuffix)}${new_suffix}`,
            buildPathFolder = path.join(buildPath, folderName, newFileName);

        del(buildPathFolder);
    }

    function deleteElement(elementName) {
        let relativePath = path.relative(assetsPath, elementName),
            buildPathFolder = path.resolve(buildPath, relativePath);

        del.sync(buildPathFolder);
    }
});


gulp.task('default', gulp.series(gulp.parallel('styles', 'scripts', 'assets'), gulp.parallel('serve', 'watch')));




// packega.json
//  "devDependencies": {
//    "babel-core": "^6.26.3",
//    "babel-preset-es2015": "^6.24.1",
//    "browser-sync": "^2.24.6",
//    "del": "^3.0.0",
//    "gulp": "github:gulpjs/gulp#4.0",
//    "gulp-autoprefixer": "^5.0.0",
//    "gulp-babel": "^7.0.1",
//    "gulp-cached": "^1.1.1",
//    "gulp-clean-css": "^3.9.4",
//    "gulp-eslint": "^5.0.0",
//    "gulp-jsmin": "^0.1.5",
//    "gulp-newer": "^1.4.0",
//    "gulp-rename": "^1.3.0",
//    "gulp-sass": "^4.0.1",
//    "path": "^0.12.7"
//  },
//  "babel": {
//    "presets": [
//      "es2015"
//    ]
//  }
//}