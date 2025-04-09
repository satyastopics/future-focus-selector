
import React from 'react';
import { CareerCluster } from '@/data/careerClusters';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ClusterCardProps {
  cluster: CareerCluster;
  isSelected: boolean;
  onToggleSelect: (clusterId: string) => void;
}

const ClusterCard = ({ cluster, isSelected, onToggleSelect }: ClusterCardProps) => {
  return (
    <Card 
      className={`career-card h-full cursor-pointer transition-all p-5 hover:shadow-md ${
        isSelected ? 'ring-2 ring-career-purple bg-career-light-purple bg-opacity-10' : ''
      }`}
      onClick={() => onToggleSelect(cluster.id)}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold">{cluster.title}</h3>
          <span className="text-3xl">{cluster.icon}</span>
        </div>
        <p className="text-gray-600 text-sm flex-grow">{cluster.description}</p>
        
        {cluster.keySkills && (
          <div className="mt-3">
            <p className="text-xs text-gray-500 mb-1">Key skills you'll develop:</p>
            <div className="flex flex-wrap gap-1">
              {cluster.keySkills.map((skill, index) => (
                <Badge key={index} variant="outline" className="text-xs bg-gray-50">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        )}
        
        <div className="mt-4 flex justify-end">
          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center 
                        ${isSelected 
                          ? 'bg-career-purple border-career-purple text-white' 
                          : 'border-gray-300'}`}>
            {isSelected && (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ClusterCard;
