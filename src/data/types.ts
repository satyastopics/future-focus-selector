
export interface Career {
  id: string;
  title: string;
  description: string;
  clusterId: string;
  isHighIncome: boolean;
  isFutureReady: boolean;
  skills: string[];
  roadmap?: string[]; // Optional for careers without detailed roadmaps
  emergingField?: boolean; // New field for emerging careers
  aiRelated?: boolean; // New field for AI-related careers
  averageSalary?: string; // Optional salary range information
}

export interface CareerCluster {
  id: string;
  title: string;
  description: string;
  icon: string;
  keySkills?: string[];
}
