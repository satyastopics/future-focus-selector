
import { Career } from '../../types';

export const businessCareers: Career[] = [
  // Core Business Management
  {
    id: "business-manager",
    title: "Business Manager",
    description: "Run a company or department. You make important decisions, lead teams, and make sure the business makes money.",
    clusterId: "business",
    isHighIncome: true,
    isFutureReady: true,
    averageSalary: "$80,000 - $150,000",
    skills: ["Leadership", "Decision-making", "Communication", "Problem-solving", "Financial understanding"],
    roadmap: [
      "Learn business fundamentals through free courses on Coursera or edX",
      "Start and run small business ventures or side projects",
      "Take leadership roles in community or volunteer organizations",
      "Build a portfolio of successful projects you've managed",
      "Network with business professionals and find mentors"
    ]
  },
  {
    id: "product-manager",
    title: "Product Manager",
    description: "Guide the development and launch of products. You'll define features, coordinate teams, and ensure products meet customer needs and business goals.",
    clusterId: "business",
    isHighIncome: true,
    isFutureReady: true,
    averageSalary: "$90,000 - $140,000",
    skills: ["Strategic thinking", "User research", "Cross-functional leadership", "Communication", "Data analysis"],
    roadmap: [
      "Build foundation in business, design, or technical field",
      "Learn about product development methodologies",
      "Develop understanding of user research and market analysis",
      "Gain experience through associate product manager roles",
      "Build portfolio of successfully launched products or features"
    ]
  },
  {
    id: "management-consultant",
    title: "Management Consultant",
    description: "Help organizations solve business problems and improve performance. You'll analyze issues, develop solutions, and guide implementation.",
    clusterId: "business",
    isHighIncome: true,
    isFutureReady: true,
    averageSalary: "$85,000 - $150,000",
    skills: ["Problem-solving", "Business analysis", "Communication", "Project management", "Industry knowledge"],
    roadmap: [
      "Build strong business fundamentals",
      "Develop analytical and problem-solving skills",
      "Learn consulting methodologies and frameworks",
      "Gain experience through internships or entry-level positions",
      "Network within the consulting industry"
    ]
  },
  {
    id: "business-intelligence-analyst",
    title: "Business Intelligence Analyst",
    description: "Turn company data into insights that drive better business decisions. You'll create reports, dashboards, and analyses to identify trends and opportunities.",
    clusterId: "business",
    isHighIncome: true,
    isFutureReady: true,
    averageSalary: "$70,000 - $110,000",
    skills: ["Data analysis", "SQL", "Data visualization", "Business acumen", "Problem-solving"],
    roadmap: [
      "Build foundation in data analysis and business concepts",
      "Learn SQL and data querying techniques",
      "Master data visualization tools like Tableau or PowerBI",
      "Develop understanding of business operations and metrics",
      "Gain experience through entry-level analyst positions"
    ],
    aiRelated: true
  },
  {
    id: "change-management-specialist",
    title: "Change Management Specialist",
    description: "Help organizations successfully implement major changes. You'll develop strategies to manage transitions, reduce resistance, and ensure adoption.",
    clusterId: "business",
    isHighIncome: true,
    isFutureReady: true,
    averageSalary: "$80,000 - $120,000",
    skills: ["Change strategy", "Stakeholder management", "Communication", "Training development", "Project management"],
    roadmap: [
      "Build foundation in business and organizational psychology",
      "Learn change management methodologies and frameworks",
      "Develop communication and training skills",
      "Gain experience supporting organizational change initiatives",
      "Consider certifications like Prosci or CCMP"
    ]
  },
  {
    id: "sustainability-officer",
    title: "Sustainability Officer",
    description: "Develop and implement strategies to make businesses more environmentally and socially responsible. You'll balance sustainability goals with business objectives.",
    clusterId: "business",
    isHighIncome: true,
    isFutureReady: true,
    emergingField: true,
    averageSalary: "$80,000 - $130,000",
    skills: ["Sustainability principles", "Business strategy", "Stakeholder engagement", "Reporting standards", "Project management"],
    roadmap: [
      "Build foundation in sustainability and business principles",
      "Learn about ESG frameworks and reporting standards",
      "Develop expertise in specific sustainability areas",
      "Gain experience implementing sustainability initiatives",
      "Stay current with evolving sustainability practices and regulations"
    ]
  }
];
