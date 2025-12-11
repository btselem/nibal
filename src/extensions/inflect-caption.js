/**
 * Inflect Caption Extension for inflect
 * 
 * Displays overlay captions for active inflection links.
 * Caption text comes from markdown link title attribute.
 * 
 * Features:
 * - Creates fixed-position caption overlay
 * - Combines captions from dual-iframe layers
 * - Special styling for !!! note captions
 * - Auto-updates on inflection changes
 */

(function() {
  'use strict';

  let captionElement = null;
  let bgCaption = '';
  let fgCaption = '';
  let lastCaption = '';
  let hideTimeout = null;
  let updateTimeout = null; // Debounce rapid updates

  // Update combined caption
  function updateCombinedCaption() {
    if (!captionElement) return;
    
    try {
      const parts = [bgCaption, fgCaption].filter(c => c.trim().length > 0);
      const combined = parts.join(' • ');
      
      // Clear any pending hide timeout
      if (hideTimeout) {
        clearTimeout(hideTimeout);
        hideTimeout = null;
      }
      
      if (!combined) {
        // Don't hide immediately - persist last caption for a moment
        // This prevents flashing when links rapidly enter/exit viewport on mobile
        if (lastCaption && captionElement.style.display !== 'none') {
          hideTimeout = setTimeout(() => {
            captionElement.style.display = 'none';
            lastCaption = '';
          }, 2000); // Keep visible for 2s after losing active state
        } else {
          captionElement.style.display = 'none';
        }
        return;
      }
      
      // Update caption content
      lastCaption = combined;
      
      // Check for !!! note styling
      if (combined.startsWith('!!!')) {
        captionElement.classList.add('note-caption');
        captionElement.innerHTML = combined.substring(3).trim();
      } else {
        captionElement.classList.remove('note-caption');
        captionElement.innerHTML = combined;
      }
      
      captionElement.style.display = '';
    } catch(e) { /* swallow */ }
  }

  // Update caption by checking active inflection links
  function updateInflectCaption() {
    try {
      bgCaption = '';
      fgCaption = '';

      const isDualMode = document.body.classList.contains('dual-iframe');
      
      if (isDualMode) {
        // Check background frame
        const backgroundFrame = document.getElementById('background-frame');
        if (backgroundFrame && backgroundFrame.src) {
          try {
            const bgDoc = backgroundFrame.contentWindow.document;
            const bgActiveLinks = Array.from(bgDoc.querySelectorAll('a.active, [data-active="true"]'));
            if (bgActiveLinks.length > 0) {
              const titles = bgActiveLinks.map(a => a.getAttribute('title') || '').filter(t => t);
              if (titles.length > 0) {
                bgCaption = titles.join(' • ');
              }
            }
          } catch(e) { /* cross-origin */ }
        }

        // Check foreground frame
        const foregroundFrame = document.getElementById('foreground-frame');
        if (foregroundFrame && foregroundFrame.src) {
          try {
            const fgDoc = foregroundFrame.contentWindow.document;
            const fgActiveLinks = Array.from(fgDoc.querySelectorAll('a.active, [data-active="true"]'));
            if (fgActiveLinks.length > 0) {
              const titles = fgActiveLinks.map(a => a.getAttribute('title') || '').filter(t => t);
              if (titles.length > 0) {
                fgCaption = titles.join(' • ');
              }
            }
          } catch(e) { /* cross-origin */ }
        }
      } else {
        // Single iframe mode
        const iframe = document.getElementById('if');
        if (iframe && iframe.src) {
          try {
            const iframeDoc = iframe.contentWindow.document;
            const activeLinks = Array.from(iframeDoc.querySelectorAll('a.active, [data-active="true"]'));
            if (activeLinks.length > 0) {
              const titles = activeLinks.map(a => a.getAttribute('title') || '').filter(t => t);
              if (titles.length > 0) {
                bgCaption = titles.join(' • ');
              }
            }
          } catch(e) { /* cross-origin */ }
        }
      }

      // Also check main page for active links
      const mainActiveLinks = Array.from(document.querySelectorAll('main a.active, main [data-active="true"]'));
      if (mainActiveLinks.length > 0) {
        const titles = mainActiveLinks.map(a => a.getAttribute('title') || '').filter(t => t);
        if (titles.length > 0 && !bgCaption && !fgCaption) {
          bgCaption = titles.join(' • ');
        }
      }

      updateCombinedCaption();
    } catch(e) { /* swallow */ }
  }

  // Debounced wrapper for updateInflectCaption
  function debouncedUpdateInflectCaption() {
    if (updateTimeout) {
      clearTimeout(updateTimeout);
    }
    updateTimeout = setTimeout(() => {
      updateInflectCaption();
      updateTimeout = null;
    }, 150); // 150ms debounce to prevent rapid repeated calls
  }

  // Initialize caption element
  function init() {
    captionElement = document.getElementById('inflect-caption');
    if (!captionElement) {
      captionElement = document.createElement('div');
      captionElement.id = 'inflect-caption';
      captionElement.className = 'inflect-caption';
      captionElement.style.display = 'none';
      document.body.appendChild(captionElement);
    }

    // Expose DEBOUNCED update function globally
    window.__updateInflectCaption = debouncedUpdateInflectCaption;

    // Event-driven updates instead of polling
    // Note: Scroll updates handled by IntersectionObserver in main index.html
    // which calls __updateInflectCaption after processing entries
    
    // Update on window messages (iframe communication)
    window.addEventListener('message', (e) => {
      if (e.data && (e.data.type === 'inflection-change' || e.data.type === 'active-link-change')) {
        debouncedUpdateInflectCaption();
      }
    });
    
    // Update when body classes change (mode switches)
    const bodyObserver = new MutationObserver(() => {
      debouncedUpdateInflectCaption();
    });
    bodyObserver.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    
    // Initial update
    updateInflectCaption();
  }

  // Cleanup
  function cleanup() {
    if (hideTimeout) {
      clearTimeout(hideTimeout);
      hideTimeout = null;
    }
    if (captionElement && captionElement.parentNode) {
      captionElement.parentNode.removeChild(captionElement);
    }
    captionElement = null;
    window.__updateInflectCaption = null;
  }

  // Public API
  window.InflectCaptionExtension = {
    init: init,
    cleanup: cleanup,
    update: updateInflectCaption
  };

  // Auto-init
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
