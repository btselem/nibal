// Optimized typewriter using Typed.js library
// Replaces the custom typewriter with a more performant solution
(function(){
  if (typeof window === 'undefined' || !document) return;

  // Inject character fade-in CSS to match previous typewriter styling
  const style = document.createElement('style');
  style.id = 'typewriter-typed-style';
  style.textContent = `
/* Typed character fade-in - matches previous tw-char styling */
.typed-cursor {
  display: none !important; /* Hide Typed.js default cursor, we use CSS ::after */
}
/* Smooth character appearance */
.typewriter span {
  display: inline;
  opacity: 0;
  animation: tw-char-fadein 50ms linear forwards;
}
@keyframes tw-char-fadein {
  to { opacity: 1; }
}
`;
  document.head.appendChild(style);

  // Wait for Typed.js library to load
  function init() {
    if (typeof Typed === 'undefined') {
      setTimeout(init, 100);
      return;
    }

    const instances = new Map(); // Track Typed instances for cleanup
    
    function startTypingForElement(el, opts) {
      try {
        // CRITICAL: Check if this exact element has already been processed
        // Use a unique marker to prevent re-processing the same element
        if (!el || el.dataset._tw_started === '1') {
          return; // Already processed, skip
        }
        el.dataset._tw_started = '1'; // Mark BEFORE any processing to prevent race conditions
        
        // DIAGNOSTIC: Log link state BEFORE typewriter processes the section
        const linksBeforeProcessing = Array.from(el.querySelectorAll('a:not(.dontinflect)'));
        console.log('[Typewriter PRE] Section about to be processed has', linksBeforeProcessing.length, 'inflection links');
        linksBeforeProcessing.forEach((link, idx) => {
          console.log('[Typewriter PRE]   Link', idx, '- href:', link.getAttribute('href'), 'parent:', link.parentElement?.tagName);
        });
        
        // CRITICAL: Measure and lock the section height BEFORE any modifications
        // This ensures snap calculations remain consistent throughout the typing animation
        const sectionHeight = el.getBoundingClientRect().height;
        if (sectionHeight > 0) {
          el.style.height = Math.ceil(sectionHeight) + 'px';
          el.style.minHeight = Math.ceil(sectionHeight) + 'px';
        }
        
        // Get all paragraph children that have text content (not empty link paragraphs)
        let paragraphs = Array.from(el.querySelectorAll('p')).filter(p => {
          const text = p.textContent || '';
          return text.trim().length > 0;
        });
        
        // CRITICAL: If no <p> tags found but section has direct text nodes,
        // wrap them in a <p> tag so typewriter can process them
        if (paragraphs.length === 0) {
          const hasDirectTextContent = Array.from(el.childNodes).some(node => {
            return (node.nodeType === 3 && node.textContent.trim().length > 0) || // Text node
                   (node.nodeType === 1 && node.tagName !== 'A' && node.tagName !== 'SECTION' && node.textContent.trim().length > 0);
          });
          
          if (hasDirectTextContent) {
            console.log('[Typewriter] Wrapping direct text content in <p> tag');
            
            // Collect direct text nodes and non-anchor elements
            const textFragments = [];
            const nodesToRemove = [];
            
            for (let node of el.childNodes) {
              if (node.nodeType === 3 && node.textContent.trim().length > 0) {
                // Text node with content
                textFragments.push(node.textContent);
                nodesToRemove.push(node);
              } else if (node.nodeType === 1 && node.tagName !== 'A' && node.tagName !== 'SECTION') {
                // Element that's not an anchor or section
                textFragments.push(node.outerHTML);
                nodesToRemove.push(node);
              }
            }
            
            // Create new paragraph with the text
            if (textFragments.length > 0) {
              const newP = document.createElement('p');
              newP.innerHTML = textFragments.join('');
              
              // Find where to insert it (after all anchors)
              const anchors = el.querySelectorAll('a');
              const lastAnchor = anchors[anchors.length - 1];
              if (lastAnchor) {
                lastAnchor.parentNode.insertBefore(newP, lastAnchor.nextSibling);
              } else {
                el.appendChild(newP);
              }
              
              // Remove the original direct text nodes
              nodesToRemove.forEach(node => {
                try { node.parentNode.removeChild(node); } catch(e) {}
              });
              
              paragraphs = [newP];
            }
          }
        }
        
        if (paragraphs.length === 0) return;
        
        // CRITICAL: Extract ALL inflection links from the SECTION (not just current paragraph)
        // This handles cases where links are in one <p> and text is in another <p>
        const allLinksInSection = Array.from(el.querySelectorAll('a'));
        if (allLinksInSection.length > 0) {
          console.log('[Typewriter] Section has', allLinksInSection.length, 'total links');
        }
        
        // CRITICAL: Collect original links from paragraphs BEFORE any modification
        // Count unique links (by href) to avoid processing duplicates
        const seenHrefs = new Set();
        const allSectionLinks = Array.from(el.querySelectorAll('a')).filter(link => {
          const href = link.getAttribute('href');
          if (!href || seenHrefs.has(href)) return false;
          seenHrefs.add(href);
          return true;
        });
        
        if (allSectionLinks.length > 0) {
          console.log('[Typewriter] Section has', allSectionLinks.length, 'unique links (before processing)');
        }
        
        let sectionLinksUsed = false; // Track if section links have been claimed by a paragraph
        
        // Measure and prepare all paragraphs first
        const paragraphData = paragraphs.map((p, pIdx) => {
          const text = p.textContent || '';
          const originalHeight = p.getBoundingClientRect().height;
          
          // Extract links directly in this paragraph
          const linksInParagraph = Array.from(p.querySelectorAll('a'));
          
          // Determine which links to preserve for this paragraph
          let linksToPreserve = [];
          let shouldCloneLinks = true; // Whether to clone or move links
          
          if (linksInParagraph.length > 0) {
            // Paragraph has its own links - keep them (they're already here, no clone needed)
            console.log('[Typewriter §' + pIdx + '] Paragraph has', linksInParagraph.length, 'direct links → keeping them');
            linksToPreserve = linksInParagraph;
            shouldCloneLinks = false; // Don't clone - links already in this paragraph
          } else if (text.trim().length > 0 && !sectionLinksUsed && allSectionLinks.length > 0) {
            // Paragraph has text but no links, and section links haven't been claimed yet
            // MOVE section links here (don't clone - prevents duplication)
            console.log('[Typewriter §' + pIdx + '] Paragraph has text but NO links → MOVING', allSectionLinks.length, 'section links here');
            linksToPreserve = allSectionLinks;
            sectionLinksUsed = true; // Mark section links as claimed
            shouldCloneLinks = false; // MOVE links, don't clone them
          } else if (linksInParagraph.length === 0 && text.trim().length === 0) {
            // Empty paragraph (blank line) - don't preserve any links
            console.log('[Typewriter §' + pIdx + '] Empty paragraph (blank line) → no links');
          }
          
          // Clone only if needed (shouldn't ever be needed now)
          const preservedLinks = shouldCloneLinks ? linksToPreserve.map(a => a.cloneNode(true)) : linksToPreserve;
          
          // Lock the paragraph height
          if (originalHeight > 0) {
            p.style.height = Math.ceil(originalHeight) + 'px';
          }
          
          // Clear the paragraph text but preserve inflection links by re-inserting them
          p.textContent = '';
          
          // Re-insert the preserved links first (they'll be invisible until after typing completes)
          preservedLinks.forEach(link => p.appendChild(link));
          
          console.log('[Typewriter §' + pIdx + '] Re-inserted', preservedLinks.length, 'links → paragraph now has', p.querySelectorAll('a').length, 'links');
          
          // Create a span to hold the typed text
          const typingTarget = document.createElement('span');
          p.appendChild(typingTarget);
          
          const speed = (opts && opts.speed) || (p.dataset.twSpeed ? parseInt(p.dataset.twSpeed, 10) : 40);
          const adjustedSpeed = Math.round(speed / 2);
          
          // Process text to add natural pauses at punctuation
          let processedText = text;
          processedText = processedText.replace(/([.!?])\s+/g, '$1^400 ');
          processedText = processedText.replace(/,\s+/g, ',^200 ');
          processedText = processedText.replace(/([;:])\s+/g, '$1^150 ');
          
          return { typingTarget, processedText, adjustedSpeed, text };
        });
        
        // Chain the typing animations sequentially
        let currentIndex = 0;
        
        function typeNextParagraph() {
          if (currentIndex >= paragraphData.length) return;
          
          const { typingTarget, processedText, adjustedSpeed, text } = paragraphData[currentIndex];
          const paragraphIndex = currentIndex;
          currentIndex++;
          
          try {
            // Create Typed instance with natural, human-like typing settings
            const typed = new Typed(typingTarget, {
              strings: [processedText],
              typeSpeed: adjustedSpeed,
              startDelay: Math.random() * 100,
              backSpeed: 0,
              backDelay: 0,
              loop: false,
              showCursor: false,
              cursorChar: '',
              smartBackspace: true,
              shuffle: false,
              fadeOut: false,
              fadeOutClass: '',
              fadeOutDelay: 0,
              attr: null,
              bindInputFocusEvents: false,
              contentType: 'html',
              onComplete: function(self) {
                // Start typing the next paragraph when this one completes
                typeNextParagraph();
                if (instances.has(el)) {
                  instances.delete(el);
                }
              }
            });
            
            instances.set(el, typed);
          } catch (e) {
            console.error('[Typewriter] Error creating Typed instance for paragraph', paragraphIndex, ':', e.message || e);
            console.error('[Typewriter] Error details:', e);
            typingTarget.textContent = text;
            // Continue to next paragraph even if this one fails
            typeNextParagraph();
          }
        }
        
        // Start typing the first paragraph
        typeNextParagraph();
        
        // DIAGNOSTIC: Log link state AFTER typewriter has set up the section
        setTimeout(() => {
          const linksAfterProcessing = Array.from(el.querySelectorAll('a:not(.dontinflect)'));
          console.log('[Typewriter POST] Section after setup has', linksAfterProcessing.length, 'inflection links');
          linksAfterProcessing.forEach((link, idx) => {
            console.log('[Typewriter POST]   Link', idx, '- href:', link.getAttribute('href'), 'parent:', link.parentElement?.tagName, 'active:', link.classList.contains('active'));
          });
          
          // Dispatch event to signal typewriter is ready and links are preserved
          el.dispatchEvent(new CustomEvent('typewriter-ready', { bubbles: true }));
        }, 100);
      } catch(err) {
        console.error('[typewriter] startTypingForElement failed:', err);
      }
    }

    // Observe sections for intersection
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        try {
          if (en.isIntersecting) {
            const sec = en.target;
            
            // Check suppression flag
            if (window.__typewriterSuppressed) {
              let startTimeoutId = null;
              
              const startWhenReady = () => {
                if (startTimeoutId) clearTimeout(startTimeoutId);
                const els = sec.querySelectorAll('.typewriter');
                els.forEach(el => startTypingForElement(el));
                sec.removeEventListener('inflection-ready', startWhenReady);
              };
              
              sec.addEventListener('inflection-ready', startWhenReady);
              startTimeoutId = setTimeout(() => {
                sec.removeEventListener('inflection-ready', startWhenReady);
                const els = sec.querySelectorAll('.typewriter');
                els.forEach(el => startTypingForElement(el));
              }, 500);
            } else {
              const els = sec.querySelectorAll('.typewriter');
              els.forEach(el => startTypingForElement(el));
            }
            
            sectionObserver.unobserve(en.target);
          }
        } catch(err) {
          console.error('[typewriter] IntersectionObserver callback failed:', err);
        }
      });
    }, { threshold: 0.25 });

    // Fallback observer for elements outside sections
    const fallbackObserver = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        try {
          if (en.isIntersecting) {
            startTypingForElement(en.target);
            fallbackObserver.unobserve(en.target);
          }
        } catch(err) {
          console.error('[typewriter] Fallback observer failed:', err);
        }
      });
    }, { threshold: 0.25 });

    function scanAndObserve() {
      try {
        const sections = Array.from(document.querySelectorAll('section'));
        let found = false;
        
        sections.forEach(sec => {
          try {
            if (sec.querySelector('.typewriter')) {
              found = true;
              if (!sec.dataset._tw_observed) {
                sec.dataset._tw_observed = '1';
                sectionObserver.observe(sec);
              }
            }
          } catch(err) {
            console.error('[typewriter] Error observing section:', err);
          }
        });
        
        if (!found) {
          const els = document.querySelectorAll('.typewriter');
          els.forEach(el => {
            if (!el.dataset._tw_started) fallbackObserver.observe(el);
          });
        }
      } catch(err) {
        console.error('[typewriter] scanAndObserve failed:', err);
      }
    }

    // Lightweight mutation observer with debouncing
    let scanTimeout = null;
    const mo = new MutationObserver(() => {
      if (scanTimeout) clearTimeout(scanTimeout);
      scanTimeout = setTimeout(scanAndObserve, 100);
    });
    mo.observe(document.documentElement || document.body, { 
      childList: true, 
      subtree: true 
    });

    // Initial scan
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', scanAndObserve);
    } else {
      scanAndObserve();
    }

    // Cleanup on page unload
    window.addEventListener('beforeunload', () => {
      instances.forEach(typed => {
        try { typed.destroy(); } catch(e) {}
      });
      instances.clear();
    });
  }

  init();
})();
