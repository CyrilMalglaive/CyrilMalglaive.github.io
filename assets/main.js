const button = document.querySelector('[data-menu-button]');
const navigation = document.querySelector('[data-menu]');

if (button && navigation) {
  button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!open));
    navigation.toggleAttribute('data-open', !open);
  });
}

document.querySelectorAll('[data-year]').forEach((node) => {
  node.textContent = String(new Date().getFullYear());
});
