export const PERSONAL_INFO = {
  name: "Deepak Jangid",
  role: "Full-Stack Developer",
  email: "deepakjangid6593@gmail.com",
  phone: "+91-8949479951",
  linkedin: "https://www.linkedin.com/in/ideepakjangid/",
  github: "https://github.com/ideepakjangid",
  location: "Surat, Gujarat, India",
};

export const HERO_CODE_BLOCK = `const developer = {
  name: '${PERSONAL_INFO.name}',
  role: 'Full Stack',
  skills: [
    'Node.js', 'MERN', 'Vue',
    'Adonis.js','TypeScript',
    'AWS', 'Docker'
  ],
  passionate: true,
  code: () => 'Magic'
};`;

export const TYPEWRITER_TEXTS = [
  "Full-Stack Developer",
  "MERN Stack Developer",
  "Backend Developer",
];

export const ABOUT_TEXT = [
  "Passionate Full-Stack Developer with 2+ years of experience building scalable, dynamic web applications.",
  "I specialize in modern JavaScript frameworks including React, Vue.js, Node.js, and Adonis.js, alongside robust database solutions like MongoDB and MySQL.",
  "I hold a BCA from MGSU University and completed a Full-Stack course. Currently, I work at Webledger, developing complex cloud accounting software.",
  "I love writing clean code, solving real-world challenges, and contributing to open-source communities.",
];

export const STATS = [
  { label: "Experience", value: "2+ Years" },
  { label: "Reports Generated", value: "40+" },
  { label: "Features Built", value: "10+" },
];

export const ACHIEVEMENT = {
  title: "Employee of the Quarter",
  company: "Webledger",
  icon: "🏆",
};

export const SKILLS_CATEGORIES = [
  {
    title: "Frontend",
    skills: ["Vue.js", "React.js", "Redux", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind", "Bootstrap"],
    color: "blue",
  },
  {
    title: "Backend",
    skills: ["Node.js", "Adonis.js", "Express.js"],
    color: "green",
  },
  {
    title: "Database & Tools",
    skills: ["MySQL", "MongoDB", "Redis", "Firebase", "Git", "Postman", "VS Code", "Cursor"],
    color: "orange",
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Docker", "REST API"],
    color: "purple",
  },
];

export const EXPERIENCES = [
  {
    id: 1,
    company: "Webledger",
    role: "Full Stack Developer",
    date: "April 2025 – Present",
    location: "Surat, Gujarat",
    stack: ["Vue.js", "React.js", "TypeScript", "Adonis.js", "SQL", "AWS"],
    description: [
      "Built cloud-based accounting software; cut monthly close time by 30%.",
      "Automated P&L, Balance Sheet, and Trial Balance report generation.",
      "Developed core CA Compliance modules: Clients, Invoicing, CMA, Workboard, Notice.",
      "Integrated 10+ features collaborating with a team of 4, boosting overall performance by 25%.",
    ],
  },
  {
    id: 2,
    company: "WsCube Tech",
    role: "Full Stack Developer",
    date: "Jun 2024 – Feb 2025",
    location: "Jaipur, Rajasthan",
    stack: ["React.js", "Express.js", "MongoDB", "Tailwind"],
    description: [
      "Improved UI performance by 15–20% via rendering optimizations.",
      "Reduced code redundancy by 25% by creating a reusable component library.",
      "Improved API efficiency, response times, and error handling robustly.",
    ],
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Office Webledger",
    description: "Enterprise CA compliance platform.",
    bullets: [
      "Notice Management System (Income Tax, TDS, GST automation)",
      "Client Onboarding with end-to-end validation",
      "Invoice Management with SGST, CGST, IGST, VAT support",
      "Draggable customizable dashboard",
      "40+ optimized business reports",
    ],
    stack: ["Adonis.js", "Vue.js", "Node.js", "TypeScript", "Bootstrap"],
    tags: ["Vue.js", "Adonis.js", "TypeScript", "MySQL"],
    liveUrl: "https://office.webledger.in/",
    githubUrl: null,
  },
  {
    id: 2,
    title: "E-Commerce Website",
    description: "A full-scale e-commerce platform for electronic goods, featuring an intuitive frontend, secure backend, and a comprehensive admin panel.",
    bullets: [
      "Custom Admin Panel for managing inventory, tracking orders, and handling user accounts",
      "Responsive User Frontend with advanced product filtering, search, and seamless cart management",
      "Secure backend integration for high-performance data operations and user authentication",
      "Scalable architecture utilizing Next.js for optimized rendering and SEO performance"
    ],
    stack: ["Next.js", "Node.js", "MongoDB"],
    tags: ["Next.js", "Express.js", "MongoDB"],
    liveUrl: null,
    githubUrl: null,
  },
];
