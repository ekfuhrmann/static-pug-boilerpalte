// Reserved for scripts
const main = () => {
  // scripts to run after content loads

  // TODO: store in its own comp
  const btn = document.querySelector('.button');
  const root = document.documentElement;

  btn.addEventListener('click', () => {
    if (root.dataset.theme === 'light') {
      root.dataset.theme = 'dark';
      localStorage.setItem('theme', 'dark');
    } else {
      root.dataset.theme = 'light';
      localStorage.setItem('theme', 'light');
    }
  });
};

document.addEventListener('DOMContentLoaded', main);
