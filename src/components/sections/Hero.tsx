import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="min-h-screen pt-32 px-6">
      <div className="container-width">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Cook with <span className="text-gradient">Balance</span> and Joy
            </h1>
            <p className="text-gray-600 text-lg mb-8 max-w-md">
              Experience the perfect harmony of fresh ingredients and effortless cooking with our curated meal kits.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/get-started" className="btn-primary flex items-center gap-2">
                Start Cooking <ArrowRight className="w-5 h-5" />
              </Link>
              <button 
                className="btn-secondary flex items-center gap-2"
                onClick={() => document.getElementById('video-modal')?.showModal()}
              >
                Watch Demo <PlayCircle className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div className="relative animate-float">
            <div className="glass-card p-8">
              <img 
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=100&w=2000"
                alt="Cooking with family"
                className="w-full h-[600px] object-cover rounded-2xl"
              />
              <div className="absolute bottom-12 -left-6 glass-card p-6 animate-pulse-slow">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="font-medium">4,000+ Happy Families</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;