export default function toggleTheme() {
  const toggle = document.querySelector('.menu__theme-toggle');
  const root = document.documentElement;

  toggle.addEventListener('click', (e) => {
    e.currentTarget.blur();

    // We don't have a transition on body bg color
    // by default in order to prevent a flicker when
    // theme is set on startup. Should user opt to
    // change theme manually, we set a transition on
    // the bg so it changes with the rest of the page.
    document.body.style.transition =
      'background-color var(--site-theme-transition)';

    // Set theme opposite of current value and update
    // users localStorage to reflect that
    if (root.dataset.theme === 'light') {
      root.dataset.theme = 'dark';
      localStorage.setItem('theme', 'dark');
    } else {
      root.dataset.theme = 'light';
      localStorage.setItem('theme', 'light');
    }
  });
}
