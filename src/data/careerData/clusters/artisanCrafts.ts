
import { Career } from '../../types';

export const artisanCraftsCareers: Career[] = [
  {
    id: "master-craftsman",
    title: "Master Craftsman",
    description: "Create high-quality handmade products like furniture, pottery, or jewelry using traditional techniques and materials.",
    clusterId: "artisanCrafts",
    isHighIncome: false,
    isFutureReady: false,
    averageSalary: "$40,000 - $80,000",
    skills: ["Manual dexterity", "Design sense", "Material knowledge", "Attention to detail", "Business basics"],
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
    description: "Blend traditional craftsmanship with digital technology to create unique products using 3D printing, CNC, or other digital fabrication tools.",
    clusterId: "artisanCrafts",
    isHighIncome: true,
    isFutureReady: true,
    emergingField: true,
    averageSalary: "$60,000 - $100,000",
    skills: ["3D modeling", "Digital fabrication", "Design fundamentals", "Material knowledge", "Innovation"],
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
    description: "Repair and preserve historical or valuable artifacts, furniture, or architecture using specialized techniques and materials.",
    clusterId: "artisanCrafts",
    isHighIncome: false,
    isFutureReady: false,
    averageSalary: "$45,000 - $85,000",
    skills: ["Historical knowledge", "Material science", "Hand skills", "Research", "Patience"],
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
    description: "Teach traditional and modern craft techniques through classes, workshops, online courses, or educational institutions.",
    clusterId: "artisanCrafts",
    isHighIncome: false,
    isFutureReady: true,
    averageSalary: "$40,000 - $75,000",
    skills: ["Teaching", "Craft expertise", "Curriculum development", "Communication", "Demonstration"],
    roadmap: [
      "Master specific craft disciplines and techniques",
      "Develop teaching methods and approaches",
      "Create educational content and curricula",
      "Build teaching experience through workshops or classes",
      "Establish presence in educational settings or online platforms"
    ]
  }
];
