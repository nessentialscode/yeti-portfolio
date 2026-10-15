/**
 * BELLO. PORTFOLIO - JAVASCRIPT LOGIC
 * - Live World Clocks (Real-time timezone formatting)
 * - Interactive Works Switcher with smooth state changes
 * - Accessible Tablist Controls
 * - Light/Dark Theme Switcher
 * - Mobile / Drawer Navigation
 */

document.addEventListener('DOMContentLoaded', () => {
  initWorldClocks();
  initWorksSwitcher();
  initThemeToggle();
  initNavigationDrawer();
  initDinoGame();
});

/* ==========================================================================
   1. LIVE WORLD CLOCKS
   ========================================================================== */
function initWorldClocks() {
  const clockItems = document.querySelectorAll('.clock-item');

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
        // Fallback if timezone not supported
        console.warn(`Timezone formatting failed for ${timeZone}:`, e);
      }
    });
  }

  // Initial call and periodic interval
  updateClocks();
  setInterval(updateClocks, 1000);
}

/* ==========================================================================
   2. SELECTED PROJECTS INTERACTIVE SHOWCASE CONTROLLER
   ========================================================================== */
const PROJECTS_DATA = [
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
    desktopImg: 'assets/projects/dentocare_desktop.png',
    desktopFullImg: 'assets/projects/fullpage/dentocare_desktop_full.png',
    tags: ['HEALTHCARE', 'DENTAL CLINIC', 'UI/UX DESIGN', 'NEXT.JS'],
    colorBox: '#1d63c6',
    description: 'Comprehensive dental clinic web platform featuring instant appointment scheduling, interactive service catalog, and treatment showcase.'
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
    desktopImg: 'assets/projects/smiledentos_desktop.png',
    desktopFullImg: 'assets/projects/fullpage/smiledentos_desktop_full.png',
    tags: ['DENTAL CARE', 'RESPONSIVE WEB', 'APPOINTMENTS', 'LOCAL BUSINESS'],
    colorBox: '#0097a7',
    description: 'Modern family dental care portal with online booking, doctor profiles, multi-branch information, and direct WhatsApp integration.'
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
    desktopImg: 'assets/projects/alshahama_desktop.jpg',
    desktopFullImg: 'assets/projects/fullpage/alshahama_desktop_full.png',
    tags: ['MEDICAL', 'EYE HOSPITAL', 'CLINICAL SERVICES', 'VERCEL'],
    colorBox: '#d32f2f',
    description: 'Advanced ophthalmology and eye care hospital website with department directories, specialist profiles, and surgical technology guides.'
  },
  {
    id: 'naturals-salon',
    num: '04',
    name: 'naturals-salon',
    title: 'Naturals Salon',
    category: 'BEAUTY & WELLNESS PLATFORM',
    liveUrl: 'https://naturals-salon-theta.vercel.app/',
    displayUrl: 'https://naturals-salon-theta.vercel.app/',
    githubUrl: 'https://github.com/nessentialscode/naturals-salon.git',
    mobileImg: 'assets/projects/fullpage/naturals_mobile_full.png',
    desktopImg: 'assets/projects/naturals_desktop.png',
    desktopFullImg: 'assets/projects/fullpage/naturals_desktop_full.png',
    tags: ['BEAUTY & SALON', 'SKINCARE', 'EDITORIAL DESIGN', 'CONSULTATION'],
    colorBox: '#6a1b9a',
    description: 'Editorial beauty and aesthetic skincare clinic platform with personalized treatment plans, consultation booking, and modern typography.'
  }
];

function initWorksSwitcher() {
  const columnButtons = document.querySelectorAll('.project-mobile-column');
  const projectIndexEl = document.getElementById('activeProjectIndex');
  const projectCategoryEl = document.getElementById('activeProjectCategory');
  const projectTitleEl = document.getElementById('activeProjectTitle');
  const projectDescEl = document.getElementById('activeProjectDesc');
  const liveLinkEl = document.getElementById('activeLiveLink');
  const githubLinkEl = document.getElementById('activeGithubLink');
  const browserUrlEl = document.getElementById('browserUrlText');
  const desktopScreenLinkEl = document.getElementById('desktopScreenLink');
  const desktopImgEl = document.getElementById('activeDesktopImg');
  const projectTagsEl = document.getElementById('activeProjectTags');
  const desktopFrame = document.querySelector('.desktop-browser-frame');

  if (!columnButtons.length || !desktopImgEl) return;

  function setProject(index) {
    const data = PROJECTS_DATA[index];
    if (!data) return;

    // Update active states on mobile preview columns
    columnButtons.forEach((col, i) => {
      const isActive = i === index;
      col.classList.toggle('is-active', isActive);
      col.setAttribute('aria-selected', isActive ? 'true' : 'false');
      col.setAttribute('tabindex', isActive ? '0' : '-1');

      const indicator = col.querySelector('.column-selection-indicator');
      if (indicator) {
        indicator.textContent = isActive ? 'CURRENT ACTIVE' : 'SELECT PROJECT';
      }
    });

    // Animate transition on desktop preview
    if (desktopFrame) {
      desktopFrame.classList.add('is-switching');
    }
    desktopImgEl.style.opacity = '0.25';
    desktopImgEl.style.transform = 'scale(0.985)';

    setTimeout(() => {
      // Update text and metadata
      if (projectIndexEl) projectIndexEl.textContent = data.num;
      if (projectCategoryEl) projectCategoryEl.textContent = data.category;
      if (projectTitleEl) projectTitleEl.textContent = data.name;
      if (projectDescEl) projectDescEl.textContent = data.description;

      // Update URL and navigation links
      if (browserUrlEl) browserUrlEl.textContent = data.displayUrl;
      if (liveLinkEl) {
        liveLinkEl.href = data.liveUrl;
        liveLinkEl.setAttribute('aria-label', `Visit live website for ${data.name}`);
      }
      if (githubLinkEl) {
        githubLinkEl.href = data.githubUrl;
        githubLinkEl.setAttribute('aria-label', `View GitHub repository for ${data.name}`);
      }
      if (desktopScreenLinkEl) {
        desktopScreenLinkEl.href = data.liveUrl;
        desktopScreenLinkEl.setAttribute('aria-label', `Open ${data.name} desktop website in new tab`);
      }

      // Update desktop image
      desktopImgEl.src = data.desktopImg;
      desktopImgEl.alt = `${data.name} desktop website layout`;

      // Update tech tags
      if (projectTagsEl) {
        projectTagsEl.innerHTML = '';
        data.tags.forEach(tag => {
          const span = document.createElement('span');
          span.className = 'tag-pill';
          span.textContent = tag;
          projectTagsEl.appendChild(span);
        });
      }

      // Restore image styles
      desktopImgEl.style.opacity = '1';
      desktopImgEl.style.transform = 'scale(1)';
      if (desktopFrame) {
        desktopFrame.classList.remove('is-switching');
      }
    }, 180);
  }

  // Click & keyboard handlers on the 4 mobile preview columns
  columnButtons.forEach(col => {
    col.addEventListener('click', () => {
      const idx = parseInt(col.getAttribute('data-index'), 10);
      setProject(idx);
    });

    col.addEventListener('keydown', (e) => {
      let currentIdx = parseInt(col.getAttribute('data-index'), 10);
      let targetIdx = null;

      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        targetIdx = (currentIdx + 1) % columnButtons.length;
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        targetIdx = (currentIdx - 1 + columnButtons.length) % columnButtons.length;
      }

      if (targetIdx !== null) {
        columnButtons[targetIdx].focus();
        setProject(targetIdx);
      }
    });
  });

  // Top header scroll arrow interaction
  const scrollArrow = document.querySelector('.scroll-arrow');
  if (scrollArrow) {
    scrollArrow.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

/* ==========================================================================
   3. THEME TOGGLE (LIGHT / DARK)
   ========================================================================== */
function initThemeToggle() {
  const themeToggle = document.getElementById('themeToggle');
  const themeLabel = document.getElementById('themeLabel');
  if (!themeToggle || !themeLabel) return;

  // Restore saved theme from localStorage
  const savedTheme = localStorage.getItem('lego-theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('theme-dark');
    themeLabel.textContent = 'DARK';
  } else if (savedTheme === 'light') {
    document.body.classList.remove('theme-dark');
    themeLabel.textContent = 'LIGHT';
  }

  themeToggle.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('theme-dark');
    themeLabel.textContent = isDark ? 'DARK' : 'LIGHT';
    localStorage.setItem('lego-theme', isDark ? 'dark' : 'light');
  });
}

/* ==========================================================================
   4. NAVIGATION DRAWER
   ========================================================================== */
function initNavigationDrawer() {
  const menuToggle = document.getElementById('menuToggle');
  const navDrawer = document.getElementById('navDrawer');
  const drawerClose = document.getElementById('drawerClose');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const drawerLinks = document.querySelectorAll('.drawer-nav-item');

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

  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navDrawer.classList.contains('is-open')) {
      closeDrawer();
    }
  });
}

/* ==========================================================================
   5. CHROME DINOSAUR JUMP RUNNER (CANVAS ENGINE)
   ========================================================================== */
function initDinoGame() {
  const canvas = document.getElementById('dinoCanvas');
  const scoreEl = document.getElementById('dinoScore');
  const hiScoreEl = document.getElementById('dinoHiScore');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = canvas.width;
  let height = canvas.height;
  const groundY = height - 28;

  function resizeCanvas() {
    const rect = canvas.getBoundingClientRect();
    if (rect.width > 0) {
      canvas.width = rect.width;
      width = canvas.width;
    }
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  let score = 0;
  let hiScore = 980;
  let speed = 6.2;
  let frame = 0;

  const dino = {
    x: 80,
    y: groundY - 44,
    w: 40,
    h: 44,
    vy: 0,
    jumpPower: -10.8,
    gravity: 0.6,
    isGrounded: true,
    legState: 0
  };

  let obstacles = [];
  let nextObstacleDistance = 300;

  let clouds = [
    { x: 300, y: 35, speed: 0.6 },
    { x: 750, y: 25, speed: 0.8 },
    { x: 1200, y: 45, speed: 0.5 }
  ];

  let groundBumps = [];
  for (let i = 0; i < 24; i++) {
    groundBumps.push({ x: Math.random() * width, w: 2 + Math.random() * 8 });
  }

  function jump() {
    if (dino.isGrounded) {
      dino.vy = dino.jumpPower;
      dino.isGrounded = false;
    }
  }

  canvas.addEventListener('click', jump);
  canvas.addEventListener('touchstart', (e) => {
    e.preventDefault();
    jump();
  }, { passive: false });

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' || e.code === 'ArrowUp') {
      const rect = canvas.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        e.preventDefault();
        jump();
      }
    }
  });

  function drawDino(x, y, leg) {
    ctx.fillStyle = '#681111';
    
    // Head & Snout
    ctx.fillRect(x + 22, y, 16, 12);
    ctx.fillRect(x + 18, y + 2, 22, 10);
    // Eye cutout
    ctx.fillStyle = '#b4c6b1';
    ctx.fillRect(x + 24, y + 2, 3, 3);
    ctx.fillStyle = '#681111';
    
    // Mouth
    ctx.fillRect(x + 30, y + 10, 8, 2);

    // Neck & Body
    ctx.fillRect(x + 16, y + 12, 12, 8);
    ctx.fillRect(x + 10, y + 16, 20, 16);

    // Arms
    ctx.fillRect(x + 28, y + 18, 5, 2);
    ctx.fillRect(x + 31, y + 20, 2, 3);

    // Tail
    ctx.fillRect(x + 4, y + 20, 6, 8);
    ctx.fillRect(x, y + 22, 4, 4);

    // Legs
    if (dino.isGrounded) {
      if (leg === 0) {
        ctx.fillRect(x + 12, y + 32, 4, 10);
        ctx.fillRect(x + 12, y + 42, 6, 2);
        ctx.fillRect(x + 22, y + 32, 4, 6);
      } else {
        ctx.fillRect(x + 12, y + 32, 4, 6);
        ctx.fillRect(x + 22, y + 32, 4, 10);
        ctx.fillRect(x + 22, y + 42, 6, 2);
      }
    } else {
      ctx.fillRect(x + 12, y + 32, 4, 7);
      ctx.fillRect(x + 20, y + 32, 4, 7);
    }
  }

  function drawCactus(x, y, type) {
    ctx.fillStyle = '#681111';
    if (type === 1) {
      // Single Tall Cactus
      ctx.fillRect(x + 6, y, 6, 38);
      ctx.fillRect(x, y + 10, 6, 4);
      ctx.fillRect(x, y + 6, 4, 8);
      ctx.fillRect(x + 12, y + 14, 6, 4);
      ctx.fillRect(x + 14, y + 10, 4, 8);
    } else {
      // Double Cactus
      ctx.fillRect(x + 4, y + 4, 5, 34);
      ctx.fillRect(x, y + 12, 4, 4);
      ctx.fillRect(x, y + 8, 3, 6);
      ctx.fillRect(x + 9, y + 14, 4, 4);
      ctx.fillRect(x + 11, y + 10, 3, 6);

      ctx.fillRect(x + 18, y, 5, 38);
      ctx.fillRect(x + 15, y + 14, 3, 4);
      ctx.fillRect(x + 23, y + 10, 4, 4);
      ctx.fillRect(x + 25, y + 8, 3, 6);
    }
  }

  function drawCloud(x, y) {
    ctx.fillStyle = 'rgba(104, 17, 17, 0.2)';
    ctx.fillRect(x + 10, y, 20, 4);
    ctx.fillRect(x + 4, y + 4, 32, 4);
    ctx.fillRect(x, y + 8, 40, 4);
  }

  function loop() {
    frame++;

    ctx.fillStyle = getComputedStyle(document.body).getPropertyValue('--bg-sage') || '#b4c6b1';
    ctx.fillRect(0, 0, width, height);

    // Clouds
    clouds.forEach(c => {
      c.x -= c.speed;
      if (c.x < -50) c.x = width + Math.random() * 100;
      drawCloud(c.x, c.y);
    });

    // Ground Line
    ctx.fillStyle = 'rgba(50, 70, 48, 0.35)';
    ctx.fillRect(0, groundY, width, 1.5);

    // Ground bumps
    ctx.fillStyle = 'rgba(50, 70, 48, 0.45)';
    groundBumps.forEach(b => {
      b.x -= speed;
      if (b.x < 0) b.x = width + Math.random() * 50;
      ctx.fillRect(b.x, groundY + 3, b.w, 1.5);
    });

    // Dino Physics
    dino.y += dino.vy;
    dino.vy += dino.gravity;

    if (dino.y >= groundY - dino.h) {
      dino.y = groundY - dino.h;
      dino.vy = 0;
      dino.isGrounded = true;
    }

    if (frame % 8 === 0) {
      dino.legState = 1 - dino.legState;
    }

    // Auto-jump logic to ensure continuous dynamic runner
    obstacles.forEach(obs => {
      const dist = obs.x - (dino.x + dino.w);
      if (dist > 0 && dist < 55 && dino.isGrounded) {
        jump();
      }
    });

    // Spawn Obstacles
    nextObstacleDistance -= speed;
    if (nextObstacleDistance <= 0) {
      const type = Math.random() > 0.45 ? 1 : 2;
      const obsW = type === 1 ? 20 : 30;
      obstacles.push({
        x: width + 20,
        y: groundY - 38,
        w: obsW,
        h: 38,
        type: type
      });
      nextObstacleDistance = 260 + Math.random() * 320;
    }

    // Update & Draw Obstacles
    for (let i = obstacles.length - 1; i >= 0; i--) {
      const obs = obstacles[i];
      obs.x -= speed;
      drawCactus(obs.x, obs.y, obs.type);

      if (obs.x + obs.w < -20) {
        obstacles.splice(i, 1);
        score += 10;
        if (score > hiScore) {
          hiScore = score;
          if (hiScoreEl) hiScoreEl.textContent = String(hiScore).padStart(5, '0');
        }
        if (scoreEl) scoreEl.textContent = String(score).padStart(5, '0');
      }
    }

    // Draw Dino
    drawDino(dino.x, dino.y, dino.legState);

    requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);
}
