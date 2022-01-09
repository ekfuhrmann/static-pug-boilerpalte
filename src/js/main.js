// Reserved for scripts
const main = () => {
  // scripts to run after content load
  const btn = document.querySelector('.button');

  btn.addEventListener('click', () => {
    const root = document.documentElement;

    root.dataset.theme === 'light'
      ? (root.dataset.theme = 'dark')
      : (root.dataset.theme = 'light');
  });
};

document.addEventListener('DOMContentLoaded', main);
