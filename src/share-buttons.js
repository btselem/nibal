// Sharing buttons functionality
// This script handles the copy-to-clipboard functionality for share buttons

// Add animation styles to document head
(function() {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideIn {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    @keyframes slideOut {
      from {
        transform: translateX(0);
        opacity: 1;
      }
      to {
        transform: translateX(100%);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
})();

// Global function for copy-to-clipboard
window.copyToClipboard = function(text, elementId, successMessage) {
  // Immediate visual feedback
  const btn = document.getElementById(elementId);
  if (btn) {
    btn.style.transform = 'scale(0.95)';
    btn.style.opacity = '0.7';
  }
  
  navigator.clipboard.writeText(text).then(() => {
    // Reset button
    if (btn) {
      btn.style.transform = 'scale(1)';
      btn.style.opacity = '1';
    }
    
    // Show success message as a toast-like notification
    const msg = document.createElement('div');
    msg.textContent = successMessage;
    msg.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: #FA5F5F;
      color: white;
      padding: 12px 20px;
      border-radius: 4px;
      font-size: 14px;
      animation: slideIn 0.3s ease-out;
      z-index: 9999;
    `;
    document.body.appendChild(msg);
    
    setTimeout(() => {
      msg.style.animation = 'slideOut 0.3s ease-out';
      setTimeout(() => msg.remove(), 300);
    }, 2000);
  }).catch(() => {
    // Reset button on error
    if (btn) {
      btn.style.transform = 'scale(1)';
      btn.style.opacity = '1';
    }
    alert('Failed to copy link');
  });
};
