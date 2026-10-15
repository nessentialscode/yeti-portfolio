/**
 * WRITINGS ARCHIVE & READER ENGINE
 * Handles interactive filtering, search, reader modal, and scroll tracker
 */

const ARTICLES_DATABASE = [
  {
    id: 'qaradawi-literary-study',
    index: '01',
    date: '2024',
    category: 'ACADEMIC STUDIES',
    categoryKey: 'academic',
    readTime: 'ARABIC • 48 PAGES',
    language: 'Arabic',
    pageCount: 48,
    pdf: 'assets/writings/yusuf-al-qaradawi-literary-study.pdf',
    title: 'تمثيل أدبي لأعمال يوسف القرضاوي مع التركيز الخاص على قصيدته "الملحمة النونية" ومسرحيته "عالم وطاغية"',
    titleHtml: 'تمثيل أدبي لأعمال يوسف القرضاوي مع التركيز الخاص على قصيدته "الملحمة النونية" ومسرحيته "عالم وطاغية"',
    titleEn: "Literary Representation of the Works of Yusuf al-Qaradawi: A Special Focus on His Poem 'Al-Malhama Al-Nuniyya' and His Play 'Alim wa Taghiya'",
    excerpt: 'دراسة تحليلية ونقدية تتناول التمثيل الأدبي للشيخ الدكتور يوسف القرضاوي في قصائده ومسرحياته، مع التركيز على البلاغة والأسلوب الفني في قصيدته "الملحمة النونية" ومسرحيته "عالم وطاغية".',
    content: `
      <div lang="ar" dir="rtl" class="article-arabic-col">
        <div class="reader-meta-box">
          <p><strong>الباحث:</strong> محمد جاسم بن محمد &bull; <strong>تحت إشراف:</strong> فضيلة الأستاذ مصطفى الهدوي</p>
          <p><strong>المؤسسة:</strong> قسم اللغة العربية وآدابها، كلية دار العلوم للدعوة الإسلامية، توتا، كيرالا (جامعة دار الهدى الإسلامية) &bull; 2024</p>
        </div>

        <div class="reader-pdf-action-card" lang="en" dir="ltr">
          <div class="reader-pdf-action-text">
            <strong>ORIGINAL ACADEMIC DISSERTATION</strong><br>
            <span>Complete 48-page Arabic research thesis in PDF format.</span>
          </div>
          <a href="assets/writings/yusuf-al-qaradawi-literary-study.pdf" target="_blank" rel="noopener noreferrer" class="reader-pdf-btn">
            <span>OPEN PDF DOCUMENT</span>
            <span>&nearr;</span>
          </a>
        </div>

        <h3>ملخص البحث</h3>
        <p>يهدف هذا البحث إلى دراسة التمثيل الأدبي للدكتور يوسف القرضاوي في قصائده ومسرحياته، كنموذج رائد يجمع بين الأصالة الإسلامية والوظيفة الدعوية، وبين الفكر الديني والإبداع الأدبي الرصين. ويتناول البحث بالتحليل المنهجي عن البلاغة والأسلوب الفني في أعماله الشعرية والمسرحية، مع التركيز على قصيدته "الملحمة النونية" ومسرحيته "عالم وطاغية"، للكشف عن البنية الخطابية والرمزية في الأدب الإسلامي المعاصر.</p>

        <blockquote>"إن الأدب الإسلامي الهادف ليس مجرد تنميق لفظي أو محاكاة شكلية، بل هو تعبير وجداني صادق ينبثق من العقيدة ويحمل هموم الأمة الإنسانية وقضايا التحرر والعدالة."</blockquote>

        <h3>إشكالية البحث ومنهجيته</h3>
        <p>تنطلق الدراسة من التساؤل الجوهري: كيف استطاع الشيخ القرضاوي توظيف الأشكال الأدبية من شعر عمودي ومسرح حواري لخدمة الرؤية الفكرية والدعوية دون الإخلال بالمقاييس الجمالية والفنية؟ وقد اعتمد الباحث على المنهج التحليلي الوصفي والمنهج التاريخي في معالجة النصوص الأدبية، منطلقاً من رؤية نقدية توازن بين جماليات النص وأبعاده الدلالية.</p>

        <h3>محاور الأطروحة وأبوابها الرئيسية</h3>
        <ul>
          <li><strong>الباب الأول: سيرة الشيخ يوسف القرضاوي:</strong> نشأته العلمية في الأزهر الشريف، مسيرته التعليمية والدعوية، وأثره في الفكر الإسلامي المعاصر.</li>
          <li><strong>الباب الثاني: مجالات إسهاماته الفكرية:</strong> الفقه والفتوى، الاقتصاد الإسلامي ومناهضة الربا، والأبعاد الاجتماعية في مؤلفاته.</li>
          <li><strong>الباب الثالث: المنهج الأدبي والشعري:</strong>
            <ul>
              <li>تحليل قصيدة <em>"الملحمة النونية"</em>: أغراضها الشعرية، البناء الموسيقي والوزني، والصور البلاغية والرمزية.</li>
              <li>تحليل مسرحية <em>"عالم وطاغية"</em>: الصراع الدرامي بين الحق والسلطة الجائرة، البلاغة الحوارية، وتجسيد موقف العالم الرباني سعيد بن جبير أمام الحجاج بن يوسف الثقفي.</li>
            </ul>
          </li>
        </ul>

        <h3>خاتمة ونتائج الدراسة</h3>
        <p>خلص البحث إلى أن التجربة الأدبية عند القرضاوي تمثل امتداداً طبيعياً لرسالته الفكرية؛ حيث وظف القافية النونية والأوزان الشعرية الحماسية لاستنهاض الوعي الجمعي، بينما وظف الدراما المسرحية كمنبر أخلاقي يرسخ مبادئ التضحية والحرية والكرامة الإنسانية في وجه الطغيان.</p>
      </div>
    `
  },
  {
    id: 'islamic-stock-market-analysis',
    index: '02',
    date: '15 OCT 2026',
    category: 'COMMERCE & SYSTEMS',
    categoryKey: 'commerce',
    readTime: 'ENGLISH • 8 PAGES',
    language: 'English',
    pageCount: 8,
    pdf: 'assets/writings/islamic-stock-market-analysis.pdf',
    title: "Analysing Stock Market in Islamic Shari'a",
    titleHtml: "Analysing Stock Market in Islamic Shari'a",
    excerpt: "An analytical inquiry into stock market investments under Islamic jurisprudence (Mu'amalat), examining IPO mechanisms, digital trading, demand-and-supply dynamics, and the core Shari'a prohibitions of Riba (interest) and Gharar (excessive risk).",
    content: `
      <div class="reader-meta-box">
        <p><strong>Author:</strong> Muhammed Jasim TM &bull; <strong>Institution:</strong> Darul Uloom Islamic Da'wa College / Darul Huda Islamic University</p>
        <p><strong>Subject:</strong> Islamic Commercial Jurisprudence (Fiqh al-Mu'amalat) &bull; Contemporary Financial Markets</p>
      </div>

      <div class="reader-pdf-action-card">
        <div class="reader-pdf-action-text">
          <strong>COMPLETE RESEARCH PAPER</strong><br>
          <span>Original 8-page analytical study in PDF format.</span>
        </div>
        <a href="assets/writings/islamic-stock-market-analysis.pdf" target="_blank" rel="noopener noreferrer" class="reader-pdf-btn">
          <span>OPEN PDF DOCUMENT</span>
          <span>&nearr;</span>
        </a>
      </div>

      <h3>Introduction & Contemporary Market Realities</h3>
      <p>Stock market investment has become a defining economic mechanism of contemporary society. Modern investors utilize capital markets to maximize returns and diversify portfolios. However, within Islamic commercial jurisprudence (Mu'amalat), every financial transaction must be evaluated through legal doctrines to establish its legitimacy.</p>

      <p>Islamic commercial law operates under a cardinal foundational maxim: <em>"Anything other than what is explicitly forbidden is permissible; an evidentiary basis is required for any transaction to be declared prohibited (Haram)."</em></p>

      <blockquote>"In Islamic finance, capital is not an autonomous reproductive agent; wealth must be generated through legitimate risk-sharing, physical asset backing, and equitable economic enterprise."</blockquote>

      <h3>The Dual Pillars of Shari'a Prohibition</h3>
      <p>When examining modern equities and secondary markets, scholars identify two major exclusionary barriers:</p>
      <ul>
        <li><strong>1. Riba (Usury / Interest):</strong> Strictly prohibited across all primary Qur'anic sources. Financial instruments that assure fixed interest returns regardless of operational performance violate Islamic economic justice by divorcing reward from commercial liability (<em>al-ghunm bi-l-ghurm</em>).</li>
        <li><strong>2. Gharar (Excessive Ambiguity / Speculation):</strong> Pertains to contracts marked by severe asymmetry, deceit, unquantifiable uncertainty, or nonexistent underlying assets. Purely speculative instruments designed to extract wealth without productive contribution fall under this stricture.</li>
      </ul>

      <h3>Primary Market (IPO) vs. Secondary Market Dynamics</h3>
      <p>Initial Public Offerings (IPOs) allow registered corporations to mobilize public equity into enterprise capital. When an enterprise represents tangible assets, operational services, and ethical business activities, equity participation constitutes valid co-ownership (<em>Musharakah</em>).</p>

      <p>However, secondary market trading introduces complexities. Modern electronic trading models are often driven by algorithmic demand manipulation and artificial volatility rather than fundamental corporate valuations. Trading structures that force automated squaring or margin liquidations contravene the Shari'a requirement of mutual bilateral consent (<em>Taradi</em>) at the exact moment of contract execution.</p>

      <h3>Analysis of Questionable Trading Practices</h3>
      <ul>
        <li><strong>Day Trading & Auto-Squaring:</strong> Day trading algorithms frequently force position closures before settlement has occurred, conflicting with possession (<em>Qabd</em>) doctrines.</li>
        <li><strong>Futures & Derivatives:</strong> Contracts where both counter-values are deferred and no physical delivery is intended represent speculative risk transfers rather than genuine commercial exchanges.</li>
        <li><strong>Short Selling:</strong> Selling equities without authentic ownership contradicts the direct prophetic prohibition: <em>"Do not sell what you do not possess."</em></li>
      </ul>

      <h3>Conclusion & Practical Guidelines</h3>
      <p>Equity investment remains allowable under Shari'a when governed by rigorous ethical screening: verifying that the company's core business is Halal, debt-to-equity ratios remain within permissible tolerances, interest income is strictly cleansed, and speculation is replaced with genuine long-term capital participation.</p>
    `
  },
  {
    id: 'machine-learning-islamic-finance',
    index: '03',
    date: '15 OCT 2026',
    category: 'TECHNICAL WRITING',
    categoryKey: 'technical',
    readTime: 'ENGLISH • 18 PAGES',
    language: 'English',
    pageCount: 18,
    pdf: 'assets/writings/machine-learning-islamic-finance.pdf',
    title: 'Leveraging Machine Learning in Islamic Finance: Practical Applications, Theoretical Consideration and Real-World Case Studies',
    titleHtml: 'Leveraging Machine Learning in Islamic Finance:<br>Practical Applications, Theoretical Consideration and<br>Real-World Case Studies',
    excerpt: 'Investigating the integration of Machine Learning and Artificial Intelligence into Islamic banking, risk management, and algorithmic trading, examining practical case studies including Bank Islam Malaysia and Wahed Invest while maintaining Shari\'a compliance.',
    content: `
      <div class="reader-meta-box">
        <p><strong>Author:</strong> Muhammed Jasim TM &bull; <strong>Institution:</strong> Darul Uloom Islamic Da'wa College / Darul Huda Islamic University</p>
        <p><strong>Field:</strong> Artificial Intelligence & Machine Learning &bull; Islamic Financial Engineering</p>
      </div>

      <div class="reader-pdf-action-card">
        <div class="reader-pdf-action-text">
          <strong>COMPLETE RESEARCH PAPER</strong><br>
          <span>Original 18-page comprehensive research paper in PDF format.</span>
        </div>
        <a href="assets/writings/machine-learning-islamic-finance.pdf" target="_blank" rel="noopener noreferrer" class="reader-pdf-btn">
          <span>OPEN PDF DOCUMENT</span>
          <span>&nearr;</span>
        </a>
      </div>

      <h3>Abstract & Research Motivation</h3>
      <p>This paper examines the integration of Machine Learning (ML) and Artificial Intelligence (AI) into Islamic banking and financial institutions. By investigating real-world case studies and algorithmic trading mechanisms, the research demonstrates how automated computational systems can optimize Islamic financial operations without compromising Shari'a authenticity, interest (Riba) prohibitions, or excessive ambiguity (Gharar).</p>

      <blockquote>"The core objective of modern Islamic financial engineering is not to replicate conventional finance with Arabic terminology, but to harness cutting-edge computational power to advance equitable, transparent, and ethically grounded economic ecosystems."</blockquote>

      <h3>Foundational Alignment: AI and Islamic Legal Values</h3>
      <p>Machine Learning enables computational systems to extract patterns, generate predictive inferences, and optimize decisions from empirical datasets without explicit procedural programming. Within Islamic jurisprudence, technology is inherently neutral; its ethical validity depends on its application and outcomes (<em>al-umuru bi-maqasidiha</em>).</p>

      <p>When applied to financial governance, ML models can directly advance the higher objectives of Islamic law (<em>Maqasid al-Shari'a</em>) by preventing fraud, mitigating systemic default risks, and improving accessibility for underserved demographics.</p>

      <h3>Key Operational Vectors</h3>
      <ul>
        <li><strong>Automated Risk Scoring:</strong> Predictive classification algorithms evaluate creditworthiness without relying on predatory interest schedules, enabling authentic profit-and-loss sharing contracts (<em>Mudarabah</em> and <em>Musharakah</em>).</li>
        <li><strong>Continuous Fraud Detection:</strong> Real-time neural anomaly detection scans payment streams to flag suspicious transactions, money laundering, and regulatory breaches instantaneously.</li>
        <li><strong>Conversational Banking (CaIFE):</strong> The deployment of specialized chatbots like CaIFE (Chatbot as Islamic Finance Expert) delivers instantaneous, Shari'a-compliant advisory to retail customers around the clock.</li>
      </ul>

      <h3>Empirical Case Studies</h3>
      <h4>1. Bank Islam Malaysia Berhad</h4>
      <p>Bank Islam Malaysia pioneered the integration of machine learning algorithms within its customer journey and risk assessment pipelines. By deploying ML models across credit analysis, the institution substantially reduced default forecasting error rates while maintaining complete Shari'a compliance across retail and SME portfolios.</p>

      <h4>2. Wahed Invest (Global Robo-Advisory)</h4>
      <p>Wahed Invest revolutionized Islamic wealth management by creating an automated robo-advisory platform. Its algorithms continuously screen global equity indices against Shari'a criteria (eliminating non-compliant debt thresholds, weapon manufacturing, tobacco, and interest-bearing revenues), automatically rebalancing diversified client portfolios with minimal transaction friction.</p>

      <h3>Algorithmic Trading & Ethical Safeguards</h3>
      <p>While Machine Learning offers unprecedented trading speed, high-frequency algorithmic models present ethical hazards under Islamic jurisprudence. Automated squaring systems and predatory high-frequency trading (HFT) risk violating mutual satisfaction (<em>Taradi</em>) requirements. The paper proposes structural algorithmic constraints to ensure execution transparently aligns with Shari'a trading doctrines.</p>

      <h3>Conclusion</h3>
      <p>Machine Learning is not merely an efficiency driver; it is an architectural catalyst for the next era of Islamic finance. By uniting rigorous computational methodologies with the ethical foundations of Islamic jurisprudence, financial institutions can deliver transparent, resilient, and inclusive financial services to the global economy.</p>
    `
  }
];

document.addEventListener('DOMContentLoaded', () => {
  updateCategoryCounts();
  initWritingsFilter();
  initWritingsSearch();
  initArticleReader();
  initScrollIndicator();
  initScrollArrows();
});

/* ==========================================================================
   0. CATEGORY COUNTS SYNCHRONIZATION
   ========================================================================== */
function updateCategoryCounts() {
  const articleRows = document.querySelectorAll('.article-row-item');
  const counts = { all: articleRows.length };

  articleRows.forEach(row => {
    const cat = row.getAttribute('data-category');
    if (cat) {
      counts[cat] = (counts[cat] || 0) + 1;
    }
  });

  const filterButtons = document.querySelectorAll('.filter-pill-btn');
  filterButtons.forEach(btn => {
    const filter = btn.getAttribute('data-filter');
    const label = btn.textContent.split('(')[0].trim();
    const count = counts[filter] || 0;
    const formattedCount = String(count).padStart(2, '0');
    btn.textContent = `${label} (${formattedCount})`;
  });

  const heroMeta = document.querySelector('.writings-hero-meta');
  if (heroMeta) {
    const totalCount = String(counts.all).padStart(2, '0');
    heroMeta.innerHTML = `${totalCount} PUBLICATIONS &bull; 2024–2026`;
  }
}

/* ==========================================================================
   1. COMBINED FILTERING & SEARCH
   ========================================================================== */
function applyFiltersAndSearch() {
  const activeBtn = document.querySelector('.filter-pill-btn.is-active');
  const filterValue = activeBtn ? activeBtn.getAttribute('data-filter') : 'all';
  const searchInput = document.getElementById('writingsSearchInput');
  const query = (searchInput ? searchInput.value : '').toLowerCase().trim();
  const articleRows = document.querySelectorAll('.article-row-item');

  articleRows.forEach(row => {
    const rowCategory = row.getAttribute('data-category');
    const categoryMatches = (filterValue === 'all' || rowCategory === filterValue);

    let textMatches = true;
    if (query) {
      const fullText = row.textContent.toLowerCase();
      textMatches = fullText.includes(query);
    }

    if (categoryMatches && textMatches) {
      row.style.display = 'grid';
      row.style.opacity = '1';
    } else {
      row.style.display = 'none';
    }
  });
}

function initWritingsFilter() {
  const filterButtons = document.querySelectorAll('.filter-pill-btn');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      applyFiltersAndSearch();
    });
  });
}

function initWritingsSearch() {
  const searchInput = document.getElementById('writingsSearchInput');
  if (!searchInput) return;

  searchInput.addEventListener('input', () => {
    applyFiltersAndSearch();
  });
}

/* ==========================================================================
   2. ARTICLE READER DRAWER / MODAL
   ========================================================================== */
function initArticleReader() {
  const modal = document.getElementById('readerModal');
  const closeBtn = document.getElementById('readerClose');
  const backdrop = document.getElementById('readerBackdrop');
  const articleRows = document.querySelectorAll('.article-row-item');

  const titleEl = document.getElementById('readerArticleTitle');
  const categoryEl = document.getElementById('readerCategoryPill');
  const dateEl = document.getElementById('readerArticleDate');
  const readTimeEl = document.getElementById('readerArticleReadTime');
  const bodyEl = document.getElementById('readerProseBody');

  function openArticle(articleId) {
    const data = ARTICLES_DATABASE.find(item => item.id === articleId);
    if (!data) return;

    if (!modal) return;
    if (titleEl) {
      titleEl.innerHTML = data.titleHtml || data.title;
      if (data.language === 'Arabic') {
        titleEl.setAttribute('dir', 'rtl');
        titleEl.setAttribute('lang', 'ar');
        titleEl.classList.add('article-arabic-title');
      } else {
        titleEl.setAttribute('dir', 'ltr');
        titleEl.setAttribute('lang', 'en');
        titleEl.classList.remove('article-arabic-title');
      }
    }
    if (categoryEl) categoryEl.textContent = data.category;
    if (dateEl) dateEl.textContent = data.date;
    if (readTimeEl) readTimeEl.textContent = data.readTime;
    if (bodyEl) {
      bodyEl.innerHTML = data.content;
      if (data.language === 'Arabic') {
        bodyEl.setAttribute('dir', 'rtl');
        bodyEl.setAttribute('lang', 'ar');
      } else {
        bodyEl.setAttribute('dir', 'ltr');
        bodyEl.setAttribute('lang', 'en');
      }
    }

    const bodyScroll = modal.querySelector('.reader-body-scroll');
    if (bodyScroll) bodyScroll.scrollTop = 0;

    modal.classList.add('is-active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeArticle() {
    if (!modal) return;
    modal.classList.remove('is-active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  articleRows.forEach(row => {
    row.addEventListener('click', () => {
      const articleId = row.getAttribute('data-article-id');
      openArticle(articleId);
    });

    row.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const articleId = row.getAttribute('data-article-id');
        openArticle(articleId);
      }
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeArticle);
  if (backdrop) backdrop.addEventListener('click', closeArticle);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('is-active')) {
      closeArticle();
    }
  });
}


/* ==========================================================================
   4. SCROLL INDICATOR TRACK SYNC
   ========================================================================== */
function initScrollIndicator() {
  const thumb = document.getElementById('scrollThumbIndicator');
  const track = document.getElementById('scrollTrackLane');
  if (!thumb || !track) return;

  function updateThumb() {
    const scrollY = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    if (maxScroll <= 0) return;

    const progress = Math.min(Math.max(scrollY / maxScroll, 0), 1);
    const trackHeight = track.clientHeight - thumb.clientHeight;
    const topPos = progress * trackHeight;

    thumb.style.top = `${topPos}px`;
  }

  window.addEventListener('scroll', updateThumb, { passive: true });
  window.addEventListener('resize', updateThumb);
  updateThumb();
}

/* ==========================================================================
   5. HERO & SCROLL ARROW BUTTONS
   ========================================================================== */
function initScrollArrows() {
  const scrollUpBtn = document.getElementById('scrollUpBtn');
  const scrollDownBtn = document.getElementById('scrollDownBtn');
  const scrollPrompt = document.getElementById('writingsScrollPrompt');

  if (scrollUpBtn) {
    scrollUpBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  function scrollToArchive() {
    const archive = document.getElementById('writingsArchive');
    if (archive) {
      archive.scrollIntoView({ behavior: 'smooth' });
    }
  }

  if (scrollDownBtn) scrollDownBtn.addEventListener('click', scrollToArchive);
  if (scrollPrompt) scrollPrompt.addEventListener('click', scrollToArchive);
}
