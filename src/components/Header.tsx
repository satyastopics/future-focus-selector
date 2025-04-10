
import React from 'react';
import { GraduationCap, Lightbulb, BookOpen, Library, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const Header = () => {
  const isMobile = useIsMobile();
  
  return (
    <header className="w-full bg-white shadow-sm py-4 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center">
            <GraduationCap className="h-8 w-8 text-career-purple mr-3" />
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-career-purple">
                Career Explorer
              </h1>
              <p className="text-gray-600 mt-1 text-sm md:text-base">
                Discover your future path
              </p>
            </div>
          </div>
          
          <div className="mt-4 md:mt-0 flex flex-wrap items-center gap-3">
            <Link to="/">
              <Button 
                variant="outline" 
                size={isMobile ? "sm" : "default"} 
                className="flex items-center gap-1 transition-all duration-200 hover:bg-gray-100"
              >
                <BookOpen className="h-4 w-4" />
                <span>Career Explorer</span>
              </Button>
            </Link>
            
            <Link to="/library">
              <Button 
                variant="default" 
                size={isMobile ? "sm" : "default"}
                className="flex items-center gap-1 bg-career-purple hover:bg-career-dark-purple relative overflow-hidden group transition-all duration-300"
              >
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <Library className="h-4 w-4" />
                <span>Browse All Careers</span>
                {isMobile ? null : (
                  <span className="ml-1 animate-pulse bg-yellow-100 text-yellow-800 text-xs px-1 py-0.5 rounded">
                    New
                  </span>
                )}
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-career-light-purple bg-opacity-20 rounded-lg border border-career-light-purple flex flex-col md:flex-row md:items-start">
          <Lightbulb className="h-5 w-5 text-career-purple mr-2 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm text-gray-700 mb-2">
              Find your ideal career path with our explorer tool. All careers in our database are 
              <span className="font-medium"> high-income and future-ready</span> with detailed growth paths.
            </p>
            
            <div className="bg-white p-3 rounded-md border border-gray-200 mt-2">
              <h3 className="font-medium text-career-purple text-sm mb-2 flex items-center">
                <Info className="h-4 w-4 mr-1.5" />
                Two Ways to Explore:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-start">
                  <span className="bg-career-purple text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 flex-shrink-0 mt-0.5">1</span>
                  <div>
                    <p className="text-xs font-medium text-gray-800">Career Explorer (current page)</p>
                    <p className="text-xs text-gray-600">Select clusters and careers for a personalized report</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-career-purple text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 flex-shrink-0 mt-0.5">2</span>
                  <div>
                    <p className="text-xs font-medium text-gray-800">Career Library</p>
                    <p className="text-xs text-gray-600">Browse all careers directly by category</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
