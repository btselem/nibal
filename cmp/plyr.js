// Plyr initialization for Vimeo embeds
// https://github.com/sampotts/plyr

document.addEventListener('DOMContentLoaded', function() {
  // Find all vimeo iframes and replace with Plyr player
  document.querySelectorAll('iframe[data-vimeo-id]').forEach(function(iframe) {
    // Only initialize Plyr if not already done
    if (!iframe.classList.contains('plyr-initialized')) {
      const videoId = iframe.getAttribute('data-vimeo-id');
      const container = document.createElement('div');
      container.className = 'plyr__video-embed';
  container.innerHTML = `<iframe src="https://player.vimeo.com/video/${videoId}?autoplay=1&loop=1&muted=1&background=1" allow="autoplay; fullscreen" playsinline></iframe>`;
      iframe.parentNode.replaceChild(container, iframe);
      // Initialize Plyr
      if (window.Plyr) {
        new Plyr(container, {
          autoplay: true,
          muted: true,
          loop: { active: true },
          controls: [],
          hideControls: true,
          clickToPlay: false,
          keyboard: { focused: false, global: false },
          tooltips: { controls: false, seek: false },
          displayDuration: false,
          vimeo: { byline: false, portrait: false, title: false, speed: false, transparent: false, background: true },
        });
      }
    }
  });
});
