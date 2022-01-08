import { src, dest } from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import postcss from 'gulp-postcss';
import notify from 'gulp-notify';
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';
import gulpif from 'gulp-if';
import cleanCss from 'gulp-clean-css';
import autoprefixer from 'autoprefixer';
import postcssIncludeMedia from 'postcss-include-media';
import postcssNested from 'postcss-nested';
import yargs from 'yargs';

const sass = gulpSass(dartSass);

// Check for --prod or --production flag
const PRODUCTION = yargs.argv.prod;

const styles = () => {
  return src('src/scss/main.scss')
    .pipe(
      plumber({
        errorHandler: notify.onError({
          title: 'Gulp Styles Error',
          message: 'Error: <%= error.message %>',
        }),
      })
    )
    .pipe(gulpif(!PRODUCTION, sourcemaps.init()))
    .pipe(sass({ includePaths: ['node_modules/'] }).on('error', sass.logError))
    .pipe(
      postcss([
        postcssNested(),
        postcssIncludeMedia({
          ruleName: 'mq',
          breakpoints: {
            xs: '320px',
            sm: '550px',
            md: '768px',
            lg: '1024px',
            xl: '1440px',
          },
        }),
        autoprefixer(),
      ])
    )
    .pipe(gulpif(PRODUCTION, cleanCss({ compatibility: '*' })))
    .pipe(gulpif(!PRODUCTION, sourcemaps.write()))
    .pipe(rename({ basename: 'styles' }))
    .pipe(dest('dist/assets/css'));
};

export default styles;
