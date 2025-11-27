/* scripts.js - small helper for active nav and smooth scroll */
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.nav a');
  links.forEach(a => {
    try{
      if (a.href === location.href || location.href.includes(a.getAttribute('data-path'))) {
        a.classList.add('active');
      }
    }catch(e){}
  });
});
