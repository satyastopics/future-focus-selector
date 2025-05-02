
import { Career } from '../../types';

export const lawPublicSafetyCareers: Career[] = [
  {
    id: "lawyer",
    title: "Lawyer",
    description: "Advise and represent individuals, businesses, or government agencies on legal issues or disputes.",
    clusterId: "lawPublicSafety",
    isHighIncome: true,
    isFutureReady: true,
    averageSalary: "$90,000 - $200,000+",
    skills: ["Legal analysis", "Research", "Negotiation", "Writing", "Public speaking"],
    roadmap: [
      "Complete bachelor's degree in any field",
      "Prepare for and take the LSAT exam",
      "Graduate from law school (JD degree)",
      "Pass the bar exam in your state",
      "Gain experience through internships or entry-level positions"
    ]
  },
  {
    id: "digital-forensics-investigator",
    title: "Digital Forensics Investigator",
    description: "Recover and examine data from computers and digital storage devices to assist in criminal or corporate investigations.",
    clusterId: "lawPublicSafety",
    isHighIncome: true,
    isFutureReady: true,
    averageSalary: "$75,000 - $120,000",
    skills: ["Computer science", "Evidence handling", "Data recovery", "Cybersecurity", "Investigation techniques"],
    roadmap: [
      "Earn degree in computer science, cybersecurity, or digital forensics",
      "Learn digital forensics tools and techniques",
      "Obtain industry certifications (EnCE, GCFE, etc.)",
      "Gain experience through law enforcement or private sector",
      "Stay current with evolving technology and techniques"
    ],
    aiRelated: true
  },
  {
    id: "emergency-management-director",
    title: "Emergency Management Director",
    description: "Prepare plans for responding to natural disasters or other emergencies, and coordinate disaster response activities.",
    clusterId: "lawPublicSafety",
    isHighIncome: true,
    isFutureReady: true,
    averageSalary: "$75,000 - $140,000",
    skills: ["Crisis planning", "Leadership", "Communication", "Policy development", "Risk assessment"],
    roadmap: [
      "Earn degree in emergency management or related field",
      "Gain experience in emergency services or public administration",
      "Obtain certifications like Certified Emergency Manager (CEM)",
      "Build network with local, state, and federal emergency agencies",
      "Develop incident command and crisis leadership skills"
    ]
  },
  {
    id: "cybersecurity-law-specialist",
    title: "Cybersecurity Law Specialist",
    description: "Provide legal expertise on cybersecurity regulations, data privacy laws, and legal aspects of digital security incidents.",
    clusterId: "lawPublicSafety",
    isHighIncome: true,
    isFutureReady: true,
    emergingField: true,
    averageSalary: "$100,000 - $180,000",
    skills: ["Legal expertise", "Cybersecurity knowledge", "Regulatory compliance", "Risk assessment", "Communication"],
    roadmap: [
      "Complete law degree (JD) with focus on technology law",
      "Develop technical understanding of cybersecurity principles",
      "Gain experience in privacy law and compliance",
      "Stay current with evolving cyber regulations",
      "Build network in both legal and technology communities"
    ],
    aiRelated: true
  }
];
