
import { Career } from '../../types';

export const businessCareers: Career[] = [
  // Core Business Management
  {
    id: "business-manager",
    title: "Business Manager",
    description: "You run a company or department. You make important decisions, lead teams, and make sure the business makes money. You solve problems that come up each day and plan for the future. You help your team work well together and keep customers happy. Your work helps businesses grow and be successful.",
    clusterId: "business",
    isHighIncome: true,
    isFutureReady: true,
    averageSalary: "$80,000 - $150,000",
    skills: ["Making smart decisions quickly", "Leading teams of people", "Solving business problems", "Managing money wisely", "Understanding what customers want"],
    roadmap: [
      "Learn business basics through free courses on Coursera or edX",
      "Start and run small business ventures or side projects",
      "Take leadership roles in community or volunteer organizations",
      "Build a portfolio of successful projects you've managed",
      "Network with business professionals and find mentors"
    ]
  },
  {
    id: "product-manager",
    title: "Product Manager",
    description: "You help create new products people will want to buy. You talk to customers to learn what they need, then work with teams to design and build those things. You decide what features to add and when to release them. You watch how products sell and make changes to make them better. Your work helps companies create things people love to use.",
    clusterId: "business",
    isHighIncome: true,
    isFutureReady: true,
    averageSalary: "$90,000 - $140,000",
    skills: ["Understanding what people want to buy", "Working with many different teams", "Planning how products should work", "Testing if products are good", "Making smart choices with limited money"],
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
    description: "You help businesses solve their problems. Companies hire you when they're having trouble or want to get better. You study what they're doing, find issues, and suggest fixes. You might help them save money, work faster, or make their customers happier. Your ideas help businesses become more successful.",
    clusterId: "business",
    isHighIncome: true,
    isFutureReady: true,
    averageSalary: "$85,000 - $150,000",
    skills: ["Solving difficult business problems", "Finding ways to save money", "Making good suggestions based on facts", "Explaining complicated ideas clearly", "Understanding different types of businesses"],
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
    description: "You look at company data to find useful information. You take numbers about sales, customers, and operations and turn them into charts and reports. These help business leaders see what's working well and what needs fixing. You help companies make smart decisions based on facts instead of guesses. Your work helps businesses understand what's really happening.",
    clusterId: "business",
    isHighIncome: true,
    isFutureReady: true,
    averageSalary: "$70,000 - $110,000",
    skills: ["Finding important patterns in data", "Creating charts that explain numbers clearly", "Using special computer programs for data", "Knowing which questions to ask", "Explaining what data means in simple ways"],
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
    description: "You help companies make big changes smoothly. When businesses need to use new systems, change how they work, or reorganize teams, you help everyone adjust. You create plans to teach people new skills, explain why changes are happening, and solve problems that come up. Your work helps companies improve without causing confusion or stress.",
    clusterId: "business",
    isHighIncome: true,
    isFutureReady: true,
    averageSalary: "$80,000 - $120,000",
    skills: ["Helping people accept new ways of working", "Teaching new skills effectively", "Planning steps for smooth changes", "Listening to people's concerns", "Solving problems that happen during changes"],
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
    description: "You help businesses be kinder to the environment and society. You find ways companies can use less energy, create less waste, and treat workers and communities better. You create plans to reduce pollution and use resources wisely. Your work helps businesses succeed while also protecting our planet and helping people.",
    clusterId: "business",
    isHighIncome: true,
    isFutureReady: true,
    emergingField: true,
    averageSalary: "$80,000 - $130,000",
    skills: ["Finding ways to use less energy and materials", "Creating plans to reduce pollution", "Working with many different departments", "Measuring environmental impact", "Understanding green business rules"],
    roadmap: [
      "Build foundation in sustainability and business principles",
      "Learn about ESG frameworks and reporting standards",
      "Develop expertise in specific sustainability areas",
      "Gain experience implementing sustainability initiatives",
      "Stay current with evolving sustainability practices and regulations"
    ]
  }
];
