/**
 * script.js — G.R.E.S. Unidos de Bangu
 * Lógica principal do site
 */

document.addEventListener('DOMContentLoaded', () => {

  // ── Navbar scroll effect ───────────────────────────────────
  const navbar = document.getElementById('navbar');
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  // ── Active nav link highlight ─────────────────────────────
  const sections = document.querySelectorAll('section[id], header[id]');
  const navLinks = document.querySelectorAll('.navbar-links a');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => observer.observe(s));

  // ── Mobile hamburger menu ─────────────────────────────────
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on link click
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        hamburger.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // ── Smooth scroll for all anchor links ───────────────────
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = navbar.offsetHeight + 8;
        window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
      }
    });
  });

  // ── Fade-up on scroll (IntersectionObserver) ─────────────
  const fadeItems = document.querySelectorAll('[data-fade]');
  const fadeObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        fadeObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  fadeItems.forEach((el, i) => {
    el.style.animationDelay = `${i * 0.12}s`;
    el.style.animationPlayState = 'paused';
    el.classList.add('fade-up');
    fadeObs.observe(el);
  });

  // ── Gallery lightbox (simple) ─────────────────────────────
  const galleryItems = document.querySelectorAll('.gallery-item img');
  galleryItems.forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => openLightbox(img.src, img.alt));
  });

  function openLightbox(src, alt) {
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:9999;
      display:flex;align-items:center;justify-content:center;cursor:zoom-out;
      animation:fadeIn .2s ease;
    `;
    const style = document.createElement('style');
    style.textContent = '@keyframes fadeIn{from{opacity:0}to{opacity:1}}';
    document.head.appendChild(style);

    const imgEl = document.createElement('img');
    imgEl.src = src; imgEl.alt = alt;
    imgEl.style.cssText = 'max-width:90vw;max-height:90vh;border-radius:12px;object-fit:contain;';
    overlay.appendChild(imgEl);
    overlay.addEventListener('click', () => { overlay.remove(); style.remove(); });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') { overlay.remove(); style.remove(); }
    }, { once: true });
    document.body.appendChild(overlay);
  }

  // ── Countdown para Carnaval 2027 ──────────────────────────
  const countdownEl = document.getElementById('countdown');
  if (countdownEl) {
    const target = new Date('2027-02-13T00:00:00');
    function updateCountdown() {
      const diff = target - Date.now();
      if (diff <= 0) { countdownEl.textContent = '🎉 É Carnaval!'; return; }
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      countdownEl.innerHTML = `
        <span>${d}<small>dias</small></span>
        <span>${String(h).padStart(2,'0')}<small>h</small></span>
        <span>${String(m).padStart(2,'0')}<small>min</small></span>
        <span>${String(s).padStart(2,'0')}<small>seg</small></span>
      `;
    }
    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  // ── Newsletter form (placeholder) ────────────────────────
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = newsletterForm.querySelector('input[type="email"]').value;
      if (email) {
        const btn = newsletterForm.querySelector('button[type="submit"]');
        btn.textContent = '✓ Inscrito!';
        btn.disabled = true;
        btn.style.background = '#2e7d32';
      }
    });
  }

  console.log('🎭 Unidos de Bangu — site carregado com sucesso!');
});
