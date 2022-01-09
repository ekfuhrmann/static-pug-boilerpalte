import { src, dest } from 'gulp';
import notify from 'gulp-notify';
import plumber from 'gulp-plumber';

const assets = () => {
  return src(['src/assets/!([images, scripts, styles, svg])**/*'])
    .pipe(
      plumber({
        errorHandler: notify.onError({
          title: 'Gulp Assets Error',
          message: 'Error: <%= error.message %>',
          sound: false,
        }),
      })
    )
    .pipe(dest(`dist/assets/`));
};

export default assets;
