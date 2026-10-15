/**
 * BELLO / LEGO PORTFOLIO - PAGE TRANSITION ENGINE
 * 12-Column Staggered Editorial Curtain Wipe
 * Reproduces the authentic transition in Image 1 and Image 2
 */
(function () {
  'use strict';

  const COLUMN_COUNT = 12;

  // Build the 12-column transition curtain element if not already present
  function ensureCurtain() {
    let curtain = document.getElementById('pageTransitionCurtain');
    if (!curtain) {
      curtain = document.createElement('div');
      curtain.id = 'pageTransitionCurtain';
      curtain.className = 'page-transition-curtain';
      curtain.setAttribute('aria-hidden', 'true');

      for (let i = 0; i < COLUMN_COUNT; i++) {
        const col = document.createElement('div');
        col.className = 'curtain-column';
        col.style.setProperty('--col-idx', i);
        curtain.appendChild(col);
      }

      document.body.appendChild(curtain);
    }
    return curtain;
  }

  // Handle page entry (curtain slides down off-screen to reveal content)
  function handlePageEntry() {
    const curtain = ensureCurtain();
    const isSpecialPage = document.body.classList.contains('page-writings') || 
                          document.body.classList.contains('page-webdev') || 
                          window.location.pathname.includes('writings.html') ||
                          window.location.pathname.includes('web-development.html');
    const hasTransitionFlag = sessionStorage.getItem('lego_page_transition') === 'true';

    // If navigated via transition or directly landing on subpages
    if (hasTransitionFlag || isSpecialPage) {
      sessionStorage.removeItem('lego_page_transition');

      // Start fully covered
      curtain.classList.add('is-start-covered');

      // Staggered reveal on next animation frame
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          curtain.classList.remove('is-start-covered');
          curtain.classList.add('is-revealing');

          window.dispatchEvent(new CustomEvent('curtain:revealing'));

          // Clean up once all 12 columns have exited
          setTimeout(() => {
            curtain.classList.remove('is-revealing');
            window.dispatchEvent(new CustomEvent('curtain:revealed'));
          }, 950);
        });
      });
    }
  }

  // Handle navigating out (columns slide down from top with staggered wave - Image 1)
  function navigateWithTransition(targetUrl) {
    if (!targetUrl || targetUrl === '#' || targetUrl.startsWith('#')) return;

    const curtain = ensureCurtain();
    sessionStorage.setItem('lego_page_transition', 'true');

    curtain.classList.remove('is-revealing');
    curtain.classList.add('is-covering');

    window.dispatchEvent(new CustomEvent('curtain:covering', { detail: { targetUrl } }));

    // Columns take ~0.65s with delays up to 0.385s.
    // Navigate at 750ms when screen is completely covered.
    setTimeout(() => {
      window.location.href = targetUrl;
    }, 720);
  }

  // Setup click interception
  function initTransitionListeners() {
    document.addEventListener('click', (e) => {
      // Find matching link or interactive row
      const trigger = e.target.closest(
        'a[data-transition="curtain"], [data-transition-target], .service-row[data-href], a[href*="writings.html"], a[href*="web-development.html"], a.back-to-home'
      );

      if (!trigger) return;

      // Allow opening in new tab via middle-click or modifiers
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;

      let href = trigger.getAttribute('data-href') || 
                 trigger.getAttribute('data-transition-target') || 
                 trigger.getAttribute('href');

      if (!href || href === '#' || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) {
        return;
      }

      // Check internal vs external
      if (href.startsWith('http') && !href.includes(window.location.host)) {
        return;
      }

      e.preventDefault();
      navigateWithTransition(href);
    });
  }

  // Handle browser back/forward cache
  window.addEventListener('pageshow', (event) => {
    const curtain = document.getElementById('pageTransitionCurtain');
    if (curtain) {
      curtain.classList.remove('is-covering');
      if (event.persisted) {
        curtain.classList.add('is-revealing');
        setTimeout(() => curtain.classList.remove('is-revealing'), 900);
      }
    }
  });

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      handlePageEntry();
      initTransitionListeners();
    });
  } else {
    handlePageEntry();
    initTransitionListeners();
  }

  // Global access
  window.navigateWithTransition = navigateWithTransition;
})();
