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
        if (!el || el.dataset._tw_started) return;
        el.dataset._tw_started = '1';

        // Discover paragraphs early so we can extract fonts from them
        const allParagraphs = Array.from(el.querySelectorAll('p'));
        const paragraphs = allParagraphs.filter(p => {
          const hasInflectableLinks = p.querySelector('a:not(.dontinflect)');
          const text = (p.textContent || '').trim();
          if (hasInflectableLinks && text.length === 0) return false;
          return text.length > 0;
        });

        // Wait for fonts used in this element to finish loading to get accurate measurements
        const usedFamilies = new Set();
        if (window.getComputedStyle) {
          const cs = getComputedStyle(el);
          if (cs.fontFamily) {
            cs.fontFamily.split(',').forEach(f => usedFamilies.add(f.trim().replace(/^['"]|['"]$/g, '')));
          }
          paragraphs.forEach(p => {
            const cps = getComputedStyle(p);
            if (cps.fontFamily) {
              cps.fontFamily.split(',').forEach(f => usedFamilies.add(f.trim().replace(/^['"]|['"]$/g, '')));
            }
          });
        }
        const fontPromises = (document.fonts && usedFamilies.size)
          ? Array.from(usedFamilies).map(f => document.fonts.load(`16px ${f}`))
          : [];
        const fontsReady = (document.fonts && document.fonts.ready)
          ? Promise.all([document.fonts.ready, ...fontPromises]).catch(() => {})
          : Promise.resolve();

        const run = () => {
          try {
            // Reset section inline styling FIRST to allow natural paragraph measurement
            el.style.height = '';
            el.style.minHeight = '';
            
            // Paragraphs already discovered at top of function; reuse the same array
            if (paragraphs.length === 0) return;
            
            // Measure height using an off-DOM text-only clone (inflection links are ignored)
            const paragraphData = paragraphs.map((p, idx) => {
              const text = (p.textContent || '').trim();

              // Extract inflection links to re-attach later
              const inflectableLinks = Array.from(p.querySelectorAll('a:not(.dontinflect)'));

              // Reset inline styles on the live paragraph
              p.style.height = '';
              p.style.minHeight = '';
              p.style.maxHeight = '';
              p.style.width = '';

              // Force reflow
              p.offsetHeight;

              // Create hidden clone with only text, copy sizing-relevant styles
              const computed = window.getComputedStyle(p);
              const clone = document.createElement('p');
              clone.textContent = text;
              clone.style.position = 'absolute';
              clone.style.visibility = 'hidden';
              clone.style.pointerEvents = 'none';
              clone.style.left = '-9999px';
              clone.style.top = '0';
              const width = p.getBoundingClientRect().width || p.clientWidth || p.offsetWidth;
              if (width > 0) clone.style.width = width + 'px';
              clone.style.font = computed.font;
              clone.style.fontSize = computed.fontSize;
              clone.style.fontFamily = computed.fontFamily;
              clone.style.fontWeight = computed.fontWeight;
              clone.style.lineHeight = computed.lineHeight;
              clone.style.whiteSpace = computed.whiteSpace;
              clone.style.wordBreak = computed.wordBreak;
              clone.style.letterSpacing = computed.letterSpacing;
              clone.style.padding = computed.padding;
              clone.style.border = computed.border;
              clone.style.boxSizing = computed.boxSizing;
              document.body.appendChild(clone);

              // Use scrollHeight which accounts for padding, border, and content
              let measuredHeight = clone.scrollHeight;
              
              // Add explicit padding if box-sizing is content-box
              if (computed.boxSizing === 'content-box') {
                const paddingTop = parseFloat(computed.paddingTop) || 0;
                const paddingBottom = parseFloat(computed.paddingBottom) || 0;
                measuredHeight += paddingTop + paddingBottom;
              }
              
              measuredHeight = Math.ceil(measuredHeight);
              const measuredWidth = Math.ceil(clone.getBoundingClientRect().width || width || 0);

              clone.remove();

              return {
                element: p,
                text,
                measuredHeight,
                measuredWidth,
                scrollHeight: measuredHeight,
                inflectableLinks
              };
            });
            
            // Apply height locking: use scrollHeight for most accurate content measurement
            paragraphData.forEach((data, idx) => {
              const p = data.element;
              
              // scrollHeight is the most reliable - it gives actual content height
              // regardless of any parent constraints
              const finalHeight = data.scrollHeight;

              // Lock to the scrollHeight measurement
              if (finalHeight > 0) {
                const hPx = finalHeight + 'px';
                p.style.height = hPx;
                p.style.minHeight = hPx;
                p.style.maxHeight = hPx;
              }
              // Don't lock width - let it flow naturally based on container constraints
              p.style.overflow = 'hidden';
              p.style.boxSizing = 'border-box';

              // Clear paragraph content
              p.innerHTML = '';
              
              // Re-add inflectable links first (they need to be in DOM for observer)
              data.inflectableLinks.forEach(link => p.appendChild(link));
              
              // Create a span to hold the typed text
              const typingTarget = document.createElement('span');
              p.appendChild(typingTarget);
              
              const speed = (opts && opts.speed) || (p.dataset.twSpeed ? parseInt(p.dataset.twSpeed, 10) : 40);
              const adjustedSpeed = Math.round(speed / 2);
              
              // Process text to add natural pauses at punctuation
              let processedText = data.text;
              processedText = processedText.replace(/([.!?])\s+/g, '$1^400 ');
              processedText = processedText.replace(/,\s+/g, ',^200 ');
              processedText = processedText.replace(/([;:])\s+/g, '$1^150 ');
              
              data.typingTarget = typingTarget;
              data.processedText = processedText;
              data.adjustedSpeed = adjustedSpeed;
            });
            
            // Chain the typing animations sequentially
            let currentIndex = 0;
            
            function typeNextParagraph() {
              if (currentIndex >= paragraphData.length) return;
              
              const data = paragraphData[currentIndex];
              const { typingTarget, processedText, adjustedSpeed } = data;
              currentIndex++;
              
              try {
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
                    typeNextParagraph();
                    if (instances.has(el)) {
                      instances.delete(el);
                    }
                  }
                });
                
                instances.set(el, typed);
              } catch (e) {
                console.error('Typewriter error:', e);
                typingTarget.textContent = text;
                typeNextParagraph();
              }
            }
            
            typeNextParagraph();
          } catch(err) {
            console.error('[typewriter] startTypingForElement failed:', err);
          }
        };

        fontsReady.then(run);
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
