
import { Career } from '../../types';

export const financeCareers: Career[] = [
  {
    id: "financial-analyst",
    title: "Financial Analyst",
    description: "Evaluate investment opportunities, assess financial performance, and create financial models to guide business decisions.",
    clusterId: "finance",
    isHighIncome: true,
    isFutureReady: true,
    averageSalary: "$70,000 - $120,000",
    skills: ["Financial modeling", "Data analysis", "Financial statement analysis", "Industry research", "Problem-solving"],
    roadmap: [
      "Complete degree in finance, economics, or related field",
      "Develop strong analytical and spreadsheet skills",
      "Build knowledge of financial markets and valuation methods",
      "Consider professional certifications like CFA",
      "Gain experience through internships or entry-level positions"
    ]
  },
  {
    id: "financial-technology-developer",
    title: "Financial Technology Developer",
    description: "Create software and systems for financial services, including payment platforms, investment apps, and banking systems.",
    clusterId: "finance",
    isHighIncome: true,
    isFutureReady: true,
    emergingField: true,
    averageSalary: "$90,000 - $160,000",
    skills: ["Programming", "Financial knowledge", "Data security", "API integration", "Problem-solving"],
    roadmap: [
      "Build strong programming and software development skills",
      "Develop understanding of financial systems and regulations",
      "Learn about payment processing and financial data security",
      "Gain experience through fintech companies or financial institutions",
      "Stay current with emerging financial technologies"
    ],
    aiRelated: true
  },
  {
    id: "blockchain-financial-analyst",
    title: "Blockchain Financial Analyst",
    description: "Analyze blockchain technologies and crypto assets for investment opportunities, risks, and business applications.",
    clusterId: "finance",
    isHighIncome: true,
    isFutureReady: true,
    emergingField: true,
    averageSalary: "$85,000 - $150,000",
    skills: ["Blockchain technology", "Financial analysis", "Risk assessment", "Cryptocurrency markets", "Data analysis"],
    roadmap: [
      "Build strong foundation in finance or technology",
      "Develop deep understanding of blockchain technology",
      "Learn about cryptocurrency markets and tokenomics",
      "Stay current with regulatory developments",
      "Gain practical experience with blockchain platforms and tools"
    ],
    aiRelated: true
  },
  {
    id: "risk-manager",
    title: "Risk Manager",
    description: "Identify and analyze potential risks to an organization's assets, operations, and investments, developing strategies to mitigate them.",
    clusterId: "finance",
    isHighIncome: true,
    isFutureReady: true,
    averageSalary: "$85,000 - $140,000",
    skills: ["Risk assessment", "Statistical analysis", "Financial modeling", "Regulatory knowledge", "Problem-solving"],
    roadmap: [
      "Earn degree in finance, economics, or mathematics",
      "Develop strong analytical and quantitative skills",
      "Build knowledge of regulatory requirements and risk frameworks",
      "Consider professional certifications like FRM or PRM",
      "Gain experience in specific risk areas (market, credit, operational)"
    ]
  },
  {
    id: "esg-investment-analyst",
    title: "ESG Investment Analyst",
    description: "Evaluate investments based on environmental, social, and governance factors in addition to financial performance.",
    clusterId: "finance",
    isHighIncome: true,
    isFutureReady: true,
    emergingField: true,
    averageSalary: "$75,000 - $130,000",
    skills: ["ESG metrics", "Financial analysis", "Research", "Sustainability knowledge", "Data analysis"],
    roadmap: [
      "Build foundation in finance or investment analysis",
      "Develop knowledge of ESG frameworks and metrics",
      "Stay informed on sustainability trends and regulations",
      "Gain experience with sustainable investing strategies",
      "Consider certifications like CFA ESG Certificate"
    ]
  }
];
