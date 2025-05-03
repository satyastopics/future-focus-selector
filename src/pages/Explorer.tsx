
import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import StepIndicator from '@/components/StepIndicator';
import ClusterSelection from '@/components/ClusterSelection';
import CareerSelection from '@/components/CareerSelection';
import FinalReport from '@/components/FinalReport';
import { careerClusters } from '@/data/careers';
import { getCareersByClusterIds } from '@/data/careers';
import { Button } from '@/components/ui/button';
import { BookOpen, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Explorer = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedClusters, setSelectedClusters] = useState<string[]>([]);
  const [selectedCareers, setSelectedCareers] = useState<string[]>([]);
  
  // Get filtered careers based on selected clusters
  const filteredCareers = selectedClusters.length > 0
    ? getCareersByClusterIds(selectedClusters)
    : [];
  
  const handleToggleCluster = (clusterId: string) => {
    setSelectedClusters(prev => {
      if (prev.includes(clusterId)) {
        return prev.filter(id => id !== clusterId);
      } else {
        return [...prev, clusterId];
      }
    });
  };
  
  const handleToggleCareer = (careerId: string) => {
    setSelectedCareers(prev => {
      if (prev.includes(careerId)) {
        return prev.filter(id => id !== careerId);
      } else {
        return [...prev, careerId];
      }
    });
  };
  
  const handleNext = () => {
    setCurrentStep(prev => Math.min(prev + 1, 3));
  };
  
  const handleBack = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };
  
  const handleReset = () => {
    setCurrentStep(1);
    setSelectedClusters([]);
    setSelectedCareers([]);
  };
  
  const selectedCareerObjects = filteredCareers.filter(career => 
    selectedCareers.includes(career.id)
  );
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-grow py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-career-purple">
                Career Explorer
              </h1>
              <p className="text-sm text-gray-600">
                Build a personalized career roadmap in just 3 simple steps
              </p>
            </div>
            <Link to="/library">
              <Button variant="outline" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                <span className="hidden sm:inline">Browse Library</span>
              </Button>
            </Link>
          </div>
          
          <StepIndicator
            currentStep={currentStep}
            totalSteps={3}
          />
          
          <div className="mt-8">
            {currentStep === 1 && (
              <ClusterSelection
                clusters={careerClusters}
                selectedClusters={selectedClusters}
                onToggleCluster={handleToggleCluster}
                onNext={handleNext}
              />
            )}
            
            {currentStep === 2 && (
              <CareerSelection
                careers={filteredCareers}
                selectedCareers={selectedCareers}
                onToggleCareer={handleToggleCareer}
                onBack={handleBack}
                onNext={handleNext}
              />
            )}
            
            {currentStep === 3 && (
              <FinalReport
                selectedCareers={selectedCareerObjects}
                clusters={careerClusters}
                onBack={handleBack}
                onReset={handleReset}
              />
            )}
          </div>
        </div>
      </main>
      
      <footer className="bg-white py-4 border-t">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          Career Explorer &copy; {new Date().getFullYear()} | Helping students find their path
        </div>
      </footer>
    </div>
  );
};

export default Explorer;
