
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const StepIndicator = ({ currentStep, totalSteps }: StepIndicatorProps) => {
  const isMobile = useIsMobile();
  
  // Define the steps array here instead of expecting it as a prop
  const steps = [
    { name: "Choose Clusters", description: "Select career clusters that interest you" },
    { name: "Select Careers", description: "Choose specific careers from your clusters" },
    { name: "View Report", description: "See your personalized career report" }
  ];
  
  return (
    <div className="container mx-auto px-4 mb-8">
      <div className="relative">
        <div className="hidden md:flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center">
              <div 
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentStep > index 
                    ? 'bg-career-purple text-white' 
                    : currentStep === index + 1
                    ? 'bg-career-purple text-white'
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                {index + 1}
              </div>
              <div className="mt-2 text-center">
                <div className={`font-medium ${
                  currentStep > index || currentStep === index + 1 
                    ? 'text-career-purple' 
                    : 'text-gray-500'
                }`}>
                  {step.name}
                </div>
                <div className="text-xs text-gray-500 max-w-[150px]">
                  {step.description}
                </div>
              </div>
            </div>
          ))}
          <div className="absolute top-5 h-1 w-full bg-gray-200 -z-10"></div>
          <div 
            className="absolute top-5 h-1 bg-career-purple -z-10 transition-all duration-300"
            style={{ 
              width: `${(currentStep - 1) / (totalSteps - 1) * 100}%`,
            }}  
          ></div>
        </div>
        
        {/* Mobile version */}
        <div className="md:hidden">
          <div className="flex items-center justify-between mb-4">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  currentStep > index 
                    ? 'bg-career-purple text-white' 
                    : currentStep === index + 1
                    ? 'bg-career-purple text-white'
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                {index + 1}
              </div>
            ))}
            <div className="absolute top-4 h-1 w-full bg-gray-200 -z-10"></div>
            <div 
              className="absolute top-4 h-1 bg-career-purple -z-10 transition-all duration-300"
              style={{ 
                width: `${(currentStep - 1) / (totalSteps - 1) * 100}%`,
              }}  
            ></div>
          </div>
          <div className="text-center">
            <div className="font-medium text-career-purple">
              {steps[currentStep - 1]?.name || ""}
            </div>
            <div className="text-xs text-gray-500">
              {steps[currentStep - 1]?.description || ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepIndicator;
