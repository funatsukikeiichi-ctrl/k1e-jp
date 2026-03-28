/* ===== K1e.jp — Interactions ===== */

document.addEventListener('DOMContentLoaded', () => {

  // ===== Particles =====
  const particlesEl = document.getElementById('particles');
  if (particlesEl) {
    for (let i = 0; i < 30; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      p.style.left = Math.random() * 100 + '%';
      p.style.top = (60 + Math.random() * 40) + '%';
      p.style.animationDuration = (6 + Math.random() * 10) + 's';
      p.style.animationDelay = Math.random() * 8 + 's';
      p.style.width = p.style.height = (1 + Math.random() * 2) + 'px';
      particlesEl.appendChild(p);
    }
  }

  // ===== Mobile Nav Toggle =====
  const navToggle = document.getElementById('navToggle');
  const navMobile = document.getElementById('navMobile');

  if (navToggle && navMobile) {
    navToggle.addEventListener('click', () => {
      navMobile.classList.toggle('open');
    });

    navMobile.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMobile.classList.remove('open');
      });
    });
  }

  // ===== Music Grid Filter =====
  const filterBtns = document.querySelectorAll('.filter-btn');
  const musicCards = document.querySelectorAll('.music-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      musicCards.forEach(card => {
        const tags = card.dataset.tags || '';
        if (filter === 'all' || tags.includes(filter)) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // ===== Track Accordion (for track pages) =====
  document.querySelectorAll('.track-header').forEach(header => {
    header.addEventListener('click', () => {
      const track = header.parentElement;
      const wasOpen = track.classList.contains('open');
      document.querySelectorAll('.track.open').forEach(t => t.classList.remove('open'));
      if (!wasOpen) track.classList.add('open');
    });
  });

  // ===== Scroll Animations =====
  const fadeEls = document.querySelectorAll(
    '.about-grid, .artist-card, .music-card, .link-card, .section-title, .section-sub, .track-hero-grid, .lyrics-body'
  );

  fadeEls.forEach(el => el.classList.add('fade-in'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px 50px 0px' });

  fadeEls.forEach(el => observer.observe(el));

  // Fallback
  setTimeout(() => {
    fadeEls.forEach(el => el.classList.add('visible'));
  }, 1500);

  // ===== Nav Background on Scroll =====
  const nav = document.getElementById('nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        nav.style.background = 'rgba(10, 10, 15, 0.95)';
      } else {
        nav.style.background = 'rgba(10, 10, 15, 0.85)';
      }
    }, { passive: true });
  }

});
