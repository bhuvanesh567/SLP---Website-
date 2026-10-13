/**
 * SRI LAKSHMI PLAZA — MAIN JAVASCRIPT
 * Core: Loading, Scroll, Cursor, Nav, Animations, Utility
 */

'use strict';

/* ══════════════════════════════════════════════
   LOADING SCREEN
   ══════════════════════════════════════════════ */
window.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('loading-screen');
  if (!loader) return;

  // Hide loader after animation completes
  const hideLoader = () => {
    loader.classList.add('hidden');
    document.body.style.overflow = '';
    // Trigger hero animations after load
    setTimeout(() => triggerHeroAnimations(), 100);
  };

  // Minimum display time + animation
  document.body.style.overflow = 'hidden';
  setTimeout(hideLoader, 2200);
});

function triggerHeroAnimations() {
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    heroContent.style.opacity = '1';
  }
}

/* ══════════════════════════════════════════════
   SCROLL PROGRESS BAR
   ══════════════════════════════════════════════ */
const scrollProgress = document.getElementById('scroll-progress');

function updateScrollProgress() {
  if (!scrollProgress) return;
  const totalScrollable = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = window.scrollY;
  const pct = totalScrollable > 0 ? (scrolled / totalScrollable) * 100 : 0;
  scrollProgress.style.width = `${pct}%`;
}

window.addEventListener('scroll', updateScrollProgress, { passive: true });

/* ══════════════════════════════════════════════
   STICKY NAVBAR
   ══════════════════════════════════════════════ */
const navbar = document.querySelector('.navbar');

function updateNavbar() {
  if (!navbar) return;
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', updateNavbar, { passive: true });
updateNavbar();

/* Active Nav Link */
function setActiveNavLink() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .nav-drawer-link').forEach(link => {
    const href = link.getAttribute('href') || '';
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}
setActiveNavLink();

/* ══════════════════════════════════════════════
   HAMBURGER / MOBILE NAV
   ══════════════════════════════════════════════ */
const hamburger = document.querySelector('.nav-hamburger');
const navDrawer = document.querySelector('.nav-drawer');
const navOverlay = document.querySelector('.nav-drawer-overlay');

function toggleDrawer(open) {
  hamburger?.classList.toggle('open', open);
  navDrawer?.classList.toggle('open', open);
  navOverlay?.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
}

hamburger?.addEventListener('click', () => {
  const isOpen = navDrawer?.classList.contains('open');
  toggleDrawer(!isOpen);
});

navOverlay?.addEventListener('click', () => toggleDrawer(false));

// Close drawer on ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    toggleDrawer(false);
    closeSearch();
  }
});

/* ══════════════════════════════════════════════
   SEARCH OVERLAY
   ══════════════════════════════════════════════ */
const searchOverlay = document.querySelector('.search-overlay');
const searchInput = document.querySelector('.search-input');
const searchBtns = document.querySelectorAll('.nav-search-btn, .search-open-btn');
const searchClose = document.querySelector('.search-close');

function openSearch() {
  searchOverlay?.classList.add('open');
  document.body.style.overflow = 'hidden';
  setTimeout(() => searchInput?.focus(), 100);
}

function closeSearch() {
  searchOverlay?.classList.remove('open');
  document.body.style.overflow = '';
}

searchBtns.forEach(btn => btn?.addEventListener('click', openSearch));
searchClose?.addEventListener('click', closeSearch);
searchOverlay?.addEventListener('click', (e) => {
  if (e.target === searchOverlay) closeSearch();
});

/* ══════════════════════════════════════════════
   CUSTOM CURSOR (Desktop only)
   ══════════════════════════════════════════════ */
if (window.matchMedia('(pointer: fine)').matches) {
  const cursorDot = document.getElementById('cursor-dot');
  const cursorOutline = document.getElementById('cursor-outline');

  let mouseX = 0, mouseY = 0;
  let outlineX = 0, outlineY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (cursorDot) {
      cursorDot.style.left = mouseX + 'px';
      cursorDot.style.top = mouseY + 'px';
    }
  });

  // Smooth outline follow
  function animateCursor() {
    outlineX += (mouseX - outlineX) * 0.12;
    outlineY += (mouseY - outlineY) * 0.12;

    if (cursorOutline) {
      cursorOutline.style.left = outlineX + 'px';
      cursorOutline.style.top = outlineY + 'px';
    }

    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  // Hover effect on interactive elements
  const interactables = 'a, button, .product-card, .btn, input, [role="button"]';

  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(interactables)) {
      document.body.classList.add('cursor-hover');
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(interactables)) {
      document.body.classList.remove('cursor-hover');
    }
  });
}

/* ══════════════════════════════════════════════
   SCROLL REVEAL ANIMATIONS
   ══════════════════════════════════════════════ */
function initScrollReveal() {
  const revealElements = document.querySelectorAll(
    '.reveal, .reveal-left, .reveal-right, .reveal-scale'
  );

  if (!revealElements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Unobserve once revealed for performance
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}

// Run after DOM ready
document.addEventListener('DOMContentLoaded', initScrollReveal);

/* ══════════════════════════════════════════════
   COUNTER ANIMATION
   ══════════════════════════════════════════════ */
function animateCounter(el) {
  const target = parseInt(el.dataset.target) || parseInt(el.textContent) || 0;
  const suffix = el.dataset.suffix || '';
  const duration = 2000;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out expo
    const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
    const current = Math.floor(eased * target);
    el.textContent = current.toLocaleString() + suffix;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = target.toLocaleString() + suffix;
    }
  }

  requestAnimationFrame(update);
}

function initCounters() {
  const counters = document.querySelectorAll('.stat-number[data-target]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.counted) {
        entry.target.dataset.counted = 'true';
        animateCounter(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', initCounters);

/* ══════════════════════════════════════════════
   PARALLAX
   ══════════════════════════════════════════════ */
function initParallax() {
  const parallaxEls = document.querySelectorAll('[data-parallax]');
  if (!parallaxEls.length) return;

  function update() {
    const scrollY = window.scrollY;
    parallaxEls.forEach(el => {
      const speed = parseFloat(el.dataset.parallax) || 0.5;
      const rect = el.getBoundingClientRect();
      const offsetY = (rect.top + scrollY) * speed * 0.15;
      el.style.transform = `translateY(${-offsetY}px)`;
    });
  }

  window.addEventListener('scroll', update, { passive: true });
}

document.addEventListener('DOMContentLoaded', initParallax);

/* ══════════════════════════════════════════════
   CARD TILT EFFECT (3D)
   ══════════════════════════════════════════════ */
function initTiltCards() {
  const cards = document.querySelectorAll('.tilt-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;

      const rotateX = (mouseY / (rect.height / 2)) * -8;
      const rotateY = (mouseX / (rect.width / 2)) * 8;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    });
  });
}

document.addEventListener('DOMContentLoaded', initTiltCards);

/* ══════════════════════════════════════════════
   RIPPLE BUTTON EFFECT
   ══════════════════════════════════════════════ */
function createRipple(event) {
  const button = event.currentTarget;
  const ripple = document.createElement('span');
  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;

  ripple.className = 'ripple';
  ripple.style.cssText = `width:${size}px;height:${size}px;left:${x}px;top:${y}px`;

  button.appendChild(ripple);
  ripple.addEventListener('animationend', () => ripple.remove());
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.btn, .hero-btn-primary, .hero-btn-secondary').forEach(btn => {
    btn.addEventListener('click', createRipple);
  });
});

/* ══════════════════════════════════════════════
   MAGNETIC BUTTONS
   ══════════════════════════════════════════════ */
function initMagnetic() {
  const btns = document.querySelectorAll('.magnetic');

  btns.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
}

document.addEventListener('DOMContentLoaded', initMagnetic);

/* ══════════════════════════════════════════════
   FAQ ACCORDION
   ══════════════════════════════════════════════ */
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question?.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close all
      faqItems.forEach(i => i.classList.remove('open'));

      // Toggle current
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', initFAQ);

/* ══════════════════════════════════════════════
   BACK TO TOP
   ══════════════════════════════════════════════ */
const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (backToTop) {
    backToTop.classList.toggle('visible', window.scrollY > 500);
  }
}, { passive: true });

backToTop?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ══════════════════════════════════════════════
   COOKIE BANNER
   ══════════════════════════════════════════════ */
function initCookieBanner() {
  const banner = document.getElementById('cookie-banner');
  if (!banner) return;

  if (!localStorage.getItem('slp-cookies-accepted')) {
    setTimeout(() => banner.classList.add('visible'), 2500);
  }

  document.getElementById('accept-cookies')?.addEventListener('click', () => {
    localStorage.setItem('slp-cookies-accepted', '1');
    banner.classList.remove('visible');
  });

  document.getElementById('decline-cookies')?.addEventListener('click', () => {
    banner.classList.remove('visible');
  });
}

document.addEventListener('DOMContentLoaded', initCookieBanner);

/* ══════════════════════════════════════════════
   WISHLIST
   ══════════════════════════════════════════════ */
const wishlist = new Set(JSON.parse(localStorage.getItem('slp-wishlist') || '[]'));

function saveWishlist() {
  localStorage.setItem('slp-wishlist', JSON.stringify([...wishlist]));
  updateWishlistCount();
}

function updateWishlistCount() {
  const count = wishlist.size;
  const badge = document.querySelector('.wishlist-count');
  if (badge) {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
  }
}

function toggleWishlist(productId, btn) {
  if (wishlist.has(productId)) {
    wishlist.delete(productId);
    btn?.classList.remove('active-wish');
    showToast('Removed from wishlist', 'info');
  } else {
    wishlist.add(productId);
    btn?.classList.add('active-wish');
    showToast('Added to wishlist ❤️', 'success');
  }
  saveWishlist();
}

document.addEventListener('DOMContentLoaded', () => {
  // Init wishlist buttons
  document.querySelectorAll('.wishlist-btn').forEach(btn => {
    const id = btn.dataset.id;
    if (wishlist.has(id)) btn.classList.add('active-wish');
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleWishlist(id, btn);
    });
  });

  updateWishlistCount();
});

/* ══════════════════════════════════════════════
   COMPARE
   ══════════════════════════════════════════════ */
const compareList = [];
const compareBar = document.querySelector('.compare-bar');

function addToCompare(product) {
  if (compareList.length >= 3) {
    showToast('Maximum 3 phones can be compared', 'info');
    return;
  }
  if (compareList.find(p => p.id === product.id)) {
    showToast('Already added to compare', 'info');
    return;
  }
  compareList.push(product);
  updateCompareBar();
  showToast('Added to compare ⚖️', 'success');
}

function updateCompareBar() {
  if (!compareBar) return;
  compareBar.classList.toggle('visible', compareList.length > 0);
  const slots = compareBar.querySelectorAll('.compare-slot');
  slots.forEach((slot, i) => {
    if (compareList[i]) {
      slot.textContent = compareList[i].name;
      slot.classList.add('filled');
    } else {
      slot.textContent = 'Add Phone';
      slot.classList.remove('filled');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.compare-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const card = btn.closest('.product-card');
      addToCompare({
        id: btn.dataset.id || card?.dataset.id,
        name: btn.dataset.name || card?.querySelector('.product-name')?.textContent
      });
    });
  });

  document.querySelector('.compare-now-btn')?.addEventListener('click', () => {
    if (compareList.length < 2) {
      showToast('Select at least 2 phones to compare', 'info');
      return;
    }
    // TODO: Navigate to compare page
    window.location.href = 'smartphones.html?compare=true';
  });

  document.querySelector('.compare-clear-btn')?.addEventListener('click', () => {
    compareList.length = 0;
    updateCompareBar();
  });
});

/* ══════════════════════════════════════════════
   TOAST NOTIFICATIONS
   ══════════════════════════════════════════════ */
let toastTimeout;

function showToast(message, type = 'success') {
  let toast = document.getElementById('toast');

  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    toast.innerHTML = `
      <div class="toast-icon">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      </div>
      <span class="toast-message"></span>
    `;
    document.body.appendChild(toast);
  }

  toast.className = `toast toast-${type}`;
  toast.querySelector('.toast-message').textContent = message;

  clearTimeout(toastTimeout);
  requestAnimationFrame(() => {
    toast.classList.add('show');
    toastTimeout = setTimeout(() => toast.classList.remove('show'), 3000);
  });
}

/* ══════════════════════════════════════════════
   DARK MODE TOGGLE
   ══════════════════════════════════════════════ */
const darkToggle = document.getElementById('dark-mode-toggle');
let isDark = localStorage.getItem('slp-theme') !== 'light';

function applyTheme() {
  document.documentElement.classList.toggle('light-mode', !isDark);
  if (darkToggle) darkToggle.textContent = isDark ? '☀️ Light' : '🌙 Dark';
}

darkToggle?.addEventListener('click', () => {
  isDark = !isDark;
  localStorage.setItem('slp-theme', isDark ? 'dark' : 'light');
  applyTheme();
});

document.addEventListener('DOMContentLoaded', applyTheme);

/* ══════════════════════════════════════════════
   SMOOTH ANCHOR LINKS
   ══════════════════════════════════════════════ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const href = anchor.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const navHeight = navbar?.offsetHeight || 80;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 20;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* ══════════════════════════════════════════════
   NEWSLETTER FORM
   ══════════════════════════════════════════════ */
document.querySelector('.newsletter-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = e.target.querySelector('.newsletter-input')?.value;
  if (email) {
    showToast('🎉 Subscribed successfully!', 'success');
    e.target.reset();
  }
});

/* ══════════════════════════════════════════════
   FILTER CHIPS (Product Filter)
   ══════════════════════════════════════════════ */
function initFilterChips() {
  const chipGroups = document.querySelectorAll('.filter-chips');

  chipGroups.forEach(group => {
    const chips = group.querySelectorAll('.chip');
    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        // Allow multi-select only if data-multi
        if (!group.dataset.multi) {
          chips.forEach(c => c.classList.remove('active'));
        }
        chip.classList.toggle('active');

        // Trigger filter
        const filter = chip.dataset.filter;
        const target = group.dataset.target;
        if (target && filter) {
          filterProducts(target, [...group.querySelectorAll('.chip.active')].map(c => c.dataset.filter));
        }
      });
    });
  });
}

function filterProducts(targetSelector, activeFilters) {
  const products = document.querySelectorAll(`${targetSelector} .product-card`);
  products.forEach(card => {
    const brand = card.dataset.brand || '';
    const show = activeFilters.length === 0 || activeFilters.includes('all') || activeFilters.includes(brand);
    card.style.display = show ? '' : 'none';
    card.style.opacity = show ? '1' : '0';
  });
}

document.addEventListener('DOMContentLoaded', initFilterChips);

/* ══════════════════════════════════════════════
   BRAND CAROUSEL — AUTO-PAUSE ON HOVER
   ══════════════════════════════════════════════ */
function initCarousel() {
  const tracks = document.querySelectorAll('.brand-carousel-track');
  tracks.forEach(track => {
    // Ensure infinite scroll by duplicating content
    const items = track.innerHTML;
    track.innerHTML = items + items; // Double for seamless loop
  });
}

document.addEventListener('DOMContentLoaded', initCarousel);

/* ══════════════════════════════════════════════
   PRODUCT IMAGE LAZY LOADING
   ══════════════════════════════════════════════ */
function initLazyImages() {
  const images = document.querySelectorAll('img[loading="lazy"]');

  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  }
}

document.addEventListener('DOMContentLoaded', initLazyImages);

/* ══════════════════════════════════════════════
   FLOATING RATING BARS ANIMATION
   ══════════════════════════════════════════════ */
function initRatingBars() {
  const bars = document.querySelectorAll('.rating-bar-fill');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.width = entry.target.dataset.width || '0%';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  bars.forEach(bar => {
    bar.dataset.width = bar.style.width;
    bar.style.width = '0%';
    observer.observe(bar);
  });
}

document.addEventListener('DOMContentLoaded', initRatingBars);

/* ══════════════════════════════════════════════
   STAGGERED CARD ANIMATIONS
   ══════════════════════════════════════════════ */
function initStaggeredReveal() {
  const grids = document.querySelectorAll('.products-grid, .why-grid, .services-grid, .accessories-grid');

  grids.forEach(grid => {
    const items = grid.children;
    [...items].forEach((item, i) => {
      item.classList.add('reveal');
      item.style.transitionDelay = `${i * 0.08}s`;
    });
  });

  initScrollReveal();
}

document.addEventListener('DOMContentLoaded', initStaggeredReveal);

console.log('🏪 Sri Lakshmi Plaza — Loaded successfully');
