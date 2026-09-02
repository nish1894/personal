import { WorkExperience, ProjectData, SkillGroup, EducationData } from '../types';

export const PERSONAL_INFO = {
  name: 'Nishant Kumar',
  role: 'Software Developer',
  tagline: 'Software Developer building reliable backend and AI-integrated systems.',
  subheadline:
    'IIT Bombay graduate with hands-on production experience across Node.js microservices, caching architecture, and event-driven data pipelines. Passionate about understanding systems from first principles and writing software that holds up under load.',
  location: 'Bengaluru, India',
  status: 'Open to relevant software engineering opportunities',
  email: 'nishantkumar8466@gmail.com',
  phone: '+91 79764 69859',
  github: 'https://github.com/nish1894',
  linkedin: 'https://www.linkedin.com/in/nishant-kumar-156248343/',
  resumeFileName: 'Nishant_Kumar_Software_Developer_Resume.pdf',
};

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Faclon Labs',
    role: 'Software Developer',
    location: 'Bengaluru, India',
    dates: 'February 2026 - Present',
    type: 'Full-time',
    isCurrent: true,
    stack: ['Node.js', 'JavaScript', 'MongoDB', 'Redis', 'Apache Kafka', 'MQTT', 'Docker'],
    bullets: [
      'Cut MongoDB query volume by 80% and Redis memory consumption by 40% by re-architecting Node.js service flows and data-access patterns to eliminate redundant queries.',
      'Reduced repeated data operations by up to 90% by designing and delivering a dedicated caching microservice with cache-first data access.',
      'Integrated Apache Kafka into an IoT data pipeline, replacing part of the MQTT-based flow to improve reliability, scalability, and service decoupling.',
      'Refactored performance-critical paths in another production microservice, simplifying execution flow and improving maintainability.',
      'Deployed Dockerized microservices and resolved production issues across application logic, Redis, MongoDB, and inter-service workflows.',
    ],
  },
  {
    company: 'Outlier.ai',
    role: 'Freelance AI Trainer',
    location: 'Remote',
    dates: 'July 2025 - February 2026',
    type: 'Freelance',
    stack: ['RLHF', 'TruthfulQA', 'Model Evaluation', 'Prompt Optimization'],
    bullets: [
      'Optimized prompts and evaluated AI-generated responses for factual accuracy, instruction adherence, relevance, and reasoning quality.',
      'Supported Reinforcement Learning from Human Feedback (RLHF) workflows by ranking model outputs and writing actionable feedback.',
      'Conducted truthfulness-focused model evaluations using TruthfulQA standards.',
      'Validated outputs against structured technical evaluation criteria.',
    ],
  },
];

export const EARLIER_EXPERIENCE: WorkExperience = {
  company: 'TESSOL Thermal Energy Service Solutions Pvt. Ltd.',
  role: 'Research Intern',
  location: 'Mumbai, India',
  dates: 'May 2014 - June 2014',
  type: 'Internship',
  stack: ['Thermal Analysis', 'Energy Storage', 'Mathematical Modeling'],
  bullets: [
    'Worked on the design and thermal analysis of a thermal-energy storage system for small utilities.',
  ],
};

export const FEATURED_PROJECTS: ProjectData[] = [
  {
    id: 'lift-off-solutions',
    title: 'Lift Off Solutions',
    tagline: 'Multi-Tenant AI Customer-Service Platform & Adaptive RAG Retrieval Service',
    description:
      'A multi-tenant customer-service platform built with permission-aware workflows and a decoupled, multi-tier document-retrieval service designed for accurate enterprise assistance.',
    githubUrl: 'https://github.com/nish1894/LiftOfSolutions',
    isPrimary: true,
    technologies: [
      'TypeScript',
      'React 19',
      'Node.js 24',
      'Fastify',
      'Firebase Auth',
      'Firestore',
      'Redis',
      'Python',
      'LangChain',
      'LangGraph',
      'Docker Compose',
      'Vitest',
      'Google Cloud Run',
    ],
    platformBullets: [
      'Engineered 6 roles and 32 granular permissions with strict API-enforced tenant isolation and role-based access control (RBAC).',
      'Implemented Firebase Authentication with server-side token verification spanning 13 backend domain modules.',
      'Built Redis-backed rate limiting, structured error envelopes with unique request IDs, and automated audit logging on mutating routes.',
      'Authored 84 automated tests covering end-to-end service workflows across 4 containerized services with Docker Compose.',
    ],
    ragBullets: [
      'Architected a Python RAG engine using LangChain and LangGraph supporting 5 retrieval tiers: direct-context, lexical, mixed, vector search, and enterprise strategy.',
      'Engineered vectorless retrieval optimization specifically for small document collections, reducing unnecessary compute.',
      'Implemented clean provider abstraction across OpenAI, Gemini, and DeepSeek, with deterministic offline embeddings for reproducible testing.',
      'Provided pluggable vector-store interface supporting PostgreSQL/pgvector paths, request metadata extraction, and token usage tracking.',
    ],
    architectureNote:
      'Designed cloud deployment architecture: React frontend on Vercel, Node.js Fastify API on Google Cloud Run, Firebase Authentication & Firestore, Redis cache, and Python RAG engine as an independent microservice.',
  },
  {
    id: 'twitter-clone',
    title: 'Twitter Clone',
    tagline: 'Full-Stack Social Platform with Spring Boot and JWT Security',
    description:
      'A complete social application featuring user relationships, timeline feeds, interactive posts, and robust authentication with role-based authorization.',
    githubUrl: 'https://github.com/nish1894/twitter-clone-react-spring',
    technologies: ['Spring Boot', 'Java', 'React', 'PostgreSQL', 'Spring Security', 'JWT'],
    features: [
      'User registration and secure session handling using JWT and Spring Security filters',
      'Interactive tweet creation, chronological feed timelines, and engagement mechanisms',
      'Bidirectional following and follower relationship graph with database indexes',
      'Role-based authorization and modular RESTful API architecture',
    ],
  },
  {
    id: 'scholars-orbit',
    title: 'EdTech Platform',
    tagline: 'Academic Administration & Real-Time Scheduling System',
    description:
      'An academic management platform supporting student and teacher workflows with OTP verification and dynamic timetable allocation.',
    githubUrl: 'https://github.com/nish1894/scholars-orbit',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Firebase'],
    features: [
      'Phone OTP authentication powered by Firebase integration',
      'Dedicated role-based dashboards for students, instructors, and administrators',
      'Dynamic timetable generation and real-time class allocation scheduling updates',
      'Documented REST API endpoints for academic records and profile management',
    ],
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Primary Professional Technologies',
    isPrimary: true,
    skills: [
      'Node.js',
      'JavaScript',
      'MongoDB',
      'Redis',
      'Apache Kafka',
      'MQTT',
      'Docker',
      'Microservices',
      'Caching Architecture',
      'Performance Optimization',
      'Production Debugging',
    ],
  },
  {
    category: 'Programming Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C', 'C++'],
  },
  {
    category: 'Backend Frameworks & APIs',
    skills: ['Node.js', 'Express.js', 'Fastify', 'Spring Boot', 'Django', 'REST APIs', 'Hibernate/JPA'],
  },
  {
    category: 'Frontend Development',
    skills: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'React Router', 'TanStack Query', 'Thymeleaf'],
  },
  {
    category: 'Data Stores & Event Messaging',
    skills: ['MongoDB', 'Redis', 'PostgreSQL', 'MySQL', 'Firestore', 'Apache Kafka', 'MQTT', 'WebSockets', 'Django Channels'],
  },
  {
    category: 'Cloud, DevOps & Testing',
    skills: ['Google Cloud Run', 'Vercel', 'Firebase Auth', 'Docker', 'Docker Compose', 'Vitest', 'Git & GitHub', 'Linux/Unix', 'Postman', 'CI/CD'],
  },
  {
    category: 'AI Application Engineering',
    skills: ['LangChain', 'LangGraph', 'RAG Architectures', 'Lexical Retrieval', 'Vector Search', 'Provider Abstraction', 'Prompt Optimization', 'RLHF Evaluation', 'TruthfulQA'],
  },
];

export const EDUCATION_DATA: EducationData = {
  institution: 'Indian Institute of Technology Bombay',
  degrees: [
    'B.Tech. in Energy Engineering',
    'M.Tech. in Energy Systems Engineering',
  ],
  cgpa: '7.03 / 10.0',
  highlights: [
    'Comprehensive foundation in engineering mathematics, computational thermodynamics, algorithms, and complex systems analysis',
    'Rigorous quantitative problem solving and analytical modeling methodology',
  ],
};
