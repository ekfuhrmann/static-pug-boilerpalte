// Reserved for scripts
const main = () => {
  // scripts to run after content load
  const btn = document.querySelector('.button');

  const isDark = window.matchMedia('(prefers-color-scheme: dark)');

  const root = document.documentElement;

  console.log(localStorage);

  if (localStorage.getItem('theme')) {
    root.dataset.theme = localStorage.getItem('theme');
  } else if (isDark.matched) {
    root.dataset.theme = 'dark';
    localStorage.setItem('theme', 'dark');
  } else {
    root.dataset.theme = 'light';
    localStorage.setItem('theme', 'light');
  }

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
