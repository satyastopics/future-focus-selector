
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Compass, BookOpen } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <span className="font-bold text-xl text-career-purple">Career Explorer</span>
          </Link>
          
          <nav>
            <ul className="flex space-x-1 md:space-x-4">
              <li>
                <Link to="/">
                  <Button 
                    variant={location.pathname === '/' ? 'default' : 'ghost'}
                    size={isMobile ? 'sm' : 'default'}
                    className={location.pathname === '/' ? 'bg-career-purple hover:bg-career-dark-purple' : ''}
                  >
                    Home
                  </Button>
                </Link>
              </li>
              <li>
                <Link to="/explorer">
                  <Button 
                    variant={location.pathname === '/explorer' ? 'default' : 'ghost'}
                    size={isMobile ? 'sm' : 'default'}
                    className={`flex items-center gap-1 ${location.pathname === '/explorer' ? 'bg-career-purple hover:bg-career-dark-purple' : ''}`}
                  >
                    <Compass className="h-4 w-4" />
                    <span className={isMobile ? 'hidden' : 'inline'}>Explorer</span>
                  </Button>
                </Link>
              </li>
              <li>
                <Link to="/library">
                  <Button 
                    variant={location.pathname === '/library' ? 'default' : 'ghost'}
                    size={isMobile ? 'sm' : 'default'}
                    className={`flex items-center gap-1 ${location.pathname === '/library' ? 'bg-career-purple hover:bg-career-dark-purple' : ''}`}
                  >
                    <BookOpen className="h-4 w-4" />
                    <span className={isMobile ? 'hidden' : 'inline'}>Library</span>
                  </Button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
