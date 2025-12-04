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
        
        // CRITICAL: Measure and lock the section height BEFORE any modifications
        // This ensures snap calculations remain consistent throughout the typing animation
        const sectionHeight = el.getBoundingClientRect().height;
        if (sectionHeight > 0) {
          el.style.height = Math.ceil(sectionHeight) + 'px';
          el.style.minHeight = Math.ceil(sectionHeight) + 'px';
        }
        
        // Get all paragraph children that have text content (not empty link paragraphs)
        const paragraphs = Array.from(el.querySelectorAll('p')).filter(p => {
          const text = p.textContent || '';
          return text.trim().length > 0;
        });
        
        if (paragraphs.length === 0) return;
        
        // Measure and prepare all paragraphs first
        const paragraphData = paragraphs.map(p => {
          const text = p.textContent || '';
          const originalHeight = p.getBoundingClientRect().height;
          
          // Lock the paragraph height
          if (originalHeight > 0) {
            p.style.height = Math.ceil(originalHeight) + 'px';
          }
          
          // Clear the paragraph text
          p.textContent = '';
          
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
            console.error('Typewriter error:', e);
            typingTarget.textContent = text;
            // Continue to next paragraph even if this one fails
            typeNextParagraph();
          }
        }
        
        // Start typing the first paragraph
        typeNextParagraph();
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
