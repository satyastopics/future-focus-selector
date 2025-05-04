
import { Career } from '../../types';

export const artsMediaCareers: Career[] = [
  {
    id: "graphic-designer",
    title: "Graphic Designer",
    description: "You create pictures and designs that communicate messages. You might make logos for companies, layouts for websites, or pictures for advertisements. You use special computer programs to draw, choose colors, and arrange text. Your work helps brands look good and helps people understand information through images instead of just words.",
    clusterId: "artsMedia",
    isHighIncome: false,
    isFutureReady: true,
    averageSalary: "$45,000 - $85,000",
    skills: ["Drawing and designing on computers", "Picking colors that work well together", "Arranging text and pictures attractively", "Understanding what designs best fit a message", "Using design software like Photoshop"],
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
    description: "You are in charge of making movies or shows. You decide how scenes should look, help actors understand their roles, and work with camera operators to get the right shots. You take a story from words on paper to moving pictures that tell that story. Your vision guides the entire film team to create something that audiences will enjoy watching.",
    clusterId: "artsMedia",
    isHighIncome: true,
    isFutureReady: false,
    averageSalary: "$60,000 - $150,000+",
    skills: ["Telling stories with pictures", "Helping actors give their best performances", "Deciding where to place cameras", "Leading teams of creative people", "Understanding what makes scenes emotional"],
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
    description: "You make drawings or computer models that move and tell stories. You might work on cartoons, movies, video games, or apps. You create characters and make them walk, talk, and show emotions. You bring imaginary worlds and people to life through movement and art. Your work entertains and educates people through moving pictures.",
    clusterId: "artsMedia",
    isHighIncome: true,
    isFutureReady: true,
    averageSalary: "$60,000 - $110,000",
    skills: ["Drawing characters and scenes", "Making things move naturally", "Creating facial expressions that show feelings", "Using animation software", "Understanding how movement works"],
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
    description: "You create digital worlds for movies and shows. Instead of building physical sets, you make 3D environments on computers that actors can perform in front of. You design digital landscapes, buildings, and props that look real on camera. Your digital designs can create impossible worlds that would be too expensive or impossible to build in real life.",
    clusterId: "artsMedia",
    isHighIncome: true,
    isFutureReady: true,
    emergingField: true,
    averageSalary: "$75,000 - $130,000",
    skills: ["Building 3D models of places", "Making digital lighting look real", "Creating virtual cameras", "Blending real actors with digital backgrounds", "Using game engines for filmmaking"],
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
    description: "You make special experiences that people can enter using special headsets or their phones. In virtual reality (VR), you build entire digital worlds people can explore. In augmented reality (AR), you add digital things to the real world. You might create games, training programs, or educational experiences. Your work lets people experience things they couldn't otherwise.",
    clusterId: "artsMedia",
    isHighIncome: true,
    isFutureReady: true,
    emergingField: true,
    averageSalary: "$70,000 - $120,000",
    skills: ["Building 3D worlds people can explore", "Making digital objects that respond to people", "Designing experiences that don't make people dizzy", "Understanding how people move in virtual spaces", "Solving problems in new technology"],
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
    description: "You help create songs and music albums. You work with singers and musicians to record their sounds, then mix different parts together to make complete songs. You might suggest changes to make music sound better or help choose which songs go on an album. Your ears and creativity help turn musical ideas into finished songs that people will enjoy.",
    clusterId: "artsMedia",
    isHighIncome: true,
    isFutureReady: false,
    averageSalary: "$50,000 - $100,000+",
    skills: ["Recording instruments and voices clearly", "Mixing different sounds together", "Helping musicians perform their best", "Adding special sound effects", "Knowing what makes a song sound good"],
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
    description: "You create the art for video games. You might design characters, build 3D models, create textures, or draw backgrounds. Your drawings and models become the visual world that players explore and interact with. You make sure games are beautiful, consistent in style, and visually clear for players. Your art helps make games fun and immersive.",
    clusterId: "artsMedia",
    isHighIncome: true,
    isFutureReady: true,
    averageSalary: "$60,000 - $100,000",
    skills: ["Drawing game characters and worlds", "Creating 3D models", "Making textures for surfaces", "Designing art that works in games", "Creating animations for characters"],
    roadmap: [
      "Build strong foundation in traditional and digital art",
      "Learn industry-standard 2D and 3D software",
      "Understand game art pipelines and constraints",
      "Create game-ready assets for your portfolio",
      "Specialize in a specific area like character or environment art"
    ]
  }
];
