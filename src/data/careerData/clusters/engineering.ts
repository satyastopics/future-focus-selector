
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
  // More engineering careers would be defined here
];
