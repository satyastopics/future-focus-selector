
import { Career } from '../../types';

export const artsMediaCareers: Career[] = [
  {
    id: "graphic-designer",
    title: "Graphic Designer",
    description: "Create visual concepts to communicate ideas through images, layouts, and typography for websites, advertisements, product packaging, and more.",
    clusterId: "artsMedia",
    isHighIncome: false,
    isFutureReady: true,
    averageSalary: "$55,000 - $85,000",
    skills: ["Visual design", "Typography", "Color theory", "Adobe Creative Suite", "Brand identity"],
    roadmap: [
      "Develop foundational art and design skills",
      "Learn industry-standard software (Adobe Photoshop, Illustrator, InDesign)",
      "Build a diverse portfolio showing range of styles and projects",
      "Consider degree or certification in graphic design",
      "Specialize in areas like web design, packaging, or branding"
    ]
  },
  {
    id: "video-producer",
    title: "Video Producer",
    description: "Oversee all aspects of video production from concept development to final editing for films, TV shows, advertisements, or online content.",
    clusterId: "artsMedia",
    isHighIncome: true,
    isFutureReady: true,
    averageSalary: "$65,000 - $120,000",
    skills: ["Visual storytelling", "Project management", "Budgeting", "Team leadership", "Video editing"],
    roadmap: [
      "Study film production or related field",
      "Master video production software and equipment",
      "Gain experience through internships or assistant roles",
      "Build portfolio of diverse video projects",
      "Network with others in the industry and build client relationships"
    ]
  },
  {
    id: "photographer",
    title: "Photographer",
    description: "Capture and create compelling images for artistic expression, documentation, commercial purposes, or journalistic coverage.",
    clusterId: "artsMedia",
    isHighIncome: false,
    isFutureReady: false,
    averageSalary: "$40,000 - $80,000",
    skills: ["Composition", "Lighting techniques", "Camera operation", "Photo editing", "Visual storytelling"],
    roadmap: [
      "Master photography fundamentals (exposure, composition, lighting)",
      "Develop proficiency with professional camera equipment",
      "Learn photo editing software like Adobe Lightroom and Photoshop",
      "Build specialized portfolio in chosen photography niche",
      "Create professional website and marketing strategy"
    ]
  },
  {
    id: "game-artist",
    title: "Video Game Artist",
    description: "Create visual elements for video games including characters, environments, animations, and user interface components.",
    clusterId: "artsMedia",
    isHighIncome: true,
    isFutureReady: true,
    averageSalary: "$70,000 - $120,000",
    skills: ["3D modeling", "Texturing", "Animation", "Visual design", "Game engines"],
    roadmap: [
      "Develop strong traditional art fundamentals",
      "Learn industry software like Maya, Blender, or ZBrush",
      "Build technical understanding of game development pipeline",
      "Create game art portfolio with diverse assets",
      "Specialize in concept art, character modeling, or environment design"
    ],
    aiRelated: true
  },
  {
    id: "art-director",
    title: "Art Director",
    description: "Lead creative teams in developing the overall visual look and feel for magazines, newspapers, product packaging, films, or television shows.",
    clusterId: "artsMedia",
    isHighIncome: true,
    isFutureReady: true,
    averageSalary: "$85,000 - $150,000",
    skills: ["Leadership", "Visual communication", "Project management", "Creative direction", "Brand development"],
    roadmap: [
      "Build strong foundation as designer or artist",
      "Develop leadership and project management skills",
      "Gain experience working with cross-functional teams",
      "Create compelling portfolio showing creative vision",
      "Network with industry professionals"
    ]
  }
];
