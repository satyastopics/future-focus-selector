
import { Career } from '../../types';

export const artisanCraftsCareers: Career[] = [
  {
    id: "master-craftsman",
    title: "Master Craftsman",
    description: "You make beautiful, useful things by hand. You might build furniture, create pottery, weave textiles, or craft jewelry using traditional methods. You've spent years perfecting your skills. You select high-quality materials and focus on every detail to create items that are both beautiful and long-lasting. Your handmade creations are unique alternatives to mass-produced products.",
    clusterId: "artisanCrafts",
    isHighIncome: false,
    isFutureReady: false,
    averageSalary: "$40,000 - $80,000",
    skills: ["Working skillfully with hands", "Using traditional tools", "Selecting quality materials", "Creating beautiful designs", "Attention to small details"],
    roadmap: [
      "Develop foundational skills in chosen craft",
      "Learn from established craftspeople through apprenticeship",
      "Perfect techniques and develop personal style",
      "Build business skills for marketing and sales",
      "Establish workshop and distribution channels"
    ]
  },
  {
    id: "digital-artisan",
    title: "Digital Artisan",
    description: "You blend traditional crafts with modern technology. You might use 3D printers to create jewelry, computer-controlled cutting machines to make furniture, or digital design tools to plan traditional crafts. You understand both old craft techniques and new digital tools. Your work brings traditional crafts into the modern age, creating unique items that combine hand skills with technology.",
    clusterId: "artisanCrafts",
    isHighIncome: true,
    isFutureReady: true,
    emergingField: true,
    averageSalary: "$60,000 - $100,000",
    skills: ["3D modeling", "Using digital fabrication tools", "Traditional craft knowledge", "Computer design skills", "Creative problem-solving"],
    roadmap: [
      "Build foundation in both traditional craft and digital design",
      "Learn digital fabrication tools and technologies",
      "Develop expertise in specific materials or techniques",
      "Create portfolio showcasing digital craftsmanship",
      "Stay current with evolving digital fabrication methods"
    ]
  },
  {
    id: "restoration-specialist",
    title: "Restoration Specialist",
    description: "You repair and bring back to life old or damaged valuable items. You might fix antique furniture, restore old paintings, or rebuild historic architecture. You research historical techniques and materials to make your repairs authentic. You need patience and careful hands to fix delicate objects without causing more damage. Your work preserves important items for future generations to enjoy.",
    clusterId: "artisanCrafts",
    isHighIncome: false,
    isFutureReady: false,
    averageSalary: "$45,000 - $85,000",
    skills: ["Careful repair techniques", "Knowledge of historical methods", "Patience for detailed work", "Material science understanding", "Researching original items"],
    roadmap: [
      "Develop foundation in relevant craft techniques",
      "Study historical methods and materials",
      "Learn conservation principles and ethics",
      "Build restoration portfolio through projects",
      "Network with museums, collectors, and preservation organizations"
    ]
  },
  {
    id: "craft-educator",
    title: "Craft Educator",
    description: "You teach others how to make things by hand. You might run workshops in your community, teach classes at schools, create online video tutorials, or write craft books. You have both excellent craft skills and the ability to explain techniques clearly. You know how to break down complex processes into simple steps. Your teaching helps keep traditional crafts alive and gives others the joy of creating.",
    clusterId: "artisanCrafts",
    isHighIncome: false,
    isFutureReady: true,
    averageSalary: "$40,000 - $75,000",
    skills: ["Teaching craft skills clearly", "Planning lessons for different levels", "Demonstrating techniques", "Encouraging students", "Creating instructional materials"],
    roadmap: [
      "Master specific craft disciplines and techniques",
      "Develop teaching methods and approaches",
      "Create educational content and curricula",
      "Build teaching experience through workshops or classes",
      "Establish presence in educational settings or online platforms"
    ]
  }
];
