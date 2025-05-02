
import { Career } from '../../types';

export const sportsRecreationCareers: Career[] = [
  {
    id: "sports-analyst",
    title: "Sports Analyst",
    description: "Use statistics and data to evaluate player performance, team strategies, and game outcomes for teams or media organizations.",
    clusterId: "sportsRecreation",
    isHighIncome: true,
    isFutureReady: true,
    averageSalary: "$60,000 - $100,000",
    skills: ["Sports knowledge", "Data analysis", "Statistical modeling", "Communication", "Critical thinking"],
    roadmap: [
      "Build strong foundation in sports and statistics",
      "Develop expertise in sports analytics tools and methods",
      "Learn data visualization and communication techniques",
      "Gain experience analyzing sports performance data",
      "Create portfolio of analytical projects and insights"
    ],
    aiRelated: true
  },
  {
    id: "athletic-trainer",
    title: "Athletic Trainer",
    description: "Prevent, diagnose, and treat muscle and bone injuries and illnesses in athletes and active individuals.",
    clusterId: "sportsRecreation",
    isHighIncome: false,
    isFutureReady: true,
    averageSalary: "$50,000 - $75,000",
    skills: ["Injury assessment", "Treatment techniques", "Rehabilitation programs", "Emergency care", "Preventive strategies"],
    roadmap: [
      "Complete athletic training degree program",
      "Obtain certification from Board of Certification (BOC)",
      "Gain hands-on experience through clinical rotations",
      "Obtain state licensure if required",
      "Consider specialization in specific sports or injuries"
    ]
  },
  {
    id: "sports-marketing-director",
    title: "Sports Marketing Director",
    description: "Develop and implement marketing strategies for sports teams, leagues, events, or related products and services.",
    clusterId: "sportsRecreation",
    isHighIncome: true,
    isFutureReady: true,
    averageSalary: "$75,000 - $130,000",
    skills: ["Marketing strategy", "Brand management", "Sponsorship development", "Event promotion", "Digital marketing"],
    roadmap: [
      "Build foundation in marketing and sports management",
      "Gain experience in sports industry through internships",
      "Develop expertise in sports sponsorship and partnerships",
      "Build network of industry connections",
      "Stay current with sports marketing trends and technologies"
    ]
  },
  {
    id: "esports-manager",
    title: "Esports Manager",
    description: "Oversee operations, player development, and business strategies for professional video game teams or esports organizations.",
    clusterId: "sportsRecreation",
    isHighIncome: true,
    isFutureReady: true,
    emergingField: true,
    averageSalary: "$60,000 - $100,000",
    skills: ["Gaming knowledge", "Team management", "Business development", "Event coordination", "Social media"],
    roadmap: [
      "Build strong foundation in esports ecosystem and games",
      "Develop business and management skills",
      "Gain experience through volunteer or entry-level esports roles",
      "Build network within esports community",
      "Stay current with evolving esports titles and trends"
    ]
  },
  {
    id: "fitness-technology-developer",
    title: "Fitness Technology Developer",
    description: "Create and improve apps, wearables, and other digital tools to enhance physical fitness, training, and wellness activities.",
    clusterId: "sportsRecreation",
    isHighIncome: true,
    isFutureReady: true,
    emergingField: true,
    averageSalary: "$75,000 - $125,000",
    skills: ["Programming", "UX/UI design", "Fitness knowledge", "Data analysis", "Problem-solving"],
    roadmap: [
      "Build strong technical foundation in software development",
      "Develop understanding of fitness principles and user needs",
      "Learn about wearable technology and sensor integration",
      "Gain experience developing health or fitness applications",
      "Stay current with emerging fitness technology trends"
    ],
    aiRelated: true
  }
];
