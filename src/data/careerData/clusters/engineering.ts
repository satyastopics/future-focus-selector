
import { Career } from '../../types';

export const engineeringCareers: Career[] = [
  // Traditional Engineering
  {
    id: "civil-engineer",
    title: "Civil Engineer",
    description: "Design and build big structures like bridges, roads, and buildings. You make sure they're safe and work well.",
    clusterId: "engineering",
    isHighIncome: true,
    isFutureReady: true,
    averageSalary: "$70,000 - $120,000",
    skills: ["Math", "Physics", "Problem-solving", "Attention to detail", "Computer-aided design"],
    roadmap: [
      "Build strong foundation in math and physics through online courses",
      "Complete an accredited civil engineering program",
      "Gain hands-on experience through internships",
      "Obtain professional engineering license",
      "Specialize in areas like structural, transportation, or environmental engineering"
    ]
  },
  {
    id: "aerospace-engineer",
    title: "Aerospace Engineer",
    description: "Design aircraft, spacecraft, satellites, and missiles. You'll create vehicles that fly within and beyond Earth's atmosphere.",
    clusterId: "engineering",
    isHighIncome: true,
    isFutureReady: true,
    averageSalary: "$80,000 - $130,000",
    skills: ["Fluid dynamics", "Thermodynamics", "CAD software", "Materials science", "Problem-solving"],
    roadmap: [
      "Develop strong foundation in physics and mathematics",
      "Complete degree in aerospace engineering or related field",
      "Build experience through internships or research projects",
      "Consider specialization in aeronautics or astronautics",
      "Pursue professional engineering licensure"
    ]
  },
  {
    id: "electrical-engineer",
    title: "Electrical Engineer",
    description: "Design, develop, and test electrical equipment and systems. You'll work with everything from tiny microchips to massive power generation systems.",
    clusterId: "engineering",
    isHighIncome: true,
    isFutureReady: true,
    averageSalary: "$75,000 - $125,000",
    skills: ["Circuit design", "Power systems", "Electronic devices", "Signal processing", "Programming"],
    roadmap: [
      "Build foundation in mathematics and physics",
      "Complete electrical engineering degree program",
      "Gain hands-on experience with electrical systems and tools",
      "Pursue internships or entry-level positions",
      "Consider professional engineering licensure"
    ]
  },
  {
    id: "mechatronics-engineer",
    title: "Mechatronics Engineer",
    description: "Combine mechanical engineering, electronics, and computer science to create smart systems and products like robots and automated machinery.",
    clusterId: "engineering",
    isHighIncome: true,
    isFutureReady: true,
    emergingField: true,
    averageSalary: "$80,000 - $120,000",
    skills: ["Mechanical design", "Electronics", "Programming", "System integration", "Problem-solving"],
    roadmap: [
      "Build foundation in mechanical engineering and electronics",
      "Learn programming and control systems",
      "Gain experience with robotics or automation projects",
      "Develop prototyping and testing skills",
      "Stay current with advances in robotics and smart systems"
    ],
    aiRelated: true
  },
  {
    id: "biomedical-engineer",
    title: "Biomedical Engineer",
    description: "Apply engineering principles to medicine and biology. You'll develop medical devices, equipment, and software that improve healthcare.",
    clusterId: "engineering",
    isHighIncome: true,
    isFutureReady: true,
    averageSalary: "$75,000 - $110,000",
    skills: ["Biology", "Engineering design", "Medical devices", "Problem-solving", "Technical communication"],
    roadmap: [
      "Build foundation in engineering and biological sciences",
      "Complete biomedical engineering degree program",
      "Develop understanding of medical needs and constraints",
      "Gain experience through research or internships",
      "Stay current with medical technology advances"
    ]
  }
];
