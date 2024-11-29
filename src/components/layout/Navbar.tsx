import React from 'react';
import { Search, User } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="glass-card px-6 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-12">
            <span className="text-2xl font-medium">Sahayog</span>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
              <a href="#recipes" className="text-gray-600 hover:text-gray-900">Recipes</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center bg-white/50 rounded-full px-4 py-2">
              <Search className="w-4 h-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search recipes..." 
                className="bg-transparent border-none focus:outline-none ml-2 text-sm"
              />
            </div>
            <button className="bg-white/90 hover:bg-white text-gray-900 px-5 py-2 rounded-full text-sm font-medium transition-colors">
              Get trial
            </button>
            <User className="w-5 h-5 text-gray-600 cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;