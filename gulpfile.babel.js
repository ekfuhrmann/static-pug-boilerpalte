import { watch, series, parallel } from 'gulp';

import scripts from './gulp/tasks/scripts';
import styles from './gulp/tasks/styles';
import pug from './gulp/tasks/pug';
import images from './gulp/tasks/images';
import clean from './gulp/tasks/clean';
import assets from './gulp/tasks/assets';
import { svgInline, svgStandalone, svg } from './gulp/tasks/svg';
import { browserSync, reload } from './gulp/tasks/server';

const tasks = parallel(pug, svg, scripts, styles, images, assets);

const watchForChanges = () => {
  watch('src/assets/svg/inline/**/*', series(svgInline, reload));
  watch('src/assets/svg/standalone/**/*', series(svgStandalone, reload));
  watch('src/assets/scripts/**/*.js', series(scripts, reload));
  watch('src/assets/styles/**/*.scss', series(styles, reload));
  watch('src/views/**/*', series(pug, reload));
  watch('src/assets/images/**/*', series(images, reload));
  watch(
    'src/assets/!([images, scripts, styles, svg])**/*',
    series(assets, reload)
  );
};

const dev = series(clean, tasks, browserSync, watchForChanges);

export const build = series(clean, tasks);

export default dev;
