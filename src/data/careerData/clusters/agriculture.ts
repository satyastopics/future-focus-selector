
import { Career } from '../../types';

export const agricultureCareers: Career[] = [
  {
    id: "agricultural-engineer",
    title: "Agricultural Engineer",
    description: "Design agricultural equipment and systems to improve farming efficiency, sustainability, and environmental protection.",
    clusterId: "agriculture",
    isHighIncome: true,
    isFutureReady: true,
    averageSalary: "$75,000 - $100,000",
    skills: ["Engineering principles", "Sustainable design", "Problem-solving", "Technical drawing", "Environmental awareness"],
    roadmap: [
      "Earn degree in agricultural or biological engineering",
      "Gain hands-on experience with agricultural systems",
      "Develop expertise in specific area (irrigation, machinery, etc.)",
      "Obtain professional engineering license",
      "Stay current with agricultural technology innovations"
    ]
  },
  {
    id: "precision-agriculture-specialist",
    title: "Precision Agriculture Specialist",
    description: "Use technology such as GPS, sensors, drones, and software to help farmers optimize crop yields while conserving resources.",
    clusterId: "agriculture",
    isHighIncome: true,
    isFutureReady: true,
    averageSalary: "$70,000 - $95,000",
    skills: ["GIS mapping", "Data analysis", "Agricultural knowledge", "Technology integration", "Problem-solving"],
    roadmap: [
      "Study agricultural science or technology",
      "Learn GIS and remote sensing technologies",
      "Develop data analysis and interpretation skills",
      "Gain practical farming knowledge and experience",
      "Stay current with emerging agricultural technologies"
    ],
    aiRelated: true
  },
  {
    id: "food-scientist",
    title: "Food Scientist",
    description: "Research and develop new food products, improve food processing methods, and ensure food safety and quality.",
    clusterId: "agriculture",
    isHighIncome: true,
    isFutureReady: true,
    averageSalary: "$72,000 - $110,000",
    skills: ["Food chemistry", "Product development", "Quality control", "Sensory evaluation", "Regulatory knowledge"],
    roadmap: [
      "Earn degree in food science or related field",
      "Develop laboratory and analysis skills",
      "Learn food regulations and safety standards",
      "Gain experience in product development",
      "Stay current with food technology innovations"
    ]
  },
  {
    id: "agricultural-data-analyst",
    title: "Agricultural Data Analyst",
    description: "Analyze farming data to help improve crop yields, optimize resource use, and increase agricultural efficiency.",
    clusterId: "agriculture",
    isHighIncome: true,
    isFutureReady: true,
    emergingField: true,
    averageSalary: "$75,000 - $105,000",
    skills: ["Data analysis", "Statistical modeling", "Programming", "Agricultural knowledge", "Visualization"],
    roadmap: [
      "Study data science, statistics, or agricultural informatics",
      "Learn programming languages like R or Python",
      "Develop agricultural domain knowledge",
      "Build experience with agricultural datasets",
      "Stay current with data analysis tools and techniques"
    ],
    aiRelated: true
  }
];
