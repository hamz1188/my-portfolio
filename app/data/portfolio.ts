export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  color: string;
  icon?: string;
  highlights?: string[];
  demoLink?: string;
  codeLink?: string;
  techStack?: string[];
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Mobile' | 'Tools' | 'Backend' | 'Other';
  icon?: any; // For flexibility if we add icons later
}

export const portfolioData = {
  personalInfo: {
    name: 'Ahmed Ali',
    role: 'Software Developer',
    roleSubtitle: 'Building Cross-Platform Apps with AI',
    location: 'Abu Dhabi, UAE',
    email: 'ahmed@example.com',
    bio: [
      "I'm a software developer based in Abu Dhabi, UAE, passionate about building digital products that solve real-world problems.",
      "My journey involves mastering both traditional software engineering principles and the latest AI-assisted workflows, allowing me to deliver robust applications with exceptional speed and quality.",
      "When I'm not coding, I'm exploring new technologies, contributing to open source, or refining my craft to build better user experiences."
    ],
    socials: {
      github: 'https://github.com/yourusername',
      linkedin: 'https://linkedin.com/in/yourusername',
      twitter: 'https://twitter.com/yourusername',
    }
  },
  skills: [
    { name: 'React', category: 'Frontend' },
    { name: 'Next.js', category: 'Frontend' },
    { name: 'TypeScript', category: 'Frontend' },
    { name: 'Tailwind CSS', category: 'Frontend' },
    { name: 'React Native', category: 'Mobile' },
    { name: 'Flutter', category: 'Mobile' },
    { name: 'Swift', category: 'Mobile' },
    { name: 'Cursor IDE', category: 'Tools' },
    { name: 'Git', category: 'Tools' },
  ] as Skill[],
  projects: [
    {
      title: 'FitTrack Pro',
      description: 'Cross-platform mobile application for fitness tracking and workout planning.',
      tags: ['React Native', 'Firebase', 'Redux'],
      color: 'from-blue-500 to-cyan-500',
      demoLink: '#',
      codeLink: '#',
    },
    {
      title: 'TaskFlow AI',
      description: 'Smart task management web app using AI to prioritize your daily workflow.',
      tags: ['Next.js', 'OpenAI', 'Tailwind'],
      color: 'from-violet-500 to-purple-500',
      demoLink: '#',
      codeLink: '#',
    },
    {
      title: 'ShopHub',
      description: 'Modern e-commerce dashboard with real-time inventory and analytics.',
      tags: ['Next.js', 'PostgreSQL', 'Stripe'],
      color: 'from-orange-500 to-pink-500',
      demoLink: '#',
      codeLink: '#',
    },
  ] as Project[],
};

