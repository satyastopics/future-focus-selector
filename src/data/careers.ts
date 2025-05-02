
import { careerClusters } from './careerData/clusters';
import { careers, getCareersByClusterIds, getCommonSkills, getTransferableSkills, getFutureReadyCareers, getHighIncomeCareers } from './careerData';
import type { Career, CareerCluster } from './types';

// Re-export everything from the new structure
export {
  type Career,
  type CareerCluster,
  careers,
  careerClusters,
  getCareersByClusterIds,
  getCommonSkills,
  getTransferableSkills,
  getFutureReadyCareers,
  getHighIncomeCareers
};
