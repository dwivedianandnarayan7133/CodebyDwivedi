/* ===========================================
   ANAND NARAYAN DWIVEDI — MAIN JAVASCRIPT
   Modern Developer Portfolio
   =========================================== */

'use strict';

// ============================================================
// API CONFIGURATION
// ============================================================
const API_BASE = (() => {
  if (window.location.protocol === 'file:' || window.location.port === '5500') {
    return 'http://localhost:3001';
  }
  return '';
})();

// ============================================================
// RESILIENT STATIC DATA (Synchronized with Official Resume)
// ============================================================
const STATIC_DATA = {
  profile: {
    name: 'Anand Narayan Dwivedi',
    title: 'Full Stack Developer',
    email: 'dwivedianandnarayan@gmail.com',
    phone: '+91 9120367133',
    location: 'Lucknow, Uttar Pradesh, India',
    github: 'https://github.com/dwivedianandnarayan7133',
    linkedin: 'https://www.linkedin.com/in/anand-narayan-dwivedi-b6807033b/',
    leetcode: 'https://leetcode.com/u/Anand_Narayan_Dwivedi/',
  },

  social: [
    {
      platform: 'github',
      label: 'GitHub',
      username: '@dwivedianandnarayan7133',
      url: 'https://github.com/dwivedianandnarayan7133',
      icon: 'fab fa-github',
      colorClass: 'github',
      badge: 'Code Repositories',
    },
    {
      platform: 'linkedin',
      label: 'LinkedIn',
      username: 'Anand Narayan Dwivedi',
      url: 'https://www.linkedin.com/in/anand-narayan-dwivedi-b6807033b/',
      icon: 'fab fa-linkedin-in',
      colorClass: 'linkedin',
      badge: 'Professional Network',
    },
    {
      platform: 'leetcode',
      label: 'LeetCode',
      username: 'Anand_Narayan_Dwivedi',
      url: 'https://leetcode.com/u/Anand_Narayan_Dwivedi/',
      icon: 'fas fa-code',
      colorClass: 'leetcode',
      badge: 'DSA Problem Solving',
    },
    {
      platform: 'google-cloud',
      label: 'Google Cloud Profile',
      username: 'Google Cloud Study Jams 3rd Rank',
      url: 'https://www.skills.google/public_profiles/a77c70e5-d738-4e4b-a995-f6032d5ce5ef',
      icon: 'fab fa-google',
      colorClass: 'google',
      badge: 'Verified Badges',
    },
    {
      platform: 'gmail',
      label: 'Email',
      username: 'dwivedianandnarayan@gmail.com',
      url: 'mailto:dwivedianandnarayan@gmail.com',
      icon: 'fas fa-envelope',
      colorClass: 'gmail',
      badge: 'Direct Inquiry',
    },
    {
      platform: 'phone',
      label: 'Phone / WhatsApp',
      username: '+91 9120367133',
      url: 'tel:+919120367133',
      icon: 'fas fa-phone-alt',
      colorClass: 'whatsapp',
      badge: 'Instant Reach',
    }
  ],

  projects: [
    {
      _id: 'wanderlust',
      title: 'WanderLust – Property Listing & Vacation Rental Web Application',
      subtitle: 'Full-Stack Property Booking & Vacation Rental Platform',
      date: 'June 2026 – Aug 2026',
      description: 'A full-stack property listing web application inspired by Airbnb. Allows users to create, explore, review, and manage accommodation listings with interactive map location previews, multi-image uploads, secure user authentication, and server-side validation.',
      features: [
        'Full CRUD operations for property listings with reviews & ratings',
        'Secure authentication, session handling, and role-based permissions',
        'RESTful APIs with robust MongoDB schemas and Mongoose hooks',
        'Clean, responsive Bootstrap UI with search and filter capabilities'
      ],
      techStack: ['Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'Bootstrap', 'REST APIs', 'Render'],
      icon: 'fas fa-hotel',
      category: 'Full Stack MERN (Live)',
      githubUrl: 'https://github.com/dwivedianandnarayan7133/WanderLust',
      liveUrl: 'https://wanderlust-neb3.onrender.com/listings',
      directUrl: 'https://wanderlust-neb3.onrender.com/listings',
      highlights: 'Full-stack property ecosystem with server validation & user reviews'
    },
    {
      _id: 'shree-online',
      title: 'Shree Online – Cybercafe & Digital Services Portal',
      subtitle: 'MERN Stack One-Window Service Hub with AI Assistance',
      date: 'Feb 2026 – Apr 2026',
      description: 'An AI-powered cybercafe and CSC management portal providing a single digital window for accessing online government forms, university applications, photo studio processing, and digital document workflows.',
      features: [
        'One-window digital service platform for accessing multiple online services conveniently',
        'AI-powered document and form assistance with streamlined applicant navigation',
        'Automated passport photo processing, compression, and print-ready formatting',
        'Responsive MERN UI with real-time status updates and WhatsApp notifications'
      ],
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST API', 'Vercel'],
      icon: 'fas fa-laptop-code',
      category: 'MERN Stack (Live)',
      githubUrl: 'https://github.com/dwivedianandnarayan7133/shree-online',
      liveUrl: 'https://shree-online.vercel.app/',
      directUrl: 'https://shree-online.vercel.app/',
      highlights: 'Complete digital counter portal serving real cybercafe operations'
    },
    {
      _id: 'milap',
      title: 'Milap – Professional Connect & Community Platform',
      subtitle: 'Full Stack Modern Web Application for Seamless Connections',
      date: '2026',
      description: 'A modern, full-stack community and networking web application engineered for swift user connections, communication channels, and interactive profiles with a sleek responsive interface.',
      features: [
        'Interactive profile setup and user connection channels',
        'Real-time responsiveness with seamless client-side state handling',
        'Modern component architecture with intuitive user experience',
        'Deployed with high availability on Vercel'
      ],
      techStack: ['React.js', 'JavaScript', 'Node.js', 'REST APIs', 'CSS3', 'Vercel'],
      icon: 'fas fa-users',
      category: 'Full Stack Web (Live)',
      githubUrl: 'https://github.com/dwivedianandnarayan7133/Milap',
      liveUrl: 'https://milap-black.vercel.app/',
      directUrl: 'https://milap-black.vercel.app/',
      highlights: 'Live interactive community and connection platform deployed on Vercel'
    },
    {
      _id: 'driverguard',
      title: 'DriverGuard – AI Driver Safety & Vigilance Alert System',
      subtitle: 'Real-Time Driver Attention Monitoring & Alert Platform',
      date: '2026',
      description: 'An intelligent safety and driver assistance application engineered to help prevent road accidents through computer-vision attention detection, audio/visual alerts, and responsive driver monitoring.',
      features: [
        'Real-time alertness and drowsiness detection interface',
        'Audio-visual warning triggers and emergency contact notification',
        'Clean high-contrast dashboard optimized for driver cabin visibility',
        'Live production deployment on Vercel'
      ],
      techStack: ['React.js', 'AI / Computer Vision', 'JavaScript', 'REST API', 'Vercel'],
      icon: 'fas fa-shield-alt',
      category: 'AI & Safety (Live)',
      githubUrl: 'https://github.com/dwivedianandnarayan7133/driverguard',
      liveUrl: 'https://frontend-nine-theta-13.vercel.app',
      directUrl: 'https://frontend-nine-theta-13.vercel.app',
      highlights: 'Driver drowsiness detection and real-time alerts deployed on Vercel'
    },
    {
      _id: 'lms-django',
      title: 'Learning Management System (LMS)',
      subtitle: 'Python & Django Course & Assessment Management Portal',
      date: 'June 2025 – Sept 2025',
      description: 'A comprehensive web-based LMS built with Python and Django. Designed for academic departments to administer courses, track student assignment submissions, generate gradebooks, and provide educators with an analytics dashboard.',
      features: [
        'Course enrollment, curriculum syllabus viewer, and lecture modules',
        'Assignment submission portal with automated deadlines and teacher grading',
        'Comprehensive admin features for user management, role controls, and reporting',
        'Clean responsive frontend built with modern HTML5, CSS3, and JavaScript'
      ],
      techStack: ['Python', 'Django', 'HTML5', 'CSS3', 'JavaScript', 'SQLite / PostgreSQL'],
      icon: 'fas fa-graduation-cap',
      category: 'Python / Django',
      githubUrl: 'https://github.com/dwivedianandnarayan7133/Learning-Management-System',
      liveUrl: 'https://github.com/dwivedianandnarayan7133/Learning-Management-System',
      directUrl: 'https://github.com/dwivedianandnarayan7133/Learning-Management-System',
      highlights: 'End-to-end LMS with student assignment tracking & teacher analytics'
    }
  ],

  education: [
    {
      degree: 'B.Tech in Computer Science & Engineering',
      institution: 'Bansal Institute Of Engineering & Technology',
      location: 'Lucknow, Uttar Pradesh',
      dateRange: '2024 – 2027',
      description: 'Pursuing Bachelor of Technology in CSE with 80.1% aggregate till 6th semester. Focused on MERN stack, data structures, algorithms, system design, and cloud technologies.',
      badgeText: '80.1% (till 6 sem.)',
      badgeClass: 'current',
      icon: 'fas fa-university'
    },
    {
      degree: 'Diploma in Computer Science & Engineering',
      institution: 'MMIT Sant Kabir Nagar',
      location: 'Sant Kabir Nagar, Uttar Pradesh',
      dateRange: '2021 – 2024',
      description: 'Graduated with 75.79% score. Developed solid fundamentals in web development, object-oriented programming, computer networking, and relational database systems.',
      badgeText: '75.79%',
      badgeClass: 'completed',
      icon: 'fas fa-laptop-code'
    },
    {
      degree: 'Secondary (X), UP Board',
      institution: 'K S S I C Baridiha, Sant Kabir Nagar',
      location: 'Sant Kabir Nagar, Uttar Pradesh',
      dateRange: '2020 – 2021',
      description: 'Completed High School under UP State Board with 87.00% distinction.',
      badgeText: '87.00%',
      badgeClass: 'completed',
      icon: 'fas fa-school'
    }
  ],

  certifications: [
    {
      _id: 'cert-1',
      title: 'DSA WITH JAVA (Alpha Cohort)',
      issuer: 'Apna College (Shradha Khapra & Aman Dhattarwal)',
      date: 'Completed 2026',
      credentialId: '6a5490f495fca4dc7f03640f',
      imageUrl: '/assets/certificates/apna_college_dsa_java.png',
      pdfUrl: '/assets/certificates/apna_college_dsa_java.pdf',
      verifyUrl: 'https://apnacollege.in/',
      topics: ['Java Core & OOPs', 'Data Structures & Algorithms', 'Recursion & Backtracking', 'Trees, Graphs & Dynamic Programming'],
      description: 'Comprehensive certification in Data Structures & Algorithms with Java, mastering algorithm analysis, data structures, recursion, dynamic programming, and competitive problem-solving.',
      badgeText: 'Verified Certificate',
      badgeClass: 'badge-gold',
      icon: 'fab fa-java'
    },
    {
      _id: 'cert-2',
      title: 'Full Stack Web Development with AI Specialization',
      issuer: 'Internshala Trainings',
      date: 'July 31, 2026',
      credentialId: 'ekztjzc7847',
      imageUrl: '/assets/certificates/internshala_web_dev_ai.jpg',
      pdfUrl: null,
      verifyUrl: 'https://trainings.internshala.com/verify_certificate',
      topics: ['MERN Stack', 'RESTful APIs', 'AI Tools & LLM Integration', 'Prompt Engineering', 'Full Stack Architecture'],
      description: 'Rigorous 8-week training program covering Full Stack Web Development with modern Artificial Intelligence tooling, hands-on full stack project builds, and enterprise deployment.',
      badgeText: 'Certified with AI',
      badgeClass: 'badge-purple',
      icon: 'fas fa-robot'
    },
    {
      _id: 'cert-3',
      title: 'Certificate Program in Full Stack Web Development with AI',
      issuer: 'Skill India Digital & NSDC (Govt. of India)',
      date: 'July 31, 2026',
      credentialId: 'xvq26m65gqb2soj0',
      studentId: 'CAN_40755980',
      grade: 'Grade B',
      imageUrl: '/assets/certificates/skill_india_nsdc_fullstack.jpg',
      pdfUrl: null,
      verifyUrl: 'https://www.skillindiadigital.gov.in/',
      topics: ['Government Recognized', 'Full Stack Web Development', 'AI Integration', 'Industry Standards'],
      description: 'Official Government of India recognized Certificate Program under the National Skill Development Corporation (NSDC) and Skill India Digital Hub, awarded with Grade B.',
      badgeText: 'Skill India / NSDC',
      badgeClass: 'badge-green',
      icon: 'fas fa-award'
    },
    {
      _id: 'cert-4',
      title: 'Website Design & Development Internship',
      issuer: 'Internship Studio',
      date: '22 June 2026 – 25 Sept 2026',
      credentialId: 'ISWDI3426930',
      imageUrl: '/assets/certificates/internship_studio_web_dev.jpg',
      pdfUrl: null,
      verifyUrl: 'https://internshipstudio.com/',
      topics: ['Website Design & Development', 'Responsive Architecture', 'Production Workflow', 'Industry Experience'],
      description: 'Hands-on practical industry internship certificate awarded for exceptional performance in website design, responsive frontend architecture, and live application development.',
      badgeText: 'Industry Certified',
      badgeClass: 'badge-blue',
      icon: 'fas fa-briefcase'
    },
    {
      _id: 'cert-5',
      title: 'Google Cloud Study Jams (3rd Position)',
      issuer: 'GDG On Campus (Google Developer Group)',
      date: 'Oct 2025',
      credentialId: 'GDG-BIET-2025-03',
      imageUrl: null,
      pdfUrl: null,
      verifyUrl: 'https://gdg.community.dev/',
      topics: ['Google Cloud Platform', 'Generative AI Tracks', 'Cloud Infrastructure', 'Official Google Badge'],
      description: 'Intensive Google Cloud computing and AI architecture challenges. Secured 3rd Position across the institute with official Google developer profile badges.',
      badgeText: 'Google Badge (3rd)',
      badgeClass: 'badge-gold',
      icon: 'fab fa-google'
    }
  ],

  achievements: [
    {
      title: 'Secured 3rd Position – Google Cloud Study Jams',
      organization: 'Google Developer Group (GDG) at Bansal Institute of Engineering & Technology, Lucknow',
      date: 'Oct 2025',
      description: 'Earned 3rd place for rapid completion of Google Cloud infrastructure, deployment pipelines, and Generative AI foundational tracks.',
      icon: 'fas fa-trophy',
      highlight: '3rd Position'
    },
    {
      title: 'AI & Modern Development Frameworks Implementation',
      organization: 'Academic & Personal Projects',
      date: '2025 – 2026',
      description: 'Engineered applications integrating Prompt Engineering, intelligent tooling, and modern developer toolchains (Antigravity IDE, VS Code, Git).',
      icon: 'fas fa-brain',
      highlight: 'AI Integration'
    }
  ],

  skills: [
    { category: 'Programming Languages', categoryIcon: 'fas fa-code', isTag: false, name: 'JavaScript', icon: 'devicon-javascript-plain colored', percentage: 90, color: '#f7df1e' },
    { category: 'Programming Languages', categoryIcon: 'fas fa-code', isTag: false, name: 'Python', icon: 'devicon-python-plain colored', percentage: 82, color: '#3776ab' },
    { category: 'Programming Languages', categoryIcon: 'fas fa-code', isTag: false, name: 'Java', icon: 'devicon-java-plain colored', percentage: 80, color: '#f89820' },
    { category: 'Programming Languages', categoryIcon: 'fas fa-code', isTag: false, name: 'C++', icon: 'devicon-cplusplus-plain colored', percentage: 76, color: '#00599c' },
    { category: 'Programming Languages', categoryIcon: 'fas fa-code', isTag: false, name: 'C', icon: 'devicon-c-plain colored', percentage: 74, color: '#a8b9cc' },

    { category: 'Web Development', categoryIcon: 'fas fa-globe', isTag: false, name: 'HTML5', icon: 'devicon-html5-plain colored', percentage: 95, color: '#e34f26' },
    { category: 'Web Development', categoryIcon: 'fas fa-globe', isTag: false, name: 'CSS3', icon: 'devicon-css3-plain colored', percentage: 90, color: '#1572b6' },
    { category: 'Web Development', categoryIcon: 'fas fa-globe', isTag: false, name: 'React.js', icon: 'devicon-react-original colored', percentage: 85, color: '#61dafb' },
    { category: 'Web Development', categoryIcon: 'fas fa-globe', isTag: false, name: 'Node.js', icon: 'devicon-nodejs-plain colored', percentage: 84, color: '#339933' },
    { category: 'Web Development', categoryIcon: 'fas fa-globe', isTag: false, name: 'Express.js', icon: 'devicon-express-original', percentage: 82, color: '#68a063' },
    { category: 'Web Development', categoryIcon: 'fas fa-globe', isTag: false, name: 'Django', icon: 'devicon-django-plain colored', percentage: 75, color: '#092e20' },
    { category: 'Web Development', categoryIcon: 'fas fa-globe', isTag: false, name: 'Bootstrap', icon: 'devicon-bootstrap-plain colored', percentage: 88, color: '#7952b3' },

    { category: 'Databases', categoryIcon: 'fas fa-database', isTag: false, name: 'MongoDB', icon: 'devicon-mongodb-plain colored', percentage: 84, color: '#47a248' },
    { category: 'Databases', categoryIcon: 'fas fa-database', isTag: false, name: 'MySQL', icon: 'devicon-mysql-plain colored', percentage: 78, color: '#4479a1' },
    { category: 'Databases', categoryIcon: 'fas fa-database', isTag: false, name: 'MongoDB Atlas', icon: 'fas fa-cloud', percentage: 82, color: '#13aa52' },

    { category: 'Core Concepts & AI', categoryIcon: 'fas fa-brain', isTag: true, name: 'Data Structures & Algorithms (DSA)', icon: 'fas fa-sitemap' },
    { category: 'Core Concepts & AI', categoryIcon: 'fas fa-brain', isTag: true, name: 'OOP (Object Oriented Programming)', icon: 'fas fa-cubes' },
    { category: 'Core Concepts & AI', categoryIcon: 'fas fa-brain', isTag: true, name: 'DBMS', icon: 'fas fa-server' },
    { category: 'Core Concepts & AI', categoryIcon: 'fas fa-brain', isTag: true, name: 'REST APIs', icon: 'fas fa-network-wired' },
    { category: 'Core Concepts & AI', categoryIcon: 'fas fa-brain', isTag: true, name: 'Prompt Engineering', icon: 'fas fa-magic' },
    { category: 'Core Concepts & AI', categoryIcon: 'fas fa-brain', isTag: true, name: 'AI & LLM Tools', icon: 'fas fa-robot' },

    { category: 'Tools & IDEs', categoryIcon: 'fas fa-tools', isTag: true, name: 'Git', icon: 'devicon-git-plain colored' },
    { category: 'Tools & IDEs', categoryIcon: 'fas fa-tools', isTag: true, name: 'GitHub', icon: 'devicon-github-original' },
    { category: 'Tools & IDEs', categoryIcon: 'fas fa-tools', isTag: true, name: 'VS Code', icon: 'devicon-vscode-plain colored' },
    { category: 'Tools & IDEs', categoryIcon: 'fas fa-tools', isTag: true, name: 'Antigravity IDE', icon: 'fas fa-feather-alt' },
    { category: 'Tools & IDEs', categoryIcon: 'fas fa-tools', isTag: true, name: 'Wireshark', icon: 'fas fa-shield-alt' }
  ]
};

// ============================================================
// DOM READY INITIALIZATION
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavbar();
  initTypingEffect();
  initParticles();
  initScrollAnimations();
  initCounterAnimation();
  initContactForm();
  initBackToTop();
  setFooterYear();
  initResumeButtons();
  initProjects();
  initEducation();
  initCertificates();
  initAchievements();
  initSkills();
  initSocialLinks();
  initProjectPreviewModal();
  initCertModal();
});

// ============================================================
// THEME CONTROLLER (Sleek Obsidian Dark / Clean Slate Light)
// ============================================================
function initTheme() {
  const body = document.body;
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');

  const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
  applyTheme(savedTheme);

  themeToggle?.addEventListener('click', () => {
    const current = body.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('portfolio-theme', next);
    showToast(next === 'dark' ? '🌙 Obsidian Dark Mode enabled' : '☀️ Crisp Light Mode enabled');
  });

  function applyTheme(theme) {
    body.setAttribute('data-theme', theme);
    if (theme === 'dark') {
      body.classList.add('dark-mode');
      body.classList.remove('light-mode');
      if (themeIcon) { themeIcon.className = 'fas fa-moon'; }
    } else {
      body.classList.add('light-mode');
      body.classList.remove('dark-mode');
      if (themeIcon) { themeIcon.className = 'fas fa-sun'; }
    }
  }
}

// ============================================================
// NAVBAR & MOBILE MENU
// ============================================================
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const links = navLinks?.querySelectorAll('.nav-link');

  const handleScroll = () => {
    if (window.scrollY > 40) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
    updateActiveLink();
  };

  window.addEventListener('scroll', handleScroll, { passive: true });

  hamburger?.addEventListener('click', () => {
    const isOpen = navLinks?.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  links?.forEach(link => {
    link.addEventListener('click', () => {
      navLinks?.classList.remove('open');
      hamburger?.classList.remove('open');
      hamburger?.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', (e) => {
    if (!hamburger?.contains(e.target) && !navLinks?.contains(e.target)) {
      navLinks?.classList.remove('open');
      hamburger?.classList.remove('open');
      hamburger?.setAttribute('aria-expanded', 'false');
    }
  });

  function updateActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      if (window.scrollY >= top) current = section.id;
    });
    links?.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }
}

// ============================================================
// HERO TYPING EFFECT
// ============================================================
function initTypingEffect() {
  const el = document.getElementById('typedText');
  if (!el) return;

  const phrases = [
    'Full Stack Developer',
    'MERN Stack Engineer',
    'Python & Django Builder',
    'Prompt Engineering Specialist',
    'Problem Solver & DSA Enthusiast'
  ];

  let phraseIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let delay = 100;

  function type() {
    const phrase = phrases[phraseIdx];
    if (!isDeleting) {
      el.textContent = phrase.substring(0, charIdx + 1);
      charIdx++;
      delay = 95;
      if (charIdx === phrase.length) {
        isDeleting = true;
        delay = 2000;
      }
    } else {
      el.textContent = phrase.substring(0, charIdx - 1);
      charIdx--;
      delay = 50;
      if (charIdx === 0) {
        isDeleting = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
        delay = 450;
      }
    }
    setTimeout(type, delay);
  }
  setTimeout(type, 600);
}

// ============================================================
// AMBIENT PARTICLES
// ============================================================
function initParticles() {
  const container = document.getElementById('heroParticles');
  if (!container) return;
  const count = 16;
  container.innerHTML = '';
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.cssText = `
      left: ${Math.random() * 100}%;
      width: ${Math.random() * 3 + 2}px;
      height: ${Math.random() * 3 + 2}px;
      animation-duration: ${Math.random() * 12 + 8}s;
      animation-delay: ${Math.random() * 6}s;
      opacity: ${Math.random() * 0.45 + 0.15};
    `;
    container.appendChild(p);
  }
}

// ============================================================
// SCROLL REVEAL OBSERVER (Resilient & Immediate)
// ============================================================
function initScrollAnimations() {
  const targets = document.querySelectorAll('.animate-on-scroll');
  if (!('IntersectionObserver' in window)) {
    targets.forEach(t => t.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), Math.min(i * 30, 200));
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px 80px 0px' });

  targets.forEach(t => observer.observe(t));

  // Fallback: Reveal all elements after brief moment so page is never blank
  setTimeout(() => {
    document.querySelectorAll('.animate-on-scroll:not(.visible)').forEach(el => el.classList.add('visible'));
  }, 450);
}

function observeGrid(container) {
  if (!container) return;
  const cards = container.querySelectorAll('.animate-on-scroll');
  if (!('IntersectionObserver' in window)) {
    cards.forEach(c => c.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), Math.min(i * 30, 200));
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px 80px 0px' });

  cards.forEach(c => observer.observe(c));

  // Quick fallback for dynamic cards
  setTimeout(() => {
    container.querySelectorAll('.animate-on-scroll:not(.visible)').forEach(el => el.classList.add('visible'));
  }, 350);
}

// ============================================================
// SKILL BAR ANIMATIONS
// ============================================================
function initSkillBars() {
  const bars = document.querySelectorAll('.skill-bar');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const width = entry.target.getAttribute('data-width') || '0';
        entry.target.style.width = `${width}%`;
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  bars.forEach(bar => observer.observe(bar));
}

// ============================================================
// COUNTER STATS
// ============================================================
function initCounterAnimation() {
  const counters = document.querySelectorAll('.stat-number[data-target]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target') ?? '0', 10);
        let current = 0;
        const step = Math.ceil(target / 25);
        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            el.textContent = String(target);
            clearInterval(timer);
          } else {
            el.textContent = String(current);
          }
        }, 40);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.4 });
  counters.forEach(c => observer.observe(c));
}

// ============================================================
// RESUME DOWNLOAD (PERMANENT & RESILIENT)
// ============================================================
function initResumeButtons() {
  const btns = [
    document.getElementById('resumeBtn'),
    document.getElementById('downloadResumeBtn'),
    document.getElementById('heroResumeBtn'),
    document.getElementById('aboutResumeBtn')
  ].filter(Boolean);

  if (btns.length === 0) return;

  // Set reliable permanent default href to assets/resume.pdf
  btns.forEach(btn => {
    btn.href = 'assets/resume.pdf';
    btn.setAttribute('download', 'Anand_Narayan_Dwivedi_Resume.pdf');
    btn.title = 'Download Anand Narayan Dwivedi Resume (PDF)';
    btn.classList.remove('unavailable');
  });

  // Check backend metadata to optionally enrich button title/size
  fetch(`${API_BASE}/api/resume/info`)
    .then(res => res.ok ? res.json() : null)
    .then(payload => {
      if (payload && payload.data) {
        btns.forEach(btn => {
          btn.href = `${API_BASE}/api/resume`;
          btn.setAttribute('download', payload.data.downloadAs || 'Anand_Narayan_Dwivedi_Resume.pdf');
          btn.title = `Download Resume (${payload.data.sizeMB || '0.5'} MB)`;
        });
      }
    })
    .catch(() => {
      // Kept on assets/resume.pdf gracefully
    });
}

// ============================================================
// DYNAMIC PROJECTS WITH DIRECT URL PREVIEWS
// ============================================================
let currentProjectList = STATIC_DATA.projects;

function getCardMockupHTML(p) {
  const title = (p.title || '').toLowerCase();
  const directUrl = p.directUrl || p.liveUrl || p.githubUrl || '';
  
  if (title.includes('shree')) {
    return `
      <div class="card-live-ui">
        <div class="live-ui-header">
          <span><i class="fas fa-laptop-code" style="color:var(--accent-primary);"></i> Shree Online Service Hub</span>
          <span class="live-ui-status"><span class="status-dot"></span> Live on Vercel</span>
        </div>
        <div class="live-ui-body">
          <div class="live-ui-row">
            <span class="live-ui-title"><i class="fas fa-camera"></i> Cybercafe &amp; CSC Digital Portal</span>
            <span class="live-ui-badge">Mahuli Branch</span>
          </div>
          <div class="live-ui-chips">
            <span class="live-ui-chip">📸 Auto Photo Formatting</span>
            <span class="live-ui-chip">📄 Govt &amp; University Forms</span>
            <span class="live-ui-chip">⚡ Fast Vercel Deploy</span>
          </div>
        </div>
      </div>
    `;
  } else if (title.includes('milap')) {
    return `
      <div class="card-live-ui">
        <div class="live-ui-header">
          <span><i class="fas fa-users" style="color:#06b6d4;"></i> Milap Connect &amp; Community</span>
          <span class="live-ui-status"><span class="status-dot"></span> Live on Vercel</span>
        </div>
        <div class="live-ui-body">
          <div class="live-ui-row">
            <span class="live-ui-title"><i class="fas fa-comments"></i> Networking &amp; Interactive Profiles</span>
            <span class="live-ui-badge" style="background:rgba(6,182,212,0.15);color:#06b6d4;">Active Platform</span>
          </div>
          <div class="live-ui-chips">
            <span class="live-ui-chip">👥 Community Hub</span>
            <span class="live-ui-chip">⚡ Real-Time State</span>
            <span class="live-ui-chip">🌐 Vercel Hosted</span>
          </div>
        </div>
      </div>
    `;
  } else if (title.includes('driverguard')) {
    return `
      <div class="card-live-ui">
        <div class="live-ui-header">
          <span><i class="fas fa-shield-alt" style="color:#ef4444;"></i> DriverGuard Safety System</span>
          <span class="live-ui-status"><span class="status-dot"></span> Live on Vercel</span>
        </div>
        <div class="live-ui-body">
          <div class="live-ui-row">
            <span class="live-ui-title"><i class="fas fa-eye"></i> Vigilance &amp; Attention Detection</span>
            <span class="live-ui-badge" style="background:rgba(239,68,68,0.15);color:#ef4444;">AI Active</span>
          </div>
          <div class="live-ui-chips">
            <span class="live-ui-chip">👁️ Driver Monitoring</span>
            <span class="live-ui-chip">🚨 Audio Alert Triggers</span>
            <span class="live-ui-chip">📱 Cabin Dashboard</span>
          </div>
        </div>
      </div>
    `;
  } else if (title.includes('wanderlust')) {
    return `
      <div class="card-live-ui">
        <div class="live-ui-header">
          <span><i class="fas fa-compass" style="color:var(--accent-primary);"></i> WanderLust Property Platform</span>
          <span class="live-ui-status"><span class="status-dot"></span> GitHub Repository</span>
        </div>
        <div class="live-ui-body">
          <div class="live-ui-row">
            <span class="live-ui-title"><i class="fas fa-home"></i> Luxury Vacation Rental Listings</span>
            <span class="live-ui-price">₹4,800 <small>/night</small></span>
          </div>
          <div class="live-ui-chips">
            <span class="live-ui-chip">⭐ 4.95 Superhost</span>
            <span class="live-ui-chip">📍 Manali, HP</span>
            <span class="live-ui-chip">🔑 Full CRUD &amp; Auth</span>
          </div>
        </div>
      </div>
    `;
  } else {
    return `
      <div class="card-live-ui">
        <div class="live-ui-header">
          <span><i class="fas fa-graduation-cap" style="color:#a855f7;"></i> LMS Academic Portal</span>
          <span class="live-ui-status"><span class="status-dot"></span> Django Framework</span>
        </div>
        <div class="live-ui-body">
          <div class="live-ui-row">
            <span class="live-ui-title"><i class="fas fa-book-reader"></i> Full Stack Web Eng.</span>
            <span class="live-ui-price" style="color:#a855f7;">Course Management</span>
          </div>
          <div class="live-ui-chips">
            <span class="live-ui-chip">📊 Gradebook: A+ (94%)</span>
            <span class="live-ui-chip">📝 Assignment Submission</span>
            <span class="live-ui-chip">👥 Student Tracker</span>
          </div>
        </div>
      </div>
    `;
  }
}

function renderProjects(projects, container) {
  currentProjectList = projects;
  container.innerHTML = projects.map((p, idx) => {
    const directUrl = p.directUrl || p.liveUrl || p.githubUrl || 'https://github.com/dwivedianandnarayan7133';
    const displayUrl = directUrl.replace(/^https?:\/\//, '').replace(/\/$/, '');
    const isLiveApp = directUrl.startsWith('http') && !directUrl.includes('github.com');

    return `
    <article class="project-card animate-on-scroll" id="project-card-${p._id || idx}" data-index="${idx}">
      <div class="project-card-header">
        <div class="project-card-badge"><span class="project-cat-pill">${p.category || 'Featured'}</span></div>
        <div class="project-number">${String(idx + 1).padStart(2, '0')}</div>
      </div>

      <!-- Live Interactive App Mockup in Card -->
      <div class="project-preview-mockup">
        <div class="mockup-browser-bar">
          <div class="mockup-dots"><span></span><span></span><span></span></div>
          <div class="mockup-url">
            <a href="${directUrl}" target="_blank" rel="noopener noreferrer" class="mockup-url-link" title="Open ${displayUrl}">
              <i class="fas fa-lock"></i> ${displayUrl}
            </a>
          </div>
          <div class="mockup-action-icon">
            <a href="${directUrl}" target="_blank" rel="noopener noreferrer" style="color:var(--accent-primary);" title="Launch in New Tab">
              <i class="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>

        <div class="mockup-content ${isLiveApp ? 'has-live-app' : ''}">
          ${isLiveApp ? `
            <iframe 
              src="${directUrl}" 
              class="card-live-iframe" 
              title="${p.title}" 
              loading="lazy" 
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups">
            </iframe>
            <div class="card-iframe-controls">
              <span class="card-live-badge"><span class="live-dot-pulse"></span> LIVE APP</span>
              <a href="${directUrl}" target="_blank" rel="noopener noreferrer" class="card-fullscreen-btn" title="Open live app in new tab">
                <i class="fas fa-expand-alt"></i> Full Screen ↗
              </a>
            </div>
          ` : `
            ${getCardMockupHTML(p)}
            <div class="mockup-hover-overlay">
              <a href="${directUrl}" target="_blank" rel="noopener noreferrer" class="preview-pill">
                <i class="fas fa-external-link-alt"></i> Open ${displayUrl} ↗
              </a>
            </div>
          `}
        </div>
      </div>

      <div class="project-card-body">
        <h3 class="project-title">${p.title}</h3>
        ${p.date ? `<div class="project-date"><i class="fas fa-calendar-alt"></i> ${p.date}</div>` : ''}
        <p class="project-desc">${p.description}</p>
        
        <ul class="project-features">
          ${(p.features || []).slice(0, 3).map(f => `<li><i class="fas fa-check-circle"></i> <span>${f}</span></li>`).join('')}
        </ul>
      </div>

      <div class="project-card-footer">
        <div class="project-tech-stack">
          ${(p.techStack || []).map(t => `<span class="tech-badge">${t}</span>`).join('')}
        </div>
        
        <div class="project-actions">
          <a href="${directUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" title="Launch Project Directly">
            <i class="fas fa-external-link-alt"></i> Launch Live App
          </a>
          <a href="${p.githubUrl || directUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm" title="View Source Code on GitHub">
            <i class="fab fa-github"></i> GitHub Source
          </a>
          <button class="btn btn-ghost btn-sm preview-device-btn" data-project-idx="${idx}" title="Preview in Device Frame">
            <i class="fas fa-desktop"></i> Frame View
          </button>
        </div>
      </div>
    </article>
    `;
  }).join('');

  observeGrid(container);
  attachPreviewListeners(container);
}

async function initProjects() {
  const container = document.getElementById('projectsGrid');
  if (!container) return;

  try {
    const res = await fetch(`${API_BASE}/api/projects`);
    if (!res.ok) throw new Error('API Error');
    const { data } = await res.json();
    if (!data || !data.length) throw new Error('Empty');
    renderProjects(data, container);
  } catch (err) {
    console.info('Projects served from verified resume data.');
    renderProjects(STATIC_DATA.projects, container);
  }
}

// ============================================================
// INTERACTIVE PROJECT PREVIEW MODAL
// ============================================================
function initProjectPreviewModal() {
  const modal = document.getElementById('projectPreviewModal');
  const closeBtn = document.getElementById('closePreviewModal');
  const btnDesktop = document.getElementById('btnDeviceDesktop');
  const btnMobile = document.getElementById('btnDeviceMobile');
  const viewport = document.getElementById('previewInteractiveViewport');

  if (!modal) return;

  btnDesktop?.addEventListener('click', () => {
    btnDesktop.classList.add('active');
    btnMobile?.classList.remove('active');
    viewport?.classList.remove('view-mobile');
  });

  btnMobile?.addEventListener('click', () => {
    btnMobile.classList.add('active');
    btnDesktop?.classList.remove('active');
    viewport?.classList.add('view-mobile');
  });

  closeBtn?.addEventListener('click', () => {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden');
      document.body.style.overflow = '';
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      modal.classList.add('hidden');
      document.body.style.overflow = '';
    }
  });
}

function attachPreviewListeners(container) {
  // Only the explicit "Frame View" button triggers the frame modal
  const triggerElements = container.querySelectorAll('.preview-device-btn');
  triggerElements.forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const idx = parseInt(el.getAttribute('data-project-idx') || '0', 10);
      const project = currentProjectList[idx] || STATIC_DATA.projects[0];
      openProjectPreview(project);
    });
  });
}

function openProjectPreview(p) {
  const modal = document.getElementById('projectPreviewModal');
  if (!modal) return;

  const directUrl = p.directUrl || p.liveUrl || p.githubUrl || 'https://github.com/dwivedianandnarayan7133';
  const isHosted = directUrl.startsWith('http') && !directUrl.includes('github.com');

  document.getElementById('previewModalTitle').textContent = p.title;
  document.getElementById('previewModalUrl').textContent = directUrl;
  
  const brandTitle = document.getElementById('viewportAppTitle');
  if (brandTitle) brandTitle.textContent = p.title.split('–')[0].trim();

  // Populate Interactive Viewport with Real Direct Iframe or Visual Preview
  const screen = document.getElementById('viewportAppScreen');
  if (screen) {
    if (isHosted) {
      screen.innerHTML = `
        <div style="position:relative;width:100%;height:460px;background:#0f172a;overflow:hidden;">
          <iframe src="${directUrl}" style="width:100%;height:100%;border:none;background:#fff;" title="${p.title}" sandbox="allow-scripts allow-same-origin allow-forms allow-popups"></iframe>
          <div style="position:absolute;bottom:12px;right:12px;">
            <a href="${directUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" style="box-shadow:0 6px 18px rgba(0,0,0,0.5);">
              <i class="fas fa-external-link-alt"></i> Open Full Site ↗
            </a>
          </div>
        </div>
      `;
    } else {
      screen.innerHTML = `
        <div style="padding:32px 20px;text-align:center;background:var(--bg-card);display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:280px;gap:16px;">
          <div style="width:64px;height:64px;border-radius:50%;background:rgba(16,185,129,0.15);display:flex;align-items:center;justify-content:center;font-size:1.8rem;color:var(--accent-primary);">
            <i class="${p.icon || 'fab fa-github'}"></i>
          </div>
          <h4 style="font-size:1.2rem;color:var(--text-primary);margin:0;">${p.title}</h4>
          <p style="max-width:540px;color:var(--text-secondary);font-size:0.9rem;margin:0;">${p.description}</p>
          <div style="display:flex;gap:12px;flex-wrap:wrap;justify-content:center;margin-top:8px;">
            <a href="${directUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-md">
              <i class="fas fa-external-link-alt"></i> Open Direct Project URL ↗
            </a>
            <a href="${p.githubUrl || directUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-md">
              <i class="fab fa-github"></i> View GitHub Repository
            </a>
          </div>
        </div>
      `;
    }
  }

  const descEl = document.getElementById('previewModalDesc');
  if (descEl) descEl.textContent = p.description;

  const stackEl = document.getElementById('previewModalStack');
  if (stackEl) {
    stackEl.innerHTML = (p.techStack || []).map(t => `<span class="tech-badge">${t}</span>`).join('');
  }

  const featuresEl = document.getElementById('previewModalFeatures');
  if (featuresEl) {
    featuresEl.innerHTML = (p.features || []).map(f => `<li><i class="fas fa-check-circle text-accent"></i> <span>${f}</span></li>`).join('');
  }

  const demoBtn = document.getElementById('previewModalLiveDemo');
  if (demoBtn) {
    demoBtn.href = directUrl;
    demoBtn.textContent = 'Launch Direct Project URL ↗';
  }

  const ghBtn = document.getElementById('previewModalGitHub');
  if (ghBtn) {
    ghBtn.href = p.githubUrl || directUrl;
  }

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

// ============================================================
// DYNAMIC EDUCATION
// ============================================================
function renderEducation(data, container) {
  container.innerHTML = data.map(e => `
    <div class="timeline-item animate-on-scroll">
      <div class="timeline-dot"><i class="${e.icon || 'fas fa-graduation-cap'}"></i></div>
      <div class="timeline-content">
        <div class="timeline-header">
          <div>
            <h3 class="timeline-title">${e.degree}</h3>
            <p class="timeline-institution">${e.institution}</p>
          </div>
          ${e.badgeText ? `<div class="timeline-badge ${e.badgeClass || 'current'}">${e.badgeText}</div>` : ''}
        </div>
        <div class="timeline-meta">
          <span class="timeline-date"><i class="fas fa-calendar"></i> ${e.dateRange}</span>
          ${e.location ? `<span class="timeline-location"><i class="fas fa-map-marker-alt"></i> ${e.location}</span>` : ''}
        </div>
        ${e.description ? `<p class="timeline-desc">${e.description}</p>` : ''}
      </div>
    </div>
  `).join('');
  observeGrid(container);
}

async function initEducation() {
  const container = document.getElementById('educationTimeline');
  if (!container) return;
  try {
    const res = await fetch(`${API_BASE}/api/education`);
    if (!res.ok) throw new Error('API Error');
    const { data } = await res.json();
    if (!data || !data.length) throw new Error('Empty');
    renderEducation(data, container);
  } catch {
    renderEducation(STATIC_DATA.education, container);
  }
}

// ============================================================
// DYNAMIC CERTIFICATIONS & LIGHTBOX VIEWER
// ============================================================
let currentCertificatesList = [];

function renderCertifications(data, container) {
  currentCertificatesList = data;
  container.innerHTML = data.map((c, idx) => `
    <div class="cert-card animate-on-scroll" id="cert-${c._id || idx}" data-cert-idx="${idx}">
      <div class="cert-card-top">
        <div class="cert-icon-wrapper"><i class="${c.icon || 'fas fa-certificate'}"></i></div>
        ${c.badgeText ? `<div class="cert-badge ${c.badgeClass || ''}"><i class="fas fa-check-circle"></i> ${c.badgeText}</div>` : ''}
      </div>

      <!-- Direct Certificate Visual Preview -->
      ${c.imageUrl ? `
        <div class="cert-preview-box" data-cert-idx="${idx}" title="Click to view full certificate">
          <div class="cert-img-container">
            <img src="${c.imageUrl}" alt="${c.title}" class="cert-img-thumbnail" loading="lazy" />
            <div class="cert-img-hover-overlay">
              <span class="cert-zoom-btn"><i class="fas fa-search-plus"></i> View Full Certificate</span>
            </div>
          </div>
        </div>
      ` : `
        <div class="cert-placeholder-box">
          <i class="${c.icon || 'fab fa-google'}"></i>
          <span>${c.badgeText || 'Verified Skill Credential'}</span>
        </div>
      `}

      <div class="cert-body">
        <h3 class="cert-title">${c.title}</h3>
        <p class="cert-company"><i class="fas fa-building"></i> ${c.issuer}</p>
        ${c.date ? `<div class="cert-duration"><i class="fas fa-calendar-alt"></i> <span>${c.date}</span></div>` : ''}

        ${c.credentialId ? `
          <div class="cert-credential-row">
            <span class="cert-cred-label">Credential ID:</span>
            <code class="cert-cred-code">${c.credentialId}</code>
            <button class="cert-copy-id-btn" data-copy="${c.credentialId}" title="Copy Credential ID"><i class="far fa-copy"></i></button>
          </div>
        ` : ''}

        ${c.studentId ? `
          <div class="cert-credential-row">
            <span class="cert-cred-label">Student ID:</span>
            <code class="cert-cred-code">${c.studentId}</code>
            ${c.grade ? `<span class="cert-grade-tag">${c.grade}</span>` : ''}
          </div>
        ` : ''}

        ${c.description ? `<p class="cert-desc">${c.description}</p>` : ''}

        ${c.topics && c.topics.length ? `
          <div class="cert-topics-wrapper">
            <span class="cert-topics-label">Key Competencies:</span>
            <div class="cert-tags">
              ${c.topics.map(t => `<span class="cert-tag">${t}</span>`).join('')}
            </div>
          </div>` : ''}

        <div class="cert-card-actions">
          ${c.imageUrl ? `
            <button class="btn btn-primary btn-sm cert-view-btn" data-cert-idx="${idx}">
              <i class="fas fa-expand"></i> View Certificate
            </button>
          ` : ''}
          ${c.pdfUrl ? `
            <a href="${c.pdfUrl}" target="_blank" download class="btn btn-outline btn-sm" title="Download Verified PDF">
              <i class="fas fa-file-pdf"></i> PDF Certificate
            </a>
          ` : ''}
          ${c.verifyUrl ? `
            <a href="${c.verifyUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-ghost btn-sm" title="Verify Online">
              <i class="fas fa-check-circle text-accent"></i> Verify
            </a>
          ` : ''}
        </div>
      </div>
    </div>
  `).join('');

  observeGrid(container);
  attachCertListeners(container);
}

function attachCertListeners(container) {
  // Click on thumbnail or "View Certificate" button
  const viewTriggers = container.querySelectorAll('.cert-preview-box, .cert-view-btn');
  viewTriggers.forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const idx = parseInt(el.getAttribute('data-cert-idx') || '0', 10);
      const cert = currentCertificatesList[idx] || STATIC_DATA.certifications[0];
      openCertModal(cert);
    });
  });

  // Click on copy ID button
  const copyBtns = container.querySelectorAll('.cert-copy-id-btn');
  copyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const text = btn.getAttribute('data-copy');
      if (text) {
        navigator.clipboard.writeText(text).then(() => {
          showToast(`📋 Copied Credential ID: ${text}`);
        }).catch(() => {
          showToast(`Credential ID: ${text}`);
        });
      }
    });
  });
}

function openCertModal(cert) {
  const modal = document.getElementById('certificateLightboxModal');
  if (!modal) return;

  const titleEl = document.getElementById('certModalTitle');
  const issuerEl = document.getElementById('certModalIssuer');
  const badgeEl = document.getElementById('certModalBadge');
  const dateEl = document.getElementById('certModalDate');
  const credBox = document.getElementById('certModalCredBox');
  const credIdEl = document.getElementById('certModalCredId');
  const copyBtn = document.getElementById('certModalCopyBtn');
  const imgEl = document.getElementById('certModalImage');
  const verifyLink = document.getElementById('certModalVerifyLink');
  const downloadBtn = document.getElementById('certModalDownloadBtn');

  if (titleEl) titleEl.textContent = cert.title;
  if (issuerEl) issuerEl.innerHTML = `<i class="fas fa-building"></i> ${cert.issuer}`;
  if (badgeEl) badgeEl.innerHTML = `<i class="fas fa-check-circle"></i> ${cert.badgeText || 'Verified'}`;
  if (dateEl) dateEl.innerHTML = `<i class="fas fa-calendar-alt"></i> <span>${cert.date || 'Issued'}</span>`;

  if (cert.credentialId) {
    if (credBox) credBox.style.display = 'flex';
    if (credIdEl) credIdEl.textContent = cert.credentialId;
    if (copyBtn) {
      copyBtn.onclick = () => {
        navigator.clipboard.writeText(cert.credentialId);
        showToast(`📋 Copied ID: ${cert.credentialId}`);
      };
    }
  } else if (cert.studentId) {
    if (credBox) credBox.style.display = 'flex';
    if (credIdEl) credIdEl.textContent = `${cert.studentId} (${cert.grade || 'Certified'})`;
    if (copyBtn) {
      copyBtn.onclick = () => {
        navigator.clipboard.writeText(cert.studentId);
        showToast(`📋 Copied Student ID: ${cert.studentId}`);
      };
    }
  } else {
    if (credBox) credBox.style.display = 'none';
  }

  // Display Image
  if (imgEl) {
    imgEl.src = cert.imageUrl || '/assets/certificates/apna_college_dsa_java.png';
    imgEl.alt = cert.title;
  }

  // Verify and Download links
  if (verifyLink) {
    if (cert.verifyUrl) {
      verifyLink.style.display = 'inline-flex';
      verifyLink.href = cert.verifyUrl;
    } else {
      verifyLink.style.display = 'none';
    }
  }

  if (downloadBtn) {
    downloadBtn.href = cert.pdfUrl || cert.imageUrl || '#';
    downloadBtn.setAttribute('download', `${(cert.title || 'Certificate').replace(/[^a-zA-Z0-9]/g, '_')}.png`);
  }

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function initCertModal() {
  const modal = document.getElementById('certificateLightboxModal');
  const closeBtn = document.getElementById('closeCertModal');
  if (!modal) return;

  const closeModal = () => {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  };

  closeBtn?.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
}

async function initCertificates() {
  const container = document.getElementById('certGrid');
  if (!container) return;
  try {
    const res = await fetch(`${API_BASE}/api/certifications`);
    if (!res.ok) throw new Error('API Error');
    const { data } = await res.json();
    if (!data || !data.length) throw new Error('Empty');
    renderCertifications(data, container);
  } catch {
    renderCertifications(STATIC_DATA.certifications, container);
  }
}

// ============================================================
// ACHIEVEMENTS & AWARDS
// ============================================================
function initAchievements() {
  const container = document.getElementById('achievementsGrid');
  if (!container) return;
  container.innerHTML = STATIC_DATA.achievements.map(a => `
    <div class="achievement-card animate-on-scroll">
      <div class="achievement-icon"><i class="${a.icon}"></i></div>
      <div class="achievement-info">
        <div class="achievement-header">
          <h3 class="achievement-title">${a.title}</h3>
          <span class="achievement-pill">${a.highlight}</span>
        </div>
        <p class="achievement-org">${a.organization}</p>
        <p class="achievement-desc">${a.description}</p>
      </div>
    </div>
  `).join('');
  observeGrid(container);
}

// ============================================================
// SKILLS & TECHNOLOGIES
// ============================================================
function renderSkills(data, container) {
  const categories = {};
  data.forEach(skill => {
    if (!categories[skill.category]) {
      categories[skill.category] = { icon: skill.categoryIcon, items: [], tags: [] };
    }
    if (skill.isTag) categories[skill.category].tags.push(skill);
    else categories[skill.category].items.push(skill);
  });

  let html = '';
  for (const [catName, catData] of Object.entries(categories)) {
    html += `
      <div class="skill-card animate-on-scroll">
        <div class="skill-card-header">
          <div class="skill-card-icon"><i class="${catData.icon || 'fas fa-code'}"></i></div>
          <h3 class="skill-card-title">${catName}</h3>
        </div>
    `;
    if (catData.items.length) {
      html += '<div class="skill-list">';
      catData.items.forEach(item => {
        html += `
          <div class="skill-item">
            <div class="skill-info">
              <i class="${item.icon}"></i>
              <span>${item.name}</span>
            </div>
            <div class="skill-bar-wrap">
              <div class="skill-bar" data-width="${item.percentage}" style="--bar-color: ${item.color || 'var(--accent-primary)'};"></div>
            </div>
            <span class="skill-pct">${item.percentage}%</span>
          </div>
        `;
      });
      html += '</div>';
    }
    if (catData.tags.length) {
      html += '<div class="tech-tags">';
      catData.tags.forEach(tag => {
        html += `<span class="tech-tag"><i class="${tag.icon}"></i> ${tag.name}</span>`;
      });
      html += '</div>';
    }
    html += '</div>';
  }
  container.innerHTML = html;
  observeGrid(container);
  initSkillBars();
}

async function initSkills() {
  const container = document.getElementById('skillsGrid');
  if (!container) return;
  try {
    const res = await fetch(`${API_BASE}/api/skills`);
    if (!res.ok) throw new Error('API Error');
    const { data } = await res.json();
    if (!data || !data.length) throw new Error('Empty');
    renderSkills(data, container);
  } catch {
    renderSkills(STATIC_DATA.skills, container);
  }
}

// ============================================================
// SOCIAL CONNECTIONS
// ============================================================
function renderSocialCards(links, grid, footerIcons) {
  const isExternal = (url) => !url.startsWith('mailto:') && !url.startsWith('tel:');
  grid.innerHTML = links.map((link, idx) => `
    <a href="${link.url}"
       ${isExternal(link.url) ? 'target="_blank" rel="noopener noreferrer"' : ''}
       class="social-card animate-on-scroll"
       id="social-${link.platform}"
       aria-label="${link.label}">
      <div class="social-icon ${link.colorClass || 'default'}">
        <i class="${link.icon}"></i>
      </div>
      <div class="social-info">
        <h3>${link.label}</h3>
        <p>${link.username || link.url}</p>
        ${link.badge ? `<span class="social-badge">${link.badge}</span>` : ''}
      </div>
      <div class="social-arrow"><i class="fas fa-arrow-up-right-from-square"></i></div>
    </a>`).join('');

  observeGrid(grid);

  if (footerIcons) {
    const footerLinks = links.filter(l => !l.url.startsWith('tel:'));
    footerIcons.innerHTML = footerLinks.map(link => `
      <a href="${link.url}" ${isExternal(link.url) ? 'target="_blank" rel="noopener noreferrer"' : ''}
         class="footer-social-icon" aria-label="${link.label}">
        <i class="${link.icon}"></i>
      </a>`).join('');
  }
}

async function initSocialLinks() {
  const grid = document.getElementById('socialGrid');
  const footerIcons = document.getElementById('footerSocialIcons');
  if (!grid) return;

  try {
    const res = await fetch(`${API_BASE}/api/social`);
    if (!res.ok) throw new Error('API Error');
    const { data } = await res.json();
    if (!data || !data.length) throw new Error('Empty');
    renderSocialCards(data, grid, footerIcons);
  } catch {
    renderSocialCards(STATIC_DATA.social, grid, footerIcons);
  }
}

// ============================================================
// CONTACT FORM
// ============================================================
function initContactForm() {
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  const btn = document.getElementById('submitContactBtn');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = (form.elements['name']?.value ?? '').trim();
    const email = (form.elements['email']?.value ?? '').trim();
    const subject = (form.elements['subject']?.value ?? '').trim();
    const message = (form.elements['message']?.value ?? '').trim();

    if (!name || name.length < 2) {
      showFormStatus('error', '⚠️ Please enter your name (at least 2 characters).');
      return;
    }
    if (!isValidEmail(email)) {
      showFormStatus('error', '⚠️ Please enter a valid email address.');
      return;
    }
    if (!message || message.length < 10) {
      showFormStatus('error', '⚠️ Message must be at least 10 characters.');
      return;
    }

    if (btn) {
      btn.disabled = true;
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>Sending…</span>';
    }
    showFormStatus('', '');

    try {
      const response = await fetch(`${API_BASE}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message }),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        showFormStatus('success', `✅ ${data.message}`);
        form.reset();
        showToast('📬 Message received! Thanks for reaching out.');
      } else {
        showFormStatus('error', `❌ ${data.message || 'Error sending message. Please email me directly.'}`);
      }
    } catch {
      showFormStatus('error', '🔌 Could not reach server. Please email directly at dwivedianandnarayan@gmail.com');
    } finally {
      if (btn) {
        btn.disabled = false;
        btn.innerHTML = '<i class="fas fa-paper-plane"></i> <span>Send Message</span>';
      }
    }
  });

  function showFormStatus(type, msg) {
    if (!status) return;
    if (!type && !msg) {
      status.className = 'form-status';
      status.textContent = '';
      return;
    }
    status.className = `form-status ${type}`;
    status.textContent = msg;
    if (type === 'success') {
      setTimeout(() => {
        status.className = 'form-status';
        status.textContent = '';
      }, 7000);
    }
  }
}

// ============================================================
// UTILITIES
// ============================================================
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function setFooterYear() {
  const el = document.getElementById('footerYear');
  if (el) el.textContent = new Date().getFullYear();
}

function showToast(msg, duration = 3200) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), duration);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
