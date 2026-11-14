/* Dojo Manager · página de ventas: idioma ES/EN, capturas, WhatsApp, apariciones, contadores, galería y demo. */
(function () {
  document.documentElement.classList.add('js');
  const WA = '50258253416';
  const SHOTS_V = '1';   // súbelo al regenerar las capturas

  // ── Textos en inglés (el español está escrito en el HTML)
  const EN = {
    'meta.desc': 'Dojo Manager is the platform for martial arts academies: students, classes, attendance, fees, deposit slips and receipts, on desktop and mobile.',
    'skip': 'Skip to content', 'nav.aria': 'Main',
    'nav.features': 'Features', 'nav.gallery': 'Gallery', 'nav.demo': 'Demo', 'nav.manual': 'User guide', 'nav.plans': 'Plans', 'nav.faq': 'FAQ',
    'cta.demo': 'Get a demo', 'cta.try': 'Try it now', 'cta.whatsapp': 'Get a quote on WhatsApp', 'cta.whatsapp2': 'Message us on WhatsApp',
    'hero.eyebrow': 'New · Platform for martial arts academies',
    'hero.title': 'Your dojo in order, from sign-up to receipt.',
    'hero.sub': 'Dojo Manager brings together what today lives in notebooks, loose papers and chats: students, classes, attendance, monthly fees, deposit slips and receipts. For one dojo or several, on computers and phones.',
    'hero.origin': 'Made in Guatemala for jiu jitsu, karate, muay thai, boxing, MMA and any discipline.',
    'specs.title': 'Spec sheet',
    'specs.roles': 'profiles: owner of several dojos, administration, instructor and student or guardian',
    'specs.tools': 'tools, from students and fees to the dojo’s own web page',
    'specs.plans': 'plans so each dojo pays only for what it uses',
    'specs.receipts': 'receipts by hand: they are created when the payment is confirmed',
    'specs.deposit': 'deposit can cover several months or several minors',
    'specs.compare': 'dashboard comparisons: against last month and the same month last year',
    'specs.file': 'per deposit slip, as a photo or PDF, from the phone',
    'specs.mobile': 'functional on the phone, for students, instructors and administration',
    'feat.kicker': 'Standard equipment', 'feat.title': 'Everything a dojo needs to stop chasing payments.',
    'f1.tag': 'Students and guardians', 'f1.title': 'Every student with their plan, their payer and their history.',
    'f1.text': 'Enroll adults with their own account and minors under their guardian. A guardian sees all their minors with a single login. Load many at once with an Excel template.',
    'f1.b1': 'Minors always with an adult guardian', 'f1.b2': 'Alert when a minor turns 18', 'f1.b3': 'Bulk load by Excel with temporary passwords',
    'f2.tag': 'Fees and deposit slips', 'f2.title': 'The student uploads the deposit. You confirm with one tap.',
    'f2.text': 'Monthly fees are created automatically from each student’s plan. The student uploads a photo of the bank slip from their phone and you see it next to what they owe. On confirming, the receipt is created and reaches them instantly.',
    'f2.b1': 'One deposit covers several months or several minors', 'f2.b2': 'Cash payments recorded right there', 'f2.b3': 'Rejection with a reason, so the student knows what to fix',
    'f3.tag': 'Receipts', 'f3.title': 'Numbered PDF receipts that nobody deletes.',
    'f3.text': 'Every confirmed payment has its receipt with a sequential number. The student downloads it anytime, even when behind on payments. If one is wrong, it is voided with a reason and a new one is issued: the history stays complete.',
    'f3.b1': 'Sequential numbering per dojo', 'f3.b2': 'PDF download for the student and the dojo', 'f3.b3': 'Voiding leaves a trail, never deletes',
    'f4.tag': 'Classes and attendance', 'f4.title': 'Schedules, capacity and attendance with one tap per student.',
    'f4.text': 'Set the discipline, days, times, capacity and instructor of each class. Instructors mark their availability and take attendance from their phone. Enrollment never goes over capacity.',
    'f4.b1': 'Capacity enforced on enrollment', 'f4.b2': 'Each instructor’s availability by day and time', 'f4.b3': 'Occupancy per class on the instructor’s dashboard',
    'f5.tag': 'Late payments and reminders', 'f5.title': 'Who is late, how much they owe and the message already written.',
    'f5.text': 'You choose the grace days. After that, the student’s access is paused automatically and comes back as soon as they upload their slip. Templates build the message with the breakdown and open it in WhatsApp or your email.',
    'f5.b1': 'Days late per student', 'f5.b2': 'Automatic pause and reactivation on payment', 'f5.b3': 'Payment reminder with the amount already calculated',
    'f6.tag': 'Dashboard and several dojos', 'f6.title': 'All your dojos, at a glance.',
    'f6.text': 'Expected, collected, pending confirmation and overdue, filtered by dojo and discipline. Compare against last month or the same month last year, and tap any figure to see the payments behind it.',
    'f6.b1': 'A single login for the owner of several dojos', 'f6.b2': 'Filters by dojo and discipline', 'f6.b3': 'Data download in Excel',
    'f7.tag': 'Access and privacy', 'f7.title': 'Everyone sees their own. Every change is written down.',
    'f7.text': 'Only the administration creates accounts, with a temporary password the person changes on first sign-in. Students accept the privacy notice, decide about promotions and the use of their image, and download their data whenever they want. Every change goes into a signed log.',
    'f7.b1': 'Temporary password and mandatory change', 'f7.b2': 'Student permissions over their data and image', 'f7.b3': 'Log with author, date and time',
    'alt.students': 'Student list with plan and status', 'alt.payments': 'Deposit slips waiting for confirmation', 'alt.receipts': 'The dojo’s numbered receipts',
    'alt.attendance': 'Taking attendance per class', 'alt.late': 'Late students with days overdue', 'alt.dash': 'Dashboard for several dojos with comparisons', 'alt.privacy': 'Student permissions over their data',
    'gal.kicker': 'Gallery', 'gal.title': 'Take a look inside.', 'gal.hint': 'Swipe the images or use the arrows.', 'gal.aria': 'Dojo Manager screenshots', 'gal.prev': 'Previous', 'gal.next': 'Next',
    'gal.c1': 'My dojos: plan and status of each one', 'gal.c2': 'Open a dojo and see its team', 'gal.c3': 'The guardian sees all their minors',
    'gal.c4': 'Uploading the deposit slip', 'gal.c5': 'Classes with schedule, capacity and instructor', 'gal.c6': 'Instructor availability',
    'gal.c7': 'Payment reminders ready to send', 'gal.c8': 'A student’s full record', 'gal.c9': 'The user guide, inside the app',
    'demo.kicker': 'Test drive', 'demo.title': 'Try it now. No sign-up.',
    'demo.sub': 'A sample academy with two dojos, four disciplines and a year of history. Switch between owner, administration, instructor, student, guardian and first sign-in from the bar at the top: confirm a payment, take attendance or upload a slip. Nothing you do is saved. The demo is in Spanish.',
    'demo.iframe': 'Dojo Manager interactive demo', 'demo.open': 'Open the demo full screen',
    'guide.kicker': 'User guide', 'guide.title': 'How it’s used, profile by profile.',
    'guide.text': 'What each profile sees, every screen with its screenshot, every form field by field, what calculates itself and the billing rules. The guide is in Spanish.',
    'guide.l1': 'Owner of several dojos', 'guide.l1t': 'Their dojos, the dashboard of all of them and each one’s team.',
    'guide.l2': 'Dojo administration', 'guide.l2t': 'Students, classes, payments, receipts, late payments and settings.',
    'guide.l3': 'Instructor', 'guide.l3t': 'Their availability, their classes and attendance.',
    'guide.l4': 'Student or guardian', 'guide.l4t': 'Their fees, slips, receipts and permissions.',
    'guide.cta': 'Read the guide (Spanish)',
    'ed.kicker': 'Plans', 'ed.title': 'A plan for every stage of your dojo.', 'ed.quote': 'Get a quote', 'ed.popular': 'Recommended',
    'ed.e1': 'Basic', 'ed.e1for': 'To organize students and fees from day one.', 'ed.e1b1': 'Students, guardians, fees, deposit slips and receipts', 'ed.e1b2': 'Classes with schedule, capacity and instructor',
    'ed.e2': 'Pro', 'ed.e2for': 'For dojos with several instructors and many classes.', 'ed.e2b1': 'Everything in Basic', 'ed.e2b2': 'Attendance and instructor availability', 'ed.e2b3': 'Payment reminders and templates', 'ed.e2b4': 'Dashboard with comparisons',
    'ed.e3': 'Premium', 'ed.e3for': 'For academies that want everything under control.', 'ed.e3b1': 'Everything in Pro', 'ed.e3b2': 'Late payment and suspension follow-up', 'ed.e3b3': 'Absences, Excel upload and download', 'ed.e3b4': 'The dojo’s own web page',
    'ed.note': 'Each dojo chooses its plan. The price depends on the scope and you receive it in writing.',
    'ind.kicker': 'Built for dojos', 'ind.title': 'From the payment notebook to a dojo that collects by itself.',
    'ind.b': 'Before', 'ind.b1': 'Payments written in a notebook, slip photos lost in the chat, handmade receipts and nobody knows who is late until the end of the month.',
    'ind.a': 'With Dojo Manager', 'ind.a1': 'The student uploads the slip, you confirm it, the receipt is created and the dashboard tells you how much is left to collect today.',
    'ind.c1': 'Jiu jitsu', 'ind.c2': 'Karate and kenpo', 'ind.c3': 'Muay thai', 'ind.c4': 'Boxing', 'ind.c5': 'MMA', 'ind.c6': 'Academies with several dojos',
    'st.kicker': 'How to start', 'st.title': 'Three steps, with someone by your side.',
    'st.s1': 'Message us', 'st.s1t': 'Tell us on WhatsApp how many students and disciplines you have and how you collect today.',
    'st.s2': 'We set it up', 'st.s2t': 'We create your dojo with your logo and colors, your plans and your classes.',
    'st.s3': 'Your team uses it', 'st.s3t': 'We train your administration and instructors, and load your students from Excel.',
    'faq.kicker': 'FAQ', 'faq.title': 'What everyone asks.',
    'q1': 'Do we need to install anything?', 'a1': 'No. Dojo Manager runs in the browser on computers and phones. Everyone signs in with their email and password.',
    'q2': 'Who can see my students’ data?', 'a2': 'Only the people the dojo administration gave access to. An instructor sees their classes; a student or guardian sees only their own and their minors’. Every change goes into a log with author, date and time.',
    'q3': 'Can my students pay from their phone?', 'a3': 'Yes. They make their deposit as usual and upload a photo or PDF of the slip. They see what they owe, the status of their payment and their receipts.',
    'q4': 'Does it work if I have several dojos?', 'a4': 'Yes. The owner signs in once and sees all their dojos on the dashboard; each dojo has its own administration, plans and receipts.',
    'q5': 'Can I bring the students I already have?', 'a5': 'Yes. They are loaded with an Excel template and the system returns each account’s temporary password.',
    'q6': 'Does it have my logo and colors?', 'a6': 'Yes. Each dojo signs in with its logo and color, and the Premium plan includes the dojo’s own web page.',
    'q7': 'Do you train us?', 'a7': 'Yes. We support the administration and instructors in the first days, and the user guide is inside the app.',
    'q8': 'How much does it cost?', 'a8': 'It depends on the plan and the number of dojos. Message us and you’ll receive the quote in writing.',
    'final.title': 'You teach. Dojo Manager collects.', 'final.text': 'Tell us how you run your dojo today and we’ll show you Dojo Manager with your disciplines and your plans.',
    'ftr.by': 'A product of', 'ftr.manual': 'User guide',
  };
  const TITLE = { es: 'Dojo Manager · Tu dojo en orden, de la inscripción al recibo', en: 'Dojo Manager · Your dojo in order, from sign-up to receipt' };
  const MSG = {
    es: { def: '¡Hola! Vi Dojo Manager y me gustaría saber más para mi dojo.', basico: '¡Hola! Me interesa el plan Básico de Dojo Manager para mi dojo.',
      pro: '¡Hola! Me interesa el plan Pro de Dojo Manager para mi dojo.', premium: '¡Hola! Me interesa el plan Premium de Dojo Manager para mi academia.',
      final: '¡Hola! Quiero ver Dojo Manager con las disciplinas y planes de mi dojo.', float: '¡Hola! Tengo una pregunta sobre Dojo Manager.' },
    en: { def: 'Hi! I saw Dojo Manager and would like to know more for my dojo.', basico: 'Hi! I am interested in the Dojo Manager Basic plan for my dojo.',
      pro: 'Hi! I am interested in the Dojo Manager Pro plan for my dojo.', premium: 'Hi! I am interested in the Dojo Manager Premium plan for my academy.',
      final: 'Hi! I would like to see Dojo Manager with my dojo’s disciplines and plans.', float: 'Hi! I have a question about Dojo Manager.' },
  };

  const ES = {};
  document.querySelectorAll('[data-i18n]').forEach((el) => { ES[el.dataset.i18n] = el.innerHTML; });
  const esAttr = (el, attr, key) => { if (!(key in ES)) ES[key] = el.getAttribute(attr); };
  document.querySelectorAll('[data-i18n-alt]').forEach((el) => esAttr(el, 'alt', el.dataset.i18nAlt));
  document.querySelectorAll('[data-i18n-aria]').forEach((el) => esAttr(el, 'aria-label', el.dataset.i18nAria));
  document.querySelectorAll('[data-i18n-title]').forEach((el) => esAttr(el, 'title', el.dataset.i18nTitle));
  document.querySelectorAll('[data-i18n-content]').forEach((el) => esAttr(el, 'content', el.dataset.i18nContent));

  function setLang(lang, save) {
    lang = lang === 'en' ? 'en' : 'es';
    const T = (k) => (lang === 'en' ? EN[k] : ES[k]) ?? ES[k];
    document.documentElement.lang = lang;
    document.title = TITLE[lang];
    document.querySelectorAll('[data-i18n]').forEach((el) => { const v = T(el.dataset.i18n); if (v != null) el.innerHTML = v; });
    document.querySelectorAll('[data-i18n-alt]').forEach((el) => el.setAttribute('alt', T(el.dataset.i18nAlt)));
    document.querySelectorAll('[data-i18n-aria]').forEach((el) => el.setAttribute('aria-label', T(el.dataset.i18nAria)));
    document.querySelectorAll('[data-i18n-title]').forEach((el) => el.setAttribute('title', T(el.dataset.i18nTitle)));
    document.querySelectorAll('[data-i18n-content]').forEach((el) => el.setAttribute('content', T(el.dataset.i18nContent)));
    document.querySelectorAll('[data-wa]').forEach((a) => { a.href = `https://wa.me/${WA}?text=${encodeURIComponent(MSG[lang][a.dataset.wa] || MSG[lang].def)}`; });
    document.querySelectorAll('[data-lang]').forEach((b) => { b.classList.toggle('on', b.dataset.lang === lang); b.setAttribute('aria-pressed', b.dataset.lang === lang); });
    if (save) try { localStorage.setItem('dojomanager-lang', lang); } catch (e) { /* sin almacenamiento */ }
    const u = new URL(location.href);
    if (lang === 'en') u.searchParams.set('lang', 'en'); else u.searchParams.delete('lang');
    history.replaceState(null, '', u.toString());
    if (window.DM_galMark) window.DM_galMark();
  }
  document.querySelectorAll('img[data-shot]').forEach((img) => { img.src = `img/shots/${img.dataset.shot}.jpg?v=${SHOTS_V}`; });

  let lang = new URLSearchParams(location.search).get('lang');
  if (!lang) try { lang = localStorage.getItem('dojomanager-lang'); } catch (e) { /* */ }
  if (!lang) lang = (navigator.language || 'es').toLowerCase().startsWith('es') ? 'es' : 'en';
  setLang(lang, false);
  document.querySelectorAll('[data-lang]').forEach((b) => b.addEventListener('click', () => setLang(b.dataset.lang, true)));

  // ── Aparición al bajar y contadores
  const quieto = matchMedia('(prefers-reduced-motion: reduce)').matches;
  function contar(b) {
    const fin = Number(b.dataset.count);
    if (quieto || !fin) return;
    const t0 = performance.now();
    const paso = (t) => { const k = Math.min(1, (t - t0) / 900); b.textContent = String(Math.round(fin * k)); if (k < 1) requestAnimationFrame(paso); };
    requestAnimationFrame(paso);
  }
  const io = new IntersectionObserver((es) => es.forEach((e) => {
    if (!e.isIntersecting) return;
    e.target.classList.add('in');
    e.target.querySelectorAll('[data-count]').forEach(contar);
    io.unobserve(e.target);
  }), { rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.reveal').forEach((el, i) => { el.style.transitionDelay = (i % 4) * 70 + 'ms'; io.observe(el); });

  const hdr = document.querySelector('.hdr');
  addEventListener('scroll', () => hdr.classList.toggle('scrolled', scrollY > 8), { passive: true });

  // ── Galería
  const track = document.getElementById('galTrack');
  const figs = [...track.querySelectorAll('figure')];
  const dots = document.getElementById('galDots');
  let cur = 0;
  figs.forEach((f, i) => {
    const d = document.createElement('button'); d.type = 'button'; d.className = 'dot';
    d.addEventListener('click', () => go(i)); dots.appendChild(d);
    f.addEventListener('click', () => { if (i !== cur) go(i); });
  });
  document.getElementById('galTot').textContent = figs.length;
  function go(i) {
    i = Math.max(0, Math.min(figs.length - 1, i));
    const f = figs[i];
    track.scrollTo({ left: f.offsetLeft - (track.clientWidth - f.offsetWidth) / 2, behavior: quieto ? 'auto' : 'smooth' });
  }
  function mark() {
    const mid = track.scrollLeft + track.clientWidth / 2;
    let best = 0, dist = Infinity;
    figs.forEach((f, i) => { const d = Math.abs(f.offsetLeft + f.offsetWidth / 2 - mid); if (d < dist) { dist = d; best = i; } });
    cur = best;
    figs.forEach((f, i) => f.classList.toggle('on', i === cur));
    [...dots.children].forEach((d, i) => { d.classList.toggle('on', i === cur); d.setAttribute('aria-current', i === cur ? 'true' : 'false'); d.setAttribute('aria-label', (document.documentElement.lang === 'en' ? 'Go to image ' : 'Ir a la imagen ') + (i + 1)); });
    document.getElementById('galNum').textContent = cur + 1;
    document.querySelector('[data-gal="-1"]').disabled = cur === 0;
    document.querySelector('[data-gal="1"]').disabled = cur === figs.length - 1;
  }
  let raf = 0;
  track.addEventListener('scroll', () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(mark); }, { passive: true });
  addEventListener('resize', mark);
  document.querySelectorAll('[data-gal]').forEach((b) => b.addEventListener('click', () => go(cur + Number(b.dataset.gal))));
  track.addEventListener('keydown', (e) => { if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { e.preventDefault(); go(cur + (e.key === 'ArrowRight' ? 1 : -1)); } });
  window.DM_galMark = mark;
  mark();

  // ── La demo solo se carga cuando llega a la pantalla
  const frame = document.getElementById('demoFrame');
  if (frame) new IntersectionObserver((es, ob) => es.forEach((e) => { if (e.isIntersecting) { frame.src = frame.dataset.src; ob.disconnect(); } }), { rootMargin: '400px' }).observe(frame);

  const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();
})();
