import React from 'react';
import { Leaf, Clock, Heart } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Fresh & Local",
      description: "Ingredients sourced directly from local farmers"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Time-Saving",
      description: "Pre-measured ingredients for quick preparation"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Healthy Living",
      description: "Nutritionist-approved balanced meals"
    }
  ];

  return (
    <section className="py-20 px-6" id="features">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="glass-card p-6 hover-scale">
              <div className="bg-white/50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;