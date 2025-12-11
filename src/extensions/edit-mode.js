/**
 * Edit Mode Extension for inflect
 * 
 * Enables editor keyboard shortcuts and iframe layer manipulation.
 * Only loads when body has 'editor' class or frontmatter has editor: true
 * 
 * Features:
 * - E key: Toggle edit mode (both layers in dual-iframe)
 * - F key: Toggle foreground (SVG) edit mode only
 * - B key: Toggle background (map) edit mode only
 * - C key: Copy active layer URL to clipboard
 * 
 * Supports both single-iframe and dual-iframe modes.
 */

(function() {
  'use strict';

  // Check if we should load this extension
  function shouldLoad() {
    return document.body.classList.contains('editor');
  }

  // Detect which type of content is loaded in iframe
  function getIframeType() {
    const iframe = document.getElementById('if');
    if (!iframe || !iframe.src) return null;
    
    const src = iframe.src;
    if (src.includes('/map/')) return 'map';
    if (src.includes('/svg/')) return 'svg';
    return null;
  }

  // Toggle edit mode for current iframe content
  function toggleEditMode() {
    const isDualMode = document.body.classList.contains('dual-iframe');
    
    if (isDualMode) {
      const backgroundFrame = document.getElementById('background-frame');
      const foregroundFrame = document.getElementById('foreground-frame');
      
      let mapEditEnabled = false;
      let svgEditEnabled = false;
      
      // Toggle map in background-frame
      if (backgroundFrame && backgroundFrame.contentWindow && backgroundFrame.src) {
        try {
          const bgDoc = backgroundFrame.contentWindow.document;
          const layerControls = bgDoc.getElementById('layer-controls');
          if (layerControls) {
            const isHidden = layerControls.classList.contains('hidden');
            layerControls.classList.toggle('hidden');
            
            if (isHidden) {
              backgroundFrame.classList.add('editing-mode');
              mapEditEnabled = true;
            } else {
              backgroundFrame.classList.remove('editing-mode');
            }
          }
        } catch(err) { /* cross-origin */ }
      }
      
      // Toggle SVG/other content in foreground-frame
      if (foregroundFrame && foregroundFrame.contentWindow && foregroundFrame.src) {
        try {
          const fgDoc = foregroundFrame.contentWindow.document;
          const docElement = fgDoc.documentElement;
          const isEmbedded = docElement.classList.contains('embedded');
          
          if (isEmbedded) {
            docElement.classList.remove('embedded');
            foregroundFrame.classList.add('editing-mode');
            svgEditEnabled = true;
          } else {
            docElement.classList.add('embedded');
            foregroundFrame.classList.remove('editing-mode');
          }
        } catch(err) { /* cross-origin */ }
      }
      
      // Update body classes
      if (mapEditEnabled || svgEditEnabled) {
        document.body.classList.add('editing-mode');
        if (mapEditEnabled) document.body.classList.add('bg-edit');
        if (svgEditEnabled) document.body.classList.add('fg-edit');
      } else {
        document.body.classList.remove('editing-mode', 'bg-edit', 'fg-edit');
      }
    } else {
      // Single iframe mode
      const iframe = document.getElementById('if');
      if (!iframe || !iframe.contentWindow) return;
      
      const type = getIframeType();
      if (!type) return;
      
      try {
        const iframeDoc = iframe.contentWindow.document;
        
        if (type === 'map') {
          const layerControls = iframeDoc.getElementById('layer-controls');
          if (layerControls) {
            const isHidden = layerControls.classList.contains('hidden');
            layerControls.classList.toggle('hidden');
            
            if (isHidden) {
              iframe.classList.add('editing-mode');
              document.body.classList.add('editing-mode', 'bg-edit');
            } else {
              iframe.classList.remove('editing-mode');
              document.body.classList.remove('editing-mode', 'bg-edit', 'fg-edit');
            }
          }
        } else if (type === 'svg') {
          const docElement = iframeDoc.documentElement;
          const isEmbedded = docElement.classList.contains('embedded');
          
          if (isEmbedded) {
            docElement.classList.remove('embedded');
            iframe.classList.add('editing-mode');
            document.body.classList.add('editing-mode', 'fg-edit');
          } else {
            docElement.classList.add('embedded');
            iframe.classList.remove('editing-mode');
            document.body.classList.remove('editing-mode', 'bg-edit', 'fg-edit');
          }
        }
      } catch(err) { /* cross-origin */ }
    }
  }

  // Sync body classes based on current editing state
  function syncEditModeBodyClasses() {
    try {
      const iframe = document.getElementById('if');
      const backgroundFrame = document.getElementById('background-frame');
      const foregroundFrame = document.getElementById('foreground-frame');

      const bgEditing = !!(backgroundFrame && backgroundFrame.classList.contains('editing-mode'));
      const fgEditing = !!(foregroundFrame && foregroundFrame.classList.contains('editing-mode'));
      const singleEditing = !!(iframe && iframe.classList.contains('editing-mode'));

      const anyEditing = bgEditing || fgEditing || singleEditing;
      document.body.classList.toggle('editing-mode', anyEditing);

      let singleType = null;
      try { singleType = getIframeType(); } catch(e){}
      const mapEditing = bgEditing || (singleEditing && singleType === 'map');
      const svgEditing = fgEditing || (singleEditing && singleType === 'svg');
      document.body.classList.toggle('bg-edit', !!mapEditing);
      document.body.classList.toggle('fg-edit', !!svgEditing);
    } catch(e) { /* swallow */ }
  }

  // Toggle foreground (SVG) edit mode only
  function toggleForegroundEditMode() {
    const isDualMode = document.body.classList.contains('dual-iframe');
    if (isDualMode) {
      const foregroundFrame = document.getElementById('foreground-frame');
      const backgroundFrame = document.getElementById('background-frame');
      if (!foregroundFrame || !foregroundFrame.contentWindow) return;
      
      // Turn off background if editing
      const bgIsEditing = backgroundFrame && backgroundFrame.classList.contains('editing-mode');
      if (bgIsEditing) {
        try {
          const bgDoc = backgroundFrame.contentWindow.document;
          const layerControls = bgDoc.getElementById('layer-controls');
          if (layerControls && !layerControls.classList.contains('hidden')) {
            layerControls.classList.add('hidden');
            backgroundFrame.classList.remove('editing-mode');
          }
        } catch(err) { /* cross-origin */ }
      }
      
      try {
        const fgDoc = foregroundFrame.contentWindow.document;
        const docElement = fgDoc.documentElement;
        const isEmbedded = docElement.classList.contains('embedded');
        if (isEmbedded) {
          docElement.classList.remove('embedded');
          foregroundFrame.classList.add('editing-mode');
          fgDoc.body.classList.remove('ui-hidden');
          // Disable mouse on background
          if (backgroundFrame) {
            backgroundFrame.classList.add('inactive');
            backgroundFrame.style.pointerEvents = 'none';
          }
          foregroundFrame.classList.remove('inactive');
          foregroundFrame.style.pointerEvents = '';
        } else {
          docElement.classList.add('embedded');
          foregroundFrame.classList.remove('editing-mode');
          fgDoc.body.classList.add('ui-hidden');
          // Re-enable background
          if (backgroundFrame) {
            backgroundFrame.classList.remove('inactive');
            backgroundFrame.style.pointerEvents = '';
          }
          foregroundFrame.style.pointerEvents = '';
        }
        syncEditModeBodyClasses();
      } catch(err) { /* cross-origin */ }
    } else {
      // Single iframe mode: only act on SVG
      const iframe = document.getElementById('if');
      if (!iframe || !iframe.contentWindow) return;
      const type = getIframeType();
      if (type !== 'svg') return;
      try {
        const iframeDoc = iframe.contentWindow.document;
        const docElement = iframeDoc.documentElement;
        const isEmbedded = docElement.classList.contains('embedded');
        if (isEmbedded) {
          docElement.classList.remove('embedded');
          iframe.classList.add('editing-mode');
          iframeDoc.body.classList.remove('ui-hidden');
        } else {
          docElement.classList.add('embedded');
          iframe.classList.remove('editing-mode');
          iframeDoc.body.classList.add('ui-hidden');
        }
        syncEditModeBodyClasses();
      } catch(err) { /* cross-origin */ }
    }
  }

  // Toggle background (map) edit mode only
  function toggleBackgroundEditMode() {
    const isDualMode = document.body.classList.contains('dual-iframe');
    if (isDualMode) {
      const backgroundFrame = document.getElementById('background-frame');
      const foregroundFrame = document.getElementById('foreground-frame');
      if (!backgroundFrame || !backgroundFrame.contentWindow) return;
      
      // Turn off foreground if editing
      if (foregroundFrame && foregroundFrame.classList.contains('editing-mode')) {
        try {
          const fgDoc = foregroundFrame.contentWindow.document;
          const fgLayerControls = fgDoc.getElementById('layer-controls');
          if (fgLayerControls && !fgLayerControls.classList.contains('hidden')) {
            fgLayerControls.classList.add('hidden');
            foregroundFrame.classList.remove('editing-mode');
          }
        } catch(e){}
      }
      
      try {
        const bgDoc = backgroundFrame.contentWindow.document;
        const layerControls = bgDoc.getElementById('layer-controls');
        if (layerControls) {
          const isHidden = layerControls.classList.contains('hidden');
          layerControls.classList.toggle('hidden');
          if (isHidden) {
            backgroundFrame.classList.add('editing-mode');
            // Disable mouse on foreground
            if (foregroundFrame) {
              foregroundFrame.classList.add('inactive');
              foregroundFrame.style.pointerEvents = 'none';
            }
            backgroundFrame.classList.remove('inactive');
            backgroundFrame.style.pointerEvents = '';
          } else {
            backgroundFrame.classList.remove('editing-mode');
            // Re-enable foreground
            if (foregroundFrame) {
              foregroundFrame.classList.remove('inactive');
              foregroundFrame.style.pointerEvents = '';
            }
            backgroundFrame.style.pointerEvents = '';
          }
          syncEditModeBodyClasses();
        }
      } catch(err) { /* cross-origin */ }
    } else {
      // Single iframe mode: only act on map
      const iframe = document.getElementById('if');
      if (!iframe || !iframe.contentWindow) return;
      const type = getIframeType();
      if (type !== 'map') return;
      try {
        const iframeDoc = iframe.contentWindow.document;
        const layerControls = iframeDoc.getElementById('layer-controls');
        if (layerControls) {
          const isHidden = layerControls.classList.contains('hidden');
          layerControls.classList.toggle('hidden');
          if (isHidden) {
            iframe.classList.add('editing-mode');
          } else {
            iframe.classList.remove('editing-mode');
          }
          syncEditModeBodyClasses();
        }
      } catch(err) { /* cross-origin */ }
    }
  }

  // Determine active layer
  function getActiveLayerFrame() {
    const isDualMode = document.body.classList.contains('dual-iframe');
    if (!isDualMode) {
      const iframe = document.getElementById('if');
      let type = null;
      try { type = getIframeType(); } catch(e){}
      const role = (type === 'map') ? 'background' : 'foreground';
      return { frame: iframe, role, type };
    }

    const backgroundFrame = document.getElementById('background-frame');
    const foregroundFrame = document.getElementById('foreground-frame');

    const svgEdit = document.body.classList.contains('fg-edit') || (foregroundFrame && foregroundFrame.classList.contains('editing-mode'));
    const mapEdit = document.body.classList.contains('bg-edit') || (backgroundFrame && backgroundFrame.classList.contains('editing-mode'));
    if (svgEdit && !mapEdit) return { frame: foregroundFrame, role: 'foreground', type: 'svg' };
    if (mapEdit && !svgEdit) return { frame: backgroundFrame, role: 'background', type: 'map' };

    const bgInactive = backgroundFrame && backgroundFrame.classList.contains('inactive');
    const fgInactive = foregroundFrame && foregroundFrame.classList.contains('inactive');
    if (bgInactive && !fgInactive) return { frame: foregroundFrame, role: 'foreground', type: 'svg' };
    if (fgInactive && !bgInactive) return { frame: backgroundFrame, role: 'background', type: 'map' };

    return { frame: foregroundFrame || backgroundFrame || null, role: foregroundFrame ? 'foreground' : 'background', type: foregroundFrame ? 'svg' : 'map' };
  }

  // Extract relative URL from frame
  function extractRelativeLayerUrl(frame, expectedType) {
    if (!frame || !frame.src) return null;
    try {
      const u = new URL(frame.src, window.location.origin);
      const path = u.pathname || '';
      const hash = u.hash || '';

      function pickRelFromPath(p, keyword) {
        const withSlash = '/' + keyword + '/';
        const idx = p.lastIndexOf(withSlash);
        if (idx >= 0) return p.substring(idx + 1) + (hash || '');
        const endMarker = '/' + keyword;
        if (p.endsWith(endMarker)) return keyword + (hash || '');
        return null;
      }

      if (expectedType === 'map') {
        return pickRelFromPath(path, 'map');
      } else if (expectedType === 'svg') {
        return pickRelFromPath(path, 'svg');
      } else {
        return pickRelFromPath(path, 'svg') || pickRelFromPath(path, 'map');
      }
    } catch (e) {
      return null;
    }
  }

  // Copy text to clipboard
  async function copyTextToClipboard(text) {
    if (!text) return false;
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
        return true;
      }
    } catch (e) { /* fallback below */ }
    try {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.top = '-1000px';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      const ok = document.execCommand('copy');
      document.body.removeChild(ta);
      return !!ok;
    } catch (e) {
      return false;
    }
  }

  // Copy active layer URL
  async function copyActiveLayerUrl() {
    const isDualMode = document.body.classList.contains('dual-iframe');
    if (isDualMode) {
      const { frame, role } = getActiveLayerFrame();
      const expectedType = (role === 'background') ? 'map' : 'svg';
      const rel = extractRelativeLayerUrl(frame, expectedType);
      if (!rel) return false;
      return copyTextToClipboard(rel);
    } else {
      const iframe = document.getElementById('if');
      const type = (function(){ try { return getIframeType(); } catch(e){ return null; } })();
      const rel = extractRelativeLayerUrl(iframe, type);
      if (!rel) return false;
      return copyTextToClipboard(rel);
    }
  }

  // Keyboard shortcuts
  function handleKeydown(e) {
    if (!document.body.classList.contains('editor')) return;
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    
    if (e.code === 'KeyE') {
      e.preventDefault();
      toggleEditMode();
    } else if (e.code === 'KeyF') {
      e.preventDefault();
      toggleForegroundEditMode();
    } else if (e.code === 'KeyB') {
      e.preventDefault();
      toggleBackgroundEditMode();
    } else if (e.code === 'KeyC') {
      e.preventDefault();
      try { copyActiveLayerUrl(); } catch(err) {}
    }
  }

  // Listen for messages from iframes
  function handleMessage(e) {
    if (e.data && e.data.type === 'toggle-foreground-edit') {
      try { toggleForegroundEditMode(); } catch(err) {}
      return;
    }
    if (e.data && e.data.type === 'toggle-background-edit') {
      try { toggleBackgroundEditMode(); } catch(err) {}
      return;
    }
    if (e.data && (e.data.type === 'fg-edit-mode' || e.data.type === 'bg-edit-mode')) {
      const isDualMode = document.body.classList.contains('dual-iframe');
      
      if (isDualMode) {
        const backgroundFrame = document.getElementById('background-frame');
        const foregroundFrame = document.getElementById('foreground-frame');
        
        let sourceFrame = null;
        if (backgroundFrame && e.source === backgroundFrame.contentWindow) {
          sourceFrame = backgroundFrame;
        } else if (foregroundFrame && e.source === foregroundFrame.contentWindow) {
          sourceFrame = foregroundFrame;
        }
        
        if (sourceFrame) {
          if (e.data.enabled) {
            sourceFrame.classList.add('editing-mode');
            document.body.classList.add('editing-mode');
            if (e.data.type === 'fg-edit-mode') {
              document.body.classList.add('fg-edit');
            } else {
              document.body.classList.add('bg-edit');
            }
          } else {
            sourceFrame.classList.remove('editing-mode');
            const otherFrame = (sourceFrame === backgroundFrame) ? foregroundFrame : backgroundFrame;
            const otherInEditMode = otherFrame && otherFrame.classList.contains('editing-mode');
            if (!otherInEditMode) {
              document.body.classList.remove('editing-mode', 'bg-edit', 'fg-edit');
            }
          }
        }
      } else {
        const iframe = document.getElementById('if');
        if (iframe) {
          if (e.data.enabled) {
            iframe.classList.add('editing-mode');
            if (e.data.type === 'fg-edit-mode') {
              document.body.classList.add('editing-mode', 'fg-edit');
            } else {
              document.body.classList.add('editing-mode', 'bg-edit');
            }
          } else {
            iframe.classList.remove('editing-mode');
            document.body.classList.remove('editing-mode', 'bg-edit', 'fg-edit');
          }
        }
      }
    }
  }

  // Initialize
  function init() {
    if (!shouldLoad()) return;
    
    document.addEventListener('keydown', handleKeydown);
    window.addEventListener('message', handleMessage);
  }

  // Cleanup
  function cleanup() {
    document.removeEventListener('keydown', handleKeydown);
    window.removeEventListener('message', handleMessage);
  }

  // Public API
  window.EditModeExtension = {
    init: init,
    cleanup: cleanup,
    toggleEditMode: toggleEditMode,
    toggleForegroundEditMode: toggleForegroundEditMode,
    toggleBackgroundEditMode: toggleBackgroundEditMode,
    copyActiveLayerUrl: copyActiveLayerUrl
  };

  // Auto-init
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
