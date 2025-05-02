
import { Career } from '../../types';

export const constructionCareers: Career[] = [
  {
    id: "construction-manager",
    title: "Construction Manager",
    description: "Plan, coordinate, budget, and supervise construction projects from development to completion, ensuring safety and quality.",
    clusterId: "construction",
    isHighIncome: true,
    isFutureReady: true,
    averageSalary: "$75,000 - $125,000",
    skills: ["Project management", "Budgeting", "Technical knowledge", "Leadership", "Problem-solving"],
    roadmap: [
      "Build foundation through construction experience or education",
      "Develop knowledge of construction methods and materials",
      "Learn project management and scheduling techniques",
      "Gain experience supervising construction crews",
      "Consider certification like Certified Construction Manager (CCM)"
    ]
  },
  {
    id: "building-information-modeling-specialist",
    title: "Building Information Modeling Specialist",
    description: "Create and manage digital 3D models of buildings to optimize design, construction, and operation processes.",
    clusterId: "construction",
    isHighIncome: true,
    isFutureReady: true,
    emergingField: true,
    averageSalary: "$70,000 - $100,000",
    skills: ["3D modeling", "BIM software", "Construction knowledge", "Collaboration", "Technical problem-solving"],
    roadmap: [
      "Study architecture, engineering, or construction management",
      "Master BIM software platforms like Revit or ArchiCAD",
      "Develop understanding of construction processes",
      "Learn BIM standards and collaboration protocols",
      "Stay current with evolving BIM technologies"
    ]
  },
  {
    id: "sustainable-construction-specialist",
    title: "Sustainable Construction Specialist",
    description: "Apply eco-friendly principles to building projects, focusing on energy efficiency, renewable materials, and environmental impact.",
    clusterId: "construction",
    isHighIncome: true,
    isFutureReady: true,
    emergingField: true,
    averageSalary: "$70,000 - $110,000",
    skills: ["Green building standards", "Energy modeling", "Materials knowledge", "Regulatory compliance", "Project assessment"],
    roadmap: [
      "Build foundation in construction, engineering, or architecture",
      "Learn sustainable building principles and certification systems",
      "Develop knowledge of green materials and technologies",
      "Obtain LEED or other sustainability credentials",
      "Stay current with evolving green building standards"
    ]
  },
  {
    id: "construction-technology-manager",
    title: "Construction Technology Manager",
    description: "Implement and manage advanced technologies for construction projects, including drones, AR/VR, IoT, and automation systems.",
    clusterId: "construction",
    isHighIncome: true,
    isFutureReady: true,
    emergingField: true,
    averageSalary: "$85,000 - $130,000",
    skills: ["Technology integration", "Digital tools", "Construction knowledge", "Training", "Problem-solving"],
    roadmap: [
      "Develop strong foundation in construction processes",
      "Build expertise in construction technology platforms",
      "Learn implementation and change management strategies",
      "Gain experience with various construction technologies",
      "Stay current with emerging construction tech innovations"
    ],
    aiRelated: true
  }
];
