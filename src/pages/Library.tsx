
import React, { useState } from 'react';
import { careerClusters } from '@/data/careers';
import { careers } from '@/data/careers';
import Header from '@/components/Header';
import { ChevronDown, ChevronUp, ArrowLeft, Search, Info, BookOpen, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const Library = () => {
  const [expandedCareerId, setExpandedCareerId] = useState<string | null>(null);
  const [selectedCluster, setSelectedCluster] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const isMobile = useIsMobile();
  
  const handleToggleCareer = (careerId: string) => {
    setExpandedCareerId(prev => prev === careerId ? null : careerId);
  };
  
  const getCareersForCluster = (clusterId: string) => {
    return careers.filter(career => career.clusterId === clusterId);
  };
  
  const handleClusterSelect = (clusterId: string) => {
    setSelectedCluster(clusterId);
    setExpandedCareerId(null);
    setSearchTerm('');
  };
  
  const handleBackToMain = () => {
    setSelectedCluster(null);
    setExpandedCareerId(null);
  };
  
  // Filter clusters by search term
  const filteredClusters = careerClusters.filter(cluster => {
    if (!searchTerm) return true;
    return (
      cluster.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cluster.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  
  // Filter careers by search term
  const filterCareers = (careers) => {
    if (!searchTerm) return careers;
    return careers.filter(career => 
      career.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      career.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (career.skills && career.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase())))
    );
  };
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-grow py-4 md:py-8 container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-career-purple">
              Career Library
            </h1>
            <p className="text-sm text-gray-600 mt-1">
              Browse all careers by cluster or search to find specific roles
            </p>
          </div>
          
          <div className="flex gap-2">
            <Link to="/">
              <Button
                variant="outline"
                size={isMobile ? "sm" : "default"}
                className="flex items-center gap-1 transition-all duration-200 hover:bg-gray-100"
              >
                <ArrowLeft className="h-4 w-4" />
                <span className={isMobile ? "hidden" : "inline"}>Back to Explorer</span>
                <span className={isMobile ? "inline" : "hidden"}>Explorer</span>
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/2 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input 
                placeholder="Search careers, skills, or clusters..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="w-full md:w-1/2 flex items-center">
              <div className="w-full bg-amber-50 p-3 rounded-md border border-amber-200">
                <div className="flex items-center text-amber-700 text-sm">
                  <Info className="h-4 w-4 mr-2 flex-shrink-0" />
                  <p>Click on any career to see detailed roadmaps and learning paths</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {!selectedCluster ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredClusters.map(cluster => {
              const careersInCluster = getCareersForCluster(cluster.id);
              return (
                <div 
                  key={cluster.id}
                  className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-all duration-300 cursor-pointer border border-transparent hover:border-career-light-purple"
                  onClick={() => handleClusterSelect(cluster.id)}
                >
                  <div className="flex items-center mb-2">
                    <span className="text-4xl mr-3">{cluster.icon}</span>
                    <h2 className="text-xl font-semibold text-career-purple">{cluster.title}</h2>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{cluster.description}</p>
                  <div className="mt-3 flex items-center">
                    <Briefcase className="h-4 w-4 text-career-purple mr-2" />
                    <span className="text-sm font-medium text-career-purple">
                      {careersInCluster.length} career{careersInCluster.length !== 1 && 's'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <button 
              onClick={handleBackToMain}
              className="mb-4 flex items-center text-career-purple hover:text-career-dark-purple transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to all clusters
            </button>
            
            <div className="bg-white rounded-lg shadow-md p-4 mb-6">
              {careerClusters.find(c => c.id === selectedCluster) && (
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                  <div className="flex items-center">
                    <span className="text-4xl mr-3">
                      {careerClusters.find(c => c.id === selectedCluster)?.icon}
                    </span>
                    <div>
                      <h2 className="text-xl font-semibold text-career-purple">
                        {careerClusters.find(c => c.id === selectedCluster)?.title}
                      </h2>
                      <p className="text-gray-600 text-sm">
                        {careerClusters.find(c => c.id === selectedCluster)?.description}
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Key Skills for this Cluster:</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {careerClusters.find(c => c.id === selectedCluster)?.keySkills?.map(skill => (
                    <span 
                      key={skill} 
                      className="bg-career-light-purple text-career-purple px-2 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              {filterCareers(getCareersForCluster(selectedCluster)).length > 0 ? (
                filterCareers(getCareersForCluster(selectedCluster)).map(career => (
                  <div 
                    key={career.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden border border-transparent hover:border-career-light-purple transition-colors"
                  >
                    <div 
                      className={`p-4 cursor-pointer flex justify-between items-center ${
                        expandedCareerId === career.id ? 'bg-career-light-purple bg-opacity-20' : ''
                      }`}
                      onClick={() => handleToggleCareer(career.id)}
                    >
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center gap-2">
                          <h3 className="font-semibold text-lg">{career.title}</h3>
                        </div>
                        {expandedCareerId !== career.id && (
                          <p className="text-gray-600 text-sm mt-1 line-clamp-2">{career.description}</p>
                        )}
                      </div>
                      <div className="ml-4 flex flex-col items-center">
                        {expandedCareerId === career.id ? (
                          <>
                            <ChevronUp className="h-5 w-5 text-career-purple" />
                            <span className="text-xs text-career-purple">Close</span>
                          </>
                        ) : (
                          <>
                            <ChevronDown className="h-5 w-5 text-career-purple" />
                            <span className="text-xs text-career-purple">Details</span>
                          </>
                        )}
                      </div>
                    </div>
                    
                    {expandedCareerId === career.id && (
                      <div className="p-4 border-t border-gray-100">
                        <p className="text-gray-600 mb-4">{career.description}</p>
                        
                        {career.skills && career.skills.length > 0 && (
                          <div className="mb-4">
                            <h4 className="font-medium text-career-purple mb-2">Required Skills:</h4>
                            <div className="flex flex-wrap gap-2">
                              {career.skills.map((skill, index) => (
                                <span 
                                  key={`${skill}-${index}`} 
                                  className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-sm"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {career.roadmap && career.roadmap.length > 0 && (
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <h4 className="font-medium text-career-purple">Learning Roadmap:</h4>
                              <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                                Growth Path
                              </Badge>
                            </div>
                            <div className="space-y-3 pl-0 md:pl-4">
                              {career.roadmap.map((step, index) => (
                                <div key={index} className="flex items-start bg-gray-50 p-2 rounded border border-gray-100">
                                  <span className="w-6 h-6 bg-career-light-purple text-career-purple rounded-full flex items-center justify-center flex-shrink-0 mr-2">
                                    {index + 1}
                                  </span>
                                  <p className="text-gray-700">{step}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <div className="flex items-center mb-2">
                            <BookOpen className="h-4 w-4 text-green-600 mr-2" />
                            <h4 className="font-medium text-green-700">Self-Learning Path</h4>
                          </div>
                          <div className="bg-green-50 p-3 rounded-md border border-green-100">
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-start">
                                <span className="mr-2 text-green-500">•</span>
                                <span>Free online courses on platforms like Coursera, edX, and Khan Academy</span>
                              </li>
                              <li className="flex items-start">
                                <span className="mr-2 text-green-500">•</span>
                                <span>YouTube tutorials for visual learning of core concepts</span>
                              </li>
                              <li className="flex items-start">
                                <span className="mr-2 text-green-500">•</span>
                                <span>Build a portfolio showcasing your projects and skills</span>
                              </li>
                              <li className="flex items-start">
                                <span className="mr-2 text-green-500">•</span>
                                <span>Join online communities to network with professionals</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="bg-white rounded-lg p-8 text-center shadow-sm border border-gray-200">
                  <Info className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <h3 className="text-lg font-medium text-gray-600 mb-1">No matching careers found</h3>
                  <p className="text-gray-500 mb-4">Try adjusting your search term or browse another cluster</p>
                  <Button 
                    variant="outline" 
                    onClick={() => setSearchTerm('')}
                    className="border-career-purple text-career-purple hover:bg-career-light-purple hover:text-career-purple"
                  >
                    Clear Search
                  </Button>
                </div>
              )}
            </div>
          </div>
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

export default Library;
