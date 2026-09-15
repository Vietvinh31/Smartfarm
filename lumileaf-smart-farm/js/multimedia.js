/** Lightweight motion controls; all visual content remains visible without JS. */
export function initMotionIllustrations() {
  document.querySelectorAll('[data-motion]').forEach(figure => {
    const button = figure.querySelector('[data-motion-toggle]');
    if (!button) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    let paused = false;
    const update = () => {
      figure.classList.toggle('is-paused', paused);
      figure.classList.toggle('motion-ready', !reduced.matches);
      button.hidden = reduced.matches;
      button.textContent = paused ? 'Phát chuyển động' : 'Tạm dừng chuyển động';
      button.setAttribute('aria-label', button.textContent);
      button.setAttribute('aria-pressed', String(!paused && !reduced.matches));
    };
    // Begin only once the observer has established visibility.
    figure.classList.add('is-offscreen');
    button.addEventListener('click', () => { paused = !paused; update(); });
    reduced.addEventListener('change', update);
    update();
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(entries => {
        figure.classList.toggle('is-offscreen', !entries[0].isIntersecting);
      }, { threshold: 0 });
      observer.observe(figure);
    } else {
      figure.classList.remove('is-offscreen');
    }
  });
}

export function initBrandFilm() {
  const video = document.querySelector('#brand-video');
  if (!video) return;
  const error = document.querySelector('#film-error');
  const showError = () => {
    error.hidden = false;
  };
  video.addEventListener('error', showError);
  video.querySelector('source')?.addEventListener('error', showError);
}
