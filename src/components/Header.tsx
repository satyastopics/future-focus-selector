
import React from 'react';

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm py-4 px-6">
      <div className="container mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-career-purple">
          Career Explorer
        </h1>
        <p className="text-gray-600 mt-1">
          Discover your future path
        </p>
      </div>
    </header>
  );
};

export default Header;
