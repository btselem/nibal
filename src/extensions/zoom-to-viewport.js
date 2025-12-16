/**
 * Zoom-to-Viewport Extension
 * 
 * Adjusts map zoom levels in URLs based on viewport width during markdown rendering.
 * This prevents zoom oscillation by handling the adjustment at the rendering layer
 * instead of reactively in the map application.
 * 
 * Enable in frontmatter with:
 *   zoom-to-viewport: true
 *   extensions: [inflect-caption, zoom-to-viewport]
 */

(function() {
  'use strict';

  const MOBILE_WIDTH_THRESHOLD = 1000;
  const MOBILE_ZOOM_ADJUSTMENT = -1;
  
  let isEnabled = false;
  let currentViewportWidth = window.innerWidth;
  let resizeDebounceTimer = null;

  /**
   * Check if zoom-to-viewport functionality is enabled
   */
  function checkEnabled() {
    const frontmatter = window.frontmatter || {};
    isEnabled = frontmatter['zoom-to-viewport'] === true;
    return isEnabled;
  }

  /**
   * Determine if current viewport is mobile
   */
  function isMobile() {
    return currentViewportWidth <= MOBILE_WIDTH_THRESHOLD;
  }

  /**
   * Parse map hash format: #lat,lng,zoom,bearing,pitch
   * Returns {lat, lng, zoom, bearing, pitch} or null if invalid
   */
  function parseMapHash(hash) {
    if (!hash || !hash.includes('#')) return null;
    
    // Only split on the FIRST # to preserve layer parameters like #2, #3
    const firstHashIndex = hash.indexOf('#');
    const hashPart = hash.substring(firstHashIndex + 1);
    if (!hashPart) return null;
    
    // Split by / to separate camera from layers
    const parts = hashPart.split('/');
    const cameraStr = parts[0];
    
    const values = cameraStr.split(',').map(Number);
    if (values.length < 5) return null;
    
    return {
      lat: values[0],
      lng: values[1],
      zoom: values[2],
      bearing: values[3],
      pitch: values[4],
      layersPart: parts.slice(1).join('/')
    };
  }

  /**
   * Build map URL with adjusted zoom
   */
  function buildMapUrl(parsed) {
    const camera = `${parsed.lat},${parsed.lng},${parsed.zoom},${parsed.bearing},${parsed.pitch}`;
    return parsed.layersPart ? `#${camera}/${parsed.layersPart}` : `#${camera}`;
  }

  /**
   * Adjust zoom in a map URL if needed
   */
  function adjustMapZoom(url) {
    if (!isEnabled || !isMobile()) return url;
    
    // Only process map/ URLs
    if (!url.includes('map/')) return url;
    
    // Split ONLY on the first # to preserve layer parameters that contain # (like #2, #3)
    const firstHashIndex = url.indexOf('#');
    if (firstHashIndex === -1) return url;
    
    const basePart = url.substring(0, firstHashIndex);
    const hashPart = url.substring(firstHashIndex + 1);
    
    const parsed = parseMapHash('#' + hashPart);
    if (!parsed) return url;
    
    // Apply mobile zoom adjustment
    parsed.zoom = parsed.zoom + MOBILE_ZOOM_ADJUSTMENT;
    
    return basePart + buildMapUrl(parsed);
  }

  /**
   * Process all map links in the document
   */
  function processMapLinks() {
    if (!checkEnabled()) return;
    
    // Process iframe src attributes
    document.querySelectorAll('iframe[src*="map/"]').forEach(iframe => {
      const originalSrc = iframe.getAttribute('data-original-src') || iframe.src;
      iframe.setAttribute('data-original-src', originalSrc);
      iframe.src = adjustMapZoom(originalSrc);
    });
    
    // Process anchor href attributes
    document.querySelectorAll('a[href*="map/"]').forEach(link => {
      const originalHref = link.getAttribute('data-original-href') || link.href;
      link.setAttribute('data-original-href', originalHref);
      link.href = adjustMapZoom(originalHref);
    });
  }

  /**
   * Handle window resize with debouncing
   */
  function handleResize() {
    clearTimeout(resizeDebounceTimer);
    resizeDebounceTimer = setTimeout(() => {
      const newWidth = window.innerWidth;
      const wasMobile = currentViewportWidth <= MOBILE_WIDTH_THRESHOLD;
      const isNowMobile = newWidth <= MOBILE_WIDTH_THRESHOLD;
      
      currentViewportWidth = newWidth;
      
      // Only reprocess if mobile state changed
      if (wasMobile !== isNowMobile) {
        processMapLinks();
      }
    }, 500);
  }

  /**
   * Initialize the extension
   */
  function init() {
    // Check if enabled via frontmatter
    if (!checkEnabled()) return;
    
    // Process links after DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', processMapLinks);
    } else {
      processMapLinks();
    }
    
    // Handle window resize
    window.addEventListener('resize', handleResize);
    
    // Reprocess when markdown content changes (for dynamic rendering)
    if (window.MutationObserver) {
      const observer = new MutationObserver((mutations) => {
        let shouldProcess = false;
        mutations.forEach((mutation) => {
          if (mutation.addedNodes.length > 0) {
            mutation.addedNodes.forEach((node) => {
              if (node.nodeType === 1 && // Element node
                  (node.tagName === 'IFRAME' || node.querySelector)) {
                shouldProcess = true;
              }
            });
          }
        });
        if (shouldProcess) {
          processMapLinks();
        }
      });
      
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
    }
  }

  // Auto-initialize
  init();
  
  // Export for debugging
  window.zoomToViewport = {
    isEnabled: () => isEnabled,
    isMobile,
    adjustMapZoom,
    processMapLinks
  };
})();
