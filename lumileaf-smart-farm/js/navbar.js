/**
 * Ươm Xanh Smart Farm - Navbar Module
 */
export function initNavbar() {
  const header = document.querySelector('.header');
  const toggle = document.querySelector('.nav__toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileLinks = document.querySelectorAll('.mobile-nav__link');
  const overlay = document.querySelector('.mobile-nav__overlay');

  if (!header) return;

  const onScroll = () => {
    if (!header.classList.contains('header--overlay')) return;
    header.classList.toggle('is-scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Active link
  const pathParts = window.location.pathname.split('/').filter(Boolean);
  const currentFile = pathParts.pop() || 'index.html';
  const inPages = pathParts.includes('pages');

  document.querySelectorAll('.nav__link, .mobile-nav__link').forEach(link => {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#')) return;

    const linkFile = href.split('/').pop();
    const isHome = !inPages && (currentFile === 'index.html' || currentFile === '');
    const isHomeLink = linkFile === 'index.html' && !href.includes('pages/');

    if (linkFile === currentFile || (isHome && isHomeLink)) {
      link.classList.add('is-active');
    }
  });

  // Mobile menu
  const openMenu = () => {
    toggle?.classList.add('is-active');
    mobileNav?.classList.add('is-open');
    mobileNav?.setAttribute('aria-hidden', 'false');
    document.body.classList.add('menu-open');
    toggle?.setAttribute('aria-expanded', 'true');
  };

  const closeMenu = () => {
    toggle?.classList.remove('is-active');
    mobileNav?.classList.remove('is-open');
    mobileNav?.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('menu-open');
    toggle?.setAttribute('aria-expanded', 'false');
  };

  toggle?.addEventListener('click', () => {
    mobileNav?.classList.contains('is-open') ? closeMenu() : openMenu();
  });

  overlay?.addEventListener('click', closeMenu);
  mobileLinks.forEach(link => link.addEventListener('click', closeMenu));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav?.classList.contains('is-open')) {
      closeMenu();
    }
  });
}
