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
    email: 'ah1188x@gmail.com',
    bio: [
      "I'm a software developer based in Abu Dhabi, UAE, passionate about building digital products that solve real-world problems.",
      "I combine software development skills with AI-assisted tools like Claude Code and Cursor IDE, allowing me to deliver robust applications with exceptional speed and quality.",
      "When I'm not coding, I'm exploring new technologies, contributing to open source, or refining my craft to build better user experiences."
    ],
    socials: {
      github: 'https://github.com/hamz1188',
      linkedin: 'https://www.linkedin.com/in/ahmed-ali-406489394',
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
      title: 'Portfolio Website',
      description: 'Modern personal portfolio built with Next.js, TypeScript, and Tailwind CSS. Features a unique industrial design and markdown blog.',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      color: 'from-blue-500 to-cyan-500',
      demoLink: 'https://my-portfolio-mocha-theta-79.vercel.app/',
      codeLink: 'https://github.com/hamz1188/my-portfolio',
    },
  ] as Project[],
};

