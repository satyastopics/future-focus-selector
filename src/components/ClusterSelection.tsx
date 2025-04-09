
import React from 'react';
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
        {clusters.map((cluster) => (
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
