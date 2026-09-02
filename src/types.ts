export interface WorkExperience {
  company: string;
  role: string;
  location: string;
  dates: string;
  type: string;
  stack: string[];
  bullets: string[];
  isCurrent?: boolean;
}

export interface ProjectData {
  id: string;
  title: string;
  tagline: string;
  description: string;
  githubUrl: string;
  technologies: string[];
  isPrimary?: boolean;
  platformBullets?: string[];
  ragBullets?: string[];
  architectureNote?: string;
  features?: string[];
}

export interface SkillGroup {
  category: string;
  isPrimary?: boolean;
  skills: string[];
}

export interface EducationData {
  institution: string;
  degrees: string[];
  cgpa: string;
  highlights?: string[];
}
