/**
 * LIVING MIND — main.js
 * Shared utilities: scroll-triggered fade-ups, navbar scroll effect
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Fade-up on scroll ──────────────────────── */
  const fadeEls = document.querySelectorAll('.fade-up');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    fadeEls.forEach(el => observer.observe(el));
  } else {
    // Fallback for browsers without IntersectionObserver
    fadeEls.forEach(el => el.classList.add('visible'));
  }

  /* ── Staggered fade-up for groups ──────────── */
  document.querySelectorAll('[data-stagger]').forEach(group => {
    const children = group.querySelectorAll('.fade-up');
    children.forEach((child, i) => {
      child.style.transitionDelay = `${i * 0.1}s`;
    });
  });

  /* ── Navbar scroll shadow ───────────────────── */
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    const onScroll = () => {
      navbar.style.boxShadow = window.scrollY > 10
        ? '0 2px 16px rgba(0,0,0,.08)'
        : 'none';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ── Smooth scroll for anchor links ─────────── */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

});
