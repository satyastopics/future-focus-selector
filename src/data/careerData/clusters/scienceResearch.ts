
import { Career } from '../../types';

export const scienceResearchCareers: Career[] = [
  {
    id: "research-scientist",
    title: "Research Scientist",
    description: "Design and conduct experiments, analyze data, and develop new theories or products in fields like biology, chemistry, or physics.",
    clusterId: "scienceResearch",
    isHighIncome: true,
    isFutureReady: true,
    averageSalary: "$80,000 - $150,000",
    skills: ["Critical thinking", "Data analysis", "Laboratory techniques", "Scientific writing", "Research methodology"],
    roadmap: [
      "Earn advanced degree (PhD) in specific scientific field",
      "Develop specialized technical and analytical skills",
      "Gain research experience through lab work and academic publications",
      "Build network of scientific collaborators",
      "Secure research grants or industry positions"
    ]
  },
  {
    id: "quantum-computing-researcher",
    title: "Quantum Computing Researcher",
    description: "Explore the cutting-edge field of quantum information science to develop quantum algorithms and hardware for revolutionary computing capabilities.",
    clusterId: "scienceResearch",
    isHighIncome: true,
    isFutureReady: true,
    emergingField: true,
    averageSalary: "$120,000 - $200,000",
    skills: ["Quantum mechanics", "Advanced mathematics", "Programming", "Algorithm design", "Problem-solving"],
    roadmap: [
      "Obtain PhD in physics, computer science, or related field with quantum focus",
      "Develop strong foundation in quantum mechanics and information theory",
      "Learn quantum programming frameworks like Qiskit or Cirq",
      "Contribute to open-source quantum computing projects",
      "Join quantum research teams at tech companies or research institutions"
    ],
    aiRelated: true
  },
  {
    id: "genomics-specialist",
    title: "Genomics Specialist",
    description: "Analyze genetic data to understand gene function, develop treatments for genetic diseases, or improve agricultural crops.",
    clusterId: "scienceResearch",
    isHighIncome: true,
    isFutureReady: true,
    averageSalary: "$85,000 - $130,000",
    skills: ["Bioinformatics", "DNA sequencing", "Statistical analysis", "Programming", "Molecular biology"],
    roadmap: [
      "Complete advanced degree in genomics, bioinformatics, or molecular biology",
      "Develop computational and laboratory skills",
      "Learn bioinformatics tools and programming languages",
      "Gain experience with next-generation sequencing technologies",
      "Stay current with rapidly evolving genetic research techniques"
    ]
  },
  {
    id: "materials-scientist",
    title: "Materials Scientist",
    description: "Develop and test new materials for industrial applications, from biodegradable plastics to advanced electronics components.",
    clusterId: "scienceResearch",
    isHighIncome: true,
    isFutureReady: true,
    averageSalary: "$90,000 - $140,000",
    skills: ["Laboratory techniques", "Materials characterization", "Data analysis", "Technical writing", "Problem-solving"],
    roadmap: [
      "Earn degree in materials science, chemistry, or engineering",
      "Develop expertise in materials characterization techniques",
      "Build hands-on experience with material synthesis and testing",
      "Stay current with emerging materials and applications",
      "Collaborate across disciplines like engineering and physics"
    ]
  },
  {
    id: "neuroscientist",
    title: "Neuroscientist",
    description: "Study the structure and function of the brain and nervous system to advance understanding of neurological conditions and cognitive processes.",
    clusterId: "scienceResearch",
    isHighIncome: true,
    isFutureReady: true,
    averageSalary: "$85,000 - $150,000",
    skills: ["Neuroimaging", "Data analysis", "Experimental design", "Scientific writing", "Clinical knowledge"],
    roadmap: [
      "Complete PhD in neuroscience or related field",
      "Gain expertise in specific neuroscience methods (EEG, fMRI, etc.)",
      "Develop strong statistical and data analysis skills",
      "Publish research in peer-reviewed journals",
      "Collaborate with clinicians or industry partners for applied research"
    ],
    aiRelated: true
  }
];
