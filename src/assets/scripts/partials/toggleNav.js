export default function toggleNav() {
  const menu = document.querySelector('.menu');

  if (!menu) return;

  const html = document.querySelector('html');
  const nav = document.querySelector('.menu__nav');
  const toggle = document.querySelector('.menu__toggle');

  toggle.addEventListener('click', (e) => {
    e.preventDefault();

    if (nav.ariaExpanded == 'true') {
      console.log('collapse');
      delete html.dataset.state;
      delete menu.dataset.state;
      return (nav.ariaExpanded = false);
    }

    console.log('expanded');
    scroll(0, 0);
    html.dataset.state = 'no-scroll';
    menu.dataset.state = 'expanded';
    return (nav.ariaExpanded = true);
  });
}
