/**
 * Snap Scroll Extension for inflect
 * 
 * Captures wheel events and snaps to nearest section boundary.
 * Creates smooth, deliberate section-to-section navigation.
 * 
 * Only loads when frontmatter has snap: true
 * 
 * Features:
 * - Intercepts wheel events
 * - Calculates nearest section
 * - Smoothly animates to target section
 * - Provides __smoothScrollTo utility for other extensions
 */

(function() {
  'use strict';

  // Check if snap should be enabled
  function shouldLoad() {
    return document.body.classList.contains('snap') || window.__snapEnabled === true;
  }

  // Global smooth scroll helper
  window.__smoothScrollTo = function(scroller, to, opts) {
    try {
      opts = opts || {};
      const start = (scroller === document.scrollingElement || scroller === document.documentElement) 
        ? (window.pageYOffset || document.documentElement.scrollTop || 0) 
        : (scroller.scrollTop || 0);
      const distance = Math.max(-start, to - start);
      const absDist = Math.abs(distance);
      
      const isSnap = opts.source === 'snap';
      let duration;
      if (opts.duration) {
        duration = opts.duration;
      } else if (isSnap) {
        const minDur = window.__snapDurationMin || 600;
        const maxDur = window.__snapDurationMax || 1200;
        const multiplier = window.__snapDurationMultiplier || 0.8;
        const base = window.__snapDurationBase || 200;
        duration = Math.min(maxDur, Math.max(minDur, Math.round(absDist * multiplier) + base));
      } else {
        duration = Math.min(900, Math.max(300, Math.round(absDist * 0.45) + 150));
      }
      const startTime = performance.now();

      const power = isSnap ? (window.__snapEasingPower || 4) : 2;
      function easeOut(t) { 
        return 1 - Math.pow(1 - t, power);
      }
      const easingFn = easeOut;

      const newSuppressUntil = Date.now() + duration + 80;
      window.__snapSuppressUntil = Math.max(window.__snapSuppressUntil || 0, newSuppressUntil);
      window.__chaptersAnimating = true;
      window.__scrollAnimating = true;
      window.__programmaticScrollInProgress = true;

      function step(now) {
        const elapsed = Math.min(duration, Math.max(0, now - startTime));
        const progress = easingFn(elapsed / duration);
        const cur = Math.round(start + (distance * progress));
        try {
          if (scroller === document.scrollingElement || scroller === document.documentElement) {
            window.scrollTo(0, cur);
          } else if (typeof scroller.scrollTo === 'function') {
            scroller.scrollTo({ top: cur });
          } else {
            scroller.scrollTop = cur;
          }
        } catch(e) { /* swallow */ }

        if (elapsed < duration) {
          requestAnimationFrame(step);
        } else {
          try { 
            if (scroller === document.scrollingElement || scroller === document.documentElement) 
              window.scrollTo(0, to); 
            else 
              scroller.scrollTo({ top: to }); 
          } catch(e){}
          window.__chaptersAnimating = false;
          window.__scrollAnimating = false;
          
          setTimeout(() => { window.__programmaticScrollInProgress = false; }, 50);
          
          try { if (typeof window.__onSmoothScrollDone === 'function') window.__onSmoothScrollDone(); } catch(e){}
        }
      }

      requestAnimationFrame(step);
    } catch (e) { /* swallow */ }
  };

  // Find current section index
  function snapCurrentIndex() {
    const secs = Array.from((document.scrollingElement || document.documentElement).querySelectorAll('section'));
    if (!secs.length) return 0;
    
    const scroller = document.querySelector('main') || document.scrollingElement || document.documentElement;
    const currentScrollTop = scroller.scrollTop || window.pageYOffset;
    const viewportHeight = scroller.clientHeight || window.innerHeight;
    const viewportCenter = currentScrollTop + (viewportHeight / 2);
    
    let closestIdx = 0;
    let closestDist = Infinity;
    secs.forEach((sec, idx) => {
      const rect = sec.getBoundingClientRect();
      const secTop = rect.top + currentScrollTop;
      const secCenter = secTop + (rect.height / 2);
      const dist = Math.abs(secCenter - viewportCenter);
      if (dist < closestDist) {
        closestDist = dist;
        closestIdx = idx;
      }
    });
    return closestIdx;
  }

  // Handle wheel events
  function handleWheel(e) {
    try {
      e.preventDefault();
      e.stopPropagation();
    } catch(err){}
    
    // Suppress during animation
    if (Date.now() < (window.__snapSuppressUntil || 0) || window.__snapAnimationInProgress) return;
    
    const delta = e.deltaY || 0;
    if (Math.abs(delta) < 1) return;
    
    const secs = Array.from((document.scrollingElement || document.documentElement).querySelectorAll('section'));
    if (!secs.length) return;
    
    const idx = snapCurrentIndex();
    if (delta > 0) {
      const next = Math.min(secs.length - 1, idx + 1);
      if (next !== idx && !window.__snapAnimationInProgress) {
        window.__snapAnimationInProgress = true;
        const scroller = document.querySelector('main') || document.scrollingElement || document.documentElement;
        const rect = secs[next].getBoundingClientRect();
        const currentScrollTop = scroller.scrollTop || window.pageYOffset;
        const targetTop = rect.top + currentScrollTop;
        
        window.__smoothScrollTo(scroller, targetTop, { source: 'snap' });
        setTimeout(() => { window.__snapAnimationInProgress = false; }, 100);
      }
    } else {
      const prev = Math.max(0, idx - 1);
      if (prev !== idx && !window.__snapAnimationInProgress) {
        window.__snapAnimationInProgress = true;
        const scroller = document.querySelector('main') || document.scrollingElement || document.documentElement;
        const rect = secs[prev].getBoundingClientRect();
        const currentScrollTop = scroller.scrollTop || window.pageYOffset;
        const targetTop = rect.top + currentScrollTop;
        
        window.__smoothScrollTo(scroller, targetTop, { source: 'snap' });
        setTimeout(() => { window.__snapAnimationInProgress = false; }, 100);
      }
    }
  }

  // Initialize snap scrolling
  function init() {
    if (!shouldLoad()) return;
    
    window.addEventListener('wheel', handleWheel, { passive: false });
  }

  // Cleanup
  function cleanup() {
    window.removeEventListener('wheel', handleWheel);
  }

  // Public API
  window.SnapScrollExtension = {
    init: init,
    cleanup: cleanup
  };

  // Auto-init
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
