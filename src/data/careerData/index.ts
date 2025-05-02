
import { Career, CareerCluster } from '../types';
import { careerClusters } from './clusters';
import { aiFutureCareers } from './clusters/aiFuture';
import { emergingTechCareers } from './clusters/emergingTech';
import { technologyCareers } from './clusters/technology';
import { engineeringCareers } from './clusters/engineering';
import { scienceResearchCareers } from './clusters/scienceResearch';
import { healthcareCareers } from './clusters/healthcare';
import { businessCareers } from './clusters/business';
import { educationCareers } from './clusters/education';
import { artsMediaCareers } from './clusters/artsMedia';
import { agricultureCareers } from './clusters/agriculture';
import { lawPublicSafetyCareers } from './clusters/lawPublicSafety';
import { hospitalityCareers } from './clusters/hospitality';
import { financeCareers } from './clusters/finance';
import { manufacturingCareers } from './clusters/manufacturing';
import { transportationLogisticsCareers } from './clusters/transportationLogistics';
import { constructionCareers } from './clusters/construction';
import { humanServicesCareers } from './clusters/humanServices'; 
import { environmentEnergyCareers } from './clusters/environmentEnergy';
import { governmentPublicAdminCareers } from './clusters/governmentPublicAdmin';
import { marketingSalesCareers } from './clusters/marketingSales';
import { sportsRecreationCareers } from './clusters/sportsRecreation';
import { fashionDesignCareers } from './clusters/fashionDesign';
import { communicationMediaCareers } from './clusters/communicationMedia';
import { militaryDefenseCareers } from './clusters/militaryDefense';
import { internationalRelationsCareers } from './clusters/internationalRelations';
import { artisanCraftsCareers } from './clusters/artisanCrafts';
import { miningExtractionCareers } from './clusters/miningExtraction';

// Combine all careers from different clusters
// Priority order: AI Future, Emerging Tech, Technology, Engineering, followed by others
export const careers: Career[] = [
  ...aiFutureCareers,
  ...emergingTechCareers,
  ...technologyCareers,
  ...engineeringCareers,
  ...scienceResearchCareers,
  ...healthcareCareers,
  ...businessCareers,
  ...educationCareers,
  ...artsMediaCareers,
  ...agricultureCareers,
  ...lawPublicSafetyCareers,
  ...hospitalityCareers,
  ...financeCareers,
  ...manufacturingCareers,
  ...transportationLogisticsCareers,
  ...constructionCareers,
  ...humanServicesCareers,
  ...environmentEnergyCareers,
  ...governmentPublicAdminCareers,
  ...marketingSalesCareers,
  ...sportsRecreationCareers,
  ...fashionDesignCareers,
  ...communicationMediaCareers,
  ...militaryDefenseCareers,
  ...internationalRelationsCareers,
  ...artisanCraftsCareers,
  ...miningExtractionCareers
];

// Helper functions
export const getCareersByClusterIds = (clusterIds: string[]): Career[] => {
  return careers.filter(career => clusterIds.includes(career.clusterId));
};

export const getCommonSkills = (selectedCareers: Career[]): string[] => {
  if (!selectedCareers.length) return [];
  
  // Get all skills from first career
  const commonSkills = new Set(selectedCareers[0].skills);
  
  // Keep only skills that appear in all selected careers
  for (let i = 1; i < selectedCareers.length; i++) {
    const careerSkills = new Set(selectedCareers[i].skills);
    for (const skill of commonSkills) {
      if (!careerSkills.has(skill)) {
        commonSkills.delete(skill);
      }
    }
  }
  
  return Array.from(commonSkills);
};

export const getTransferableSkills = (careers: Career[]): string[] => {
  // Count occurrences of each skill
  const skillCount: Record<string, number> = {};
  
  careers.forEach(career => {
    career.skills.forEach(skill => {
      skillCount[skill] = (skillCount[skill] || 0) + 1;
    });
  });
  
  // Find skills that appear in at least 30% of the careers
  const threshold = Math.max(2, Math.floor(careers.length * 0.3));
  
  return Object.entries(skillCount)
    .filter(([_, count]) => count >= threshold)
    .map(([skill, _]) => skill);
};

export const getFutureReadyCareers = (careers: Career[]): Career[] => {
  return careers.filter(career => career.isFutureReady);
};

export const getHighIncomeCareers = (careers: Career[]): Career[] => {
  return careers.filter(career => career.isHighIncome);
};

export { careerClusters };
