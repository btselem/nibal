/**
 * Dual-iframe Extension for inflect
 * 
 * Manages two separate iframe layers (background + foreground) for complex compositions.
 * Background typically shows maps, foreground shows SVG/other content.
 * 
 * Only loads when frontmatter has dual-iframe: true
 * 
 * Features:
 * - Creates and manages background-frame and foreground-frame iframes
 * - Routes content to appropriate layer based on URL patterns
 * - Handles clear patterns (fg:blank, bg:blank, both:blank)
 * - Syncs body classes for styling
 */

(function() {
  'use strict';

  // Initialize dual-iframe mode
  function initDualIframe() {
    const main = document.querySelector('main');
    if (!main) return;

    const backgroundFrame = document.getElementById('background-frame');
    const foregroundFrame = document.getElementById('foreground-frame');

    // Create frames if they don't exist
    if (!backgroundFrame) {
      const bg = document.createElement('iframe');
      bg.id = 'background-frame';
      bg.setAttribute('allowtransparency', 'true');
      bg.setAttribute('frameborder', '0');
      bg.style.background = 'transparent';
      main.appendChild(bg);
    }
    
    if (!foregroundFrame) {
      const fg = document.createElement('iframe');
      fg.id = 'foreground-frame';
      fg.setAttribute('allowtransparency', 'true');
      fg.setAttribute('frameborder', '0');
      fg.style.background = 'transparent';
      main.appendChild(fg);
    }

    // Set up foreground load handler
    const fg = document.getElementById('foreground-frame');
    if (fg) {
      fg.addEventListener('load', () => {
        fg.classList.remove('inactive');
      });
    }

    // Set global flag
    window.__dualIframeMode = true;
    document.body.classList.add('dual-iframe', 'dual');
  }

  // Cleanup dual-iframe mode
  function cleanupDualIframe() {
    const backgroundFrame = document.getElementById('background-frame');
    const foregroundFrame = document.getElementById('foreground-frame');
    
    if (backgroundFrame && backgroundFrame.parentNode) {
      backgroundFrame.parentNode.removeChild(backgroundFrame);
    }
    if (foregroundFrame && foregroundFrame.parentNode) {
      foregroundFrame.parentNode.removeChild(foregroundFrame);
    }

    window.__dualIframeMode = false;
    document.body.classList.remove('dual-iframe', 'dual');
  }

  // Sync body classes based on editing state
  function syncBodyClasses() {
    const iframe = document.getElementById('if');
    const backgroundFrame = document.getElementById('background-frame');
    const foregroundFrame = document.getElementById('foreground-frame');

    const bgEditing = !!(backgroundFrame && backgroundFrame.classList.contains('editing-mode'));
    const fgEditing = !!(foregroundFrame && foregroundFrame.classList.contains('editing-mode'));
    const singleEditing = !!(iframe && iframe.classList.contains('editing-mode'));

    const anyEditing = bgEditing || fgEditing || singleEditing;
    document.body.classList.toggle('editing-mode', anyEditing);

    const isDualMode = document.body.classList.contains('dual-iframe');
    document.body.classList.toggle('dual', isDualMode);
  }

  // Public API
  window.DualIframeExtension = {
    init: initDualIframe,
    cleanup: cleanupDualIframe,
    syncBodyClasses: syncBodyClasses
  };

})();
