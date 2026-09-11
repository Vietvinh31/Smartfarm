/**
 * Ươm Xanh Smart Farm - Main Entry
 */
import { initNavbar } from './navbar.js';
import { initAnimations, initSmartFarmDemo, initVideoPlayer, initVideoModal, initFarmSteps, initHeroVideo, initGalleryLightbox } from './animations.js';
import { initProducts } from './products.js';
import { initContactForm } from './contact.js';
import { initMotionIllustrations, initBrandFilm } from './multimedia.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initAnimations();
  initSmartFarmDemo();
  initVideoPlayer();
  initVideoModal();
  initFarmSteps();
  initHeroVideo();
  initGalleryLightbox();
  initProducts();
  initContactForm();
  initMotionIllustrations();
  initBrandFilm();

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
