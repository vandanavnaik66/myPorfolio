export type SocialLink = {
  label: string;
  href: string;
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  role?: string;
  summary: string;
  description: string;
  stack: string[];
  highlights: string[];
  cardImage?: { src: string; alt: string };
  images: { src: string; alt: string }[];
  links: ProjectLink[];
  year?: string;
};

export type EducationItem = {
  school: string;
  degree: string;
  period: string;
  details?: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type Profile = {
  name: string;
  title: string;
  heroTitle?: string;
  location?: string;
  photo: { src: string; alt: string };
  greeting: string;
  summary: string[];
  heroSummary?: string[];
  skills: string[];
  skillGroups?: SkillGroup[];
  education: EducationItem[];
  interests?: string[];
  socials: SocialLink[];
};
