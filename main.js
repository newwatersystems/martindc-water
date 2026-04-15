// Martin DC — shared nav behavior
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('mainNav');
  const ham = document.getElementById('hamburger');
  const mob = document.getElementById('mobMenu');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  });

  ham.addEventListener('click', () => mob.classList.toggle('open'));

  document.addEventListener('click', (e) => {
    if (!mob.contains(e.target) && !ham.contains(e.target)) {
      mob.classList.remove('open');
    }
  });
});
