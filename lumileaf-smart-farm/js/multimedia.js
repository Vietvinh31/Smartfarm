/** Lightweight motion controls; all visual content remains visible without JS. */
export function initMotionIllustrations() {
  document.querySelectorAll('[data-motion]').forEach(figure => {
    const button = figure.querySelector('[data-motion-toggle]');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    let paused = reduced.matches;
    const update = () => {
      figure.classList.toggle('is-paused', paused);
      button.textContent = paused ? 'Phát chuyển động' : 'Tạm dừng chuyển động';
      button.setAttribute('aria-pressed', String(!paused));
    };
    button.hidden = reduced.matches;
    button.addEventListener('click', () => { paused = !paused; update(); });
    reduced.addEventListener('change', () => { paused = reduced.matches; button.hidden = reduced.matches; update(); });
    update();
    const observer = new IntersectionObserver(entries => {
      figure.classList.toggle('is-offscreen', !entries[0].isIntersecting);
    });
    observer.observe(figure);
  });
}

export function initBrandFilm() {
  const video = document.querySelector('#brand-video');
  if (!video) return;
  const status = document.querySelector('#film-status');
  const error = document.querySelector('#film-error');
  video.addEventListener('loadedmetadata', () => {
    if (Number.isFinite(video.duration)) {
      status.textContent = `${Math.round(video.duration)} giây · Nhạc nền · Phụ đề tiếng Việt`;
    }
  });
  const showError = () => {
    error.hidden = false;
    status.textContent = 'Video tạm thời không tải được';
  };
  video.addEventListener('error', showError);
  video.querySelector('source')?.addEventListener('error', showError);
}
