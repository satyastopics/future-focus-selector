
import { Career } from '../../types';

export const manufacturingCareers: Career[] = [
  {
    id: "industrial-engineer",
    title: "Industrial Engineer",
    description: "Optimize complex manufacturing processes and systems to eliminate waste, reduce costs, and increase efficiency.",
    clusterId: "manufacturing",
    isHighIncome: true,
    isFutureReady: true,
    averageSalary: "$75,000 - $110,000",
    skills: ["Process optimization", "Data analysis", "Lean manufacturing", "Problem-solving", "Project management"],
    roadmap: [
      "Earn degree in industrial engineering",
      "Develop knowledge of manufacturing processes",
      "Learn lean manufacturing principles and Six Sigma",
      "Gain hands-on experience through internships",
      "Consider professional engineering licensure"
    ]
  },
  {
    id: "robotics-engineer",
    title: "Robotics Engineer",
    description: "Design, build, and program robots for manufacturing and production environments to automate complex tasks.",
    clusterId: "manufacturing",
    isHighIncome: true,
    isFutureReady: true,
    averageSalary: "$85,000 - $130,000",
    skills: ["Robotics programming", "Mechanical design", "Electronics", "Problem-solving", "Systems integration"],
    roadmap: [
      "Study robotics, mechanical or electrical engineering",
      "Learn robotics programming languages and platforms",
      "Develop mechanical and electronic system knowledge",
      "Gain hands-on experience building robotic systems",
      "Stay current with emerging robotics technologies"
    ],
    aiRelated: true
  },
  {
    id: "manufacturing-operations-manager",
    title: "Manufacturing Operations Manager",
    description: "Oversee daily production activities, quality control, and staff management to meet production and efficiency goals.",
    clusterId: "manufacturing",
    isHighIncome: true,
    isFutureReady: true,
    averageSalary: "$80,000 - $140,000",
    skills: ["Leadership", "Process management", "Quality control", "Staff development", "Problem-solving"],
    roadmap: [
      "Build foundation in engineering, business, or related field",
      "Gain experience in manufacturing environment",
      "Develop leadership and management skills",
      "Learn continuous improvement methodologies",
      "Build expertise in specific manufacturing sector"
    ]
  },
  {
    id: "manufacturing-analytics-specialist",
    title: "Manufacturing Analytics Specialist",
    description: "Apply data analysis and predictive modeling to manufacturing data to optimize processes, predict equipment failures, and improve quality.",
    clusterId: "manufacturing",
    isHighIncome: true,
    isFutureReady: true,
    emergingField: true,
    averageSalary: "$80,000 - $120,000",
    skills: ["Data analysis", "Statistical modeling", "Programming", "Manufacturing knowledge", "Problem-solving"],
    roadmap: [
      "Build strong foundation in data science or analytics",
      "Develop understanding of manufacturing processes",
      "Learn relevant programming languages (Python, R)",
      "Gain experience with manufacturing data sets",
      "Stay current with industrial IoT technologies"
    ],
    aiRelated: true
  },
  {
    id: "additive-manufacturing-engineer",
    title: "Additive Manufacturing Engineer",
    description: "Specialize in 3D printing and other additive manufacturing technologies to design and produce complex parts and products.",
    clusterId: "manufacturing",
    isHighIncome: true,
    isFutureReady: true,
    emergingField: true,
    averageSalary: "$75,000 - $115,000",
    skills: ["3D modeling", "Materials science", "Design for additive manufacturing", "Quality assurance", "Problem-solving"],
    roadmap: [
      "Study mechanical engineering or manufacturing technology",
      "Learn 3D modeling software and slicing programs",
      "Develop knowledge of materials for additive manufacturing",
      "Gain hands-on experience with various 3D printing technologies",
      "Stay current with emerging additive manufacturing methods"
    ]
  }
];
