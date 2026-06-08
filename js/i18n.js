/**
 * LIVING MIND — i18n.js
 * Simple bilingual toggle: Español ↔ English
 * Applies to all pages. Persists choice in localStorage.
 */

const TRANSLATIONS = {

  /* ── index.html ──────────────────────────────────── */
  'page-title': {
    es: 'LIVING MIND — Tu camino hacia el conocimiento',
    en: 'LIVING MIND — Your path to knowledge'
  },
  'nav-find':         { es: 'Buscar Tutores',     en: 'Find Tutors' },
  'nav-academic':     { es: 'Académico',           en: 'Academic' },
  'nav-professional': { es: 'Profesional',         en: 'Professional' },
  'nav-growth':       { es: 'Desarrollo Personal', en: 'Personal Growth' },
  'btn-signin':       { es: 'Iniciar Sesión',      en: 'Sign In' },
  'btn-booknow':      { es: 'Reservar',            en: 'Book Now' },

  'hero-badge':    { es: 'Más de 500 tutores verificados', en: 'Over 500 verified tutors' },
  'hero-title':    { es: 'Tu camino hacia el conocimiento, sin límites.', en: 'Your path to knowledge, without limits.' },
  'hero-subtitle': {
    es: 'Conecta con expertos apasionados en cualquier materia. Aprende a tu propio ritmo, desde donde quieras.',
    en: 'Connect with passionate experts in any subject. Learn at your own pace, from anywhere.'
  },
  'search-placeholder': {
    es: '¿Qué quieres aprender hoy? (ej. Cálculo, Guitarra, Liderazgo)',
    en: 'What do you want to learn today? (e.g. Calculus, Guitar, Leadership)'
  },
  'btn-search':     { es: 'Buscar Tutor',   en: 'Find Tutor' },
  'popular-label':  { es: 'Populares:',     en: 'Popular:' },
  'tag-math':       { es: 'Matemáticas',    en: 'Mathematics' },
  'tag-english':    { es: 'Inglés',         en: 'English' },
  'tag-code':       { es: 'Programación',   en: 'Programming' },

  'cats-title':         { es: 'Explora nuestras categorías', en: 'Explore our categories' },

  'cat-academic-title': { es: 'Académico',     en: 'Academic' },
  'cat-academic-desc':  {
    es: 'Domina matemáticas, ciencias, idiomas y más con tutores universitarios certificados.',
    en: 'Master mathematics, sciences, languages and more with certified university tutors.'
  },
  'cat-prof-title':     { es: 'Profesional',   en: 'Professional' },
  'cat-prof-desc':      {
    es: 'Habilidades técnicas, liderazgo y preparación para el mundo laboral actual.',
    en: 'Technical skills, leadership and preparation for today\'s job market.'
  },
  'cat-growth-title':   { es: 'Desarrollo Personal', en: 'Personal Growth' },
  'cat-growth-desc':    {
    es: 'Mindfulness, oratoria y habilidades blandas para crecer como persona.',
    en: 'Mindfulness, public speaking and soft skills to grow as a person.'
  },

  'subj-math':          { es: 'Matemáticas',       en: 'Mathematics' },
  'subj-science':       { es: 'Ciencias',           en: 'Sciences' },
  'subj-languages':     { es: 'Idiomas',            en: 'Languages' },
  'subj-programming':   { es: 'Programación',       en: 'Programming' },
  'subj-leadership':    { es: 'Liderazgo',          en: 'Leadership' },
  'subj-marketing':     { es: 'Marketing Digital',  en: 'Digital Marketing' },
  'subj-mindfulness':   { es: 'Mindfulness',        en: 'Mindfulness' },
  'subj-public-speaking':{ es: 'Oratoria',          en: 'Public Speaking' },
  'subj-productivity':  { es: 'Productividad',      en: 'Productivity' },

  'tc-math-desc':    { es: 'PhD en Matemáticas · 5 años de experiencia docente',        en: 'PhD in Mathematics · 5 years teaching experience' },
  'tc-science-desc': { es: 'Ing. Químico · Especialista en Química y Física',            en: 'Chemical Engineer · Chemistry & Physics specialist' },
  'tc-lang-desc':    { es: 'Nativa en inglés · Certificada TEFL · 7 años',               en: 'Native English speaker · TEFL Certified · 7 years' },
  'tc-prog-desc':    { es: 'Senior Engineer · React, Node.js, Python',                   en: 'Senior Engineer · React, Node.js, Python' },
  'tc-lead-desc':    { es: 'MBA · Coach ejecutiva certificada · 10+ años',               en: 'MBA · Certified executive coach · 10+ years' },
  'tc-mkt-desc':     { es: 'Google & Meta Certified · Performance & SEO',                en: 'Google & Meta Certified · Performance & SEO' },
  'tc-mind-desc':    { es: 'Instructora certificada de meditación y yoga · 8 años',      en: 'Certified meditation & yoga instructor · 8 years' },
  'tc-ora-desc':     { es: 'Speaker internacional · TEDx Trainer',                       en: 'International speaker · TEDx Trainer' },
  'tc-prod-desc':    { es: 'Coach de vida certificada · GTD & Deep Work',                en: 'Certified life coach · GTD & Deep Work' },

  'cta-see-all-academic': { es: 'Ver todos los tutores académicos',          en: 'See all academic tutors' },
  'cta-see-all-prof':     { es: 'Ver todos los tutores profesionales',       en: 'See all professional tutors' },
  'cta-see-all-growth':   { es: 'Ver todos los tutores de desarrollo personal', en: 'See all personal growth tutors' },

  'hiw-title':    { es: 'Cómo funciona',                            en: 'How it works' },
  'hiw-subtitle': { es: 'Tu viaje de aprendizaje en tres sencillos pasos.', en: 'Your learning journey in three simple steps.' },
  'step1-title':  { es: 'Encuentra',  en: 'Find' },
  'step1-desc':   { es: 'Explora perfiles de tutores verificados, lee reseñas y elige al experto ideal para tus objetivos.', en: 'Browse verified tutor profiles, read reviews and choose the ideal expert for your goals.' },
  'step2-title':  { es: 'Conecta',    en: 'Connect' },
  'step2-desc':   { es: 'Reserva una sesión que se adapte a tu horario y comunícate directamente a través de nuestra plataforma.', en: 'Book a session that fits your schedule and communicate directly through our platform.' },
  'step3-title':  { es: 'Aprende',    en: 'Learn' },
  'step3-desc':   { es: 'Únete a la videollamada, accede a recursos compartidos y alcanza tu máximo potencial.', en: 'Join the video call, access shared resources and reach your full potential.' },

  'cta-title': { es: 'Únete a la revolución del aprendizaje', en: 'Join the learning revolution' },
  'cta-desc':  { es: 'Ya sea que busques expandir tu mente o compartir tu experiencia, Living Mind es tu plataforma.', en: 'Whether you want to expand your mind or share your expertise, Living Mind is your platform.' },
  'cta-start': { es: 'Empezar a Aprender', en: 'Start Learning' },
  'cta-tutor': { es: 'Convertirse en Tutor', en: 'Become a Tutor' },

  /* ── tutor.html ──────────────────────────────────── */
  'tnav-benefits': { es: 'Beneficios', en: 'Benefits' },
  'tnav-subjects': { es: 'Materias',   en: 'Subjects' },
  'tnav-pricing':  { es: 'Tarifas',    en: 'Pricing' },
  'tnav-faq':      { es: 'FAQ',        en: 'FAQ' },
  'btn-back':      { es: '← Volver',   en: '← Back' },
  'btn-apply':     { es: 'Aplicar Ahora', en: 'Apply Now' },

  /* ── Footer (shared) ─────────────────────────────── */
  'footer-brand-desc': { es: 'Empoderando la conexión humana a través del conocimiento.', en: 'Empowering human connection through knowledge.' },
  'footer-platform':   { es: 'Plataforma',       en: 'Platform' },
  'footer-about':      { es: 'Sobre Nosotros',   en: 'About Us' },
  'footer-become':     { es: 'Ser Tutor',         en: 'Become a Tutor' },
  'footer-support':    { es: 'Soporte',           en: 'Support' },
  'footer-legal':      { es: 'Legal',             en: 'Legal' },
  'footer-privacy':    { es: 'Política de Privacidad', en: 'Privacy Policy' },
  'footer-terms':      { es: 'Términos de Servicio',   en: 'Terms of Service' },
  'footer-help':       { es: 'Centro de Ayuda',   en: 'Help Center' },
  'footer-contact':    { es: 'Contáctanos',       en: 'Contact Us' },
  'footer-copy':       { es: '© 2026 LIVING MIND. Empoderando el conocimiento mundial.', en: '© 2026 LIVING MIND. Empowering knowledge worldwide.' },
};

/* ── Engine ─────────────────────────────────────────── */

const I18N = (() => {

  let currentLang = localStorage.getItem('lm-lang') || 'es';

  function t(key) {
    const entry = TRANSLATIONS[key];
    if (!entry) return null;
    return entry[currentLang] ?? entry['es'];
  }

  function applyAll() {
    // Text nodes
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = t(key);
      if (val !== null) el.textContent = val;
    });

    // Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const val = t(key);
      if (val !== null) el.setAttribute('placeholder', val);
    });

    // <title>
    const titleKey = document.querySelector('title')?.getAttribute('data-i18n');
    if (titleKey) {
      const val = t(titleKey);
      if (val) document.title = val;
    }

    // html lang attribute
    document.documentElement.lang = currentLang;

    // Update toggle button label
    const label = document.getElementById('lang-label');
    if (label) label.textContent = currentLang === 'es' ? 'EN' : 'ES';
  }

  function toggle() {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    localStorage.setItem('lm-lang', currentLang);
    applyAll();
  }

  function init() {
    // Wire toggle button(s) — both pages may have one
    document.querySelectorAll('#lang-toggle').forEach(btn => {
      btn.addEventListener('click', toggle);
    });
    applyAll();
  }

  return { init, toggle, t, get lang() { return currentLang; } };

})();

document.addEventListener('DOMContentLoaded', () => I18N.init());
