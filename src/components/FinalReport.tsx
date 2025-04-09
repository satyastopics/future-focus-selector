
import React, { useRef } from 'react';
import { Career, getCommonSkills, getTransferableSkills } from '@/data/careers';
import { CareerCluster } from '@/data/careerClusters';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface FinalReportProps {
  selectedCareers: Career[];
  clusters: CareerCluster[];
  onBack: () => void;
  onReset: () => void;
}

const FinalReport = ({
  selectedCareers,
  clusters,
  onBack,
  onReset
}: FinalReportProps) => {
  const reportRef = useRef<HTMLDivElement>(null);
  
  const commonSkills = getCommonSkills(selectedCareers);
  const transferableSkills = getTransferableSkills(selectedCareers);

  const downloadReport = () => {
    // This is a placeholder for the actual download functionality
    // In a real app, we would generate a DOC/DOCX file using a library like docx
    // For now, we'll just simulate a download with an alert
    alert('In a full implementation, this would generate and download a DOC/DOCX file with your career report.');
  };
  
  return (
    <div className="container mx-auto px-4 py-6 animate-fade-in">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Your Career Path Report</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Based on your selections, here's a personalized report to help guide your career journey.
        </p>
      </div>
      
      <div ref={reportRef} className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h3 className="text-xl font-bold text-career-purple mb-4">Selected Careers</h3>
        
        <div className="mb-6">
          <h4 className="font-semibold mb-2">Key Skills for Your Path</h4>
          {transferableSkills.length > 0 ? (
            <div className="flex flex-wrap gap-2 mb-4">
              {transferableSkills.map((skill) => (
                <span key={skill} className="bg-career-light-purple text-career-dark-purple px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 italic">No common skills found across selected careers.</p>
          )}
          
          {commonSkills.length > 0 && (
            <div className="mt-2">
              <p className="text-sm text-gray-600">
                <span className="font-medium">Common skills across all selections:</span> {commonSkills.join(', ')}
              </p>
            </div>
          )}
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {selectedCareers.map((career) => {
            const careerCluster = clusters.find(c => c.id === career.clusterId);
            
            return (
              <AccordionItem key={career.id} value={career.id}>
                <AccordionTrigger className="text-left">
                  <div>
                    <span className="font-semibold">{career.title}</span>
                    <div className="flex gap-2 mt-1">
                      {career.isHighIncome && (
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded">
                          High Income
                        </span>
                      )}
                      {career.isFutureReady && (
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded">
                          Future Ready
                        </span>
                      )}
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pl-4 border-l-2 border-career-light-purple">
                    <p className="text-gray-600 mb-3">{career.description}</p>
                    
                    {careerCluster && (
                      <p className="text-sm mb-3">
                        <span className="font-medium">Cluster:</span> {careerCluster.title}
                      </p>
                    )}
                    
                    <div className="mb-3">
                      <h5 className="font-medium mb-1">Key Skills</h5>
                      <div className="flex flex-wrap gap-1">
                        {career.skills.map((skill) => (
                          <span key={skill} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-medium mb-1">Career Roadmap</h5>
                      <ol className="list-decimal pl-5 space-y-1 text-sm">
                        {career.roadmap.map((step, index) => (
                          <li key={index}>{step}</li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
      
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <Button 
          onClick={onBack}
          variant="outline"
        >
          Back to Career Selection
        </Button>
        <div className="flex gap-3">
          <Button
            onClick={downloadReport}
            className="bg-career-purple hover:bg-career-dark-purple"
          >
            Download Report
          </Button>
          <Button
            onClick={onReset}
            variant="ghost"
            className="text-gray-500 hover:text-gray-700"
          >
            Start Over
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FinalReport;
