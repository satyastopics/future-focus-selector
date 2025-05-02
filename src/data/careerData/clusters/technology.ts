
import { Career } from '../../types';

export const technologyCareers: Career[] = [
  {
    id: "software-engineer",
    title: "Software Engineer",
    description: "Build and maintain software applications. You'll write code, solve problems, and create new features for websites, apps, or computer programs.",
    clusterId: "technology",
    isHighIncome: true,
    isFutureReady: true,
    averageSalary: "$80,000 - $150,000",
    skills: ["Programming", "Problem-solving", "Software design", "Testing", "Collaboration"],
    roadmap: [
      "Learn programming basics through free online resources",
      "Build small projects to practice your skills",
      "Learn software development methodologies",
      "Contribute to open source projects",
      "Create a portfolio showcasing your work"
    ]
  },
  {
    id: "data-scientist",
    title: "Data Scientist",
    description: "Analyze large data sets to help businesses make better decisions. You'll use statistics, machine learning, and programming to find insights in data.",
    clusterId: "technology",
    isHighIncome: true,
    isFutureReady: true,
    averageSalary: "$90,000 - $160,000",
    skills: ["Statistics", "Programming", "Machine learning", "Data visualization", "Problem-solving"],
    roadmap: [
      "Build strong foundation in math and statistics",
      "Learn programming languages like Python or R",
      "Study machine learning algorithms and techniques",
      "Practice with real-world datasets",
      "Create a portfolio of data science projects"
    ],
    aiRelated: true
  },
  {
    id: "cybersecurity-analyst",
    title: "Cybersecurity Analyst",
    description: "Protect computer systems and networks from attacks. You'll monitor for threats, respond to security breaches, and implement security measures.",
    clusterId: "technology",
    isHighIncome: true,
    isFutureReady: true,
    averageSalary: "$75,000 - $130,000",
    skills: ["Network security", "Threat analysis", "Security systems", "Problem-solving", "Communication"],
    roadmap: [
      "Learn networking and system administration basics",
      "Study common security vulnerabilities and threats",
      "Practice in home lab environments",
      "Obtain security certifications like Security+, CISSP",
      "Keep current with evolving security threats and defenses"
    ]
  },
  {
    id: "cloud-architect",
    title: "Cloud Architect",
    description: "Design and manage cloud computing systems. You'll help organizations move their data and applications to the cloud and ensure they run efficiently.",
    clusterId: "technology",
    isHighIncome: true,
    isFutureReady: true,
    averageSalary: "$100,000 - $170,000",
    skills: ["Cloud platforms", "System architecture", "Networking", "Security", "Problem-solving"],
    roadmap: [
      "Build foundation in IT infrastructure and networking",
      "Learn major cloud platforms (AWS, Azure, GCP)",
      "Understand distributed systems and microservices",
      "Obtain cloud certifications",
      "Gain experience with cloud migrations and implementations"
    ]
  },
  {
    id: "ai-engineer",
    title: "AI Engineer",
    description: "Build systems that can learn and make decisions. You'll create and train artificial intelligence models for various applications.",
    clusterId: "technology",
    isHighIncome: true,
    isFutureReady: true,
    emergingField: true,
    averageSalary: "$100,000 - $180,000",
    skills: ["Machine learning", "Programming", "Data processing", "Algorithm design", "Problem-solving"],
    roadmap: [
      "Build strong foundation in mathematics and programming",
      "Learn machine learning fundamentals",
      "Study deep learning and neural networks",
      "Practice with AI frameworks like TensorFlow or PyTorch",
      "Create AI projects for your portfolio"
    ],
    aiRelated: true
  },
  {
    id: "devops-engineer",
    title: "DevOps Engineer",
    description: "Streamline software development and deployment processes. You'll automate workflows, manage infrastructure, and ensure reliable software delivery.",
    clusterId: "technology",
    isHighIncome: true,
    isFutureReady: true,
    averageSalary: "$90,000 - $140,000",
    skills: ["Automation", "CI/CD", "Cloud platforms", "Scripting", "System administration"],
    roadmap: [
      "Learn system administration and networking",
      "Develop programming and scripting skills",
      "Master containerization tools like Docker",
      "Study infrastructure as code with tools like Terraform",
      "Learn CI/CD pipeline implementation"
    ]
  },
  {
    id: "blockchain-developer",
    title: "Blockchain Developer",
    description: "Create secure, distributed systems using blockchain technology. You'll build applications for cryptocurrencies, smart contracts, and decentralized systems.",
    clusterId: "technology",
    isHighIncome: true,
    isFutureReady: true,
    emergingField: true,
    averageSalary: "$90,000 - $150,000",
    skills: ["Blockchain protocols", "Smart contracts", "Cryptography", "Programming", "Web development"],
    roadmap: [
      "Build strong programming foundation",
      "Learn blockchain fundamentals and architectures",
      "Master smart contract development",
      "Study cryptography principles",
      "Create decentralized applications (dApps)"
    ]
  },
  {
    id: "quantum-computing-developer",
    title: "Quantum Computing Developer",
    description: "Create software for quantum computers that solve complex problems in new ways. You'll work at the cutting edge of computing technology.",
    clusterId: "technology",
    isHighIncome: true,
    isFutureReady: true,
    emergingField: true,
    averageSalary: "$100,000 - $180,000",
    skills: ["Quantum algorithms", "Linear algebra", "Programming", "Physics concepts", "Problem-solving"],
    roadmap: [
      "Build strong foundation in mathematics and physics",
      "Learn quantum computing principles and algorithms",
      "Master quantum programming frameworks like Qiskit",
      "Practice implementing quantum algorithms",
      "Collaborate on research or industry projects"
    ],
    aiRelated: true
  },
  {
    id: "ux-designer",
    title: "UX Designer",
    description: "Create user-friendly digital experiences. You'll research user needs, design interfaces, and test products to ensure they're easy and enjoyable to use.",
    clusterId: "technology",
    isHighIncome: true,
    isFutureReady: true,
    averageSalary: "$70,000 - $120,000",
    skills: ["User research", "Wireframing", "Prototyping", "Usability testing", "Visual design"],
    roadmap: [
      "Learn UX design principles and methodologies",
      "Develop skills with design tools like Figma or Sketch",
      "Practice creating wireframes and prototypes",
      "Learn user research and testing techniques",
      "Build a portfolio of UX design projects"
    ]
  },
  {
    id: "ar-vr-developer",
    title: "AR/VR Developer",
    description: "Create immersive experiences with augmented and virtual reality. You'll build applications that blend digital content with the real world or create fully virtual environments.",
    clusterId: "technology",
    isHighIncome: true,
    isFutureReady: true,
    emergingField: true,
    averageSalary: "$80,000 - $140,000",
    skills: ["3D modeling", "Game engines", "Programming", "Spatial design", "User experience"],
    roadmap: [
      "Learn programming fundamentals",
      "Master game engines like Unity or Unreal",
      "Study 3D modeling and spatial design",
      "Understand XR interaction design principles",
      "Build portfolio of AR/VR projects"
    ],
    aiRelated: true
  }
];
