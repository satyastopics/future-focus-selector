
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
  }
];
