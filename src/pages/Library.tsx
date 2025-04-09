
import React, { useState } from 'react';
import { careerClusters } from '@/data/careerClusters';
import { careers } from '@/data/careers';
import Header from '@/components/Header';
import { ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Library = () => {
  const [expandedCareerId, setExpandedCareerId] = useState<string | null>(null);
  const [selectedCluster, setSelectedCluster] = useState<string | null>(null);
  
  const handleToggleCareer = (careerId: string) => {
    setExpandedCareerId(prev => prev === careerId ? null : careerId);
  };
  
  const getCareersForCluster = (clusterId: string) => {
    return careers.filter(career => career.clusterId === clusterId);
  };
  
  const handleClusterSelect = (clusterId: string) => {
    setSelectedCluster(clusterId);
    setExpandedCareerId(null);
  };
  
  const handleBackToMain = () => {
    setSelectedCluster(null);
    setExpandedCareerId(null);
  };
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-grow py-8 container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-career-purple">
            Career Library
          </h1>
          <Link 
            to="/"
            className="bg-career-purple text-white px-4 py-2 rounded-lg hover:bg-career-dark-purple transition-colors flex items-center"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Explorer
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <p className="text-gray-700">
            Browse careers by cluster or search for specific careers to learn more about them. 
            Click on any career to see detailed information about skills required and learning roadmaps.
          </p>
        </div>
        
        {!selectedCluster ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {careerClusters.map(cluster => (
              <div 
                key={cluster.id}
                className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => handleClusterSelect(cluster.id)}
              >
                <div className="flex items-center mb-2">
                  <span className="text-4xl mr-3">{cluster.icon}</span>
                  <h2 className="text-xl font-semibold text-career-purple">{cluster.title}</h2>
                </div>
                <p className="text-gray-600 text-sm">{cluster.description}</p>
                <div className="mt-2">
                  <span className="text-career-purple text-sm font-medium">
                    {getCareersForCluster(cluster.id).length} careers available
                  </span>
                </div>
              </div>
            ))}
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
                <div className="flex items-center mb-4">
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
              {getCareersForCluster(selectedCluster).map(career => (
                <div 
                  key={career.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div 
                    className={`p-4 cursor-pointer flex justify-between items-center ${
                      expandedCareerId === career.id ? 'bg-career-light-purple bg-opacity-20' : ''
                    }`}
                    onClick={() => handleToggleCareer(career.id)}
                  >
                    <div className="flex items-center">
                      <h3 className="font-semibold text-lg">{career.title}</h3>
                      <div className="ml-3 flex items-center space-x-2">
                        {career.isHighIncome && (
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                            High Income
                          </span>
                        )}
                        {career.isFutureReady && (
                          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                            Future Ready
                          </span>
                        )}
                      </div>
                    </div>
                    <div>
                      {expandedCareerId === career.id ? (
                        <ChevronUp className="h-5 w-5 text-career-purple" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-career-purple" />
                      )}
                    </div>
                  </div>
                  
                  {expandedCareerId === career.id && (
                    <div className="p-4 border-t border-gray-100">
                      <p className="text-gray-600 mb-4">{career.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="font-medium text-career-purple mb-2">Required Skills:</h4>
                        <div className="flex flex-wrap gap-2">
                          {career.skills.map(skill => (
                            <span 
                              key={skill} 
                              className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-sm"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-career-purple mb-2">Learning Roadmap:</h4>
                        <div className="space-y-2 pl-4">
                          {career.roadmap.map((step, index) => (
                            <div key={index} className="flex items-start">
                              <span className="w-6 h-6 bg-career-light-purple text-career-purple rounded-full flex items-center justify-center flex-shrink-0 mr-2">
                                {index + 1}
                              </span>
                              <p className="text-gray-700">{step}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
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
