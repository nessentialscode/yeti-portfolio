/**
 * WEB DEVELOPMENT SHOWCASE & FULL-LENGTH INTERACTIVE ENGINE
 * Controls dual scrollable mockups (Mobile & Desktop), auto-scroll preview,
 * tab switching, case study updates, and design addition procedure guides.
 */

document.addEventListener('DOMContentLoaded', () => {
  initWorldClocks();
  initThemeToggle();
  initNavigationDrawer();
  initWebDevShowcase();
});

/* ==========================================================================
   1. LIVE WORLD CLOCKS
   ========================================================================== */
function initWorldClocks() {
  const clockItems = document.querySelectorAll('.clock-item');
  if (!clockItems.length) return;

  function updateClocks() {
    const now = new Date();

    clockItems.forEach(item => {
      const timeZone = item.getAttribute('data-tz');
      if (!timeZone) return;

      try {
        const formatter = new Intl.DateTimeFormat('en-GB', {
          timeZone: timeZone,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        });

        const timeString = formatter.format(now);
        const timeEl = item.querySelector('.clock-time');
        if (timeEl) {
          timeEl.textContent = timeString;
        }
      } catch (e) {
        console.warn(`Timezone formatting failed for ${timeZone}:`, e);
      }
    });
  }

  updateClocks();
  setInterval(updateClocks, 1000);
}

/* ==========================================================================
   2. LIGHT / DARK THEME TOGGLE
   ========================================================================== */
function initThemeToggle() {
  const themeToggle = document.getElementById('themeToggle');
  const themeLabel = document.getElementById('themeLabel');
  if (!themeToggle) return;

  function applyTheme(theme) {
    if (theme === 'dark') {
      document.body.classList.add('theme-dark');
      document.documentElement.classList.add('theme-dark');
      if (themeLabel) themeLabel.textContent = 'DARK';
      localStorage.setItem('lego-theme', 'dark');
    } else {
      document.body.classList.remove('theme-dark');
      document.documentElement.classList.remove('theme-dark');
      if (themeLabel) themeLabel.textContent = 'LIGHT';
      localStorage.setItem('lego-theme', 'light');
    }
  }

  const savedTheme = localStorage.getItem('lego-theme') || 'light';
  applyTheme(savedTheme);

  themeToggle.addEventListener('click', () => {
    const isDark = document.body.classList.contains('theme-dark');
    applyTheme(isDark ? 'light' : 'dark');
  });
}

/* ==========================================================================
   3. MOBILE NAVIGATION DRAWER
   ========================================================================== */
function initNavigationDrawer() {
  const menuToggle = document.getElementById('menuToggle');
  const navDrawer = document.getElementById('navDrawer');
  const drawerClose = document.getElementById('drawerClose');
  const drawerBackdrop = document.getElementById('drawerBackdrop');

  if (!menuToggle || !navDrawer) return;

  function openDrawer() {
    navDrawer.classList.add('is-open');
    navDrawer.setAttribute('aria-hidden', 'false');
    menuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    navDrawer.classList.remove('is-open');
    navDrawer.setAttribute('aria-hidden', 'true');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  menuToggle.addEventListener('click', openDrawer);
  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navDrawer.classList.contains('is-open')) {
      closeDrawer();
    }
  });
}

/* ==========================================================================
   4. FULL PROJECTS DATABASE & INTERACTIVE ENGINE
   ========================================================================== */
const WEB_PROJECTS = [
  {
    id: 'dento-care',
    num: '01',
    name: 'dento-care',
    title: 'Dento Care Dental Clinic',
    category: 'HEALTHCARE & DENTAL CLINIC',
    liveUrl: 'https://www.dentocareofficial.com',
    displayUrl: 'https://www.dentocareofficial.com',
    githubUrl: 'https://github.com/nessentialscode/dento-care.git',
    mobileImg: 'assets/projects/fullpage/dentocare_mobile_full.png',
    desktopImg: 'assets/projects/fullpage/dentocare_desktop_full.png',
    tags: ['HEALTHCARE', 'DENTAL CLINIC', 'UI/UX DESIGN', 'NEXT.JS', 'TAILWIND', 'RESPONSIVE'],
    description: 'Comprehensive dental clinic web platform featuring instant appointment scheduling, interactive service catalog, emergency care information, and treatment showcase.',
    problem: 'Traditional dental clinic patients often struggle with opaque pricing, cumbersome phone-only scheduling, and lack of visual clarity regarding dental procedures.',
    solution: 'Engineered a modern web portal featuring instantaneous digital appointment booking, categorized treatment cards, transparent service information, and direct WhatsApp triage.',
    architecture: [
      'Next.js framework for fast server-side rendering and search engine indexation.',
      'Mobile-first responsive layout tailored for fast smartphone scheduling.',
      'Accessible keyboard-navigable forms and WCAG AA contrast compliance.',
      'Optimized lightweight asset delivery with Vercel Edge caching.'
    ]
  },
  {
    id: 'smile-dentos',
    num: '02',
    name: 'Smile-Dentos',
    title: 'Smile Dentos Family Dental Care',
    category: 'FAMILY DENTAL CLINIC',
    liveUrl: 'https://www.smiledentos.com',
    displayUrl: 'https://www.smiledentos.com',
    githubUrl: 'https://github.com/nessentialscode/Smile_Dentos.git',
    mobileImg: 'assets/projects/fullpage/smiledentos_mobile_full.png',
    desktopImg: 'assets/projects/fullpage/smiledentos_desktop_full.png',
    tags: ['DENTAL CARE', 'RESPONSIVE WEB', 'APPOINTMENTS', 'LOCAL BUSINESS', 'MODERN CSS'],
    description: 'Modern family dental care portal with online booking, doctor profiles, multi-branch clinic information, and direct WhatsApp consultation integration.',
    problem: 'Multi-branch dental practices require effortless location switching, branch-specific working hours, and doctor credentials to foster patient trust.',
    solution: 'Designed an approachable, clean brand interface highlighting specialized orthodontic and paediatric dental care with localized contact channels.',
    architecture: [
      'Pure vanilla web performance with high Lighthouse scores and zero framework overhead.',
      'Interactive branch selector with Google Maps directions integration.',
      'WhatsApp direct deep-linking for zero-friction consultation requests.',
      'Full semantic schema markup for local dental clinic SEO visibility.'
    ]
  },
  {
    id: 'al-shahama',
    num: '03',
    name: 'al-shahama-eye-hospital',
    title: 'Al Shahama Eye Hospital',
    category: 'OPHTHALMOLOGY & MEDICAL',
    liveUrl: 'https://al-shahama-eye-hospital.vercel.app/',
    displayUrl: 'https://al-shahama-eye-hospital.vercel.app/',
    githubUrl: 'https://github.com/nessentialscode/al-shahama-eye-hospital.git',
    mobileImg: 'assets/projects/fullpage/alshahama_mobile_full.png',
    desktopImg: 'assets/projects/fullpage/alshahama_desktop_full.png',
    tags: ['MEDICAL', 'OPHTHALMOLOGY', 'CLINICAL SERVICES', 'VERCEL', 'HIGH ACCESSIBILITY'],
    description: 'Advanced ophthalmology and eye care hospital website with department directories, specialist ophthalmologist profiles, diagnostic equipment guides, and clinical inquiry channels.',
    problem: 'Specialized eye hospitals require high-contrast readability, accessible typography for visually impaired visitors, and comprehensive clinical technology explanations.',
    solution: 'Crafted an accessible, medically rigorous digital presence detailing cataract, retina, glaucoma, and paediatric ophthalmic care with seamless appointment dispatch.',
    architecture: [
      'High-contrast clinical palette tailored for optimal visual legibility.',
      'Comprehensive doctor directories with qualifications and surgical specialties.',
      'Continuous deployment via Vercel Edge with zero downtime updates.',
      'Structured accessibility audit passed for screen readers and magnification.'
    ]
  },
  {
    id: 'naturals-salon',
    num: '04',
    name: 'naturals-salon',
    title: 'Naturals Salon & Spa',
    category: 'BEAUTY & WELLNESS PLATFORM',
    liveUrl: 'https://naturals-seven.vercel.app/',
    displayUrl: 'https://naturals-seven.vercel.app/',
    githubUrl: 'https://github.com/nessentialscode/Naturals.git',
    mobileImg: 'assets/projects/fullpage/naturals_mobile_full.png',
    desktopImg: 'assets/projects/fullpage/naturals_desktop_full.png',
    tags: ['BEAUTY & SALON', 'SKINCARE', 'EDITORIAL DESIGN', 'CONSULTATION', 'HIGH FASHION'],
    description: 'Editorial luxury beauty and aesthetic skincare clinic platform with personalized treatment plans, consultation booking, bridal packages, and modern typography.',
    problem: 'Aesthetic salons and premium spas struggle to stand out among generic booking templates and lack editorial, magazine-grade visual storytelling.',
    solution: 'Engineered a high-fashion, typography-driven website layout showcasing aesthetic bridal transformations, treatment menus, and seasonal beauty packages.',
    architecture: [
      'Editorial magazine layout with fluid type scales and luxury whitespace rhythm.',
      'Interactive visual treatment catalog with price breakdowns and duration guides.',
      'Smooth scroll interactions and responsive image loading pipeline.',
      'Direct WhatsApp and Instagram consultation booking triggers.'
    ]
  }
];

function initWebDevShowcase() {
  const projectTabs = document.querySelectorAll('.webdev-project-tab');
  const stageContainer = document.getElementById('webdevStage');
  
  // Mobile frame elements
  const mobileViewport = document.getElementById('mobileViewport');
  const mobileImg = document.getElementById('mobileFullImg');
  const mobileProgress = document.getElementById('mobileProgress');
  const mobileScrollTopBtn = document.getElementById('mobileScrollTop');
  const mobileScrollEndBtn = document.getElementById('mobileScrollEnd');
  const mobileAutoScrollBtn = document.getElementById('mobileAutoScroll');

  // Desktop browser elements
  const desktopViewport = document.getElementById('desktopViewport');
  const desktopImg = document.getElementById('desktopFullImg');
  const desktopProgress = document.getElementById('desktopProgress');
  const desktopScrollTopBtn = document.getElementById('desktopScrollTop');
  const desktopScrollEndBtn = document.getElementById('desktopScrollEnd');
  const desktopAutoScrollBtn = document.getElementById('desktopAutoScroll');
  
  // Meta elements
  const projectIndexEl = document.getElementById('projectIndexEl');
  const projectCategoryEl = document.getElementById('projectCategoryEl');
  const projectTitleEl = document.getElementById('projectTitleEl');
  const projectDescEl = document.getElementById('projectDescEl');
  const browserUrlLink = document.getElementById('browserUrlLink');
  const browserUrlText = document.getElementById('browserUrlText');
  const liveLinkBtn = document.getElementById('liveLinkBtn');
  const githubLinkBtn = document.getElementById('githubLinkBtn');
  const projectTagsContainer = document.getElementById('projectTagsContainer');

  // Case study elements
  const caseProblemEl = document.getElementById('caseProblemEl');
  const caseSolutionEl = document.getElementById('caseSolutionEl');
  const caseArchList = document.getElementById('caseArchList');

  // View mode switcher buttons
  const viewModeBtns = document.querySelectorAll('.view-mode-btn');

  let activeIndex = 0;
  let mobileAutoScrollTimer = null;
  let desktopAutoScrollTimer = null;

  function loadProject(index) {
    const p = WEB_PROJECTS[index];
    if (!p) return;

    activeIndex = index;

    // Update active tab
    projectTabs.forEach((tab, i) => {
      const isActive = i === index;
      tab.classList.toggle('is-active', isActive);
      tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    // Update meta
    if (projectIndexEl) projectIndexEl.textContent = p.num;
    if (projectCategoryEl) projectCategoryEl.textContent = p.category;
    if (projectTitleEl) projectTitleEl.textContent = p.title;
    if (projectDescEl) projectDescEl.textContent = p.description;

    // Update links
    if (browserUrlLink) browserUrlLink.href = p.liveUrl;
    if (browserUrlText) browserUrlText.textContent = p.displayUrl;
    if (liveLinkBtn) liveLinkBtn.href = p.liveUrl;
    if (githubLinkBtn) githubLinkBtn.href = p.githubUrl;

    // Update full images
    if (mobileImg) {
      mobileImg.src = p.mobileImg;
      mobileImg.alt = `${p.title} full mobile layout capture`;
    }
    if (desktopImg) {
      desktopImg.src = p.desktopImg;
      desktopImg.alt = `${p.title} full desktop layout capture`;
    }

    // Reset scroll positions to top
    if (mobileViewport) mobileViewport.scrollTop = 0;
    if (desktopViewport) desktopViewport.scrollTop = 0;
    stopAutoScroll(true, true);

    // Update tags
    if (projectTagsContainer) {
      projectTagsContainer.innerHTML = p.tags
        .map(t => `<span class="webdev-tag-pill">${t}</span>`)
        .join('');
    }

    // Update case study breakdown
    if (caseProblemEl) caseProblemEl.textContent = p.problem;
    if (caseSolutionEl) caseSolutionEl.textContent = p.solution;
    if (caseArchList) {
      caseArchList.innerHTML = p.architecture
        .map(item => `<li>${item}</li>`)
        .join('');
    }

    updateScrollProgress();
  }

  // Handle Tab clicks
  projectTabs.forEach((tab, i) => {
    tab.addEventListener('click', () => loadProject(i));
  });

  // View Mode switching (Dual, Mobile Focus, Desktop Focus)
  viewModeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      viewModeBtns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      const mode = btn.getAttribute('data-mode');
      if (stageContainer) {
        stageContainer.classList.remove('mode-dual', 'mode-mobile-focus', 'mode-desktop-focus');
        if (mode === 'mobile') {
          stageContainer.classList.add('mode-mobile-focus');
        } else if (mode === 'desktop') {
          stageContainer.classList.add('mode-desktop-focus');
        } else {
          stageContainer.classList.add('mode-dual');
        }
      }
    });
  });

  // Calculate and display scroll percentage
  function updateScrollProgress() {
    if (mobileViewport && mobileProgress) {
      const maxScroll = mobileViewport.scrollHeight - mobileViewport.clientHeight;
      const pct = maxScroll > 0 ? Math.round((mobileViewport.scrollTop / maxScroll) * 100) : 0;
      mobileProgress.textContent = `${pct}% SCROLLED`;
    }

    if (desktopViewport && desktopProgress) {
      const maxScroll = desktopViewport.scrollHeight - desktopViewport.clientHeight;
      const pct = maxScroll > 0 ? Math.round((desktopViewport.scrollTop / maxScroll) * 100) : 0;
      desktopProgress.textContent = `${pct}% SCROLLED`;
    }
  }

  if (mobileViewport) {
    mobileViewport.addEventListener('scroll', updateScrollProgress, { passive: true });
  }
  if (desktopViewport) {
    desktopViewport.addEventListener('scroll', updateScrollProgress, { passive: true });
  }

  // Smooth scroll helper controls
  if (mobileScrollTopBtn && mobileViewport) {
    mobileScrollTopBtn.addEventListener('click', () => {
      stopAutoScroll(true, false);
      mobileViewport.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
  if (mobileScrollEndBtn && mobileViewport) {
    mobileScrollEndBtn.addEventListener('click', () => {
      stopAutoScroll(true, false);
      mobileViewport.scrollTo({ top: mobileViewport.scrollHeight, behavior: 'smooth' });
    });
  }

  if (desktopScrollTopBtn && desktopViewport) {
    desktopScrollTopBtn.addEventListener('click', () => {
      stopAutoScroll(false, true);
      desktopViewport.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
  if (desktopScrollEndBtn && desktopViewport) {
    desktopScrollEndBtn.addEventListener('click', () => {
      stopAutoScroll(false, true);
      desktopViewport.scrollTo({ top: desktopViewport.scrollHeight, behavior: 'smooth' });
    });
  }

  // Auto-scroll mechanism
  function toggleMobileAutoScroll() {
    if (mobileAutoScrollTimer) {
      stopAutoScroll(true, false);
    } else {
      if (mobileAutoScrollBtn) mobileAutoScrollBtn.classList.add('btn-active-autoscroll');
      mobileAutoScrollTimer = setInterval(() => {
        if (!mobileViewport) return;
        const maxScroll = mobileViewport.scrollHeight - mobileViewport.clientHeight;
        if (mobileViewport.scrollTop >= maxScroll - 5) {
          mobileViewport.scrollTop = 0;
        } else {
          mobileViewport.scrollTop += 3;
        }
      }, 25);
    }
  }

  function toggleDesktopAutoScroll() {
    if (desktopAutoScrollTimer) {
      stopAutoScroll(false, true);
    } else {
      if (desktopAutoScrollBtn) desktopAutoScrollBtn.classList.add('btn-active-autoscroll');
      desktopAutoScrollTimer = setInterval(() => {
        if (!desktopViewport) return;
        const maxScroll = desktopViewport.scrollHeight - desktopViewport.clientHeight;
        if (desktopViewport.scrollTop >= maxScroll - 5) {
          desktopViewport.scrollTop = 0;
        } else {
          desktopViewport.scrollTop += 3;
        }
      }, 25);
    }
  }

  function stopAutoScroll(mobile = true, desktop = true) {
    if (mobile && mobileAutoScrollTimer) {
      clearInterval(mobileAutoScrollTimer);
      mobileAutoScrollTimer = null;
      if (mobileAutoScrollBtn) mobileAutoScrollBtn.classList.remove('btn-active-autoscroll');
    }
    if (desktop && desktopAutoScrollTimer) {
      clearInterval(desktopAutoScrollTimer);
      desktopAutoScrollTimer = null;
      if (desktopAutoScrollBtn) desktopAutoScrollBtn.classList.remove('btn-active-autoscroll');
    }
  }

  if (mobileAutoScrollBtn) {
    mobileAutoScrollBtn.addEventListener('click', toggleMobileAutoScroll);
  }
  if (desktopAutoScrollBtn) {
    desktopAutoScrollBtn.addEventListener('click', toggleDesktopAutoScroll);
  }

  // Stop auto-scroll when user manually scrolls
  if (mobileViewport) {
    mobileViewport.addEventListener('wheel', () => stopAutoScroll(true, false), { passive: true });
    mobileViewport.addEventListener('touchstart', () => stopAutoScroll(true, false), { passive: true });
  }
  if (desktopViewport) {
    desktopViewport.addEventListener('wheel', () => stopAutoScroll(false, true), { passive: true });
    desktopViewport.addEventListener('touchstart', () => stopAutoScroll(false, true), { passive: true });
  }

  // Initial load
  loadProject(0);
}
