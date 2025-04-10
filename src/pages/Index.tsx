
import React, { useState } from 'react';
import { careerClusters } from '@/data/careerClusters';
import { careers, getCareersByClusterIds } from '@/data/careers';
import Header from '@/components/Header';
import StepIndicator from '@/components/StepIndicator';
import ClusterSelection from '@/components/ClusterSelection';
import CareerSelection from '@/components/CareerSelection';
import FinalReport from '@/components/FinalReport';
import { useToast } from '@/components/ui/use-toast';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const [step, setStep] = useState(0);
  const [selectedClusterIds, setSelectedClusterIds] = useState<string[]>([]);
  const [selectedCareerIds, setSelectedCareerIds] = useState<string[]>([]);
  const { toast } = useToast();
  const isMobile = useIsMobile();
  
  const filteredCareers = getCareersByClusterIds(selectedClusterIds);
  const selectedCareers = careers.filter(career => selectedCareerIds.includes(career.id));
  
  const handleToggleCluster = (clusterId: string) => {
    setSelectedClusterIds(prev => 
      prev.includes(clusterId)
        ? prev.filter(id => id !== clusterId)
        : [...prev, clusterId]
    );
  };
  
  const handleToggleCareer = (careerId: string) => {
    setSelectedCareerIds(prev => 
      prev.includes(careerId)
        ? prev.filter(id => id !== careerId)
        : [...prev, careerId]
    );
  };
  
  const handleReset = () => {
    setStep(0);
    setSelectedClusterIds([]);
    setSelectedCareerIds([]);
    toast({
      title: "Reset Complete",
      description: "You can now start a fresh career exploration.",
    });
  };
  
  const handleNext = () => {
    if (step === 0 && selectedClusterIds.length === 0) {
      toast({
        title: "Please select at least one cluster",
        description: "You need to select at least one career cluster to continue.",
        variant: "destructive",
      });
      return;
    }
    
    if (step === 1 && selectedCareerIds.length === 0) {
      toast({
        title: "Please select at least one career",
        description: "You need to select at least one career to continue.",
        variant: "destructive",
      });
      return;
    }
    
    setStep(prev => prev + 1);
    
    // Scroll to top when moving to next step
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-grow py-4 md:py-8">
        <div className="container mx-auto px-4">
          <StepIndicator currentStep={step} totalSteps={3} />
        </div>
        
        {step === 0 && (
          <ClusterSelection
            clusters={careerClusters}
            selectedClusters={selectedClusterIds}
            onToggleCluster={handleToggleCluster}
            onNext={handleNext}
          />
        )}
        
        {step === 1 && (
          <CareerSelection
            careers={filteredCareers}
            selectedCareers={selectedCareerIds}
            onToggleCareer={handleToggleCareer}
            onBack={() => setStep(0)}
            onNext={handleNext}
          />
        )}
        
        {step === 2 && (
          <FinalReport
            selectedCareers={selectedCareers}
            clusters={careerClusters}
            onBack={() => setStep(1)}
            onReset={handleReset}
          />
        )}
      </main>
      
      <footer className="bg-white py-4 border-t">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          Career Explorer &copy; {new Date().getFullYear()} | Helping students find their path
        </div>
      </footer>
    </div>
  );
};

export default Index;
