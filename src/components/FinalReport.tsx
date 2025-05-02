
import React, { useRef } from 'react';
import { Career, getCommonSkills, getTransferableSkills } from '@/data/careers';
import { CareerCluster } from '@/data/careerClusters';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { 
  Lightbulb, Download, RotateCcw, ArrowLeft, Briefcase, 
  TrendingUp, GraduationCap, ChevronDown, BookOpen, Youtube, 
  Link, FileText, Computer, Star, CircleArrowRight
} from 'lucide-react';
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
  
  // Add defensive checks to make sure selectedCareers is not undefined
  const careers = selectedCareers || [];
  
  const commonSkills = getCommonSkills(careers);
  const transferableSkills = getTransferableSkills(careers);
  
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
    if (!careers.length) return;
    
    // Create document content
    let content = `
# Your Career Path Report

## Selected Career Paths
${careers.map(career => `
### ${career.title}
${career.description}

**Key Skills:** ${career.skills.join(', ')}

**Career Roadmap:**
${career.roadmap && career.roadmap.length > 0 
  ? career.roadmap.map((step, i) => `${i+1}. ${step}`).join('\n')
  : 'No specific roadmap provided.'}

**Self-Learning Resources:**
- Online Courses: Platforms like Coursera, edX, Khan Academy, and YouTube offer free courses on almost any subject
- Practice Projects: Build a portfolio by creating real-world projects that demonstrate your skills
- Communities: Join online communities (Reddit, Discord, specialized forums) related to your field
- Free Tools: Use open-source software and free tiers of professional tools to practice
- AI Assistance: Use AI tools like ChatGPT to help explain concepts, debug problems, or generate learning plans
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

## Self-Learning Tips
1. Create a structured learning plan with clear goals
2. Break down big topics into smaller, manageable chunks
3. Balance theory with hands-on practice
4. Join communities to learn from others and stay motivated
5. Document your learning journey and build a portfolio
6. Use AI tools to accelerate your learning and solve problems
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
  
  // Helper function to render resource icon
  const renderResourceIcon = (resourceType: string) => {
    switch (resourceType.toLowerCase()) {
      case 'youtube':
        return <Youtube className="h-3 w-3 text-red-500" />;
      case 'article':
        return <FileText className="h-3 w-3 text-blue-500" />;
      case 'course':
        return <BookOpen className="h-3 w-3 text-green-500" />;
      case 'tool':
        return <Computer className="h-3 w-3 text-purple-500" />;
      case 'website':
      default:
        return <Link className="h-3 w-3 text-gray-500" />;
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-6 animate-fade-in">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Your Career Path Report</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Based on your selections, here's a personalized report to help guide your career journey.
        </p>
        <div className="mt-2 bg-amber-50 border border-amber-200 rounded-md p-3 max-w-2xl mx-auto">
          <div className="flex items-center text-amber-700">
            <Star className="h-4 w-4 mr-2 flex-shrink-0" />
            <p className="text-sm font-medium">Click on each career below to see detailed roadmaps and skills</p>
          </div>
        </div>
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
        
        <h3 className="text-xl font-bold text-career-purple mb-4 flex items-center">
          Selected Careers
          <span className="ml-2 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full flex items-center">
            <ChevronDown className="h-3 w-3 mr-1" /> Click to expand
          </span>
        </h3>
        
        <Accordion type="single" collapsible className="w-full">
          {careers.map((career) => {
            const careerCluster = clusters.find(c => c.id === career.clusterId);
            
            return (
              <AccordionItem key={career.id} value={career.id}>
                <AccordionTrigger className="text-left hover:bg-gray-50 px-3 py-3 rounded-md transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full pr-6">
                    <span className="font-semibold">{career.title}</span>
                    <div className="flex gap-2 mt-1 sm:mt-0">
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
                  <div className="pl-4 border-l-2 border-career-light-purple pt-2">
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
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                      <div className="bg-white rounded-md border border-gray-200 p-4">
                        <h5 className="font-medium mb-3 text-career-purple flex items-center">
                          <GraduationCap className="h-4 w-4 mr-2" />
                          Traditional Career Path
                        </h5>
                        {career.roadmap && career.roadmap.length > 0 ? (
                          <ol className="list-none space-y-2 text-sm">
                            {career.roadmap.map((step, index) => (
                              <li key={index} className="flex">
                                <span className="bg-career-light-purple text-career-purple rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 flex-shrink-0 mt-0.5">
                                  {index + 1}
                                </span>
                                <span>{step}</span>
                              </li>
                            ))}
                          </ol>
                        ) : (
                          <p className="text-sm text-gray-500">No specific roadmap provided for this career.</p>
                        )}
                      </div>
                      
                      <div className="bg-white rounded-md border border-green-200 p-4">
                        <h5 className="font-medium mb-2 text-green-700 flex items-center">
                          <TrendingUp className="h-4 w-4 mr-2" />
                          Self-Learning Path
                        </h5>
                        
                        <div className="space-y-3 text-sm">
                          <div>
                            <p className="font-medium text-xs mb-1.5 text-gray-700">Free Learning Resources:</p>
                            <ul className="space-y-1.5">
                              <li className="flex items-start">
                                <span className="mr-2 mt-0.5">{renderResourceIcon('youtube')}</span>
                                <span>YouTube tutorials for visual learning of core concepts</span>
                              </li>
                              <li className="flex items-start">
                                <span className="mr-2 mt-0.5">{renderResourceIcon('course')}</span>
                                <span>Free courses on platforms like Coursera, edX, and Khan Academy</span>
                              </li>
                              <li className="flex items-start">
                                <span className="mr-2 mt-0.5">{renderResourceIcon('article')}</span>
                                <span>Blogs and articles from industry professionals</span>
                              </li>
                              <li className="flex items-start">
                                <span className="mr-2 mt-0.5">{renderResourceIcon('tool')}</span>
                                <span>Practice with free tools and open-source software</span>
                              </li>
                            </ul>
                          </div>
                          
                          <div>
                            <p className="font-medium text-xs mb-1.5 text-gray-700">Building Experience:</p>
                            <ul className="space-y-1.5">
                              <li className="flex items-start">
                                <CircleArrowRight className="h-3 w-3 text-green-600 mr-2 mt-0.5" />
                                <span>Create a portfolio showcasing your projects and skills</span>
                              </li>
                              <li className="flex items-start">
                                <CircleArrowRight className="h-3 w-3 text-green-600 mr-2 mt-0.5" />
                                <span>Contribute to relevant communities and forums</span>
                              </li>
                              <li className="flex items-start">
                                <CircleArrowRight className="h-3 w-3 text-green-600 mr-2 mt-0.5" />
                                <span>Use AI tools to accelerate learning and problem-solving</span>
                              </li>
                              <li className="flex items-start">
                                <CircleArrowRight className="h-3 w-3 text-green-600 mr-2 mt-0.5" />
                                <span>Volunteer or freelance to gain real-world experience</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 p-3 rounded-md border border-blue-200 mb-2">
                      <h5 className="font-medium text-blue-700 text-sm mb-1.5 flex items-center">
                        <Star className="h-3.5 w-3.5 text-yellow-500 mr-1.5" />
                        Success Tips for {career.title}
                      </h5>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li className="flex items-start">
                          <span className="mr-1.5 text-blue-500">•</span>
                          <span>Focus on building a portfolio that demonstrates practical skills</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-1.5 text-blue-500">•</span>
                          <span>Learn continuously to stay updated with industry trends</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-1.5 text-blue-500">•</span>
                          <span>Network with professionals in the field through online communities</span>
                        </li>
                        {career.isHighIncome && (
                          <li className="flex items-start">
                            <span className="mr-1.5 text-blue-500">•</span>
                            <span>Develop entrepreneurial skills alongside technical expertise</span>
                          </li>
                        )}
                      </ul>
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
