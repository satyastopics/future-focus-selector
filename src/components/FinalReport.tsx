import React, { useRef } from 'react';
import { Career, CareerCluster } from '../data/types';
import { getCommonSkills, getTransferableSkills } from '../data/careers';
import { Button } from "./ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Badge } from "./ui/badge";
import { GraduationCap, Briefcase, Book, Award, FileText, BrainCircuit, Lightbulb, FileSpreadsheet } from "lucide-react";
import { useToast } from "../hooks/use-toast";
import { Link } from "react-router-dom";

interface FinalReportProps {
  selectedCareers: Career[];
  clusters: CareerCluster[];
  onBack?: () => void;
  onReset?: () => void;
}

const FinalReport: React.FC<FinalReportProps> = ({
  selectedCareers,
  clusters,
  onBack,
  onReset
}) => {
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

  // Function to generate and download the report as a DOC file
  const downloadReport = () => {
    if (careers.length === 0) {
      toast({
        title: "No careers selected",
        description: "Please select at least one career to generate a report.",
        variant: "destructive"
      });
      return;
    }
    
    try {
      // Create content for the document
      let content = `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Career Path Report</title>
<style>
  body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; color: #333; }
  h1 { color: #6D28D9; text-align: center; margin-bottom: 30px; }
  h2 { color: #4F46E5; margin-top: 40px; border-bottom: 1px solid #E5E7EB; padding-bottom: 10px; }
  h3 { color: #6D28D9; margin-top: 20px; }
  .header { text-align: center; margin-bottom: 50px; }
  .logo { font-weight: bold; font-size: 24px; color: #6D28D9; }
  .skill-badge { 
    display: inline-block; 
    background-color: #E9D5FF; 
    color: #6D28D9; 
    padding: 5px 10px; 
    border-radius: 15px; 
    margin: 5px; 
    font-size: 14px;
  }
  .career-title { color: #6D28D9; font-weight: bold; font-size: 18px; }
  .career-cluster { color: #8B5CF6; font-style: italic; }
  .career-salary { color: #6D28D9; font-weight: bold; }
  .section { margin-bottom: 30px; }
  .badge { 
    display: inline-block; 
    padding: 3px 8px; 
    border-radius: 10px; 
    font-size: 12px; 
    margin-right: 5px;
  }
  .emerging { background-color: #D1FAE5; color: #065F46; }
  .ai-related { background-color: #DBEAFE; color: #1E40AF; }
  .skill-category { font-weight: bold; margin-top: 15px; color: #4F46E5; }
  .step { margin-left: 20px; position: relative; padding-left: 25px; margin-bottom: 10px; }
  .step-number { 
    position: absolute; 
    left: 0;
    width: 20px;
    height: 20px;
    background-color: #E9D5FF;
    color: #6D28D9;
    border-radius: 50%;
    text-align: center;
    font-size: 12px;
    line-height: 20px;
    font-weight: bold;
  }
  .footer { 
    text-align: center; 
    margin-top: 50px; 
    padding-top: 20px; 
    border-top: 1px solid #E5E7EB; 
    color: #6B7280;
    font-size: 14px;
  }
</style>
</head>
<body>
  <div class="header">
    <div class="logo">Career Explorer</div>
    <p>FutureReadySchools.com</p>
  </div>

  <h1>Your Career Path Report</h1>
  
  <div class="section">
    <h2>Transferable Skills Analysis</h2>
    <p>These are valuable skills that appear across multiple career paths you've selected. They represent your most versatile and marketable abilities.</p>
`;

      // Add transferable skills by category
      Object.entries(categorizedSkills).forEach(([category, skills]) => {
        content += `<div class="skill-category">${category} Skills</div>`;
        content += `<div>`;
        skills.forEach(skill => {
          content += `<span class="skill-badge">${skill}</span>`;
        });
        content += `</div>`;
      });

      // Add selected careers
      content += `
  </div>
  
  <div class="section">
    <h2>Selected Career Paths</h2>
`;

      careers.forEach(career => {
        const careerCluster = clusters.find(c => c.id === career.clusterId);
        
        content += `
    <div style="margin-bottom: 40px;">
      <h3 class="career-title">${career.title}</h3>
      <p class="career-cluster">${careerCluster?.title || career.clusterId}</p>
      
      ${career.emergingField ? '<span class="badge emerging">Emerging Field</span>' : ''}
      ${career.aiRelated ? '<span class="badge ai-related">AI-Related</span>' : ''}
      
      ${career.averageSalary ? `<p class="career-salary">Average Salary: ${career.averageSalary}</p>` : ''}
      
      <p>${career.description}</p>
      
      <div class="skill-category">Key Skills</div>
      <div>
`;
        
        career.skills.forEach(skill => {
          content += `<span class="skill-badge">${skill}</span>`;
        });
        
        content += `
      </div>
      
      <div class="skill-category">Traditional Career Path:</div>
`;
        
        if (career.roadmap && career.roadmap.length > 0) {
          career.roadmap.forEach((step, index) => {
            content += `<div class="step"><span class="step-number">${index + 1}</span>${step}</div>`;
          });
        } else {
          content += `<p>No specific roadmap provided for this career.</p>`;
        }
        
        content += `
    </div>
`;
      });

      // Add next steps and footer
      content += `
  </div>
  
  <div class="section">
    <h2>Next Steps</h2>
    <div class="skill-category">Career Exploration</div>
    <ul>
      <li>Conduct informational interviews with professionals in your chosen fields</li>
      <li>Shadow professionals for a day to see what the work is really like</li>
      <li>Join industry groups and online forums to learn more about daily challenges</li>
      <li>Attend industry events, conferences, or meetups</li>
    </ul>
    
    <div class="skill-category">Skill Development</div>
    <ul>
      <li>Identify the gap between your current skills and those needed</li>
      <li>Create a learning plan focusing on transferable skills first</li>
      <li>Look for free or low-cost online courses to build fundamental knowledge</li>
      <li>Practice with real-world projects or volunteer opportunities</li>
    </ul>
  </div>
  
  <div class="footer">
    Career Explorer Report | Generated on ${new Date().toLocaleDateString()} | FutureReadySchools.com
  </div>
</body>
</html>
`;

      // Create a Blob with the content
      const blob = new Blob([content], { type: 'application/msword' });
      
      // Create a download link
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `career-report-${new Date().toISOString().slice(0, 10)}.doc`;
      
      // Trigger the download
      document.body.appendChild(link);
      link.click();
      
      // Clean up
      URL.revokeObjectURL(url);
      document.body.removeChild(link);
      
      toast({
        title: "Report downloaded",
        description: "Your career report has been downloaded successfully.",
      });
    } catch (error) {
      console.error("Error generating report:", error);
      toast({
        title: "Error downloading report",
        description: "There was a problem generating your report. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <div ref={reportRef} className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Your Career Path Report</h1>
        {careers.length > 0 && (
          <Button 
            onClick={downloadReport} 
            variant="outline"
            className="flex items-center gap-1.5"
          >
            <FileText className="h-4 w-4" /> Download Report
          </Button>
        )}
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
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
            
            {/* New CTA section for additional resources */}
            <div className="bg-career-light-purple/20 rounded-xl p-6 border border-career-light-purple/30 mt-8">
              <h3 className="text-xl font-semibold text-career-purple mb-4 text-center">
                Additional Career Planning Resources
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col items-center text-center">
                  <BrainCircuit className="h-8 w-8 text-career-purple mb-2" />
                  <h4 className="font-semibold text-gray-800 mb-2">Psychometric Assessment</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Discover your strengths, abilities, and career fit with our detailed psychometric assessment
                  </p>
                  <Button className="mt-auto" variant="secondary">
                    Take Assessment
                  </Button>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col items-center text-center">
                  <Lightbulb className="h-8 w-8 text-career-purple mb-2" />
                  <h4 className="font-semibold text-gray-800 mb-2">Problem-Based Explorer</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Find careers based on real-world problems you're passionate about solving
                  </p>
                  <Button className="mt-auto" variant="secondary">
                    Explore Problems
                  </Button>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col items-center text-center">
                  <FileSpreadsheet className="h-8 w-8 text-career-purple mb-2" />
                  <h4 className="font-semibold text-gray-800 mb-2">Career Planning Guide</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Access our comprehensive interactive career planning guide with templates and checklists
                  </p>
                  <Button className="mt-auto" variant="secondary">
                    Access Guide
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
      
      <div className="flex justify-between mt-8 pt-4 border-t border-gray-200">
        {onBack && (
          <Button 
            onClick={onBack}
            variant="outline"
            className="flex items-center gap-2"
          >
            Back to Careers
          </Button>
        )}
        
        {onReset && (
          <Button 
            onClick={onReset}
            variant="secondary"
            className="ml-auto"
          >
            Start Over
          </Button>
        )}
      </div>
    </div>
  );
};

export default FinalReport;
