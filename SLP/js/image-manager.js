/**
 * SRI LAKSHMI PLAZA — IMAGE MANAGER
 * ──────────────────────────────────────────────────────────────
 * Handles automatic placeholder rendering for every missing image.
 * Drop a real image at the correct path and it appears instantly.
 * No code changes needed — just add the image file.
 * ──────────────────────────────────────────────────────────────
 */

'use strict';

/* ══════════════════════════════════════════════
   IMAGE REGISTRY
   Complete list of every image used on the site.
   ══════════════════════════════════════════════ */
const IMAGE_REGISTRY = {
  /* ── GLOBAL ── */
  'slp-logo':         { file: 'assets/images/slp-logo.png',          size: '400×120',   format: 'PNG',  desc: 'Sri Lakshmi Plaza logo — transparent background' },

  /* ── HOME PAGE (index.html) ── */
  'hero-bg':          { file: 'assets/images/hero-banner.jpg',        size: '1920×1080', format: 'JPG',  desc: 'Hero background — dark premium smartphone store atmosphere' },
  'hero-iphone':      { file: 'assets/images/iphone-16-pro.png',      size: '800×1400',  format: 'PNG',  desc: 'iPhone 16 Pro Max product render — transparent background' },
  'hero-samsung':     { file: 'assets/images/samsung-s25-ultra.png',  size: '800×1400',  format: 'PNG',  desc: 'Samsung Galaxy S25 Ultra render — transparent background' },
  'hero-oneplus':     { file: 'assets/images/oneplus-13.png',         size: '800×1400',  format: 'PNG',  desc: 'OnePlus 13 render — transparent background' },
  'store-interior-1': { file: 'assets/images/store-interior.jpg',     size: '1600×900',  format: 'JPG',  desc: 'Main showroom interior with premium lighting and phone displays' },
  'store-exterior':   { file: 'assets/images/store-front.jpg',        size: '1600×900',  format: 'JPG',  desc: 'Store front / exterior of Sri Lakshmi Plaza, Labbipet' },
  'store-display':    { file: 'assets/images/store-display.jpg',      size: '800×600',   format: 'JPG',  desc: 'Accessory display area inside the store' },

  /* ── PRODUCT IMAGES (smartphones.html + index.html) ── */
  'iphone-16-pro':    { file: 'assets/images/iphone-16-pro.png',      size: '800×800',   format: 'PNG',  desc: 'iPhone 16 Pro Max — official transparent product render' },
  'samsung-s25':      { file: 'assets/images/samsung-s25-ultra.png',  size: '800×800',   format: 'PNG',  desc: 'Samsung Galaxy S25 Ultra — transparent product render' },
  'oneplus-13':       { file: 'assets/images/oneplus-13.png',         size: '800×800',   format: 'PNG',  desc: 'OnePlus 13 — transparent product render' },
  'nothing-phone-3':  { file: 'assets/images/nothing-phone-3.png',    size: '800×800',   format: 'PNG',  desc: 'Nothing Phone 3 — transparent product render' },
  'pixel-9-pro':      { file: 'assets/images/pixel-9-pro.png',        size: '800×800',   format: 'PNG',  desc: 'Google Pixel 9 Pro — transparent product render' },
  'vivo-x200-pro':    { file: 'assets/images/vivo-x200-pro.png',      size: '800×800',   format: 'PNG',  desc: 'Vivo X200 Pro — transparent product render' },
  'oppo-find-x8':     { file: 'assets/images/oppo-find-x8.png',       size: '800×800',   format: 'PNG',  desc: 'OPPO Find X8 Pro — transparent product render' },
  'realme-gt-7-pro':  { file: 'assets/images/realme-gt7-pro.png',     size: '800×800',   format: 'PNG',  desc: 'Realme GT 7 Pro — transparent product render' },

  /* ── ACCESSORIES PAGE (accessories.html) ── */
  'accessories-hero': { file: 'assets/images/accessories-hero.jpg',   size: '1920×800',  format: 'JPG',  desc: 'Accessories hero — flat-lay of earbuds, watches, chargers on dark surface' },
  'airpods-pro':      { file: 'assets/images/airpods-pro.png',        size: '600×600',   format: 'PNG',  desc: 'Apple AirPods Pro 2nd Gen — transparent product render' },
  'samsung-buds':     { file: 'assets/images/samsung-buds3-pro.png',  size: '600×600',   format: 'PNG',  desc: 'Samsung Galaxy Buds3 Pro — transparent product render' },
  'apple-watch':      { file: 'assets/images/apple-watch-series10.png',size: '600×600',  format: 'PNG',  desc: 'Apple Watch Series 10 — transparent product render' },
  'samsung-watch':    { file: 'assets/images/samsung-watch7.png',     size: '600×600',   format: 'PNG',  desc: 'Samsung Galaxy Watch 7 — transparent product render' },
  'mobile-accessories':{ file: 'assets/images/mobile-accessories.jpg',size: '1200×600',  format: 'JPG',  desc: 'Collection of phone cases, chargers, cables on dark background' },

  /* ── ABOUT PAGE (about.html) ── */
  'store-story':      { file: 'assets/images/store-interior.jpg',     size: '1200×800',  format: 'JPG',  desc: 'Showroom story image — wide angle of store with staff' },
  'owner':            { file: 'assets/images/owner.jpg',              size: '800×1000',  format: 'JPG',  desc: 'Professional portrait of store owner — clean white/dark background' },
  'team-member-1':    { file: 'assets/images/team-member-1.jpg',      size: '600×600',   format: 'JPG',  desc: 'Team member 1 — professional portrait smiling, store uniform' },
  'team-member-2':    { file: 'assets/images/team-member-2.jpg',      size: '600×600',   format: 'JPG',  desc: 'Team member 2 — professional portrait' },
  'team-member-3':    { file: 'assets/images/team-member-3.jpg',      size: '600×600',   format: 'JPG',  desc: 'Team member 3 — professional portrait' },
  'gallery-1':        { file: 'assets/images/gallery-1.jpg',          size: '800×600',   format: 'JPG',  desc: 'Gallery: Store interior showing flagship display table' },
  'gallery-2':        { file: 'assets/images/gallery-2.jpg',          size: '800×600',   format: 'JPG',  desc: 'Gallery: Customer being assisted by staff member' },
  'gallery-3':        { file: 'assets/images/gallery-3.jpg',          size: '800×600',   format: 'JPG',  desc: 'Gallery: Premium phone display wall with lighting' },
  'gallery-4':        { file: 'assets/images/gallery-4.jpg',          size: '800×600',   format: 'JPG',  desc: 'Gallery: Store entrance with SLP branding signage' },

  /* ── OFFERS PAGE (offers.html) ── */
  'offer-banner':     { file: 'assets/images/offer-banner.jpg',       size: '1920×600',  format: 'JPG',  desc: 'Festival sale offer banner — vibrant with discount text overlay' },
  'offer-iphone':     { file: 'assets/images/offer-iphone.jpg',       size: '1200×600',  format: 'JPG',  desc: 'iPhone offer card image — phone on colourful gradient background' },
  'offer-samsung':    { file: 'assets/images/offer-samsung.jpg',      size: '1200×600',  format: 'JPG',  desc: 'Samsung offer card — S25 Ultra on premium dark background' },

  /* ── REPAIR PAGE (repair.html) ── */
  'repair-service':   { file: 'assets/images/repair-service.jpg',     size: '1600×900',  format: 'JPG',  desc: 'Technician repairing a smartphone — professional workshop environment' },
  'repair-tools':     { file: 'assets/images/repair-tools.jpg',       size: '800×600',   format: 'JPG',  desc: 'Phone repair tools — precision screwdrivers, ESD mat, components' },

  /* ── TRADE-IN PAGE (trade-in.html) ── */
  'trade-in-bg':      { file: 'assets/images/trade-in.jpg',           size: '1600×900',  format: 'JPG',  desc: 'Trade-in hero — hand holding old phone, new phone in background' },

  /* ── CUSTOMER REVIEWS ── */
  'customer-1':       { file: 'assets/images/customer-1.jpg',         size: '200×200',   format: 'JPG',  desc: 'Customer review avatar 1 — real customer portrait (with permission)' },
  'customer-2':       { file: 'assets/images/customer-2.jpg',         size: '200×200',   format: 'JPG',  desc: 'Customer review avatar 2' },
  'customer-3':       { file: 'assets/images/customer-3.jpg',         size: '200×200',   format: 'JPG',  desc: 'Customer review avatar 3' },
};


/* ══════════════════════════════════════════════
   PLACEHOLDER BUILDER
   Called for every [data-img-id] element and
   every <img> that fails to load.
   ══════════════════════════════════════════════ */

/**
 * Build a placeholder element.
 * @param {string} imgId  - Key in IMAGE_REGISTRY
 * @param {string} variant - CSS class variant (ph-product, ph-hero, etc.)
 * @returns {HTMLElement}
 */
function buildPlaceholder(imgId, variant = '') {
  const info = IMAGE_REGISTRY[imgId] || {
    file: 'assets/images/' + (imgId || 'image') + '.jpg',
    size: 'N/A',
    format: 'JPG',
    desc: imgId || 'Image'
  };

  // Pick icon based on variant / type
  const icons = {
    'ph-hero':     '🖼️',
    'ph-product':  '📱',
    'ph-store':    '🏪',
    'ph-banner':   '🎨',
    'ph-portrait': '👤',
    'ph-gallery':  '📸',
    'ph-avatar':   '👤',
    'ph-offer':    '🎁',
    'default':     '📷',
  };
  const icon = icons[variant] || icons['default'];

  // Short label from file path
  const filename = info.file.split('/').pop();
  const label    = info.desc;

  const div = document.createElement('div');
  div.className = ['img-ph', variant].filter(Boolean).join(' ');
  div.setAttribute('role', 'img');
  div.setAttribute('aria-label', label);
  div.innerHTML = `
    <span class="img-ph-icon">${icon}</span>
    <span class="img-ph-label">${label}</span>
    <span class="img-ph-file">${filename}</span>
    <span class="img-ph-size">${info.size} · ${info.format}</span>
  `;
  return div;
}


/* ══════════════════════════════════════════════
   AUTO-MOUNT PLACEHOLDERS
   Scans for [data-img-id] containers and mounts
   a placeholder inside them.
   ══════════════════════════════════════════════ */
function mountPlaceholders() {
  document.querySelectorAll('[data-img-id]').forEach(wrapper => {
    const imgId   = wrapper.dataset.imgId;
    const variant = wrapper.dataset.imgVariant || '';

    // Skip if a real image already exists inside and loaded successfully
    const existingImg = wrapper.querySelector('img');
    if (existingImg && existingImg.complete && existingImg.naturalWidth > 0) return;
    if (existingImg && existingImg.src && !existingImg.src.includes('undefined')) {
      // Let the onerror handler deal with it
      return;
    }

    // Clear and mount placeholder
    if (!wrapper.querySelector('.img-ph')) {
      wrapper.innerHTML = '';
      wrapper.appendChild(buildPlaceholder(imgId, variant));
    }
  });
}


/* ══════════════════════════════════════════════
   IMG ONERROR FALLBACK
   Any <img> with data-img-id will swap to a
   placeholder if it fails to load.
   ══════════════════════════════════════════════ */
function handleImageErrors() {
  document.querySelectorAll('img[data-img-id]').forEach(img => {
    img.addEventListener('error', function () {
      const parent  = this.parentElement;
      const imgId   = this.dataset.imgId;
      const variant = this.dataset.imgVariant || '';
      if (!parent) return;
      this.classList.add('img-broken-fallback');
      if (!parent.querySelector('.img-ph')) {
        parent.appendChild(buildPlaceholder(imgId, variant));
      }
    });

    // If already broken (cached fail), fire manually
    if (img.complete && img.naturalWidth === 0 && img.src) {
      img.dispatchEvent(new Event('error'));
    }
  });
}


/* ══════════════════════════════════════════════
   ALSO CATCH LEGACY BROKEN ABSOLUTE PATHS
   (.gemini folder paths that will always 404)
   ══════════════════════════════════════════════ */
function patchLegacyPaths() {
  document.querySelectorAll('img').forEach(img => {
    const src = img.getAttribute('src') || '';
    // Absolute local path that won't work in browser
    if (src.startsWith('C:/') || src.startsWith('C:\\') || src.startsWith('/Users/')) {
      img.setAttribute('data-broken-src', src);
      img.setAttribute('src', ''); // clear it
      img.dispatchEvent(new Event('error'));
    }
  });
}


/* ══════════════════════════════════════════════
   INIT
   ══════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  patchLegacyPaths();
  handleImageErrors();
  mountPlaceholders();
});


/* ══════════════════════════════════════════════
   EXPORT REGISTRY (for IMAGE_GUIDE reference)
   ══════════════════════════════════════════════ */
window.SLP_IMAGE_REGISTRY = IMAGE_REGISTRY;

console.log('🖼️ SLP Image Manager loaded —', Object.keys(IMAGE_REGISTRY).length, 'images tracked.');
