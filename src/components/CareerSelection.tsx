
import React, { useState } from 'react';
import { Career } from '@/data/careers';
import CareerCard from './CareerCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

interface CareerSelectionProps {
  careers: Career[];
  selectedCareers: string[];
  onToggleCareer: (careerId: string) => void;
  onBack: () => void;
  onNext: () => void;
}

const CareerSelection = ({
  careers,
  selectedCareers,
  onToggleCareer,
  onBack,
  onNext
}: CareerSelectionProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<'all' | 'high-income' | 'future-ready'>('all');
  
  const filteredCareers = careers.filter(career => {
    const matchesSearch = career.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          career.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filter === 'all') return matchesSearch;
    if (filter === 'high-income') return matchesSearch && career.isHighIncome;
    if (filter === 'future-ready') return matchesSearch && career.isFutureReady;
    
    return matchesSearch;
  });
  
  return (
    <div className="container mx-auto px-4 py-6 animate-fade-in">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Select Careers You're Interested In</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Based on your selected clusters, here are careers that might interest you.
          Choose the ones you'd like to include in your personalized report.
        </p>
      </div>
      
      <div className="mb-6 flex flex-col md:flex-row gap-4">
        <div className="flex-grow">
          <Input
            type="text"
            placeholder="Search careers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          <Badge 
            onClick={() => setFilter('all')}
            className={`cursor-pointer px-4 py-2 ${
              filter === 'all' 
                ? 'bg-career-purple text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All
          </Badge>
          <Badge 
            onClick={() => setFilter('high-income')}
            className={`cursor-pointer px-4 py-2 ${
              filter === 'high-income' 
                ? 'bg-green-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            High Income
          </Badge>
          <Badge 
            onClick={() => setFilter('future-ready')}
            className={`cursor-pointer px-4 py-2 ${
              filter === 'future-ready' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Future Ready
          </Badge>
        </div>
      </div>
      
      {filteredCareers.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCareers.map((career) => (
            <CareerCard
              key={career.id}
              career={career}
              isSelected={selectedCareers.includes(career.id)}
              onToggleSelect={onToggleCareer}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500">No careers match your filters. Try adjusting your search.</p>
        </div>
      )}
      
      <div className="mt-8 flex justify-between">
        <Button 
          onClick={onBack}
          variant="outline"
        >
          Back to Clusters
        </Button>
        <Button 
          onClick={onNext}
          disabled={selectedCareers.length === 0}
          className="bg-career-purple hover:bg-career-dark-purple"
        >
          {selectedCareers.length === 0 
            ? 'Select at least one career' 
            : `Generate Report (${selectedCareers.length} selected)`}
        </Button>
      </div>
    </div>
  );
};

export default CareerSelection;
