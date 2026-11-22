(function () {
  'use strict';
  document.documentElement.classList.add('js');

  var CFG = {
    email: 'theartists.pk@gmail.com',
    whatsapp: '+92 315 7540129',
    hours: 'Mon to Sat, 10:00 to 18:00 (PKT)',
    tz: 'PKT',
    slots: ['10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00']
  };

  var ICONS = {
    'video-editing': '<svg viewBox="0 0 48 48"><rect x="6" y="10" width="36" height="28" rx="4"/><path d="M6 18h36M6 30h36M14 10v8M24 10v8M34 10v8M14 30v8M24 30v8M34 30v8"/></svg>',
    'graphic-design': '<svg viewBox="0 0 48 48"><path d="M24 5c10 0 18 7 18 15 0 6-5 8-9 8h-4c-3 0-4 2-3 5 1 3-1 6-4 6C12 39 6 32 6 24 6 13 14 5 24 5z"/><circle cx="16" cy="22" r="2"/><circle cx="23" cy="14" r="2"/><circle cx="32" cy="17" r="2"/></svg>',
    'web-development': '<svg viewBox="0 0 48 48"><rect x="5" y="9" width="38" height="30" rx="4"/><path d="M5 18h38M20 26l-4 4 4 4M28 26l4 4-4 4"/></svg>',
    'content-writing': '<svg viewBox="0 0 48 48"><path d="M12 6h18l8 8v28H12z"/><path d="M30 6v8h8M18 24h14M18 31h14M18 38h8"/></svg>',
    'app-development': '<svg viewBox="0 0 48 48"><rect x="13" y="4" width="22" height="40" rx="5"/><path d="M21 20l-4 4 4 4M27 20l4 4-4 4"/></svg>',
    'plus': '<svg viewBox="0 0 48 48"><path d="M24 10v28M10 24h28"/></svg>'
  };

 var SERVICES = [
  {
    id: 'video-editing', name: 'Video Editing', c: 'green', kind: 'video',
    tags: ['YouTube', 'Reels', 'Brands'],
    short: 'Story-first edits, reels and brand videos that hold attention.',
    long: 'Raw footage in, a finished film out. We shape the story, tighten the pacing, add captions and clean up the sound so viewers stay to the end.',
    gets: ['Story structure and pacing', 'Cuts, transitions and b-roll', 'Captions, color and sound cleanup', 'Export for YouTube, reels and broadcast'],
    fmt: 'Formats: 16:9 and 9:16, up to 4K',
    works: [
      ['Travel vlog, 8 minutes', 'Vlog', '8:24', null, 'https://www.youtube.com/watch?v=aqz-KE-bpKQ'],
      ['Podcast highlights', 'Podcast', '12:05', null, 'https://www.youtube.com/watch?v=jNQXAC9IVRw'],
      ['Brand story film', 'Brand', '1:30', 'images/video-editing/brand.jpg', null],
      ['Reels pack for a cafe', 'Reels', '0:15', 'images/video-editing/reels.jpg', null],
      ['Event recap', 'Event', '3:45', 'images/video-editing/event.jpg', null],
      ['Product launch video', 'Launch', '2:00', 'images/video-editing/launch.jpg', null]
    ]
  },
  {
    id: 'graphic-design', name: 'Graphic Designing', c: 'magenta', kind: 'design',
    tags: ['Logos', 'Branding', 'Social posts'],
    short: 'Logos, brand identities and social graphics that look sharp everywhere.',
    long: 'We design the visual side of your brand: logos, color and type, social posts, posters and print, delivered as clean files you can use right away.',
    gets: ['Logo and brand identity', 'Social media posts and carousels', 'Posters, flyers and print', 'Source files and brand guidelines'],
    fmt: 'Formats: PNG, SVG, PDF and source files',
    works: [
      ['Cafe brand identity', 'Branding', 'Logo + palette', 'images/graphic-design/cafe-brand.jpg', null],
      ['Gym logo set', 'Logo', 'SVG', 'images/graphic-design/gym-logo.jpg', null],
      ['Event poster', 'Poster', 'A3', 'images/graphic-design/event-poster.jpg', null],
      ['Social post pack', 'Social', '12 posts', 'images/graphic-design/social-pack.jpg', null],
      ['Packaging label', 'Packaging', 'Print-ready', 'images/graphic-design/packaging.jpg', null],
      ['Business card set', 'Print', 'Front + back', 'images/graphic-design/business-card.jpg', null]
    ]
  },
  {
    id: 'web-development', name: 'Web Development', c: 'sky', kind: 'web',
    tags: ['Business sites', 'Stores', 'Web apps'],
    short: 'Fast, responsive websites and web apps that turn visitors into customers.',
    long: 'We design and build websites from landing pages to online stores, made to load fast and work on every screen size.',
    gets: ['Responsive design for phone and desktop', 'Landing pages and business sites', 'Online stores and booking systems', 'Hosting setup and handover'],
    fmt: 'Stack: HTML, CSS, JavaScript, React, Node',
    works: [
      ['Restaurant website', 'Business', '5 pages', 'images/web-development/restaurant.jpg', null],
      ['Online clothing store', 'Store', 'E-commerce', 'images/web-development/clothing-store.jpg', null],
      ['Agency landing page', 'Landing', '1 page', 'images/web-development/agency.jpg', null],
      ['Clinic booking site', 'Booking', '8 pages', 'images/web-development/clinic.jpg', null],
      ['Portfolio website', 'Portfolio', '4 pages', 'images/web-development/portfolio.jpg', null],
      ['Sales dashboard', 'Web app', 'Admin', 'images/web-development/dashboard.jpg', null]
    ]
  },
  {
    id: 'content-writing', name: 'Content Writing', c: 'yellow', kind: 'write',
    tags: ['Blogs', 'Scripts', 'Captions'],
    short: 'Blogs, website copy and video scripts written to be read and remembered.',
    long: 'Words that fit your brand. We write blog posts, website copy, video scripts and social captions that are clear and easy to act on.',
    gets: ['Blog posts and articles', 'Website and product copy', 'Video and reel scripts', 'Social captions and email copy'],
    fmt: 'Delivery: Google Docs or Word files',
    works: [
      ['Tips for small business growth', 'Blog', '1,200 words', 'images/content-writing/blog.jpg', null],
      ['Homepage copy for a bakery', 'Web copy', '450 words', 'images/content-writing/homepage.jpg', null],
      ['YouTube explainer script', 'Script', '900 words', 'images/content-writing/script.jpg', null],
      ['30 days of captions', 'Social', '30 posts', 'images/content-writing/captions.jpg', null],
      ['Product descriptions', 'Product', '20 items', 'images/content-writing/product.jpg', null],
      ['Welcome email series', 'Email', '5 emails', 'images/content-writing/email.jpg', null]
    ]
  },
  {
    id: 'app-development', name: 'Application Development', c: 'violet', kind: 'app',
    tags: ['Android', 'iOS', 'Desktop'],
    short: 'Mobile and desktop apps built from first sketch to launch.',
    long: 'From a first sketch to a published app. We plan the screens, build the app and help you launch it on the stores.',
    gets: ['App planning and UI design', 'Android and iOS apps', 'Backend and database setup', 'Testing and store launch'],
    fmt: 'Stack: Flutter, React Native, Firebase',
    works: [
      ['Food delivery app', 'Mobile', 'iOS + Android', 'images/app-development/food-app.jpg', null],
      ['Fitness tracker', 'Mobile', 'Android', 'images/app-development/fitness.jpg', null],
      ['Salon booking app', 'Mobile', 'iOS + Android', 'images/app-development/salon.jpg', null],
      ['Inventory manager', 'Desktop', 'Windows', 'images/app-development/inventory.jpg', null],
      ['School portal', 'Web + app', 'Cross-platform', 'images/app-development/school.jpg', null],
      ['Expense tracker', 'Mobile', 'Android', 'images/app-development/expense.jpg', null]
    ]
  }
];
  var SERVICES = [
    { id: 'video-editing', name: 'Video Editing', c: 'green', kind: 'video', tags: ['YouTube', 'Reels', 'Brands'], short: 'Story-first edits, reels and brand videos that hold attention.',
      long: 'Raw footage in, a finished film out. We shape the story, tighten the pacing, add captions and clean up the sound so viewers stay to the end.',
      gets: ['Story structure and pacing', 'Cuts, transitions and b-roll', 'Captions, color and sound cleanup', 'Export for YouTube, reels and broadcast'], fmt: 'Formats: 16:9 and 9:16, up to 4K',
      works: [['Travel vlog, 8 minutes', 'Vlog', '8:24'], ['Podcast highlights', 'Podcast', '12:05'], ['Brand story film', 'Brand', '1:30'], ['Reels pack for a cafe', 'Reels', '0:15'], ['Event recap', 'Event', '3:45'], ['Product launch video', 'Launch', '2:00']] },
    { id: 'graphic-design', name: 'Graphic Designing', c: 'magenta', kind: 'design', tags: ['Logos', 'Branding', 'Social posts'], short: 'Logos, brand identities and social graphics that look sharp everywhere.',
      long: 'We design the visual side of your brand: logos, color and type, social posts, posters and print, delivered as clean files you can use right away.',
      gets: ['Logo and brand identity', 'Social media posts and carousels', 'Posters, flyers and print', 'Source files and brand guidelines'], fmt: 'Formats: PNG, SVG, PDF and source files',
      works: [['Cafe brand identity', 'Branding', 'Logo + palette'], ['Gym logo set', 'Logo', 'SVG'], ['Event poster', 'Poster', 'A3'], ['Social post pack', 'Social', '12 posts'], ['Packaging label', 'Packaging', 'Print-ready'], ['Business card set', 'Print', 'Front + back']] },
    { id: 'web-development', name: 'Web Development', c: 'sky', kind: 'web', tags: ['Business sites', 'Stores', 'Web apps'], short: 'Fast, responsive websites and web apps that turn visitors into customers.',
      long: 'We design and build websites from landing pages to online stores, made to load fast and work on every screen size.',
      gets: ['Responsive design for phone and desktop', 'Landing pages and business sites', 'Online stores and booking systems', 'Hosting setup and handover'], fmt: 'Stack: HTML, CSS, JavaScript, React, Node',
      works: [['Restaurant website', 'Business', '5 pages'], ['Online clothing store', 'Store', 'E-commerce'], ['Agency landing page', 'Landing', '1 page'], ['Clinic booking site', 'Booking', '8 pages'], ['Portfolio website', 'Portfolio', '4 pages'], ['Sales dashboard', 'Web app', 'Admin']] },
    { id: 'content-writing', name: 'Content Writing', c: 'yellow', kind: 'write', tags: ['Blogs', 'Scripts', 'Captions'], short: 'Blogs, website copy and video scripts written to be read and remembered.',
      long: 'Words that fit your brand. We write blog posts, website copy, video scripts and social captions that are clear and easy to act on.',
      gets: ['Blog posts and articles', 'Website and product copy', 'Video and reel scripts', 'Social captions and email copy'], fmt: 'Delivery: Google Docs or Word files',
      works: [['Tips for small business growth', 'Blog', '1,200 words'], ['Homepage copy for a bakery', 'Web copy', '450 words'], ['YouTube explainer script', 'Script', '900 words'], ['30 days of captions', 'Social', '30 posts'], ['Product descriptions', 'Product', '20 items'], ['Welcome email series', 'Email', '5 emails']] },
    { id: 'app-development', name: 'Application Development', c: 'violet', kind: 'app', tags: ['Android', 'iOS', 'Desktop'], short: 'Mobile and desktop apps built from first sketch to launch.',
      long: 'From a first sketch to a published app. We plan the screens, build the app and help you launch it on the stores.',
      gets: ['App planning and UI design', 'Android and iOS apps', 'Backend and database setup', 'Testing and store launch'], fmt: 'Stack: Flutter, React Native, Firebase',
      works: [['Food delivery app', 'Mobile', 'iOS + Android'], ['Fitness tracker', 'Mobile', 'Android'], ['Salon booking app', 'Mobile', 'iOS + Android'], ['Inventory manager', 'Desktop', 'Windows'], ['School portal', 'Web + app', 'Cross-platform'], ['Expense tracker', 'Mobile', 'Android']] }
  ];
  var BS = ['green', 'magenta', 'sky', 'yellow', 'violet', 'orange', 'teal', 'lime'];

  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function esc(v) { return String(v == null ? '' : v).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function byId(id) { for (var i = 0; i < SERVICES.length; i++) if (SERVICES[i].id === id) return SERVICES[i]; return null; }

  /* ---------- Scroll progress ---------- */
  var progressEl = $('#progress');
  function updateProgress() {
    var h = document.documentElement;
    var scrollTop = window.pageYOffset || h.scrollTop || 0;
    var max = (h.scrollHeight || 0) - (h.clientHeight || 0);
    var pct = max > 0 ? Math.min(100, (scrollTop / max) * 100) : 0;
    if (progressEl) progressEl.style.width = pct + '%';
  }
  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress, { passive: true });

  /* ---------- Counter animation ---------- */
  function animateCounter(el) {
    if (el.dataset.counted) return;
    el.dataset.counted = '1';
    var target = parseFloat(el.dataset.count || '0');
    var suffix = el.dataset.suffix || '';
    var duration = 1400;
    var start = performance.now();
    function tick(now) {
      var p = Math.min((now - start) / duration, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      var val = Math.round(eased * target);
      el.textContent = val + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  /* ---------- Reveal on scroll ---------- */
  var io = ('IntersectionObserver' in window) ? new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
        // Trigger counter if inside
        var counters = $$('[data-count]:not([data-counted])', e.target);
        if (counters.length === 0 && e.target.matches('[data-count]:not([data-counted])')) counters = [e.target];
        counters.forEach(animateCounter);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -6% 0px' }) : null;

  function observe(root) {
    $$('.rv:not(.in)', root).forEach(function (n) { if (io) io.observe(n); else n.classList.add('in'); });
  }

  /* ---------- Contact info ---------- */
  if ($('#c-mail')) $('#c-mail').textContent = CFG.email;
  if ($('#c-wa')) $('#c-wa').textContent = CFG.whatsapp;
  if ($('#c-hours')) $('#c-hours').textContent = CFG.hours;

  /* ---------- Home rendering ---------- */
  if ($('#svcs')) {
    $('#svcs').innerHTML = SERVICES.map(function (s, i) {
      return '<a class="svc rv" href="#' + s.id + '" style="--a:var(--' + s.c + ');--d:' + (i * 70) + 'ms">' +
        '<span class="ico">' + ICONS[s.id] + '</span><h3>' + esc(s.name) + '</h3><p>' + esc(s.short) + '</p>' +
        '<div class="tags">' + s.tags.map(function (t) { return '<span>' + esc(t) + '</span>'; }).join('') + '</div>' +
        '<span class="go mono">See portfolio <i>→</i></span></a>';
    }).join('') +
      '<a class="svc cta rv" href="#book" data-book="" style="--a:var(--orange);--d:350ms"><span class="ico">' + ICONS.plus + '</span><h3>Something else in mind?</h3><p>Tell us about your idea and we will tell you how we can help.</p><span class="go mono">Book a call <i>→</i></span></a>';
  }

  var mq = SERVICES.map(function (s) { return '<span class="marq-item" style="--c:var(--' + s.c + ')"><i></i>' + esc(s.name) + '</span>'; }).join('');
  if ($('#marq')) $('#marq').innerHTML = '<span class="marq-item">' + mq + '</span><span class="marq-item">' + mq + '</span>';
  if ($('#flinks')) $('#flinks').innerHTML = SERVICES.map(function (s) { return '<a href="#' + s.id + '">' + esc(s.name) + '</a>'; }).join('');

  /* ---------- Cursor spotlight on hero ---------- */
  var heroEl = $('.hero3');
  if (heroEl && !reduce && window.matchMedia('(pointer:fine)').matches) {
    var spot = document.createElement('div');
    spot.className = 'cursor-spotlight';
    spot.style.cssText = 'position:absolute;inset:0;pointer-events:none;z-index:0;' +
      'background:radial-gradient(circle 340px at var(--mx,50%) var(--my,50%),rgba(0,200,120,0.13),transparent 65%);' +
      'transition:background 0.15s ease;border-radius:24px;';
    heroEl.style.position = 'relative';
    heroEl.appendChild(spot);
    heroEl.addEventListener('mousemove', function (e) {
      var rect = heroEl.getBoundingClientRect();
      spot.style.setProperty('--mx', (e.clientX - rect.left) + 'px');
      spot.style.setProperty('--my', (e.clientY - rect.top) + 'px');
    });
  }

  /* ---------- Service Page Rendering ---------- */
  function thumb(s, w, i) {
    var b = BS[(i + 2) % BS.length], k = s.kind, inner = '';
    if (k === 'video') inner = '<span class="pl"></span>';
    else if (k === 'design') inner = '<i class="sh s1"></i><i class="sh s2"></i><i class="sh s3"></i>';
    else if (k === 'web') inner = '<div class="bw" style="--b:var(--' + b + ')"><div class="bw-bar"><i></i><i></i><i></i><b></b></div><div class="bw-hero"></div><div class="bw-row"><i></i><i></i><i></i></div></div>';
    else if (k === 'write') inner = '<div class="wr"><b class="tt"></b><i class="ln"></i><i class="ln"></i><i class="ln"></i><i class="ln"></i><i class="ln"></i></div>';
    else inner = '<div class="ap"><div class="scr"><b class="hd"></b><i class="rw"></i><i class="rw"></i><i class="rw"></i></div></div>';
    return '<div class="wthumb k-' + k + ' v' + (i % 3) + '" style="--g:linear-gradient(135deg,var(--a),var(--' + b + '))">' + inner +
      '<span class="chip s">Sample</span><span class="chip k">' + esc(w[1]) + '</span><span class="chip d">' + esc(w[2]) + '</span></div>';
  }
  function workCard(s, w, i) {
    return '<article class="work rv" style="--d:' + ((i % 4) * 70) + 'ms">' + thumb(s, w, i) +
      '<div class="wbody"><h3>' + esc(w[0]) + '</h3><span class="btn sm off" title="A link to the project goes here">Link coming soon</span></div></article>';
  }
  function renderService(s) {
    var i = SERVICES.indexOf(s), n = SERVICES.length;
    var prev = SERVICES[(i + n - 1) % n], next = SERVICES[(i + 1) % n];
    var v = $('#v-service');
    v.style.setProperty('--a', 'var(--' + s.c + ')');
    v.innerHTML =
      '<a class="back" href="#services">← All services</a>' +
      '<div class="shero"><div><span class="ico">' + ICONS[s.id] + '</span>' +
      '<h1><span>' + esc(s.name) + '</span></h1><p class="lead">' + esc(s.long) + '</p>' +
      '<div class="cta-row"><a class="btn tint" href="#book" data-book="' + s.id + '">Book ' + esc(s.name) + '</a><a class="btn" href="#portfolio">See the portfolio</a></div></div>' +
      '<ul class="gets">' + s.gets.map(function (g) { return '<li>' + esc(g) + '</li>'; }).join('') + '<li class="fmt">' + esc(s.fmt) + '</li></ul></div>' +
      '<section id="portfolio" style="padding-top:32px"><div class="sec-head rv"><div class="eyebrow mono">Portfolio</div><h2>' + esc(s.name) + ' projects</h2></div>' +
      '<div class="works k-' + s.kind + '">' + s.works.map(function (w, k) { return workCard(s, w, k + i); }).join('') + '</div></section>' +
      '<div class="cta-band rv"><h2>Have a project in mind for ' + esc(s.name.toLowerCase()) + '?</h2><a class="btn" href="#book" data-book="' + s.id + '">Book a call</a></div>' +
      '<div class="pn"><a href="#' + prev.id + '" style="--a:var(--' + prev.c + ')"><span class="mono">← Previous</span><b>' + esc(prev.name) + '</b></a>' +
      '<a class="next" href="#' + next.id + '" style="--a:var(--' + next.c + ')"><span class="mono">Next →</span><b>' + esc(next.name) + '</b></a></div>';
    observe(v);
  }

  /* ---------- Booking Logic ---------- */
  var BK = { service: 'video-editing', type: 'call20', day: '', time: '', step: 1 };
  var TYPES = [['call20', 'Discovery call', '20 minutes'], ['call45', 'Project consultation', '45 minutes'], ['brief', 'Send a brief', 'No call needed']];
  function days() {
    var out = [], d = new Date();
    while (out.length < 10) {
      d.setDate(d.getDate() + 1);
      if (d.getDay() === 0) continue;
      var iso = d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2);
      out.push([iso, d.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' })]);
    }
    return out;
  }
  var DAYS = days();
  function radio(name, id, val, label, sub, color, checked) {
    return '<label class="opt"' + (color ? ' style="--a:var(--' + color + ')"' : '') + '><input type="radio" name="' + name + '" id="' + id + '" value="' + esc(val) + '"' + (checked ? ' checked' : '') + '><span>' + esc(label) + (sub ? '<small>' + esc(sub) + '</small>' : '') + '</span></label>';
  }

  if ($('#bk')) {
    $('#bk').innerHTML =
      '<ol class="bsteps" id="bsteps"><li data-s="1" class="on">Service</li><li data-s="2">Time</li><li data-s="3">Details</li></ol>' +
      '<form id="bkform" novalidate>' +
      '<div class="bstep on" data-step="1">' +
      '<fieldset><legend>What do you need?</legend><div class="opts" id="svcopts">' + SERVICES.map(function (s, i) { return radio('svc', 'svc-' + s.id, s.id, s.name, '', s.c, i === 0); }).join('') + '</div></fieldset>' +
      '<fieldset><legend>How would you like to start?</legend><div class="opts" id="typeopts">' + TYPES.map(function (t, i) { return radio('btype', 'bt-' + t[0], t[0], t[1], t[2], 'lime', i === 0); }).join('') + '</div></fieldset>' +
      '<div class="bk-nav"><span></span><button class="btn primary" type="button" id="n1">Next</button></div></div>' +
      '<div class="bstep" data-step="2">' +
      '<fieldset><legend>Pick a day</legend><div class="opts" id="dayopts">' + DAYS.map(function (d, i) { return radio('bday', 'day-' + i, d[0], d[1], '', 'sky', false); }).join('') + '</div></fieldset>' +
      '<fieldset><legend>Pick a time</legend><div class="opts" id="timeopts">' + CFG.slots.map(function (t, i) { return radio('btime', 'time-' + i, t, t, '', 'yellow', false); }).join('') + '</div></fieldset>' +
      '<p class="hint">Times are in studio time (' + esc(CFG.tz) + '). Sundays are closed.</p><div class="msg" id="msg2" aria-live="polite"></div>' +
      '<div class="bk-nav"><button class="btn" type="button" id="b2">Back</button><button class="btn primary" type="button" id="n2">Next</button></div></div>' +
      '<div class="bstep" data-step="3"><div class="sum" id="bsum"></div>' +
      '<div class="two"><div class="fld"><label for="f-name">Your name</label><input id="f-name" type="text" autocomplete="name"></div>' +
      '<div class="fld"><label for="f-email">Email</label><input id="f-email" type="email" autocomplete="email"></div></div>' +
      '<div class="two"><div class="fld"><label for="f-phone">WhatsApp or phone (optional)</label><input id="f-phone" type="tel" autocomplete="tel"></div>' +
      '<div class="fld"><label for="f-budget">Budget (optional)</label><select id="f-budget"><option value="">Not sure yet</option><option>Small project</option><option>Mid-size project</option><option>Larger or ongoing work</option></select></div></div>' +
      '<div class="fld"><label for="f-notes">What are you making?</label><textarea id="f-notes"></textarea></div>' +
      '<div class="msg" id="msg3" aria-live="polite"></div>' +
      '<div class="bk-nav"><button class="btn" type="button" id="b3">Back</button><button class="btn primary" type="submit" id="send">Request booking</button></div></div>' +
      '<div class="bstep" data-step="4" id="bkdone"></div></form>';

    initBooking();
  }

  function initBooking() {
    function serviceName() { return byId(BK.service).name; }
    function typeName() { for (var i = 0; i < TYPES.length; i++) if (TYPES[i][0] === BK.type) return TYPES[i][1]; return ''; }
    function dayLabel() { for (var i = 0; i < DAYS.length; i++) if (DAYS[i][0] === BK.day) return DAYS[i][1]; return ''; }
    function when() { return BK.type === 'brief' ? 'Brief by message' : dayLabel() + ', ' + BK.time + ' ' + CFG.tz; }

    function go(n) {
      BK.step = n;
      $$('.bstep').forEach(function (p) { p.classList.toggle('on', +p.getAttribute('data-step') === n); });
      $$('#bsteps li').forEach(function (li) {
        var s = +li.getAttribute('data-s');
        li.classList.toggle('on', s === Math.min(n, 3));
        li.classList.toggle('done', s < Math.min(n, 3) || n === 4);
        li.hidden = (s === 2 && BK.type === 'brief');
      });
      if (n === 3) $('#bsum').textContent = serviceName() + ' · ' + typeName() + (BK.type === 'brief' ? '' : ' · ' + when());
    }
    function setService(id) {
      if (!byId(id)) return;
      BK.service = id;
      var r = $('#svc-' + id); if (r) r.checked = true;
    }

    $('#bkform').addEventListener('change', function (e) {
      if (e.target.name === 'svc') BK.service = e.target.value;
      if (e.target.name === 'btype') { BK.type = e.target.value; go(1); }
      if (e.target.name === 'bday') BK.day = e.target.value;
      if (e.target.name === 'btime') BK.time = e.target.value;
    });
    $('#n1').addEventListener('click', function () { go(BK.type === 'brief' ? 3 : 2); });
    $('#b2').addEventListener('click', function () { go(1); });
    $('#n2').addEventListener('click', function () {
      if (!BK.day || !BK.time) { $('#msg2').textContent = 'Pick a day and a time to continue.'; return; }
      $('#msg2').textContent = ''; go(3);
    });
    $('#b3').addEventListener('click', function () { go(BK.type === 'brief' ? 1 : 2); });

    function detailsText(r) {
      return ['Booking request', 'Service: ' + r.service, 'Type: ' + r.type, 'When: ' + r.when, 'Name: ' + r.name, 'Email: ' + r.email,
        'Phone: ' + (r.phone || '-'), 'Budget: ' + (r.budget || '-'), 'Notes: ' + (r.notes || '-')].join('\n');
    }
    function showDone(r, ok) {
      var rows = '<dt>Service</dt><dd>' + esc(r.service) + '</dd><dt>Type</dt><dd>' + esc(r.type) + '</dd><dt>When</dt><dd>' + esc(r.when) + '</dd><dt>Name</dt><dd>' + esc(r.name) + '</dd><dt>Email</dt><dd>' + esc(r.email) + '</dd>';
      var h = ok
        ? '<h3>Request received</h3><p>Thanks, ' + esc(r.name) + '. We have your request and will reply by email to confirm.</p><dl>' + rows + '</dl>'
        : '<h3>One last step</h3><p>Your request could not be sent to our server. Copy the details below and send them to us by email or WhatsApp.</p><dl>' + rows + '</dl>' +
          '<div class="note">Send to <b>' + esc(CFG.email) + '</b> or WhatsApp <b>' + esc(CFG.whatsapp) + '</b></div>' +
          '<div><button class="btn tint sm" type="button" id="copydet" style="--a:var(--lime)">Copy booking details</button> <span class="hint" id="copydet-s" aria-live="polite"></span></div>';
      $('#bkdone').innerHTML = '<div class="done-box">' + h + '<div><button class="btn sm" type="button" id="again">Make another request</button></div></div>';
      go(4);
      var cd = $('#copydet');
      if (cd) cd.addEventListener('click', function () { copyText(detailsText(r), $('#copydet-s')); });
      $('#again').addEventListener('click', function () { $('#bkform').reset(); BK.day = ''; BK.time = ''; BK.type = 'call20'; BK.service = 'video-editing'; go(1); });
    }

    $('#bkform').addEventListener('submit', function (e) {
      e.preventDefault();
      var name = $('#f-name').value.trim(), email = $('#f-email').value.trim();
      var msg = $('#msg3');
      if (!name) { msg.textContent = 'Add your name so we know who to reply to.'; $('#f-name').focus(); return; }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { msg.textContent = 'Enter a valid email address, like name@example.com.'; $('#f-email').focus(); return; }
      msg.textContent = '';
      var r = { id: 'b' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6), createdAt: new Date().toISOString(),
        service: serviceName(), type: typeName(), when: when(), name: name, email: email, phone: $('#f-phone').value.trim(), budget: $('#f-budget').value, notes: $('#f-notes').value.trim() };
      var btn = $('#send'); btn.disabled = true; btn.textContent = 'Sending…';
      fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(r)
      })
        .then(function (res) { return res.json(); })
        .then(function (data) {
          btn.disabled = false; btn.textContent = 'Request booking';
          showDone(r, !!(data && data.ok));
        })
        .catch(function () {
          btn.disabled = false; btn.textContent = 'Request booking';
          showDone(r, false);
        });
    });

    // Expose setService for external buttons
    window.__setBookingService = setService;
  }

  function copyText(text, statusEl) {
    function ok() { statusEl.textContent = 'Copied.'; setTimeout(function () { statusEl.textContent = ''; }, 2000); }
    function fail() { statusEl.textContent = 'Copy is blocked here. Select the text and copy it manually.'; }
    try { if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(ok, fail); else fail(); } catch (e) { fail(); }
  }

  document.addEventListener('click', function (e) {
    var cp = e.target.closest('[data-copy]');
    if (cp) { var t = $('#' + cp.getAttribute('data-copy')); copyText(t.textContent, $('#copy-status')); return; }
    var bk = e.target.closest('[data-book]');
    if (bk) {
      var id = bk.getAttribute('data-book');
      if (id && window.__setBookingService) window.__setBookingService(id);
      if (location.hash === '#book') route();
    }
  });

  /* ---------- Router ---------- */
  var lastView = '';
  function show(id) {
    ['v-home', 'v-service', 'v-inbox'].forEach(function (v) { var el = $('#' + v); if (el) el.hidden = (v !== id); });
    var el = $('#' + id);
    if (!el) return;
    if (lastView !== id) { el.style.animation = 'none'; void el.offsetWidth; el.style.animation = ''; }
    lastView = id;
  }

  function route() {
    var h = decodeURIComponent((location.hash || '').slice(1));
    var s = byId(h);
    if (h === 'portfolio' && lastView === 'v-service') {
      var pf = document.getElementById('portfolio'); if (pf) pf.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' }); return;
    }
    if (s) { renderService(s); show('v-service'); window.scrollTo(0, 0); return; }
    var wasHome = (lastView === 'v-home');
    show('v-home'); observe($('#v-home'));

    var target = (h && h !== 'home') ? document.getElementById(h) : null;
    if (target && $('#v-home') && $('#v-home').contains(target)) {
      setTimeout(function () { target.scrollIntoView({ behavior: (reduce || !wasHome) ? 'auto' : 'smooth', block: 'start' }); }, 30);
    } else { window.scrollTo(0, 0); }
  }

  window.addEventListener('hashchange', route);
  route();
  updateProgress();
  observe(document);
})();