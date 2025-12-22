export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  color: string;
  icon?: string;
  highlights?: string[];
  demoLink?: string;
  demoLabel?: string;
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
      title: 'Desert Survivors',
      description: 'A Vampire Survivors-style roguelike survival game for iOS. Fight waves of mythical Arabian creatures in an endless desert with auto-attacking weapons, leveling, and meta-progression.',
      tags: ['Swift', 'SpriteKit', 'iOS', 'Game Dev'],
      color: 'from-amber-400 to-orange-600',
      highlights: [
        '8 playable characters with unique abilities',
        '12 weapons with awakened evolution forms',
        'Procedural 4000x4000 desert world',
        'AI-generated pixel art via PixelLab',
        'Built entirely with Claude Code',
      ],
      demoLink: 'https://desert-survivors.vercel.app/',
      demoLabel: 'More',
      codeLink: 'https://github.com/hamz1188/DesertSurvivors',
    },
    {
      title: 'Fitness Tracker App',
      description: 'A premium fitness tracking mobile app built with React Native, Expo, and TypeScript. Features smooth 60fps animations, haptic feedback, and a sleek dark theme with Electric Blue accents.',
      tags: ['React Native', 'Expo', 'TypeScript', 'Reanimated 3'],
      color: 'from-cyan-400 to-blue-600',
      highlights: [
        'Animated Circular Progress Ring with spring physics',
        'Custom Bottom Tab Navigator with blur effects',
        'Workout data management with AsyncStorage',
        'Built with Claude Code & Cursor IDE',
      ],
      demoLink: 'https://hamz-fitness-tracker-app.vercel.app/',
      codeLink: 'https://github.com/hamz1188/hamz-fitness-tracker-app',
    },
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

