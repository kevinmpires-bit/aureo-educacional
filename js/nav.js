(function () {
  var burger = document.querySelector('.nav__burger');
  var mobileMenu = document.querySelector('.nav__mobile');

  if (!burger || !mobileMenu) return;

  burger.addEventListener('click', function () {
    if (mobileMenu.classList.contains('open')) {
      close();
    } else {
      open();
    }
  });

  function open() {
    mobileMenu.classList.add('open');
    burger.classList.add('open');
    document.body.style.overflow = 'hidden';
    burger.setAttribute('aria-expanded', 'true');
  }

  function close() {
    mobileMenu.classList.remove('open');
    burger.classList.remove('open');
    document.body.style.overflow = '';
    burger.setAttribute('aria-expanded', 'false');
  }

  var mobileLinks = mobileMenu.querySelectorAll('a');
  mobileLinks.forEach(function (link) {
    link.addEventListener('click', close);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });

  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  var navLinks = document.querySelectorAll('.nav__link');
  navLinks.forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === currentPage || href === currentPage.replace('.html', '')) {
      link.classList.add('active');
    }
  });
})();