
import { Career } from '../../types';

export const miningExtractionCareers: Career[] = [
  {
    id: "mining-engineer",
    title: "Mining Engineer",
    description: "Design and supervise the construction of mines and mining equipment to safely and efficiently extract minerals and resources.",
    clusterId: "miningExtraction",
    isHighIncome: true,
    isFutureReady: true,
    averageSalary: "$80,000 - $140,000",
    skills: ["Engineering principles", "Mine design", "Safety management", "Project planning", "Problem-solving"],
    roadmap: [
      "Complete degree in mining engineering",
      "Develop understanding of geological formations",
      "Learn mining methods and technologies",
      "Obtain professional engineering license",
      "Gain experience through internships or entry-level positions"
    ]
  },
  {
    id: "geological-technician",
    title: "Geological Technician",
    description: "Assist geologists in collecting and analyzing rock samples, conducting field surveys, and preparing maps and reports.",
    clusterId: "miningExtraction",
    isHighIncome: false,
    isFutureReady: true,
    averageSalary: "$50,000 - $75,000",
    skills: ["Sample collection", "Data recording", "Equipment operation", "Basic geology", "Attention to detail"],
    roadmap: [
      "Study geology, earth sciences, or related field",
      "Learn geological mapping and surveying techniques",
      "Develop sample collection and testing skills",
      "Gain field experience through entry-level positions",
      "Build expertise in specific geological settings"
    ]
  },
  {
    id: "extraction-technology-specialist",
    title: "Extraction Technology Specialist",
    description: "Develop and implement advanced technologies to improve efficiency, safety, and environmental impact of resource extraction.",
    clusterId: "miningExtraction",
    isHighIncome: true,
    isFutureReady: true,
    emergingField: true,
    averageSalary: "$85,000 - $130,000",
    skills: ["Technology integration", "Process improvement", "Environmental management", "Data analysis", "Problem-solving"],
    roadmap: [
      "Build technical foundation in engineering or related field",
      "Develop expertise in specific extraction technologies",
      "Learn about environmental and safety regulations",
      "Gain experience in extraction operations",
      "Stay current with emerging extraction technologies"
    ],
    aiRelated: true
  },
  {
    id: "reclamation-specialist",
    title: "Reclamation Specialist",
    description: "Plan and implement strategies to restore land affected by mining or drilling operations to beneficial use.",
    clusterId: "miningExtraction",
    isHighIncome: true,
    isFutureReady: true,
    averageSalary: "$65,000 - $95,000",
    skills: ["Environmental science", "Soil management", "Revegetation", "Project management", "Regulatory knowledge"],
    roadmap: [
      "Study environmental science or related field",
      "Learn soil science and revegetation techniques",
      "Develop understanding of reclamation regulations",
      "Gain experience in environmental assessment",
      "Build project management and implementation skills"
    ]
  }
];
