/**
 * Frontmatter Extension for inflect
 * 
 * Parses YAML frontmatter and inline markers from markdown files.
 * Handles:
 * - css: path/to/style.css
 * - body-class: class-name
 * - dual-iframe: true/false
 * - extensions: [array of extension names]
 * - chapters: true/false
 * - snap: true/false
 * - editor: true/false
 * - animate-sections: true/false
 * 
 * Also supports legacy inline markers like {.css(path)} and {.ltr}
 */

(function() {
  'use strict';

  // Extract YAML front-matter and inline markers
  function extractFrontMatter(text) {
    const fmRe = /^\s*---\n([\s\S]*?)\n---\s*\n?/;
    const fm = text.match(fmRe);
    
    if (fm) {
      const body = fm[1];
      
      // Parse frontmatter fields
      const cssMatch = body.match(/^\s*css:\s*(.+)\s*$/m);
      const bcMatch = body.match(/^\s*body-class:\s*(.+)\s*$/m);
      const dualMatch = body.match(/^\s*dual-iframe:\s*(true|yes)\s*$/mi);
      const extMatch = body.match(/^\s*extensions:\s*\[([^\]]+)\]\s*$/m);
      const chaptersMatch = body.match(/^\s*chapters:\s*(true|yes|false|no)\s*$/mi);
      const snapMatch = body.match(/^\s*snap:\s*(true|yes|false|no)\s*$/mi);
      const editorMatch = body.match(/^\s*editor:\s*(true|yes|false|no)\s*$/mi);
      const animateMatch = body.match(/^\s*animate-sections:\s*(true|yes|false|no)\s*$/mi);
      
      const cssPath = cssMatch ? cssMatch[1].trim().replace(/^['\"]|['\"]$/g, '') : null;
      const bodyClass = bcMatch ? bcMatch[1].trim().replace(/^['\"]|['\"]$/g, '') : null;
      const dualIframe = !!dualMatch;
      
      // Parse extensions array
      let extensions = [];
      if (extMatch) {
        extensions = extMatch[1].split(',').map(e => e.trim().replace(/^['\"]|['\"]$/g, ''));
      }
      
      // Parse boolean flags
      const chapters = chaptersMatch ? /true|yes/i.test(chaptersMatch[1]) : null;
      const snap = snapMatch ? /true|yes/i.test(snapMatch[1]) : null;
      const editor = editorMatch ? /true|yes/i.test(editorMatch[1]) : null;
      const animateSections = animateMatch ? /true|yes/i.test(animateMatch[1]) : null;
      
      text = text.replace(fmRe, '');
      
      // Return both flat values (for backwards compat) and nested config
      const config = {
        css: cssPath,
        bodyClass,
        dualIframe,
        extensions,
        chapters,
        snap,
        editor,
        animateSections
      };
      
      return { 
        text, 
        config,
        // Legacy flat structure for backwards compatibility
        css: cssPath, 
        bodyClass, 
        dualIframe,
        extensions,
        chapters,
        snap,
        editor,
        animateSections
      };
    }

    // Single-line marker: {.css(src/path.css)} or {.css src/path.css}
    const markerRe = /^\s*\{\.css(?:\(\s*([^\)]+?)\s*\)|\s+([^\}\r\n]+))\}\s*(?:\r?\n){1,2}/;
    const m = text.match(markerRe);
    if (m) {
      const path = (m[1] || m[2] || '').trim().replace(/^['\"]|['\"]$/g, '');
      text = text.replace(markerRe, '');
      
      const config = {
        css: path,
        bodyClass: null,
        dualIframe: false,
        extensions: [],
        chapters: null,
        snap: null,
        editor: null,
        animateSections: null
      };
      
      return { 
        text,
        config,
        // Legacy flat structure
        css: path, 
        bodyClass: null, 
        dualIframe: false,
        extensions: [],
        chapters: null,
        snap: null,
        editor: null,
        animateSections: null
      };
    }

    const config = {
      css: null,
      bodyClass: null,
      dualIframe: false,
      extensions: [],
      chapters: null,
      snap: null,
      editor: null,
      animateSections: null
    };

    return { 
      text,
      config,
      // Legacy flat structure
      css: null, 
      bodyClass: null, 
      dualIframe: false,
      extensions: [],
      chapters: null,
      snap: null,
      editor: null,
      animateSections: null
    };
  }

  // Validate CSS path for security
  function isSafeCssPath(p) {
    if (!p) return false;
    if (/^[a-zA-Z]+:\/\//.test(p) || p.startsWith('data:')) return false;
    if (p.includes('..')) return false;
    if (!/^(src|css|pages)\/[A-Za-z0-9_\-\/\.]+\.css$/.test(p)) return false;
    return true;
  }

  // Apply page-specific CSS
  function applyPageCss(cssPath) {
    // Remove any previously added page CSS links
    document.querySelectorAll('link[data-page-css]').forEach(link => link.remove());
    if (!cssPath) return;
    
    cssPath.split(',').map(s => s.trim()).forEach(path => {
      if (!isSafeCssPath(path)) return;
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = path;
      link.setAttribute('data-page-css', 'true');
      document.head.appendChild(link);
    });
  }

  // Apply body classes from frontmatter
  function applyBodyClasses(pageBodyClasses) {
    if (!pageBodyClasses) return;
    
    // Remove previously applied classes
    const prev = document.body.getAttribute('data-body-classes');
    if (prev) {
      prev.split(' ').forEach(c => document.body.classList.remove(c));
    }
    
    // Apply new classes
    pageBodyClasses.split(' ').forEach(c => document.body.classList.add(c));
    document.body.setAttribute('data-body-classes', pageBodyClasses);
  }

  // Apply dual-iframe mode
  function applyDualIframeMode(enabled) {
    if (enabled) {
      document.body.classList.add('dual-iframe');
    } else {
      document.body.classList.remove('dual-iframe');
    }
    window.__dualIframeMode = enabled;
  }

  // Detect and strip leading body-class marker from raw markdown
  function extractInlineBodyClass(text) {
    const rawBodyMarkerRe = /^\s*\{\.([A-Za-z0-9_\- ]+)\}\s*(?:\r?\n){1,2}/;
    const rawBm = text.match(rawBodyMarkerRe);
    if (rawBm) {
      const bodyClass = rawBm[1].trim().replace(/\s+/g, ' ');
      text = text.replace(rawBodyMarkerRe, '');
      return { text, bodyClass };
    }
    return { text, bodyClass: null };
  }

  // Public API
  window.FrontmatterExtension = {
    extractFrontMatter: extractFrontMatter,
    applyPageCss: applyPageCss,
    applyBodyClasses: applyBodyClasses,
    applyDualIframeMode: applyDualIframeMode,
    extractInlineBodyClass: extractInlineBodyClass,
    isSafeCssPath: isSafeCssPath
  };

})();
