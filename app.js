// script.js

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-menu');
  const hamburger = document.getElementById('hamburger');

  toggle.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    hamburger.classList.toggle('rotate-90'); // Just for a cool rotate effect on icon
  });
});
