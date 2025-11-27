/* scripts.js - small helper for active nav */
document.addEventListener('DOMContentLoaded', () => {
  // mark active nav link
  const links = document.querySelectorAll('.nav a');
  links.forEach(a => {
    if (a.href === location.href || location.href.includes(a.getAttribute('data-path'))) {
      a.classList.add('active');
    }
  });
});
