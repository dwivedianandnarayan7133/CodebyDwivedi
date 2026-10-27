/**
 * Static Data Source for Anand Narayan Dwivedi Portfolio
 * Synchronized with the latest official resume.
 */

'use strict';

const STATIC_DATA = {
  profile: {
    name: 'Anand Narayan Dwivedi',
    title: 'Full Stack Developer',
    email: 'dwivedianandnarayan@gmail.com',
    phone: '+91 9120367133',
    location: 'Lucknow, Uttar Pradesh, India',
    github: 'https://github.com/dwivedianandnarayan7133',
    linkedin: 'https://www.linkedin.com/in/anand-narayan-dwivedi/',
    leetcode: 'https://leetcode.com/u/anandnarayan7133/',
    summary: 'Full Stack Developer with hands-on experience in MERN, MySQL, Django, REST APIs, and responsive web development. Experienced in building and deploying web applications with frontend and backend technologies, databases, and API integration. Strong foundation in software development, problem-solving, and modern development tools, seeking an opportunity as a Software Developer.'
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
      order: 1,
      isActive: true
    },
    {
      platform: 'linkedin',
      label: 'LinkedIn',
      username: 'Anand Narayan Dwivedi',
      url: 'https://www.linkedin.com/in/anand-narayan-dwivedi-b6807033b/',
      icon: 'fab fa-linkedin-in',
      colorClass: 'linkedin',
      badge: 'Professional Network',
      order: 2,
      isActive: true
    },
    {
      platform: 'leetcode',
      label: 'LeetCode',
      username: 'Anand_Narayan_Dwivedi',
      url: 'https://leetcode.com/u/Anand_Narayan_Dwivedi/',
      icon: 'fas fa-code',
      colorClass: 'leetcode',
      badge: 'DSA Problem Solving',
      order: 3,
      isActive: true
    },
    {
      platform: 'google-cloud',
      label: 'Google Cloud Profile',
      username: 'Google Cloud Study Jams 3rd Rank',
      url: 'https://www.skills.google/public_profiles/a77c70e5-d738-4e4b-a995-f6032d5ce5ef',
      icon: 'fab fa-google',
      colorClass: 'google',
      badge: 'Verified Badges',
      order: 4,
      isActive: true
    },
    {
      platform: 'gmail',
      label: 'Gmail',
      username: 'dwivedianandnarayan@gmail.com',
      url: 'mailto:dwivedianandnarayan@gmail.com',
      icon: 'fas fa-envelope',
      colorClass: 'gmail',
      badge: 'Direct Inquiry',
      order: 5,
      isActive: true
    },
    {
      platform: 'phone',
      label: 'Phone / WhatsApp',
      username: '+91 9120367133',
      url: 'tel:+919120367133',
      icon: 'fas fa-phone-alt',
      colorClass: 'whatsapp',
      badge: 'Instant Reach',
      order: 6,
      isActive: true
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
      order: 1,
      isActive: true
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
      order: 2,
      isActive: true
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
      order: 3,
      isActive: true
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
      order: 4,
      isActive: true
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
      order: 5,
      isActive: true
    }
  ],

  education: [
    {
      _id: 'edu-1',
      degree: 'B.Tech in Computer Science & Engineering',
      institution: 'Bansal Institute Of Engineering & Technology',
      location: 'Lucknow, Uttar Pradesh',
      dateRange: '2024 – 2027',
      description: 'Pursuing Bachelor of Technology in CSE with 80.1% aggregate till 6th semester. Focused on MERN stack, data structures, algorithms, system design, and cloud technologies.',
      badgeText: '80.1% (till 6 sem.)',
      badgeClass: 'current',
      icon: 'fas fa-university',
      order: 1,
      isActive: true
    },
    {
      _id: 'edu-2',
      degree: 'Diploma in Computer Science & Engineering',
      institution: 'MMIT Sant Kabir Nagar',
      location: 'Sant Kabir Nagar, Uttar Pradesh',
      dateRange: '2021 – 2024',
      description: 'Graduated with 75.79% score. Developed solid fundamentals in web development, object-oriented programming, computer networking, and relational database systems.',
      badgeText: '75.79%',
      badgeClass: 'completed',
      icon: 'fas fa-laptop-code',
      order: 2,
      isActive: true
    },
    {
      _id: 'edu-3',
      degree: 'Secondary (X), UP Board',
      institution: 'K S S I C Baridiha, Sant Kabir Nagar',
      location: 'Sant Kabir Nagar, Uttar Pradesh',
      dateRange: '2020 – 2021',
      description: 'Completed High School under UP State Board with 87.00% distinction.',
      badgeText: '87.00%',
      badgeClass: 'completed',
      icon: 'fas fa-school',
      order: 3,
      isActive: true
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
      icon: 'fab fa-java',
      order: 1,
      isActive: true
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
      icon: 'fas fa-robot',
      order: 2,
      isActive: true
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
      icon: 'fas fa-award',
      order: 3,
      isActive: true
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
      icon: 'fas fa-briefcase',
      order: 4,
      isActive: true
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
      icon: 'fab fa-google',
      order: 5,
      isActive: true
    }
  ],

  achievements: [
    {
      _id: 'achieve-1',
      title: 'Secured 3rd Position – Google Cloud Study Jams',
      organization: 'Google Developer Group (GDG) at Bansal Institute of Engineering & Technology, Lucknow',
      date: 'Oct 2025',
      description: 'Earned 3rd place for rapid completion of Google Cloud infrastructure, deployment pipelines, and Generative AI foundational tracks.',
      icon: 'fas fa-trophy',
      highlight: '3rd Position'
    },
    {
      _id: 'achieve-2',
      title: 'AI & Modern Development Frameworks Implementation',
      organization: 'Academic & Personal Projects',
      date: '2025 – 2026',
      description: 'Engineered applications integrating Prompt Engineering, intelligent tooling, and modern developer toolchains (Antigravity IDE, VS Code, Git).',
      icon: 'fas fa-brain',
      highlight: 'AI Integration'
    }
  ],

  skills: [
    { category: 'Programming Languages', categoryIcon: 'fas fa-code', isTag: false, name: 'JavaScript', icon: 'devicon-javascript-plain colored', percentage: 90, color: '#f7df1e', order: 1, isActive: true },
    { category: 'Programming Languages', categoryIcon: 'fas fa-code', isTag: false, name: 'Python', icon: 'devicon-python-plain colored', percentage: 82, color: '#3776ab', order: 2, isActive: true },
    { category: 'Programming Languages', categoryIcon: 'fas fa-code', isTag: false, name: 'Java', icon: 'devicon-java-plain colored', percentage: 80, color: '#f89820', order: 3, isActive: true },
    { category: 'Programming Languages', categoryIcon: 'fas fa-code', isTag: false, name: 'C++', icon: 'devicon-cplusplus-plain colored', percentage: 76, color: '#00599c', order: 4, isActive: true },
    { category: 'Programming Languages', categoryIcon: 'fas fa-code', isTag: false, name: 'C', icon: 'devicon-c-plain colored', percentage: 74, color: '#a8b9cc', order: 5, isActive: true },

    { category: 'Web Development', categoryIcon: 'fas fa-globe', isTag: false, name: 'HTML5', icon: 'devicon-html5-plain colored', percentage: 95, color: '#e34f26', order: 1, isActive: true },
    { category: 'Web Development', categoryIcon: 'fas fa-globe', isTag: false, name: 'CSS3', icon: 'devicon-css3-plain colored', percentage: 90, color: '#1572b6', order: 2, isActive: true },
    { category: 'Web Development', categoryIcon: 'fas fa-globe', isTag: false, name: 'React.js', icon: 'devicon-react-original colored', percentage: 85, color: '#61dafb', order: 3, isActive: true },
    { category: 'Web Development', categoryIcon: 'fas fa-globe', isTag: false, name: 'Node.js', icon: 'devicon-nodejs-plain colored', percentage: 84, color: '#339933', order: 4, isActive: true },
    { category: 'Web Development', categoryIcon: 'fas fa-globe', isTag: false, name: 'Express.js', icon: 'devicon-express-original', percentage: 82, color: '#68a063', order: 5, isActive: true },
    { category: 'Web Development', categoryIcon: 'fas fa-globe', isTag: false, name: 'Django', icon: 'devicon-django-plain colored', percentage: 75, color: '#092e20', order: 6, isActive: true },
    { category: 'Web Development', categoryIcon: 'fas fa-globe', isTag: false, name: 'Bootstrap', icon: 'devicon-bootstrap-plain colored', percentage: 88, color: '#7952b3', order: 7, isActive: true },

    { category: 'Databases', categoryIcon: 'fas fa-database', isTag: false, name: 'MongoDB', icon: 'devicon-mongodb-plain colored', percentage: 84, color: '#47a248', order: 1, isActive: true },
    { category: 'Databases', categoryIcon: 'fas fa-database', isTag: false, name: 'MySQL', icon: 'devicon-mysql-plain colored', percentage: 78, color: '#4479a1', order: 2, isActive: true },
    { category: 'Databases', categoryIcon: 'fas fa-database', isTag: false, name: 'MongoDB Atlas', icon: 'fas fa-cloud', percentage: 82, color: '#13aa52', order: 3, isActive: true },

    { category: 'Core Concepts & AI', categoryIcon: 'fas fa-brain', isTag: true, name: 'Data Structures & Algorithms (DSA)', icon: 'fas fa-sitemap', order: 1, isActive: true },
    { category: 'Core Concepts & AI', categoryIcon: 'fas fa-brain', isTag: true, name: 'OOP (Object Oriented Programming)', icon: 'fas fa-cubes', order: 2, isActive: true },
    { category: 'Core Concepts & AI', categoryIcon: 'fas fa-brain', isTag: true, name: 'DBMS', icon: 'fas fa-server', order: 3, isActive: true },
    { category: 'Core Concepts & AI', categoryIcon: 'fas fa-brain', isTag: true, name: 'REST APIs', icon: 'fas fa-network-wired', order: 4, isActive: true },
    { category: 'Core Concepts & AI', categoryIcon: 'fas fa-brain', isTag: true, name: 'Prompt Engineering', icon: 'fas fa-magic', order: 5, isActive: true },
    { category: 'Core Concepts & AI', categoryIcon: 'fas fa-brain', isTag: true, name: 'AI & LLM Tools', icon: 'fas fa-robot', order: 6, isActive: true },

    { category: 'Tools & IDEs', categoryIcon: 'fas fa-tools', isTag: true, name: 'Git', icon: 'devicon-git-plain colored', order: 1, isActive: true },
    { category: 'Tools & IDEs', categoryIcon: 'fas fa-tools', isTag: true, name: 'GitHub', icon: 'devicon-github-original', order: 2, isActive: true },
    { category: 'Tools & IDEs', categoryIcon: 'fas fa-tools', isTag: true, name: 'VS Code', icon: 'devicon-vscode-plain colored', order: 3, isActive: true },
    { category: 'Tools & IDEs', categoryIcon: 'fas fa-tools', isTag: true, name: 'Antigravity IDE', icon: 'fas fa-feather-alt', order: 4, isActive: true },
    { category: 'Tools & IDEs', categoryIcon: 'fas fa-tools', isTag: true, name: 'Wireshark', icon: 'fas fa-shield-alt', order: 5, isActive: true }
  ]
};

module.exports = STATIC_DATA;
