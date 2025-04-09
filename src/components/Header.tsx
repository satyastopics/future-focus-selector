
import React from 'react';
import { GraduationCap, Lightbulb } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm py-4 px-6">
      <div className="container mx-auto">
        <div className="flex items-center">
          <GraduationCap className="h-8 w-8 text-career-purple mr-3" />
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-career-purple">
              Career Explorer
            </h1>
            <p className="text-gray-600 mt-1">
              Discover your future path
            </p>
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-career-light-purple bg-opacity-20 rounded-lg border border-career-light-purple flex items-start">
          <Lightbulb className="h-5 w-5 text-career-purple mr-2 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-gray-700">
            Future-ready careers require a mix of <span className="font-medium">STEM knowledge</span>, 
            <span className="font-medium"> technology skills</span>, and 
            <span className="font-medium"> entrepreneurial thinking</span>. 
            Select clusters that match your interests to discover careers with high income potential 
            and the skills needed for success.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
