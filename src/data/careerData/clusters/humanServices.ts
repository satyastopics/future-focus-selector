import { Career } from '../../types';

export const humanServicesCareers: Career[] = [
  {
    id: "clinical-psychologist",
    title: "Clinical Psychologist",
    description: "Assess, diagnose, and treat individuals with mental, emotional, and behavioral disorders through therapy and counseling.",
    clusterId: "humanServices",
    isHighIncome: true,
    isFutureReady: true,
    averageSalary: "$75,000 - $135,000",
    skills: ["Assessment", "Therapy techniques", "Communication", "Empathy", "Critical thinking"],
    roadmap: [
      "Earn bachelor's degree in psychology",
      "Complete graduate studies (PhD or PsyD) in clinical psychology",
      "Fulfill supervised clinical experience requirements",
      "Obtain state licensure to practice",
      "Consider specialization in particular disorders or populations"
    ]
  },
  {
    id: "teletherapy-counselor",
    title: "Teletherapy Counselor",
    description: "Provide mental health services remotely through video conferencing, phone calls, or text-based communication.",
    clusterId: "humanServices",
    isHighIncome: true,
    isFutureReady: true,
    emergingField: true,
    averageSalary: "$65,000 - $95,000",
    skills: ["Counseling techniques", "Digital communication", "Technology adaptation", "Empathy", "Self-regulation"],
    roadmap: [
      "Complete education requirements for counseling licensure",
      "Obtain state counseling license",
      "Develop expertise in virtual communication tools",
      "Learn best practices for online therapy delivery",
      "Stay current with telehealth regulations and technologies"
    ]
  },
  {
    id: "behavior-analyst",
    title: "Behavior Analyst",
    description: "Develop and implement behavior intervention plans to help individuals improve learning and behaviors.",
    clusterId: "humanServices",
    isHighIncome: true,
    isFutureReady: true,
    averageSalary: "$65,000 - $90,000",
    skills: ["Behavioral assessment", "Intervention design", "Data collection", "Analysis", "Communication"],
    roadmap: [
      "Earn master's degree in behavior analysis or psychology",
      "Complete supervised fieldwork hours",
      "Pass the BCBA certification exam",
      "Obtain state licensure if required",
      "Continue education to maintain certification"
    ]
  },
  {
    id: "community-health-worker",
    title: "Community Health Worker",
    description: "Bridge gaps between communities and healthcare systems by providing outreach, education, and support services.",
    clusterId: "humanServices",
    isHighIncome: false,
    isFutureReady: true,
    averageSalary: "$40,000 - $65,000",
    skills: ["Cultural competence", "Communication", "Health knowledge", "Advocacy", "Community engagement"],
    roadmap: [
      "Build foundation in health education or social services",
      "Develop strong cultural competence skills",
      "Learn about health systems and community resources",
      "Gain experience working directly with communities",
      "Consider certification like Certified Community Health Worker"
    ]
  },
  {
    id: "mental-health-technician",
    title: "Mental Health Technician",
    description: "Provide direct care and support to individuals with mental health conditions in hospitals, residential facilities, or community settings.",
    clusterId: "humanServices",
    isHighIncome: false,
    isFutureReady: true,
    averageSalary: "$35,000 - $55,000",
    skills: ["Patient care", "Crisis intervention", "Observation", "Documentation", "Compassion"],
    roadmap: [
      "Complete relevant education (certificate or associate's degree)",
      "Gain experience working with mental health populations",
      "Obtain certification like CMHT or MHRT",
      "Develop skills in crisis prevention and intervention",
      "Build expertise in specific mental health conditions"
    ]
  },
  {
    id: "rehabilitation-counselor",
    title: "Rehabilitation Counselor",
    description: "Help individuals with disabilities achieve independence and improve their quality of life through counseling and advocacy.",
    clusterId: "humanServices",
    isHighIncome: false,
    isFutureReady: true,
    averageSalary: "$45,000 - $75,000",
    skills: ["Counseling", "Case management", "Vocational assessment", "Advocacy", "Resource coordination"],
    roadmap: [
      "Earn master's degree in rehabilitation counseling",
      "Complete required supervised clinical experience",
      "Obtain certification like CRC (Certified Rehabilitation Counselor)",
      "Develop knowledge of disability services and resources",
      "Build expertise in specific disability populations"
    ]
  },
  {
    id: "art-therapist",
    title: "Art Therapist",
    description: "Use creative processes and art-making to help individuals improve mental health, cope with stress, or overcome trauma.",
    clusterId: "humanServices",
    isHighIncome: false,
    isFutureReady: true,
    averageSalary: "$45,000 - $80,000",
    skills: ["Art techniques", "Therapeutic principles", "Assessment", "Communication", "Empathy"],
    roadmap: [
      "Complete bachelor's degree in art, psychology, or related field",
      "Earn master's degree in art therapy",
      "Complete required supervised clinical hours",
      "Obtain credential as Registered Art Therapist (ATR)",
      "Consider board certification (ATR-BC)"
    ]
  },
  {
    id: "digital-wellness-counselor",
    title: "Digital Wellness Counselor",
    description: "Help individuals develop healthy relationships with technology, addressing issues like screen addiction, digital burnout, and online behavior.",
    clusterId: "humanServices",
    isHighIncome: true,
    isFutureReady: true,
    emergingField: true,
    averageSalary: "$70,000 - $110,000",
    skills: ["Counseling techniques", "Digital behavior understanding", "Habit formation", "Mental health knowledge", "Technology awareness"],
    roadmap: [
      "Build foundation in psychology or counseling",
      "Develop expertise in digital behavior and technology impacts",
      "Learn specialized interventions for technology-related issues",
      "Gain experience working with digital wellness concerns",
      "Stay current with research on technology's psychological effects"
    ]
  },
  {
    id: "genetic-counselor",
    title: "Genetic Counselor",
    description: "Provide guidance to individuals and families about genetic conditions, helping them understand genetic test results and make informed health decisions.",
    clusterId: "humanServices",
    isHighIncome: true,
    isFutureReady: true,
    emergingField: true,
    averageSalary: "$80,000 - $120,000",
    skills: ["Genetics knowledge", "Counseling", "Risk assessment", "Communication", "Empathy"],
    roadmap: [
      "Complete master's degree in genetic counseling",
      "Obtain certification from the American Board of Genetic Counseling",
      "Develop specialty in a specific area (cancer, prenatal, etc.)",
      "Gain clinical experience through supervised practice",
      "Stay current with advances in genetic testing and treatment"
    ]
  },
  {
    id: "trauma-informed-care-specialist",
    title: "Trauma-Informed Care Specialist",
    description: "Provide specialized support to individuals who have experienced trauma, using evidence-based approaches that promote healing and prevent re-traumatization.",
    clusterId: "humanServices",
    isHighIncome: true,
    isFutureReady: true,
    averageSalary: "$65,000 - $95,000",
    skills: ["Trauma therapy techniques", "Neurobiology understanding", "Crisis intervention", "Compassionate communication", "Cultural sensitivity"],
    roadmap: [
      "Build foundation in psychology or social work",
      "Learn trauma-specific therapeutic approaches",
      "Develop understanding of trauma's neurobiological impacts",
      "Gain supervised experience working with trauma survivors",
      "Obtain specialized trauma certifications"
    ]
  },
  {
    id: "elder-care-coordinator",
    title: "Elder Care Coordinator",
    description: "Manage comprehensive care plans for older adults, coordinating medical services, home care, social support, and ensuring quality of life.",
    clusterId: "humanServices",
    isHighIncome: false,
    isFutureReady: true,
    averageSalary: "$55,000 - $85,000",
    skills: ["Geriatric knowledge", "Care management", "Service coordination", "Advocacy", "Family communication"],
    roadmap: [
      "Build foundation in gerontology or social services",
      "Learn elder care systems and resources",
      "Develop expertise in care coordination models",
      "Gain experience working with older adults and families",
      "Consider certification in geriatric care management"
    ]
  },
  {
    id: "mental-health-technologist",
    title: "Mental Health Technologist",
    description: "Combine technology and mental health expertise to develop and implement digital mental health solutions like apps, virtual reality therapy, and teletherapy platforms.",
    clusterId: "humanServices",
    isHighIncome: true,
    isFutureReady: true,
    emergingField: true,
    averageSalary: "$75,000 - $120,000",
    skills: ["Mental health knowledge", "Digital product development", "User experience design", "Clinical validation", "Data analysis"],
    roadmap: [
      "Build foundation in psychology and technology",
      "Learn digital health development principles",
      "Develop understanding of mental health interventions",
      "Gain experience creating or implementing digital solutions",
      "Stay current with digital mental health research"
    ],
    aiRelated: true
  }
];
