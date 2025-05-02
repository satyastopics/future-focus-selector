
import { Career } from '../../types';

export const fashionDesignCareers: Career[] = [
  {
    id: "fashion-designer",
    title: "Fashion Designer",
    description: "Create original clothing, accessories, and footwear designs for manufacturers, specialty stores, and fashion houses.",
    clusterId: "fashionDesign",
    isHighIncome: false,
    isFutureReady: false,
    averageSalary: "$50,000 - $90,000",
    skills: ["Design principles", "Drawing", "Textile knowledge", "CAD software", "Trend forecasting"],
    roadmap: [
      "Develop strong foundation in art and design",
      "Study fashion design fundamentals",
      "Learn clothing construction and pattern making",
      "Build portfolio showcasing unique design aesthetic",
      "Gain industry experience through internships"
    ]
  },
  {
    id: "sustainable-fashion-consultant",
    title: "Sustainable Fashion Consultant",
    description: "Help fashion brands implement eco-friendly practices in material sourcing, production processes, and supply chain management.",
    clusterId: "fashionDesign",
    isHighIncome: true,
    isFutureReady: true,
    emergingField: true,
    averageSalary: "$60,000 - $100,000",
    skills: ["Sustainability knowledge", "Textile science", "Supply chain management", "Strategy development", "Communication"],
    roadmap: [
      "Build foundation in fashion and sustainability",
      "Learn about sustainable materials and production methods",
      "Develop understanding of fashion supply chains",
      "Gain experience implementing sustainable practices",
      "Stay current with sustainable fashion innovations"
    ]
  },
  {
    id: "fashion-technology-specialist",
    title: "Fashion Technology Specialist",
    description: "Integrate emerging technologies like AR/VR, AI, and digital fabrication into fashion design, retail, and manufacturing processes.",
    clusterId: "fashionDesign",
    isHighIncome: true,
    isFutureReady: true,
    emergingField: true,
    averageSalary: "$70,000 - $110,000",
    skills: ["Digital design tools", "Fashion knowledge", "Technology integration", "Innovation", "Problem-solving"],
    roadmap: [
      "Build foundation in fashion design and technology",
      "Learn 3D design and digital fabrication tools",
      "Develop skills in AR/VR or other emerging technologies",
      "Gain experience applying technology to fashion challenges",
      "Stay current with fashion tech innovations"
    ],
    aiRelated: true
  },
  {
    id: "textile-developer",
    title: "Textile Developer",
    description: "Research and create new fabrics and materials for clothing and accessories with specific properties or performance characteristics.",
    clusterId: "fashionDesign",
    isHighIncome: true,
    isFutureReady: true,
    averageSalary: "$65,000 - $95,000",
    skills: ["Textile science", "Material testing", "Technical design", "Innovation", "Sustainability knowledge"],
    roadmap: [
      "Study textile science or materials engineering",
      "Learn textile manufacturing processes and technologies",
      "Develop understanding of fabric performance testing",
      "Gain experience in textile development or research",
      "Stay current with innovative materials and processes"
    ]
  }
];
