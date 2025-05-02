
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
  },
  {
    id: "robotics-engineer",
    title: "Robotics Engineer",
    description: "Design, build, and program robots for various industries including manufacturing, healthcare, exploration, and consumer applications.",
    clusterId: "engineering",
    isHighIncome: true,
    isFutureReady: true,
    emergingField: true,
    averageSalary: "$85,000 - $140,000",
    skills: ["Robotics systems", "Programming", "Mechanical design", "Electronics", "AI integration"],
    roadmap: [
      "Build strong foundation in mechanical and electrical engineering",
      "Develop programming skills, particularly in robotics frameworks",
      "Learn computer vision and sensor integration techniques",
      "Gain experience with robotics projects or competitions",
      "Stay current with advances in robotics and automation"
    ],
    aiRelated: true
  },
  {
    id: "nanotechnology-engineer",
    title: "Nanotechnology Engineer",
    description: "Develop materials and devices at the nanoscale (extremely tiny), with applications in medicine, electronics, energy, and materials science.",
    clusterId: "engineering",
    isHighIncome: true,
    isFutureReady: true,
    emergingField: true,
    averageSalary: "$80,000 - $130,000",
    skills: ["Physics", "Chemistry", "Material science", "Laboratory techniques", "Computational modeling"],
    roadmap: [
      "Build strong foundation in physics, chemistry, and engineering",
      "Specialize in nanoscience or nanotechnology",
      "Develop laboratory and fabrication skills",
      "Gain experience through research projects",
      "Stay current with advances in nanomaterials and nanodevices"
    ]
  },
  {
    id: "sustainable-design-engineer",
    title: "Sustainable Design Engineer",
    description: "Create products, systems, and structures with minimal environmental impact by focusing on renewable materials, energy efficiency, and lifecycle analysis.",
    clusterId: "engineering",
    isHighIncome: true,
    isFutureReady: true,
    emergingField: true,
    averageSalary: "$75,000 - $120,000",
    skills: ["Life cycle assessment", "Green materials", "Energy modeling", "Design for disassembly", "Systems thinking"],
    roadmap: [
      "Build foundation in engineering fundamentals",
      "Learn sustainable design principles and methodologies",
      "Develop expertise in green materials and renewable energy",
      "Gain experience with sustainability-focused projects",
      "Stay current with green building standards and technologies"
    ]
  },
  {
    id: "ai-systems-engineer",
    title: "AI Systems Engineer",
    description: "Design and implement hardware and software systems that incorporate artificial intelligence capabilities for various applications.",
    clusterId: "engineering",
    isHighIncome: true,
    isFutureReady: true,
    emergingField: true,
    averageSalary: "$100,000 - $160,000",
    skills: ["AI architectures", "Systems design", "Programming", "Machine learning", "Hardware-software integration"],
    roadmap: [
      "Build strong foundation in computer engineering and AI principles",
      "Develop expertise in machine learning frameworks",
      "Learn about AI hardware acceleration and optimization",
      "Gain experience implementing AI systems",
      "Stay current with evolving AI hardware and software technologies"
    ],
    aiRelated: true
  },
  {
    id: "biomechanical-engineer",
    title: "Biomechanical Engineer",
    description: "Combine principles of mechanical engineering with biological systems to develop solutions for healthcare, sports performance, and human augmentation.",
    clusterId: "engineering",
    isHighIncome: true,
    isFutureReady: true,
    emergingField: true,
    averageSalary: "$75,000 - $125,000",
    skills: ["Biomechanics", "Material science", "Human anatomy", "Computational modeling", "Design thinking"],
    roadmap: [
      "Build foundation in mechanical engineering and human biology",
      "Develop expertise in biomechanical principles and analysis",
      "Learn simulation and modeling tools for biological systems",
      "Gain experience in product development for human applications",
      "Stay current with advances in materials and medical technology"
    ]
  },
  {
    id: "geospatial-engineer",
    title: "Geospatial Engineer",
    description: "Apply engineering principles to mapping and analyzing geographic data, creating solutions for urban planning, environmental management, and disaster response.",
    clusterId: "engineering",
    isHighIncome: true,
    isFutureReady: true,
    averageSalary: "$70,000 - $110,000",
    skills: ["GIS systems", "Remote sensing", "Spatial analysis", "Data visualization", "Programming"],
    roadmap: [
      "Build foundation in geographic information systems and engineering",
      "Develop expertise in geospatial data collection and processing",
      "Learn relevant programming languages and spatial analysis tools",
      "Gain experience with remote sensing and satellite data",
      "Stay current with advances in geospatial technology"
    ]
  },
  {
    id: "water-systems-engineer",
    title: "Water Systems Engineer",
    description: "Design and implement systems for water treatment, distribution, conservation, and management to address growing global water challenges.",
    clusterId: "engineering",
    isHighIncome: true,
    isFutureReady: true,
    averageSalary: "$75,000 - $120,000",
    skills: ["Hydraulics", "Water quality analysis", "System modeling", "Environmental regulations", "Sustainability principles"],
    roadmap: [
      "Build foundation in civil or environmental engineering",
      "Develop expertise in water treatment and distribution systems",
      "Learn relevant regulations and sustainability practices",
      "Gain experience with water system planning and implementation",
      "Stay current with advances in water conservation technology"
    ]
  }
];
