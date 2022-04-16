import toggleNav from './partials/toggleNav';
import toggleTheme from './partials/toggleTheme';

const main = () => {
  toggleNav(); // handles mobile nav
  toggleTheme(); // handles theme
};

document.addEventListener('DOMContentLoaded', main);
