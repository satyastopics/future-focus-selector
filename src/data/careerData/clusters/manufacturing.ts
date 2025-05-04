
import { Career } from '../../types';

export const manufacturingCareers: Career[] = [
  {
    id: "industrial-engineer",
    title: "Industrial Engineer",
    description: "You find ways to make factories work better. You study how products are made and think of ways to do it faster, cheaper, or with better quality. You might redesign assembly lines, create more efficient work schedules, or reduce wasted materials. You use math and problem-solving to improve manufacturing processes. Your work helps companies make products more efficiently.",
    clusterId: "manufacturing",
    isHighIncome: true,
    isFutureReady: true,
    averageSalary: "$75,000 - $110,000",
    skills: ["Improving work processes", "Reducing waste", "Time and motion studies", "Factory layout planning", "Production problem solving"],
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
    description: "You create robots that work in factories. You design, build, and program machines that can do tasks like welding, painting, or moving heavy items. You make sure these robots work safely alongside human workers. You must know about mechanics, electronics, and computer programming. Your work helps factories produce more goods with greater precision and safety.",
    clusterId: "manufacturing",
    isHighIncome: true,
    isFutureReady: true,
    averageSalary: "$85,000 - $130,000",
    skills: ["Robot programming", "Mechanical design", "Electronics knowledge", "Safety system design", "Machine troubleshooting"],
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
    description: "You run the day-to-day activities in a factory. You lead teams of workers, schedule production, monitor quality control, and solve problems that arise. You make sure products are made correctly, on time, and within budget. You also focus on workplace safety and following regulations. Your leadership ensures factories run smoothly and meet their production goals.",
    clusterId: "manufacturing",
    isHighIncome: true,
    isFutureReady: true,
    averageSalary: "$80,000 - $140,000",
    skills: ["Factory team leadership", "Production scheduling", "Quality control oversight", "Budget management", "Safety compliance"],
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
    description: "You use data to make factories smarter. You collect information from machines, workers, and quality inspections to find patterns. You might predict when machines will break down, identify bottlenecks in production, or find ways to use less energy. Your computer and math skills help factories make better decisions based on data instead of guesses.",
    clusterId: "manufacturing",
    isHighIncome: true,
    isFutureReady: true,
    emergingField: true,
    averageSalary: "$80,000 - $120,000",
    skills: ["Analyzing factory data", "Using specialized software", "Creating helpful charts", "Predicting maintenance needs", "Spotting production trends"],
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
    description: "You are an expert in 3D printing for industrial use. You design products specifically for 3D printing, choose the right materials, and set up printers for production. You can create complex parts that would be impossible to make with traditional methods. Your knowledge helps companies make customized products quickly or produce parts that are lighter yet stronger than conventional ones.",
    clusterId: "manufacturing",
    isHighIncome: true,
    isFutureReady: true,
    emergingField: true,
    averageSalary: "$75,000 - $115,000",
    skills: ["3D modeling for printing", "Material selection knowledge", "3D printer operation", "Quality testing", "Design optimization"],
    roadmap: [
      "Study mechanical engineering or manufacturing technology",
      "Learn 3D modeling software and slicing programs",
      "Develop knowledge of materials for additive manufacturing",
      "Gain hands-on experience with various 3D printing technologies",
      "Stay current with emerging additive manufacturing methods"
    ]
  }
];
