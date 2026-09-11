/**
 * Ươm Xanh Smart Farm - Animations Module
 */
export function initAnimations() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length && !prefersReduced) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach(el => revealObserver.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  // Counter animation
  initCounters(prefersReduced);

  // Journey timeline
  initJourneyTimeline();

  // Progress bars in dashboard
  initProgressBars();

  // Testimonial slider
  initTestimonialSlider();
}

function initCounters(prefersReduced) {
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length) return;

  const animateCounter = (el) => {
    const target = parseFloat(el.dataset.counter);
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    const decimals = parseInt(el.dataset.decimals || '0', 10);
    const duration = prefersReduced ? 0 : 2000;
    const start = performance.now();

    const update = (now) => {
      const progress = duration === 0 ? 1 : Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = (target * eased).toFixed(decimals);
      el.textContent = `${prefix}${value}${suffix}`;
      if (progress < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  };

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );
  counters.forEach(el => counterObserver.observe(el));
}

function initJourneyTimeline() {
  const steps = document.querySelectorAll('.journey-step, .journey-vertical__item');
  const progress = document.querySelector('.journey-timeline__progress');
  if (!steps.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-active');
        }
      });

      if (progress) {
        const activeCount = document.querySelectorAll('.journey-step.is-active').length;
        const total = steps.length;
        progress.style.width = `${((activeCount - 1) / (total - 1)) * 90}%`;
      }
    },
    { threshold: 0.6 }
  );
  steps.forEach(step => observer.observe(step));
}

function initProgressBars() {
  const bars = document.querySelectorAll('.metric-card__bar-fill');
  if (!bars.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const width = el.dataset.width || '70';
          el.style.width = `${width}%`;
          el.classList.add('is-animated');
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.3 }
  );
  bars.forEach(bar => observer.observe(bar));
}

function initTestimonialSlider() {
  const track = document.querySelector('.testimonial-track');
  const slides = document.querySelectorAll('.testimonial-slide');
  const prevBtn = document.querySelector('.testimonial-prev');
  const nextBtn = document.querySelector('.testimonial-next');
  const dots = document.querySelectorAll('.testimonial-dots button');
  if (!track || !slides.length) return;

  let current = 0;
  let autoplay;

  const goTo = (index) => {
    current = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((dot, i) => dot.classList.toggle('is-active', i === current));
  };

  prevBtn?.addEventListener('click', () => goTo(current - 1));
  nextBtn?.addEventListener('click', () => goTo(current + 1));
  dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)));

  const startAutoplay = () => {
    autoplay = setInterval(() => goTo(current + 1), 6000);
  };
  const stopAutoplay = () => clearInterval(autoplay);

  startAutoplay();
  track.closest('.testimonial-slider')?.addEventListener('mouseenter', stopAutoplay);
  track.closest('.testimonial-slider')?.addEventListener('mouseleave', startAutoplay);
}

/**
 * Hero video — show poster fallback when MP4 is missing
 */
export function initHeroVideo() {
  const video = document.querySelector('.hero__video');
  if (!video) return;

  const markReady = () => video.classList.add('is-ready');

  video.addEventListener('loadeddata', markReady);
  video.addEventListener('canplay', markReady);

  video.addEventListener('error', () => {
    video.classList.remove('is-ready');
  });

  // If source missing, browser fires error — poster img stays visible
  if (video.readyState >= 2) markReady();
}

/**
 * Gallery lightbox
 */
export function initGalleryLightbox() {
  const items = document.querySelectorAll('.gallery-item');
  if (!items.length) return;

  let lightbox = document.querySelector('.lightbox');
  if (!lightbox) {
    lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.setAttribute('aria-hidden', 'true');
    lightbox.innerHTML = `
      <div class="lightbox__overlay"></div>
      <div class="lightbox__content">
        <button class="lightbox__close" aria-label="Đóng"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="24" height="24"><path d="M18 6L6 18M6 6l12 12"/></svg></button>
        <img alt="">
        <p class="lightbox__caption"></p>
      </div>
    `;
    document.body.appendChild(lightbox);
  }

  const img = lightbox.querySelector('img');
  const caption = lightbox.querySelector('.lightbox__caption');
  const close = () => {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('menu-open');
  };

  items.forEach(item => {
    item.setAttribute('tabindex', '0');
    item.setAttribute('role', 'button');
    const open = () => {
      const source = item.querySelector('img');
      if (!source) return;
      img.src = source.src;
      img.alt = source.alt;
      caption.textContent = source.alt;
      lightbox.classList.add('is-open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.classList.add('menu-open');
    };
    item.addEventListener('click', open);
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        open();
      }
    });
  });

  lightbox.querySelector('.lightbox__overlay')?.addEventListener('click', close);
  lightbox.querySelector('.lightbox__close')?.addEventListener('click', close);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('is-open')) close();
  });
}

/**
 * Smart Farm live data simulation
 */
export function initSmartFarmDemo() {
  const metrics = document.querySelectorAll('[data-metric]');
  if (!metrics.length) return;

  setInterval(() => {
    metrics.forEach(el => {
      const base = parseFloat(el.dataset.base);
      const variance = parseFloat(el.dataset.variance || '0.3');
      const unit = el.dataset.unit || '';
      const decimals = parseInt(el.dataset.decimals || '1', 10);
      const value = base + (Math.random() - 0.5) * variance * 2;
      el.textContent = `${value.toFixed(decimals)}${unit}`;
    });
  }, 3000);
}

/**
 * Video player custom controls
 */
export function initVideoPlayer() {
  const wrap = document.querySelector('.video-player-wrap');
  if (!wrap) return;

  const video = wrap.querySelector('video');
  const playBtn = wrap.querySelector('.video-play');
  const subtitleBtn = wrap.querySelector('.video-controls__subtitle-toggle');
  const progressBar = wrap.querySelector('.video-controls__progress');
  const progressFill = wrap.querySelector('.video-controls__progress-fill');
  const timeDisplay = wrap.querySelector('.video-controls__time');

  if (!video) return;

  const formatTime = (s) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, '0')}`;
  };

  playBtn?.addEventListener('click', () => {
    video.paused ? video.play() : video.pause();
  });

  video.addEventListener('play', () => {
    playBtn?.setAttribute('aria-label', 'Tạm dừng');
    playBtn && (playBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>');
  });

  video.addEventListener('pause', () => {
    playBtn?.setAttribute('aria-label', 'Phát');
    playBtn && (playBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><polygon points="8,5 19,12 8,19"/></svg>');
  });

  video.addEventListener('timeupdate', () => {
    if (progressFill && video.duration) {
      progressFill.style.width = `${(video.currentTime / video.duration) * 100}%`;
    }
    if (timeDisplay) {
      timeDisplay.textContent = `${formatTime(video.currentTime)} / ${formatTime(video.duration || 0)}`;
    }
  });

  progressBar?.addEventListener('click', (e) => {
    const rect = progressBar.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    video.currentTime = ratio * video.duration;
  });

  let subtitlesOn = true;
  subtitleBtn?.addEventListener('click', () => {
    subtitlesOn = !subtitlesOn;
    subtitleBtn.classList.toggle('is-active', subtitlesOn);
    for (const track of video.textTracks) {
      track.mode = subtitlesOn ? 'showing' : 'hidden';
    }
  });
}

/**
 * Video modal
 */
export function initVideoModal() {
  const triggers = document.querySelectorAll('[data-video-modal]');
  const modal = document.querySelector('#video-modal');
  if (!modal) return;

  const overlay = modal.querySelector('.modal__overlay');
  const closeBtn = modal.querySelector('.modal__close');
  const video = modal.querySelector('video');

  const open = () => {
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('menu-open');
    video?.play();
  };

  const close = () => {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('menu-open');
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  triggers.forEach(t => t.addEventListener('click', open));
  overlay?.addEventListener('click', close);
  closeBtn?.addEventListener('click', close);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) close();
  });
}

/**
 * Farm steps interaction (smart-farm page)
 */
export function initFarmSteps() {
  const steps = document.querySelectorAll('.farm-step');
  const preview = document.querySelector('.farm-preview img');
  if (!steps.length || !preview) return;
  const select = step => {
    steps.forEach(item => { item.classList.toggle('is-active', item === step); item.setAttribute('aria-pressed', String(item === step)); });
    preview.src = step.dataset.image;
    preview.alt = step.querySelector('h3').textContent + ' trong mô hình nông nghiệp thông minh';
    document.querySelector('.farm-preview__caption').textContent = step.querySelector('h3').textContent + ' · Hình ảnh minh họa';
  };
  steps.forEach(step => {
    step.addEventListener('click', () => select(step));
    step.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); select(step); } });
  });
  select(steps[0]);
}
