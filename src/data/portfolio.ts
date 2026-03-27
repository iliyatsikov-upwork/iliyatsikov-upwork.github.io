export type ExperienceItem = {
  role: string;
  company: string;
  dates: string;
  achievements: string[];
};

export type ProjectItem = {
  title: string;
  description: string;
  link: string;
  platforms: ("Android" | "iOS")[];
  image?: string;
  images?: string[];
};

export type SkillGroup = {
  group: string;
  skills: string[];
};

export const navigationItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const experiences: ExperienceItem[] = [
  {
    role: "Senior Unity Developer",
    company: "Red Engine Team",
    dates: "Nov 2021 - Oct 2025",
    achievements: [
      "Senior Unity Developer for the team behind Flight Club Darts and Electric Shuffle.",
      "Built and maintained interactive gaming systems for venue-based entertainment products.",
    ],
  },
  {
    role: "Games Developer",
    company: "Red Engine Team",
    dates: "Oct 2018 - Oct 2020",
    achievements: [
      "Added, updated, and maintained the Flight Club Darts and Electric Shuffle gaming platforms.",
      "Contributed to multiple additional projects as part of the core game development team.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Micropix Limited",
    dates: "Jan 2020 - Dec 2021",
    achievements: [
      "Added features to and maintained a WinForms application that manipulates microscopes.",
      "Implemented and supported image capture and image manipulation workflows in the application.",
    ],
  },
  {
    role: "Software Engineer",
    company: "VU.CITY",
    dates: "Nov 2020 - Nov 2021",
    achievements: [
      "Worked as a Software Engineer in London on the VU.CITY platform.",
      "Contributed to production engineering tasks across active product development.",
    ],
  },
  {
    role: "Unity Developer",
    company: "Wix Games Ltd.",
    dates: "Oct 2020 - Nov 2020",
    achievements: [
      "Developed and set up Unity assets for the mini-game Ducklife Battle.",
      "Delivered gameplay-facing Unity implementation during a short project window.",
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    title: "AstroQuest",
    description:
      "A mobile space-themed game focused on exploration and progression.",
    link: "https://play.google.com/store/apps/details?id=kr.co.devbox.AstroQuest",
    platforms: ["Android"],
    images: [
      "/images/astro%20quest/1.webp",
      "/images/astro%20quest/2.webp",
      "/images/astro%20quest/3.webp",
      "/images/astro%20quest/4.webp",
      "/images/astro%20quest/5.webp",
      "/images/astro%20quest/6.webp",
    ],
  },
  {
    title: "Konsui Fighter",
    description:
      "A stylized fighting game with unique mechanics and character design.",
    link: "https://play.google.com/store/apps/details?id=com.CirceanStudios.KonsuiFighter",
    platforms: ["Android"],
    images: [
      "/images/konshu/1.webp",
      "/images/konshu/2.webp",
      "/images/konshu/3.webp",
      "/images/konshu/4.webp",
      "/images/konshu/5.webp",
      "/images/konshu/6.webp",
    ],
  },
  {
    title: "NOISZ STARLIVHT",
    description:
      "A hybrid rhythm game, bullet hell shmup, and visual novel with stylized mobile-first gameplay.",
    link: "https://play.google.com/store/apps/details?id=com.AnarchEntertainment.NOISZSTARLIVHT&hl=en_GB",
    platforms: ["Android"],
    images: [
      "/images/noisz/1.webp",
      "/images/noisz/2.webp",
      "/images/noisz/3.webp",
      "/images/noisz/4.webp",
      "/images/noisz/5.webp",
      "/images/noisz/6.webp",
      "/images/noisz/7.webp",
      "/images/noisz/8.webp",
      "/images/noisz/9.webp",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  { group: "Game Development", skills: ["Unity", "C#"] },
  { group: "Software", skills: ["WinForms", "Project Management"] },
  { group: "Other", skills: ["Animation", "Systems Design"] },
];
