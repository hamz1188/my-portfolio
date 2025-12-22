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
  image?: string;
  images?: string[];
  type?: 'mobile' | 'web';
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
      description: 'Roguelike survival game for iOS. Survive waves of Arabian mythical creatures with auto-attacks, level-ups, and 8 playable characters. Built entirely with AI assistance.',
      tags: ['Swift', 'SpriteKit', 'iOS', 'Game Dev'],
      color: 'from-amber-400 to-orange-600',
      type: 'mobile',
      image: '/images/projects/desert-survivors/desert-survivors-2.png',
      images: [
        '/images/projects/desert-survivors/desert-survivors-1.png',
        '/images/projects/desert-survivors/desert-survivors-2.png',
        '/images/projects/desert-survivors/desert-survivors-3.png',
        '/images/projects/desert-survivors/desert-survivors-4.png',
        '/images/projects/desert-survivors/desert-survivors-5.png',
        '/images/projects/desert-survivors/desert-survivors-6.png',
      ],
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
      title: 'Fitness Tracker',
      description: 'Mobile fitness app with buttery-smooth animations and haptic feedback. Track workouts, visualize progress, look good doing it.',
      tags: ['React Native', 'Expo', 'TypeScript', 'Reanimated 3'],
      color: 'from-cyan-400 to-blue-600',
      type: 'mobile',
      image: '/images/projects/fitness-tracker/fitness-tracker-6.png',
      images: [
        '/images/projects/fitness-tracker/fitness-tracker-1.png',
        '/images/projects/fitness-tracker/fitness-tracker-2.png',
        '/images/projects/fitness-tracker/fitness-tracker-3.png',
        '/images/projects/fitness-tracker/fitness-tracker-4.png',
        '/images/projects/fitness-tracker/fitness-tracker-5.png',
        '/images/projects/fitness-tracker/fitness-tracker-6.png',
        '/images/projects/fitness-tracker/fitness-tracker-7.png',
        '/images/projects/fitness-tracker/fitness-tracker-8.png',
      ],
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
      title: 'This Website',
      description: "You're looking at it. Next.js, TypeScript, GSAP animations, and a lot of attention to detail.",
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'GSAP'],
      color: 'from-blue-500 to-cyan-500',
      type: 'web',
      image: '/images/projects/portfolio/portfolio.png',
      demoLink: 'https://hameli.io',
      codeLink: 'https://github.com/hamz1188/my-portfolio',
    },
  ] as Project[],
};

