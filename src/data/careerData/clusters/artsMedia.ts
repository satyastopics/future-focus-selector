
import { Career } from '../../types';

export const artsMediaCareers: Career[] = [
  {
    id: "graphic-designer",
    title: "Graphic Designer",
    description: "Create visual concepts to communicate ideas that inspire, inform, or captivate consumers through physical and digital media.",
    clusterId: "artsMedia",
    isHighIncome: false,
    isFutureReady: true,
    averageSalary: "$45,000 - $85,000",
    skills: ["Visual design", "Typography", "Color theory", "Adobe Creative Suite", "Layout design"],
    roadmap: [
      "Build foundation in visual arts and design principles",
      "Learn industry-standard design software",
      "Develop a portfolio showcasing your design work",
      "Gain experience through internships or freelance work",
      "Specialize in a design niche like branding or UI/UX"
    ]
  },
  {
    id: "film-director",
    title: "Film Director",
    description: "Oversee creative aspects of film production, including guiding actors, determining camera angles, and implementing the creative vision.",
    clusterId: "artsMedia",
    isHighIncome: true,
    isFutureReady: false,
    averageSalary: "$60,000 - $150,000+",
    skills: ["Visual storytelling", "Script analysis", "Actor direction", "Production management", "Creative vision"],
    roadmap: [
      "Study film theory and production techniques",
      "Create short films to develop your craft",
      "Network with other filmmakers and industry professionals",
      "Work in various production roles to understand filmmaking",
      "Develop a distinctive directorial style and vision"
    ]
  },
  {
    id: "animation-artist",
    title: "Animation Artist",
    description: "Create animated sequences for film, television, video games, and digital media using various techniques and software.",
    clusterId: "artsMedia",
    isHighIncome: true,
    isFutureReady: true,
    averageSalary: "$60,000 - $110,000",
    skills: ["Drawing", "3D modeling", "Animation principles", "Character design", "Motion dynamics"],
    roadmap: [
      "Develop strong foundational art skills",
      "Learn industry-standard animation software",
      "Create an animation demo reel showcasing your skills",
      "Specialize in a type of animation (3D, 2D, character, etc.)",
      "Gain professional experience through studios or freelance work"
    ]
  },
  {
    id: "virtual-production-designer",
    title: "Virtual Production Designer",
    description: "Create digital environments and visual effects for films, games, and virtual experiences using real-time rendering technology.",
    clusterId: "artsMedia",
    isHighIncome: true,
    isFutureReady: true,
    emergingField: true,
    averageSalary: "$75,000 - $130,000",
    skills: ["3D modeling", "Real-time engines", "Virtual cinematography", "Digital lighting", "Photogrammetry"],
    roadmap: [
      "Build foundation in traditional art and design",
      "Learn real-time rendering engines like Unreal Engine",
      "Develop skills in virtual production workflows",
      "Create portfolio showcasing virtual environments",
      "Stay current with rapidly evolving virtual production technology"
    ],
    aiRelated: true
  },
  {
    id: "ar-vr-content-creator",
    title: "AR/VR Content Creator",
    description: "Design and produce immersive experiences for augmented and virtual reality platforms across entertainment, education, and business applications.",
    clusterId: "artsMedia",
    isHighIncome: true,
    isFutureReady: true,
    emergingField: true,
    averageSalary: "$70,000 - $120,000",
    skills: ["3D modeling", "Interactive design", "Spatial thinking", "Programming basics", "User experience design"],
    roadmap: [
      "Build foundation in digital art and design",
      "Learn AR/VR development platforms",
      "Understand principles of immersive storytelling",
      "Create portfolio of AR/VR experiences",
      "Stay current with emerging immersive technologies"
    ],
    aiRelated: true
  },
  {
    id: "music-producer",
    title: "Music Producer",
    description: "Oversee and manage the recording, production and arrangement of music for artists, bands, advertisements, film, and other media.",
    clusterId: "artsMedia",
    isHighIncome: true,
    isFutureReady: false,
    averageSalary: "$50,000 - $100,000+",
    skills: ["Music theory", "Audio engineering", "Digital audio workstations", "Arrangement", "Industry knowledge"],
    roadmap: [
      "Develop strong musical foundation and ear training",
      "Learn audio recording and production techniques",
      "Master industry-standard music production software",
      "Build portfolio by producing for various artists",
      "Network within the music industry"
    ]
  },
  {
    id: "game-artist",
    title: "Game Artist",
    description: "Create visual elements for video games including characters, environments, objects, and animations that enhance gameplay.",
    clusterId: "artsMedia",
    isHighIncome: true,
    isFutureReady: true,
    averageSalary: "$60,000 - $100,000",
    skills: ["2D/3D art", "Texture creation", "Character design", "Environment design", "Game engine knowledge"],
    roadmap: [
      "Build strong foundation in traditional and digital art",
      "Learn industry-standard 2D and 3D software",
      "Understand game art pipelines and constraints",
      "Create game-ready assets for your portfolio",
      "Specialize in a specific area like character or environment art"
    ]
  }
];
