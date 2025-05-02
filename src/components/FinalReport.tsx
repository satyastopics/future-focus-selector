
import React, { useRef } from 'react';
import { Career, CareerCluster } from '../data/types';
import { getCommonSkills, getTransferableSkills } from '../data/careers';
import { careerClusters } from '../data/careerData/clusters';
import { Button } from "./ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Badge } from "./ui/badge";
import { GraduationCap, Briefcase, Book, Award, FileText } from "lucide-react";
import { useToast } from "../hooks/use-toast";

interface FinalReportProps {
  selectedCareers: Career[];
}

const FinalReport: React.FC<FinalReportProps> = ({
  selectedCareers
}) => {
  const clusters = careerClusters;
  const reportRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  
  // Add defensive checks to make sure selectedCareers is not undefined
  const careers = selectedCareers || [];
  
  const commonSkills = getCommonSkills(careers);
  const transferableSkills = getTransferableSkills(careers);
  
  // Group skills into categories
  const stemSkills = ['Math', 'Science', 'Statistics', 'Physics', 'Biology', 'Chemistry', 'Research', 'Analysis', 'Laboratory techniques', 'Analytical thinking', 'Critical thinking', 'Problem-solving', 'Logical thinking'];
  
  const technicalSkills = ['Programming', 'Coding', 'Software development', 'Data analysis', 'Computer-aided design', 'Technical writing', 'Digital literacy', 'Engineering principles'];
  
  const softSkills = ['Communication', 'Leadership', 'Teamwork', 'Time management', 'Adaptability', 'Creativity', 'Empathy', 'Collaboration', 'Interpersonal skills', 'Public speaking', 'Writing', 'Attention to detail'];
  
  const categorizeSkill = (skill: string) => {
    const lowerSkill = skill.toLowerCase();
    if (stemSkills.some(s => lowerSkill.includes(s.toLowerCase()))) return 'STEM';
    if (technicalSkills.some(s => lowerSkill.includes(s.toLowerCase()))) return 'Technical';
    if (softSkills.some(s => lowerSkill.includes(s.toLowerCase()))) return 'Soft';
    return 'Other';
  };
  
  // Create skill categories
  const categorizedSkills = transferableSkills.reduce((acc, skill) => {
    const category = categorizeSkill(skill);
    if (!acc[category]) acc[category] = [];
    acc[category].push(skill);
    return acc;
  }, {} as Record<string, string[]>);
  
  // Helper function to render skill badges
  const renderSkillBadges = (skills: string[]) => (
    <div className="flex flex-wrap gap-2 mb-4">
      {skills.map((skill, index) => (
        <Badge key={index} className="bg-career-light-purple text-career-purple hover:bg-career-purple">
          {skill}
        </Badge>
      ))}
    </div>
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
- Community College: Many offer affordable courses related to this career path
- Books and Tutorials: Check your local library or online resources
- Professional Organizations: Many offer resources for those entering the field

`).join('\n')}

## Transferable Skills Analysis
These are skills that would be valuable across multiple career paths you've selected:

${Object.entries(categorizedSkills).map(([category, skills]) => `
### ${category} Skills
${skills.join(', ')}
`).join('\n')}

## Next Steps to Consider

1. **Explore each career further** through informational interviews with professionals
2. **Identify any gaps** in your current skills compared to these career requirements
3. **Create a learning plan** focusing on the transferable skills highlighted above
4. **Look for entry-level opportunities** or internships to gain practical experience
5. **Connect with professional organizations** related to your chosen careers
`;

    // Create and download the text file
    const element = document.createElement('a');
    const file = new Blob([content], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = 'Career_Path_Report.md';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    
    toast({
      title: "Report Downloaded",
      description: "Your career path report has been downloaded successfully.",
    });
  };
  
  return (
    <div ref={reportRef} className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Your Career Path Report</h1>
        
        <Button 
          onClick={downloadReport} 
          className="bg-career-purple hover:bg-career-dark-purple text-white"
        >
          <FileText className="h-4 w-4 mr-2" />
          Download Report
        </Button>
      </div>
      
      {careers.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-lg text-gray-600">No careers selected. Go back and select some careers to generate your report.</p>
        </div>
      ) : (
        <>
          {/* Transferable Skills Analysis */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Transferable Skills Analysis
            </h2>
            <p className="text-gray-600 mb-4">
              These are valuable skills that appear across multiple career paths you've selected. They represent your most versatile and marketable abilities.
            </p>
            
            {Object.keys(categorizedSkills).length > 0 ? (
              Object.entries(categorizedSkills).map(([category, skills]) => (
                <div key={category} className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">
                    {category} Skills
                  </h3>
                  {renderSkillBadges(skills)}
                </div>
              ))
            ) : (
              <p className="text-gray-600">Select multiple careers to see transferable skills.</p>
            )}
          </section>
          
          {/* Selected Career Paths */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Selected Career Paths
            </h2>
            
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Explore detailed information about each career path
            </h3>
            
            <Accordion type="single" collapsible className="w-full">
              {careers.map((career) => {
                const careerCluster = clusters.find(c => c.id === career.clusterId);
                
                return (
                  <AccordionItem key={career.id} value={career.id}>
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex flex-col items-start text-left">
                        <div className="flex items-center">
                          <span className="text-xl font-semibold">{career.title}</span>
                          
                          {/* Only show badges for emerging fields which are less common */}
                          {career.emergingField && (
                            <Badge className="ml-2 bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
                              Emerging Field
                            </Badge>
                          )}
                          
                          {career.aiRelated && (
                            <Badge className="ml-2 bg-blue-100 text-blue-800 hover:bg-blue-200">
                              AI-Related
                            </Badge>
                          )}
                        </div>
                        
                        <div className="text-sm text-gray-500 mt-1">
                          {careerCluster?.title || career.clusterId}
                          {career.averageSalary && (
                            <span className="ml-2 text-career-purple font-medium">
                              {career.averageSalary}
                            </span>
                          )}
                        </div>
                      </div>
                    </AccordionTrigger>
                    
                    <AccordionContent>
                      <div className="pt-2 pb-6">
                        <p className="text-gray-600 mb-6">
                          {career.description}
                        </p>
                        
                        <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                          <Award className="h-4 w-4 mr-2" />
                          Key Skills
                        </h4>
                        {renderSkillBadges(career.skills)}
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                          <div className="bg-white rounded-md border border-purple-200 p-4">
                            <h5 className="font-semibold text-gray-800 mb-3 flex items-center">
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
                            <h5 className="font-semibold text-gray-800 mb-3 flex items-center">
                              <Book className="h-4 w-4 mr-2" />
                              Self-Learning Resources
                            </h5>
                            <ul className="list-none space-y-2 text-sm">
                              <li className="flex">
                                <span className="bg-green-100 text-green-700 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 flex-shrink-0 mt-0.5">
                                  1
                                </span>
                                <span>Online Courses: Platforms like Coursera, edX, Khan Academy offer free courses</span>
                              </li>
                              <li className="flex">
                                <span className="bg-green-100 text-green-700 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 flex-shrink-0 mt-0.5">
                                  2
                                </span>
                                <span>Community College: Many offer affordable courses related to this career path</span>
                              </li>
                              <li className="flex">
                                <span className="bg-green-100 text-green-700 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 flex-shrink-0 mt-0.5">
                                  3
                                </span>
                                <span>Books and Tutorials: Check your local library or online resources</span>
                              </li>
                              <li className="flex">
                                <span className="bg-green-100 text-green-700 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 flex-shrink-0 mt-0.5">
                                  4
                                </span>
                                <span>Professional Organizations: Many offer resources for those entering the field</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </section>
          
          {/* Next Steps */}
          <section className="mt-8 border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Next Steps
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white border border-gray-200 rounded-md p-4">
                <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                  <Briefcase className="h-4 w-4 mr-2" />
                  Career Exploration
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>Conduct informational interviews with professionals in your chosen fields</li>
                  <li>Shadow professionals for a day to see what the work is really like</li>
                  <li>Join industry groups and online forums to learn more about daily challenges</li>
                  <li>Attend industry events, conferences, or meetups</li>
                </ul>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-md p-4">
                <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                  <GraduationCap className="h-4 w-4 mr-2" />
                  Skill Development
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>Identify the gap between your current skills and those needed</li>
                  <li>Create a learning plan focusing on transferable skills first</li>
                  <li>Look for free or low-cost online courses to build fundamental knowledge</li>
                  <li>Practice with real-world projects or volunteer opportunities</li>
                </ul>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default FinalReport;
