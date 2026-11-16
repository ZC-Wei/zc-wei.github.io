const menu = document.querySelector('.menu-button');
const nav = document.querySelector('#site-nav');
const compact = window.matchMedia('(max-width: 980px)');

function setMenu(open) {
  menu.setAttribute('aria-expanded', String(open));
  menu.textContent = open ? 'Close' : 'Menu';
  nav.hidden = compact.matches && !open;
}

function resetMenu() {
  menu.hidden = !compact.matches;
  setMenu(false);
}

menu.addEventListener('click', () => setMenu(menu.getAttribute('aria-expanded') !== 'true'));
nav.addEventListener('click', (event) => {
  if (compact.matches && event.target.closest('a')) setMenu(false);
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    menu.focus();
  }
});
compact.addEventListener('change', resetMenu);
resetMenu();
