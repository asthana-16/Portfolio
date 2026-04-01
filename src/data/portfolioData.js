export const personalInfo = {
  name: 'Abhinav Asthana',
  role: 'Software Developer',
  subtitle: 'AI Enthusiast | Full-Stack Builder | Problem Solver',
  location: 'Punjab, India',
  email: 'abhinavasthana.work@gmail.com',
  phone: '+91-7985412330',
  photo: '/profile.png',
  github: 'https://github.com/abhinavastana-16',
  linkedin: 'https://www.linkedin.com/in/abhinav20',
  summary:
    'Computer Science undergraduate focused on building production-ready full-stack products with clean UX, reliable APIs, and practical AI integrations.',
  about:
    'I enjoy crafting apps that are both elegant and useful. My work blends modern frontend experiences with robust backend systems, and I am especially excited by AI-powered workflows that solve real user problems.',
  aboutDetails: [
    'I focus on turning ideas into products with clean architecture, thoughtful design, and dependable APIs.',
    'My approach combines frontend polish, backend reliability, and measurable outcomes so every build is both useful and scalable.',
    'I am especially interested in AI-first user experiences, where intelligent workflows feel natural and practical for daily use.',
  ],
  highlights: [
    'Built secure, role-based systems with measurable performance gains',
    'Experience with RAG workflows using context-aware prompt engineering',
    'Strong foundations in DSA, cloud, and full-stack development',
  ],
}

export const skillGroups = [
  {
    title: 'Languages',
    items: [
      { name: 'C++', level: 86 },
      { name: 'Python', level: 90 },
      { name: 'JavaScript', level: 88 },
      { name: 'HTML', level: 92 },
      { name: 'CSS', level: 87 },
      { name: 'SQL', level: 85 },
    ],
  },
  {
    title: 'Frameworks',
    items: [
      { name: 'React', level: 89 },
      { name: 'Node.js', level: 84 },
      { name: 'Express.js', level: 83 },
      { name: 'Next.js', level: 81 },
      { name: 'Flask', level: 84 },
      { name: 'Tailwind CSS', level: 88 },
    ],
  },
  {
    title: 'Tools & Platforms',
    items: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'VS Code', level: 95 },
      { name: 'Postman', level: 82 },
      { name: 'Power BI', level: 75 },
      { name: 'Jupyter Notebook', level: 83 },
      { name: 'Netlify', level: 80 },
    ],
  },
]

export const projects = [
  {
    title: 'AI Dog Training Assistant',
    date: '2024',
    description:
      'Chatbot web platform for dog owners and enthusiasts with a polished, animated chat interface and category-driven guidance.',
    impact:
      'Covers training, care, health, nutrition, and fun facts using instant keyword-matched Flask API responses, with roadmap plans for GPT/NLP, voice input, and personalized memory.',
    stack: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript', 'AI'],
    github: 'https://github.com/asthana-16/AI-Dog-Training-Assistant-Chatbot',
    live: null,
  },
  {
    title: 'Neural RAG - Flask RAG LLM Application',
    date: 'February 2026',
    description:
      'Designed a complete full-stack document-chat workflow where users upload PDFs/DOCX files and query them using a secure role-based RAG pipeline.',
    impact:
      'Retrieved context from 2.5 lakh+ files with 95%+ relevance through custom vector search and prompt orchestration.',
    stack: ['Python', 'Flask', 'SQLite', 'Google Gemini 2.5 Flash', 'TF-IDF', 'PyPDF2', 'Jinja2'],
    github: 'https://github.com/asthana-16/NeuralRAG',
    live: null,
  },
  {
    title: 'Quizzy Pe - Responsive Quiz App',
    date: 'August 2025',
    description:
      'Built a responsive quiz platform with category filtering, real-time scoring, and smooth offline-friendly performance for low-end devices.',
    impact: 'Improved interaction fluidity using local storage and smart rendering strategies, boosting perceived speed by 35%.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Next.js', 'React'],
    github: 'https://github.com/asthana-16/QuizzyPe',
    live: null,
  },
  {
    title: 'Job Application Tracker - MERN Stack Web App',
    date: 'July 2025',
    description:
      'Developed a full-stack job application tracker with CRUD workflows, role-based dashboards, and analytics-first interfaces.',
    impact: 'Reduced tracking friction by 40% and enabled users to make faster data-backed decisions.',
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    github: 'https://github.com/asthana-16/job-tracker',
    live: null,
  },
  {
    title: 'E-Commerce Website',
    date: '2024',
    description:
      'Full-stack e-commerce web application focused on smooth shopping flow, product discovery, and a clean checkout experience.',
    impact:
      'Built core shopping features including product listings, cart flow, and responsive UI patterns suitable for real-world storefront usage.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Python', 'Flask'],
    github: 'https://github.com/asthana-16/ecommercewebsite',
    live: null,
  },
]

export const experience = [
  {
    role: 'Software Development Intern',
    company: 'WorldWin Coder Pvt. Ltd',
    date: 'July 2025',
    points: [
      'Worked on CMS and e-commerce systems for production use cases.',
      'Built dynamic web modules with maintainable frontend architecture.',
      'Contributed with ownership, fast learning, and strong delivery consistency.',
    ],
  },
]

export const internship = {
  role: 'Software Development Intern',
  company: 'WorldWin Coder Pvt. Ltd',
  date: 'July 2025',
  points: [
    'Worked on CMS and e-commerce systems for production use cases.',
    'Built dynamic web modules with maintainable frontend architecture.',
    'Contributed with ownership, fast learning, and strong delivery consistency.',
  ],
}

export const education = [
  {
    school: 'Lovely Professional University',
    detail: 'Bachelor of Technology - Computer Science and Engineering',
    score: 'CGPA: 7.83',
    date: 'Since 2023',
    location: 'Punjab, India',
  },
  {
    school: 'Amrit Public School',
    detail: 'Intermediate',
    score: 'Percentage: 70%',
    date: 'June 2022',
    location: 'Uttar Pradesh, India',
  },
  {
    school: 'Amrit Public School',
    detail: 'Matriculation',
    score: 'Percentage: 85%',
    date: 'June 2020',
    location: 'Uttar Pradesh, India',
  },
]

export const certifications = [
  {
    name: 'Full Stack Development Training Program',
    issuer: 'CipherSchools',
    date: '70 Hours',
    image: '/certificates/cipherschools-full-stack.png',
    credentialUrl: 'https://www.cipherschools.com',
  },
  {
    name: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
    issuer: 'Oracle',
    date: 'March 2026',
  },
  {
    name: 'Data Science Professional',
    issuer: 'Oracle',
    date: 'October 2025',
  },
  {
    name: 'Cloud Computing',
    issuer: 'NPTEL (IIT Kharagpur)',
    date: 'April 2025',
  },
  {
    name: 'Data Structures and Algorithms (DSA)',
    issuer: 'Iamneo',
    date: 'December 2024',
  },
]

export const achievements = [
  {
    title: 'Elite Certification in Cloud Computing',
    date: 'April 2025',
    note: 'Issued by NPTEL (IIT Kharagpur).',
  },
  {
    title: '3-Star Rating in C++ on HackerRank',
    date: 'July 2025',
    note: 'Demonstrated strong coding and problem-solving fundamentals.',
  },
]
