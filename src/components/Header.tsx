
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
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link to="/">
                    <Button variant="outline" size={isMobile ? "sm" : "default"} className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4" />
                      <span>Explorer</span>
                    </Button>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Select careers based on your interests</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link to="/library">
                    <Button 
                      variant="default" 
                      size={isMobile ? "sm" : "default"}
                      className="flex items-center gap-1 bg-career-purple hover:bg-career-dark-purple relative overflow-hidden group"
                    >
                      <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                      <Library className="h-4 w-4" />
                      <span>Career Library</span>
                    </Button>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Browse all careers by category</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-career-light-purple bg-opacity-20 rounded-lg border border-career-light-purple flex flex-col md:flex-row md:items-start">
          <Lightbulb className="h-5 w-5 text-career-purple mr-2 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm text-gray-700 mb-2">
              Future-ready careers require a mix of <span className="font-medium">STEM knowledge</span>, 
              <span className="font-medium"> technology skills</span>, and 
              <span className="font-medium"> entrepreneurial thinking</span>. 
              Select clusters that match your interests to discover careers with high income potential 
              and the skills needed for success.
            </p>
            <p className="text-sm text-gray-700 mb-2">
              <span className="font-medium">Many high-income careers</span> can be achieved through 
              <span className="font-medium"> self-learning</span> using free online resources, tutorials, 
              and hands-on projects - without needing expensive degrees.
            </p>
            <div className="flex items-center mt-3 bg-white p-2 rounded-md border border-gray-200">
              <Info className="h-4 w-4 text-career-purple mr-2 flex-shrink-0" />
              <div>
                <p className="text-xs text-gray-600">
                  <span className="font-semibold">How to use:</span> First, select career clusters that interest you. 
                  Then choose specific careers from those clusters. Finally, review your personalized report and 
                  <span className="font-semibold"> click on each career</span> to see detailed roadmaps and skills.
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  <span className="font-semibold">Alternative approach:</span> Use the <span className="font-semibold">Career Library</span> to 
                  browse all careers by category. Click on any career to see detailed information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
