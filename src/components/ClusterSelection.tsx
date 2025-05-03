import React, { useMemo } from 'react';
import { CareerCluster } from '@/data/careerClusters';
import ClusterCard from './ClusterCard';
import { Button } from '@/components/ui/button';

interface ClusterSelectionProps {
  clusters: CareerCluster[];
  selectedClusters: string[];
  onToggleCluster: (clusterId: string) => void;
  onNext: () => void;
}

const ClusterSelection = ({ 
  clusters, 
  selectedClusters, 
  onToggleCluster, 
  onNext 
}: ClusterSelectionProps) => {
  // Prioritize key clusters that are most relevant to future opportunities
  const prioritizedClusters = useMemo(() => {
    // Define priority clusters that should appear first
    const priorityOrder = [
      "aiFuture",          // AI & Future Technologies
      "emergingTech",      // Emerging Technologies 
      "technology",        // Technology & Computing
      "engineering",       // Engineering & Design
      "scienceResearch",   // Science & Research
      "healthcare",        // Healthcare & Medicine
      "environmentEnergy", // Environment & Energy
      "business",          // Business & Management
      // Other clusters will follow in their original order
    ];
    
    // Create a sorted copy of the clusters array
    return [...clusters].sort((a, b) => {
      const aIndex = priorityOrder.indexOf(a.id);
      const bIndex = priorityOrder.indexOf(b.id);
      
      // If both are in priority list, sort by priority order
      if (aIndex !== -1 && bIndex !== -1) {
        return aIndex - bIndex;
      }
      
      // If only a is in priority list, a comes first
      if (aIndex !== -1) return -1;
      
      // If only b is in priority list, b comes first
      if (bIndex !== -1) return 1;
      
      // Otherwise, keep original order
      return 0;
    });
  }, [clusters]);

  return (
    <div className="container mx-auto px-4 py-6 animate-fade-in">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Select Career Clusters</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Career clusters are groups of jobs that need similar skills. 
          Select any clusters that interest you to explore related careers.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {prioritizedClusters.map((cluster) => (
          <ClusterCard
            key={cluster.id}
            cluster={cluster}
            isSelected={selectedClusters.includes(cluster.id)}
            onToggleSelect={onToggleCluster}
          />
        ))}
      </div>
      
      <div className="mt-8 flex justify-center">
        <Button 
          onClick={onNext}
          disabled={selectedClusters.length === 0}
          className="bg-career-purple hover:bg-career-dark-purple"
        >
          {selectedClusters.length === 0 
            ? 'Select at least one cluster' 
            : `View Careers (${selectedClusters.length} selected)`}
        </Button>
      </div>
    </div>
  );
};

export default ClusterSelection;
