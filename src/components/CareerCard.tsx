
import React from 'react';
import { Career } from '@/data/careers';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Star, TrendingUp } from 'lucide-react';

interface CareerCardProps {
  career: Career;
  isSelected: boolean;
  onToggleSelect: (careerId: string) => void;
}

const CareerCard = ({ career, isSelected, onToggleSelect }: CareerCardProps) => {
  return (
    <Card 
      className={`career-card h-full cursor-pointer transition-all hover:shadow-md ${
        isSelected ? 'border-2 border-career-purple shadow-md' : 'border border-gray-200'
      }`}
      onClick={() => onToggleSelect(career.id)}
    >
      <div className="flex flex-col h-full p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-800">{career.title}</h3>
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
        
        <div className="space-y-2">
          <p className="text-gray-600 text-sm flex-grow">{career.description}</p>
          
          <div className="flex flex-wrap gap-1 mt-2">
            {career.isHighIncome && (
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 text-xs">
                <Star className="h-3 w-3 mr-1" />
                High Income
              </Badge>
            )}
            {career.isFutureReady && (
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 text-xs">
                <TrendingUp className="h-3 w-3 mr-1" />
                Future Ready
              </Badge>
            )}
          </div>
        </div>
        
        <div className="mt-3 text-xs text-gray-500 flex items-center">
          <Briefcase className="h-3.5 w-3.5 mr-1 text-career-purple" />
          <span>Career Growth Path Available</span>
        </div>
      </div>
    </Card>
  );
};

export default CareerCard;
