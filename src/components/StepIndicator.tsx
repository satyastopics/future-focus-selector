
import React from 'react';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const StepIndicator = ({ currentStep, totalSteps }: StepIndicatorProps) => {
  return (
    <div className="w-full max-w-md mx-auto my-6">
      <div className="flex items-center justify-between">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center">
              <div 
                className={`w-8 h-8 rounded-full flex items-center justify-center 
                          ${index < currentStep 
                            ? 'bg-career-purple text-white' 
                            : index === currentStep 
                              ? 'bg-career-purple text-white border-2 border-white ring-2 ring-career-purple' 
                              : 'bg-gray-200 text-gray-500'}`}
              >
                {index < currentStep ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <span className="text-sm font-medium">{index + 1}</span>
                )}
              </div>
              <span className={`text-xs mt-1 ${index === currentStep ? 'font-medium text-career-purple' : 'text-gray-500'}`}>
                {index === 0 ? 'Clusters' : index === 1 ? 'Careers' : 'Report'}
              </span>
            </div>
            {index < totalSteps - 1 && (
              <div 
                className={`flex-1 h-1 max-w-[80px] ${index < currentStep ? 'bg-career-purple' : 'bg-gray-200'}`}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default StepIndicator;
