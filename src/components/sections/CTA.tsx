import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="glass-card p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full">
            <div className="w-full h-full bg-gradient-to-l from-emerald-50/30 to-transparent" />
          </div>
          <div className="relative z-10 max-w-2xl">
            <div className="glass-card inline-flex items-center gap-2 px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-medium">Start your culinary journey</span>
            </div>
            <h2 className="text-4xl font-medium mb-6">
              Ready to Transform Your Cooking Experience?
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Join thousands of food enthusiasts who have discovered the joy of effortless cooking with Sahayog.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="glass-card bg-gray-900 text-black px-8 py-3 rounded-full font-medium hover-scale flex items-center justify-center">
                Get Started Now <ArrowRight className="ml-2 w-4 h-4" />
              </button>
              <button className="glass-card px-8 py-3 rounded-full font-medium hover-scale">
                Browse Recipes
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;