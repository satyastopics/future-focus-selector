
import React, { useState } from 'react';
import { Career } from '@/data/careers';
import CareerCard from './CareerCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter } from 'lucide-react';

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
  
  const filteredCareers = careers.filter(career => {
    return career.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
           career.description.toLowerCase().includes(searchTerm.toLowerCase());
  });
  
  return (
    <div className="container mx-auto px-4 py-6 animate-fade-in">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Select Careers You're Interested In</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Based on your selected clusters, here are careers that might interest you.
          Choose the ones you'd like to include in your personalized report.
        </p>
        <div className="mt-4 bg-amber-50 border border-amber-200 rounded-md p-3 max-w-xl mx-auto">
          <div className="flex items-center text-amber-700 text-sm">
            <Filter className="h-4 w-4 mr-2 flex-shrink-0" />
            <p>All careers shown are high-income and future-ready with detailed growth paths</p>
          </div>
        </div>
      </div>
      
      <div className="mb-6 max-w-md mx-auto">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            type="text"
            placeholder="Search careers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 w-full"
          />
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
          <p className="text-gray-500">No careers match your search. Try adjusting your search term.</p>
        </div>
      )}
      
      <div className="mt-8 flex justify-between">
        <Button 
          onClick={onBack}
          variant="outline"
          className="transition-all duration-200 hover:bg-gray-100"
        >
          Back to Clusters
        </Button>
        <Button 
          onClick={onNext}
          disabled={selectedCareers.length === 0}
          className="bg-career-purple hover:bg-career-dark-purple transition-all duration-200"
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
