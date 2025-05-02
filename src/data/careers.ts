
import { careerClusters } from './careerData/clusters';
import { careers, getCareersByClusterIds, getCommonSkills, getTransferableSkills, getFutureReadyCareers, getHighIncomeCareers } from './careerData';
import { Career, CareerCluster } from './types';

// Re-export everything from the new structure
export {
  Career,
  careers,
  careerClusters,
  getCareersByClusterIds,
  getCommonSkills,
  getTransferableSkills,
  getFutureReadyCareers,
  getHighIncomeCareers
};
