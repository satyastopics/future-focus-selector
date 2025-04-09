
import React from 'react';
import { GraduationCap, Lightbulb, BookOpen, Library } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm py-4 px-6">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
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
          
          <Link 
            to="/library" 
            className="flex items-center text-career-purple hover:text-career-dark-purple transition-colors"
          >
            <Library className="h-5 w-5 mr-1" />
            <span>Career Library</span>
          </Link>
        </div>
        
        <div className="mt-4 p-3 bg-career-light-purple bg-opacity-20 rounded-lg border border-career-light-purple flex items-start">
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
              <BookOpen className="h-4 w-4 text-career-purple mr-2" />
              <p className="text-xs text-gray-600">
                <span className="font-semibold">How to use:</span> First, select career clusters that interest you. 
                Then choose specific careers from those clusters. Finally, review your personalized report and 
                <span className="font-semibold"> click on each career</span> to see detailed roadmaps and skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
