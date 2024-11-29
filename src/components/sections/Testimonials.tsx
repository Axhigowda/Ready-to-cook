import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Priya Shah",
      location: "Mumbai",
      text: "Sahayog has transformed my cooking journey. The pre-portioned ingredients and easy recipes make me feel like a chef!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      name: "Rahul Verma",
      location: "Delhi",
      text: "As a busy professional, these meal kits are a lifesaver. Restaurant-quality meals at home without the hassle!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      name: "Neha Kumar",
      location: "Bangalore",
      text: "Love the sustainable packaging and local ingredients. Making a difference while enjoying amazing meals!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="glass-card p-8 relative">
            <Quote className="absolute top-4 right-4 w-8 h-8 text-gray-300" />
            <div className="mb-8">
              <h2 className="text-3xl font-medium mb-4">What Our Community Says</h2>
              <p className="text-gray-600">Real stories from real food lovers</p>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-700">"{testimonials[currentTestimonial].text}"</p>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonials[currentTestimonial].image} 
                  alt={testimonials[currentTestimonial].name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-medium">{testimonials[currentTestimonial].name}</h3>
                  <p className="text-sm text-gray-600">{testimonials[currentTestimonial].location}</p>
                </div>
              </div>
            </div>
            <div className="flex gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-gray-800' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="glass-card p-8 aspect-square floating">
              <img 
                src="https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?auto=format&fit=crop&q=80&w=500"
                alt="Happy customer cooking"
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute bottom-4 right-4 glass-card px-4 py-2 flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm">Join our community</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;