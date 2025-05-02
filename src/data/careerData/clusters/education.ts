
import { Career } from '../../types';

export const educationCareers: Career[] = [
  {
    id: "elementary-teacher",
    title: "Elementary School Teacher",
    description: "Help young children learn basic subjects like math, language arts, and science while developing their social and academic skills.",
    clusterId: "education",
    isHighIncome: false,
    isFutureReady: true,
    averageSalary: "$60,000 - $75,000",
    skills: ["Communication", "Patience", "Organization", "Creativity", "Adaptability"],
    roadmap: [
      "Earn a bachelor's degree in elementary education",
      "Complete student teaching experience",
      "Obtain teaching certification/license for your state",
      "Consider specialized endorsements like ESL or special education",
      "Pursue master's degree for advancement opportunities"
    ]
  },
  {
    id: "high-school-teacher",
    title: "High School Teacher",
    description: "Teach specialized subjects to teenagers while helping them prepare for college or careers after graduation.",
    clusterId: "education",
    isHighIncome: false,
    isFutureReady: true,
    averageSalary: "$62,000 - $85,000",
    skills: ["Subject expertise", "Communication", "Classroom management", "Assessment design", "Technology integration"],
    roadmap: [
      "Earn a bachelor's degree in your subject area",
      "Complete teacher preparation program",
      "Fulfill student teaching requirements",
      "Obtain state teaching license with subject endorsements",
      "Consider advanced certification or graduate studies"
    ]
  },
  {
    id: "instructional-designer",
    title: "Instructional Designer",
    description: "Create engaging learning materials for students or employees, including online courses, training programs, and educational resources.",
    clusterId: "education",
    isHighIncome: true,
    isFutureReady: true,
    averageSalary: "$75,000 - $110,000",
    skills: ["eLearning development", "Curriculum design", "Project management", "Educational technology", "Assessment creation"],
    roadmap: [
      "Obtain bachelor's degree in education, instructional design or related field",
      "Learn instructional design models (ADDIE, SAM, etc.)",
      "Develop skills with learning management systems and authoring tools",
      "Build portfolio of instructional materials",
      "Consider specialized certifications or master's degree"
    ]
  },
  {
    id: "education-administrator",
    title: "Education Administrator",
    description: "Oversee school operations, develop policies, manage staff, and ensure educational programs meet standards and goals.",
    clusterId: "education",
    isHighIncome: true,
    isFutureReady: true,
    averageSalary: "$95,000 - $150,000",
    skills: ["Leadership", "Budget management", "Educational policy", "Staff development", "Strategic planning"],
    roadmap: [
      "Gain teaching experience (5+ years recommended)",
      "Earn master's degree in educational leadership or administration",
      "Obtain administrative certification/licensure",
      "Seek assistant principal or program coordinator positions",
      "Pursue doctoral degree for higher-level positions"
    ]
  },
  {
    id: "education-researcher",
    title: "Education Researcher",
    description: "Study teaching methods, learning processes, and education systems to improve educational practices and policies.",
    clusterId: "education",
    isHighIncome: true,
    isFutureReady: true,
    averageSalary: "$70,000 - $120,000",
    skills: ["Research methodology", "Data analysis", "Academic writing", "Grant writing", "Critical thinking"],
    roadmap: [
      "Complete advanced degree (master's or PhD) in education or related field",
      "Develop research skills and methodology expertise",
      "Publish research in academic journals",
      "Build network with other researchers and institutions",
      "Secure research grants and funding"
    ]
  },
  {
    id: "special-education-teacher",
    title: "Special Education Teacher",
    description: "Work with students who have various learning, emotional, or physical disabilities, creating individualized education plans.",
    clusterId: "education",
    isHighIncome: false,
    isFutureReady: true,
    averageSalary: "$63,000 - $85,000",
    skills: ["Individualized instruction", "Behavior management", "IEP development", "Adaptive technology", "Patience"],
    roadmap: [
      "Earn bachelor's degree in special education",
      "Complete specialized coursework in disability areas",
      "Gain practical experience through student teaching",
      "Obtain special education teaching license",
      "Consider additional certifications in specific disability areas"
    ]
  }
];
