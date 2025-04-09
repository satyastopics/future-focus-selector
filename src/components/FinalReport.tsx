
import React, { useRef } from 'react';
import { Career, getCommonSkills, getTransferableSkills } from '@/data/careers';
import { CareerCluster } from '@/data/careerClusters';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Lightbulb, Download, RotateCcw, ArrowLeft, Briefcase, TrendingUp, GraduationCap } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

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
  const { toast } = useToast();
  
  const commonSkills = getCommonSkills(selectedCareers);
  const transferableSkills = getTransferableSkills(selectedCareers);
  
  // Group skills into categories
  const stemSkills = ['Math', 'Science', 'Statistics', 'Physics', 'Biology', 'Chemistry', 'Research', 'Analysis', 'Laboratory techniques', 'Analytical thinking', 'Critical thinking', 'Problem-solving', 'Logical thinking'];
  const techSkills = ['Coding', 'Programming', 'Computer-aided design', 'Digital literacy', 'Digital skills', 'Technology skills', '3D design', 'Data analysis', 'Computer design skills'];
  const entrepreneurSkills = ['Leadership', 'Decision-making', 'Financial management', 'Risk-taking', 'Creativity', 'Communication', 'Strategic thinking', 'Business management', 'Financial understanding'];

  // Filter transferable skills into categories
  const transferableStemSkills = transferableSkills.filter(skill => 
    stemSkills.some(stemSkill => skill.toLowerCase().includes(stemSkill.toLowerCase()))
  );
  
  const transferableTechSkills = transferableSkills.filter(skill => 
    techSkills.some(techSkill => skill.toLowerCase().includes(techSkill.toLowerCase()))
  );
  
  const transferableEntrepreneurSkills = transferableSkills.filter(skill => 
    entrepreneurSkills.some(entrepreneurSkill => skill.toLowerCase().includes(entrepreneurSkill.toLowerCase()))
  );
  
  // Other transferable skills not in the above categories
  const otherTransferableSkills = transferableSkills.filter(skill => 
    !transferableStemSkills.includes(skill) && 
    !transferableTechSkills.includes(skill) && 
    !transferableEntrepreneurSkills.includes(skill)
  );

  const downloadReport = () => {
    if (!selectedCareers.length) return;
    
    // Create document content
    let content = `
# Your Career Path Report

## Selected Career Paths
${selectedCareers.map(career => `
### ${career.title}
${career.description}

**Key Skills:** ${career.skills.join(', ')}

**Career Roadmap:**
${career.roadmap.map((step, i) => `${i+1}. ${step}`).join('\n')}
`).join('\n')}

## Transferable Skills Analysis

### STEM Skills
${transferableStemSkills.length ? transferableStemSkills.join(', ') : 'No common STEM skills found in your selections.'}

### Tech Skills
${transferableTechSkills.length ? transferableTechSkills.join(', ') : 'No common tech skills found in your selections.'}

### Entrepreneurial Skills
${transferableEntrepreneurSkills.length ? transferableEntrepreneurSkills.join(', ') : 'No common entrepreneurial skills found in your selections.'}

${otherTransferableSkills.length ? `### Other Valuable Skills\n${otherTransferableSkills.join(', ')}` : ''}

${commonSkills.length ? `## Skills Common Across All Selected Careers\n${commonSkills.join(', ')}` : ''}

## Success in Today's World
Future-ready careers require a mix of STEM knowledge, technology skills, and entrepreneurial thinking - regardless of your chosen field. The skills above are key to high income potential and long-term career success.
`;

    // Convert to a Blob
    const blob = new Blob([content], { type: 'text/plain' });
    
    // Create download link
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'career-path-report.txt';
    
    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "Report Downloaded",
      description: "Your career path report has been downloaded as a text file.",
    });
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
        <div className="mb-6 p-4 bg-career-light-purple bg-opacity-20 rounded-lg border border-career-light-purple">
          <div className="flex items-start">
            <Lightbulb className="h-5 w-5 text-career-purple mr-2 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-semibold mb-1">Success in Today's World Requires:</h4>
              <p className="text-sm mb-3">
                Future-ready careers require a mix of STEM knowledge, technology skills, and entrepreneurial thinking - regardless of your chosen field. The skills below are key to high income potential and long-term career success.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                <div className="bg-white rounded p-3 shadow-sm">
                  <div className="flex items-center mb-2">
                    <GraduationCap className="h-4 w-4 text-blue-600 mr-2" />
                    <h5 className="font-medium text-blue-700">STEM Skills</h5>
                  </div>
                  {transferableStemSkills.length > 0 ? (
                    <div className="flex flex-wrap gap-1">
                      {transferableStemSkills.map((skill) => (
                        <Badge key={skill} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-gray-500">No common STEM skills found in your selections.</p>
                  )}
                </div>
                
                <div className="bg-white rounded p-3 shadow-sm">
                  <div className="flex items-center mb-2">
                    <Briefcase className="h-4 w-4 text-green-600 mr-2" />
                    <h5 className="font-medium text-green-700">Tech Skills</h5>
                  </div>
                  {transferableTechSkills.length > 0 ? (
                    <div className="flex flex-wrap gap-1">
                      {transferableTechSkills.map((skill) => (
                        <Badge key={skill} variant="outline" className="bg-green-50 text-green-700 border-green-200 text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-gray-500">No common tech skills found in your selections.</p>
                  )}
                </div>
                
                <div className="bg-white rounded p-3 shadow-sm">
                  <div className="flex items-center mb-2">
                    <TrendingUp className="h-4 w-4 text-purple-600 mr-2" />
                    <h5 className="font-medium text-purple-700">Entrepreneurial Skills</h5>
                  </div>
                  {transferableEntrepreneurSkills.length > 0 ? (
                    <div className="flex flex-wrap gap-1">
                      {transferableEntrepreneurSkills.map((skill) => (
                        <Badge key={skill} variant="outline" className="bg-purple-50 text-purple-700 border-purple-200 text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-gray-500">No common entrepreneurial skills found in your selections.</p>
                  )}
                </div>
              </div>
              
              {otherTransferableSkills.length > 0 && (
                <div className="mt-4">
                  <h5 className="font-medium text-sm mb-1">Other Valuable Skills</h5>
                  <div className="flex flex-wrap gap-1">
                    {otherTransferableSkills.map((skill) => (
                      <Badge key={skill} variant="outline" className="bg-gray-50 text-gray-700 border-gray-200 text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
              
              {commonSkills.length > 0 && (
                <div className="mt-4 pt-3 border-t border-career-light-purple">
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">Skills common across all your selected careers:</span> {commonSkills.join(', ')}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-career-purple mb-4">Selected Careers</h3>
        
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
                        {career.skills.map((skill) => {
                          let badgeClasses = "text-xs px-2 py-1 rounded";
                          
                          if (stemSkills.some(s => skill.includes(s))) {
                            badgeClasses += " bg-blue-100 text-blue-800";
                          } else if (techSkills.some(s => skill.includes(s))) {
                            badgeClasses += " bg-green-100 text-green-800";
                          } else if (entrepreneurSkills.some(s => skill.includes(s))) {
                            badgeClasses += " bg-purple-100 text-purple-800";
                          } else {
                            badgeClasses += " bg-gray-100 text-gray-800";
                          }
                          
                          return (
                            <span key={skill} className={badgeClasses}>
                              {skill}
                            </span>
                          );
                        })}
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
          className="flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Career Selection
        </Button>
        <div className="flex gap-3">
          <Button
            onClick={downloadReport}
            className="bg-career-purple hover:bg-career-dark-purple flex items-center gap-2"
          >
            <Download className="h-4 w-4" />
            Download Report
          </Button>
          <Button
            onClick={onReset}
            variant="ghost"
            className="text-gray-500 hover:text-gray-700 flex items-center gap-2"
          >
            <RotateCcw className="h-4 w-4" />
            Start Over
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FinalReport;
