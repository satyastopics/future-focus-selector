import { CareerCluster } from "./careerClusters";

export interface Career {
  id: string;
  title: string;
  description: string;
  clusterId: string;
  isHighIncome: boolean;
  isFutureReady: boolean;
  skills: string[];
  roadmap: string[];
}

export const careers: Career[] = [
  // Technology & Computing
  {
    id: "software-developer",
    title: "Software Developer",
    description: "Create computer programs and apps that people use every day. You solve problems using code and build digital tools.",
    clusterId: "technology",
    isHighIncome: true,
    isFutureReady: true,
    skills: ["Coding", "Problem-solving", "Logical thinking", "Creativity", "Attention to detail"],
    roadmap: [
      "Learn basic coding with free online courses",
      "Practice by building your own small projects",
      "Take computer science courses in college",
      "Build a portfolio of projects to show employers",
      "Apply for internships to gain experience"
    ]
  },
  {
    id: "cybersecurity-analyst",
    title: "Cybersecurity Analyst",
    description: "Protect computer systems from hackers and viruses. You find security problems and fix them before bad people can use them.",
    clusterId: "technology",
    isHighIncome: true,
    isFutureReady: true,
    skills: ["Security awareness", "Problem-solving", "Attention to detail", "Critical thinking", "Communication"],
    roadmap: [
      "Learn basic computer networking concepts",
      "Study cybersecurity fundamentals online",
      "Practice ethical hacking in safe environments",
      "Get certified in security (like CompTIA Security+)",
      "Take internships in IT departments"
    ]
  },
  {
    id: "data-scientist",
    title: "Data Scientist",
    description: "Study large amounts of information to find patterns and help businesses make better decisions using math and computers.",
    clusterId: "technology",
    isHighIncome: true,
    isFutureReady: true,
    skills: ["Statistics", "Programming", "Problem-solving", "Communication", "Critical thinking"],
    roadmap: [
      "Build strong math and statistics foundation",
      "Learn programming languages like Python or R",
      "Practice analyzing real datasets",
      "Take courses in machine learning",
      "Create data projects to showcase your skills"
    ]
  },
  
  // Healthcare & Medicine
  {
    id: "doctor",
    title: "Doctor",
    description: "Help sick people get better by figuring out what's wrong and giving the right treatment. You work with patients directly.",
    clusterId: "healthcare",
    isHighIncome: true,
    isFutureReady: true,
    skills: ["Medical knowledge", "Communication", "Problem-solving", "Compassion", "Attention to detail"],
    roadmap: [
      "Excel in science subjects in school",
      "Get a bachelor's degree in science",
      "Prepare for and take medical entrance exams",
      "Complete medical school (5-6 years)",
      "Finish residency in your chosen specialty"
    ]
  },
  {
    id: "nurse",
    title: "Nurse",
    description: "Take care of patients in hospitals and clinics. You give medicine, check health, and provide comfort to people who are sick.",
    clusterId: "healthcare",
    isHighIncome: false,
    isFutureReady: true,
    skills: ["Patient care", "Communication", "Attention to detail", "Compassion", "Teamwork"],
    roadmap: [
      "Take biology and health classes in school",
      "Get a nursing diploma or bachelor's degree",
      "Pass nursing certification exams",
      "Gain experience through internships",
      "Consider specializing in a particular area of healthcare"
    ]
  },
  {
    id: "medical-technologist",
    title: "Medical Technologist",
    description: "Run tests on blood, tissues, and other samples to help doctors diagnose diseases. You work with special lab equipment.",
    clusterId: "healthcare",
    isHighIncome: false,
    isFutureReady: true,
    skills: ["Laboratory techniques", "Attention to detail", "Problem-solving", "Technology skills", "Analytical thinking"],
    roadmap: [
      "Focus on biology and chemistry in school",
      "Get a bachelor's degree in medical technology or related field",
      "Complete clinical training program",
      "Obtain certification in medical technology",
      "Consider specializing in a specific type of testing"
    ]
  },
  
  // Business & Management
  {
    id: "business-manager",
    title: "Business Manager",
    description: "Run a company or department. You make important decisions, lead teams, and make sure the business makes money.",
    clusterId: "business",
    isHighIncome: true,
    isFutureReady: true,
    skills: ["Leadership", "Decision-making", "Communication", "Problem-solving", "Financial understanding"],
    roadmap: [
      "Learn business basics through courses or reading",
      "Gain experience by starting small ventures or joining clubs",
      "Get a business degree or take business courses",
      "Start in entry-level positions to learn the business",
      "Develop leadership skills through practice and training"
    ]
  },
  {
    id: "entrepreneur",
    title: "Entrepreneur",
    description: "Start and run your own business. You come up with new ideas, find customers, and build something from scratch.",
    clusterId: "business",
    isHighIncome: true,
    isFutureReady: true,
    skills: ["Creativity", "Risk-taking", "Persistence", "Communication", "Financial management"],
    roadmap: [
      "Identify problems you want to solve",
      "Learn business basics through courses or mentors",
      "Start small with minimal investment",
      "Build a network of supporters and advisors",
      "Learn from failures and keep improving your business"
    ]
  },
  {
    id: "marketing-specialist",
    title: "Marketing Specialist",
    description: "Help businesses sell their products by creating ads, understanding customers, and building brand awareness.",
    clusterId: "business",
    isHighIncome: false,
    isFutureReady: true,
    skills: ["Creativity", "Communication", "Understanding people", "Digital skills", "Data analysis"],
    roadmap: [
      "Develop creative writing and design skills",
      "Learn digital tools like social media and content creation",
      "Study marketing principles through courses",
      "Build a portfolio of marketing projects",
      "Gain experience through internships or freelance work"
    ]
  },
  
  // Engineering & Design
  {
    id: "civil-engineer",
    title: "Civil Engineer",
    description: "Design and build big structures like bridges, roads, and buildings. You make sure they're safe and work well.",
    clusterId: "engineering",
    isHighIncome: true,
    isFutureReady: true,
    skills: ["Math", "Physics", "Problem-solving", "Attention to detail", "Computer-aided design"],
    roadmap: [
      "Build strong foundation in math and physics",
      "Get a bachelor's degree in civil engineering",
      "Complete internships to gain practical experience",
      "Obtain professional engineering license",
      "Specialize in areas like structural, transportation, or environmental engineering"
    ]
  },
  {
    id: "mechanical-engineer",
    title: "Mechanical Engineer",
    description: "Design machines and mechanical systems. You create things like cars, robots, or heating systems that move and work.",
    clusterId: "engineering",
    isHighIncome: true,
    isFutureReady: true,
    skills: ["Physics", "Math", "3D design", "Problem-solving", "Critical thinking"],
    roadmap: [
      "Develop strong math and physics skills",
      "Build and take apart things to understand mechanics",
      "Get a degree in mechanical engineering",
      "Gain hands-on experience through projects and internships",
      "Learn advanced design software and manufacturing techniques"
    ]
  },
  {
    id: "product-designer",
    title: "Product Designer",
    description: "Create new products that are useful and look good. You think about how people will use them and make them easy to understand.",
    clusterId: "engineering",
    isHighIncome: true,
    isFutureReady: true,
    skills: ["Creativity", "Drawing", "Understanding users", "Problem-solving", "Computer design skills"],
    roadmap: [
      "Develop drawing and visual communication skills",
      "Learn design software and tools",
      "Study how people interact with products",
      "Create a portfolio of design projects",
      "Practice designing solutions for real problems"
    ]
  },
  
  // Education & Teaching
  {
    id: "teacher",
    title: "Teacher",
    description: "Help students learn subjects like math, science, or languages. You create lessons, explain concepts, and guide learning.",
    clusterId: "education",
    isHighIncome: false,
    isFutureReady: true,
    skills: ["Communication", "Patience", "Creativity", "Organization", "Adaptability"],
    roadmap: [
      "Develop expertise in subjects you want to teach",
      "Get a bachelor's degree in education or your subject",
      "Complete teacher training program",
      "Obtain teaching certification",
      "Gain experience through student teaching and internships"
    ]
  },
  {
    id: "educational-counselor",
    title: "Educational Counselor",
    description: "Help students plan their education and solve school problems. You guide them to make good choices for their future.",
    clusterId: "education",
    isHighIncome: false,
    isFutureReady: true,
    skills: ["Listening", "Communication", "Empathy", "Problem-solving", "Organization"],
    roadmap: [
      "Develop strong communication and people skills",
      "Get a bachelor's degree in psychology or education",
      "Complete a master's degree in counseling",
      "Obtain counseling certification or license",
      "Gain experience working with diverse student populations"
    ]
  },
  {
    id: "instructional-designer",
    title: "Instructional Designer",
    description: "Create learning materials like online courses, textbooks, or training programs. You make learning interesting and effective.",
    clusterId: "education",
    isHighIncome: false,
    isFutureReady: true,
    skills: ["Creativity", "Communication", "Technical skills", "Organization", "Understanding how people learn"],
    roadmap: [
      "Study education and learning psychology",
      "Learn digital tools for creating educational content",
      "Get a degree in instructional design or education",
      "Build a portfolio of learning materials you've created",
      "Stay current with educational technology trends"
    ]
  },
  
  // And many more careers for the other clusters...
  
  // Arts & Media
  {
    id: "graphic-designer",
    title: "Graphic Designer",
    description: "Create visual content like logos, posters, and websites. You use art and design to communicate messages clearly.",
    clusterId: "artsMedia",
    isHighIncome: false,
    isFutureReady: true,
    skills: ["Creativity", "Visual design", "Computer design skills", "Communication", "Attention to detail"],
    roadmap: [
      "Develop drawing and visual arts skills",
      "Learn design software like Adobe Creative Suite",
      "Build a portfolio of design projects",
      "Get formal education in graphic design",
      "Gain experience through freelance work or internships"
    ]
  },
  
  // Science & Research
  {
    id: "environmental-scientist",
    title: "Environmental Scientist",
    description: "Study the environment to solve pollution problems. You collect samples, run tests, and recommend ways to protect nature.",
    clusterId: "scienceResearch",
    isHighIncome: false,
    isFutureReady: true,
    skills: ["Scientific knowledge", "Field research", "Data analysis", "Problem-solving", "Communication"],
    roadmap: [
      "Build strong foundation in biology, chemistry, and earth sciences",
      "Get a bachelor's degree in environmental science",
      "Gain field experience through research projects",
      "Consider a master's degree for advancement",
      "Stay current with environmental regulations and technologies"
    ]
  },
  
  // Agriculture & Food
  {
    id: "agricultural-manager",
    title: "Agricultural Manager",
    description: "Run farms and food production businesses. You oversee planting, harvesting, and make sure operations run smoothly.",
    clusterId: "agriculture",
    isHighIncome: false,
    isFutureReady: true,
    skills: ["Business management", "Plant/animal knowledge", "Problem-solving", "Technology skills", "Leadership"],
    roadmap: [
      "Gain practical experience working in agriculture",
      "Learn about plant science and animal husbandry",
      "Study agricultural business and management",
      "Stay updated on new farming technologies",
      "Build connections with suppliers and buyers"
    ]
  },
  
  // Law & Public Safety
  {
    id: "lawyer",
    title: "Lawyer",
    description: "Help people with legal problems, represent them in court, and give legal advice. You know the laws and how to use them.",
    clusterId: "lawPublicSafety",
    isHighIncome: true,
    isFutureReady: true,
    skills: ["Critical thinking", "Communication", "Research", "Writing", "Problem-solving"],
    roadmap: [
      "Develop strong reading, writing, and speaking skills",
      "Get a bachelor's degree in any field",
      "Prepare for and take the law school entrance exam",
      "Complete law school (3 years)",
      "Pass the bar exam to practice law"
    ]
  },
  
  // Add more careers for the remaining clusters...
  
  // Finance & Banking
  {
    id: "financial-analyst",
    title: "Financial Analyst",
    description: "Help people and businesses make smart decisions about money and investments. You analyze data to find the best options.",
    clusterId: "finance",
    isHighIncome: true,
    isFutureReady: true,
    skills: ["Math", "Analysis", "Financial knowledge", "Communication", "Attention to detail"],
    roadmap: [
      "Build strong math and statistics foundation",
      "Get a degree in finance, economics, or accounting",
      "Learn financial analysis tools and software",
      "Gain experience through internships",
      "Consider professional certifications like CFA"
    ]
  },
  
  // Human Services & Counseling
  {
    id: "counselor",
    title: "Counselor",
    description: "Help people work through personal problems and make positive changes in their lives. You listen and provide guidance.",
    clusterId: "humanServices",
    isHighIncome: false,
    isFutureReady: true,
    skills: ["Empathy", "Listening", "Communication", "Problem-solving", "Emotional intelligence"],
    roadmap: [
      "Develop strong interpersonal and communication skills",
      "Get a bachelor's degree in psychology or related field",
      "Complete master's degree in counseling",
      "Fulfill supervised practice requirements",
      "Obtain counseling license"
    ]
  },
  
  // Government & Public Administration
  {
    id: "public-administrator",
    title: "Public Administrator",
    description: "Help run government programs and services. You make sure public offices work well and serve people effectively.",
    clusterId: "governmentPublicAdmin",
    isHighIncome: false,
    isFutureReady: true,
    skills: ["Organization", "Leadership", "Communication", "Problem-solving", "Understanding regulations"],
    roadmap: [
      "Learn about government and public policy",
      "Get a degree in public administration or related field",
      "Gain experience through government internships",
      "Develop project management and leadership skills",
      "Build network of government contacts"
    ]
  }
];

export const getCareersByClusterIds = (clusterIds: string[]): Career[] => {
  return careers.filter(career => clusterIds.includes(career.clusterId));
};

export const getCommonSkills = (selectedCareers: Career[]): string[] => {
  if (!selectedCareers.length) return [];
  
  // Get all skills from first career
  const commonSkills = new Set(selectedCareers[0].skills);
  
  // Keep only skills that appear in all selected careers
  for (let i = 1; i < selectedCareers.length; i++) {
    const careerSkills = new Set(selectedCareers[i].skills);
    for (const skill of commonSkills) {
      if (!careerSkills.has(skill)) {
        commonSkills.delete(skill);
      }
    }
  }
  
  return Array.from(commonSkills);
};

export const getTransferableSkills = (careers: Career[]): string[] => {
  // Count occurrences of each skill
  const skillCount: Record<string, number> = {};
  
  careers.forEach(career => {
    career.skills.forEach(skill => {
      skillCount[skill] = (skillCount[skill] || 0) + 1;
    });
  });
  
  // Find skills that appear in at least 30% of the careers
  const threshold = Math.max(2, Math.floor(careers.length * 0.3));
  
  return Object.entries(skillCount)
    .filter(([_, count]) => count >= threshold)
    .map(([skill, _]) => skill);
};

export const getFutureReadyCareers = (careers: Career[]): Career[] => {
  return careers.filter(career => career.isFutureReady);
};

export const getHighIncomeCareers = (careers: Career[]): Career[] => {
  return careers.filter(career => career.isHighIncome);
};
