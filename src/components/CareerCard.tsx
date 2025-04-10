
import React from 'react';
import { Career } from '@/data/careers';
import { Card } from '@/components/ui/card';

interface CareerCardProps {
  career: Career;
  isSelected: boolean;
  onToggleSelect: (careerId: string) => void;
}

const CareerCard = ({ career, isSelected, onToggleSelect }: CareerCardProps) => {
  return (
    <Card 
      className={`career-card h-full cursor-pointer transition-all hover:shadow-md ${isSelected ? 'border-2 border-career-purple shadow-md' : 'border border-gray-200'}`}
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
        <p className="text-gray-600 text-sm flex-grow">{career.description}</p>
        <div className="mt-3 text-xs text-gray-500 flex items-center">
          <span className="inline-flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1 text-career-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            Career Growth Path Available
          </span>
        </div>
      </div>
    </Card>
  );
};

export default CareerCard;
