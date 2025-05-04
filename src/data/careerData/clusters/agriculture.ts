
import { Career } from '../../types';

export const agricultureCareers: Career[] = [
  {
    id: "agricultural-engineer",
    title: "Agricultural Engineer",
    description: "You design farm machines and systems to grow food better. You create equipment that helps farmers plant, water, and harvest crops more easily. You also make plans to save water and protect soil. Your work helps farms produce more food while taking care of the environment. You solve practical problems to help feed people around the world.",
    clusterId: "agriculture",
    isHighIncome: true,
    isFutureReady: true,
    averageSalary: "$75,000 - $100,000",
    skills: ["Designing farm equipment", "Planning irrigation systems", "Solving practical problems", "Environmental protection", "Technical drawing"],
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
    description: "You use technology to help farmers grow more food with less waste. You work with special tools like GPS, drones, and sensors to check soil and plants. These tools tell farmers exactly where to add water or plant food, and when crops are ready to harvest. Your work helps farms save money and be kinder to the environment.",
    clusterId: "agriculture",
    isHighIncome: true,
    isFutureReady: true,
    averageSalary: "$70,000 - $95,000",
    skills: ["Using GPS mapping", "Flying farm drones", "Reading soil and plant data", "Computer knowledge", "Problem-solving"],
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
    description: "You study food to make it taste better, stay fresh longer, and be healthier. You might create new food products, improve how food is made, or make sure food is safe to eat. You test different ingredients and cooking methods in special labs. Your work helps bring new and better food products to stores for everyone to enjoy.",
    clusterId: "agriculture",
    isHighIncome: true,
    isFutureReady: true,
    averageSalary: "$72,000 - $110,000",
    skills: ["Food chemistry knowledge", "Testing food quality", "Creating new recipes", "Lab testing skills", "Food safety rules"],
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
    description: "You look at numbers and information about farms to help them grow more food. You study weather patterns, soil tests, crop yields, and market prices. Then you help farmers make better decisions about what to plant, when to plant it, and how to take care of their crops. Your computer skills help make farming smarter and more successful.",
    clusterId: "agriculture",
    isHighIncome: true,
    isFutureReady: true,
    emergingField: true,
    averageSalary: "$75,000 - $105,000",
    skills: ["Working with farm data", "Using special computer programs", "Understanding farming", "Making helpful charts", "Spotting important patterns"],
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
