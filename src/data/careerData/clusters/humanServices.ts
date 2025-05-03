
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
  }
];
