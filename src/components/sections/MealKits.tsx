import React from 'react';
import { ShoppingBag, Plus, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const MealKits = () => {
  const mealKits = [
    {
      id: 1,
      name: "Family Butter Chicken",
      description: "A rich, creamy classic perfect for family dinner",
      price: "₹899",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=100&w=2000",
      rating: 4.9,
      serves: 4
    },
    {
      id: 2,
      name: "Bangalore Style Paneer",
      description: "Local favorite with authentic spices",
      price: "₹699",
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=100&w=2000",
      rating: 4.8,
      serves: 3
    },
    {
      id: 3,
      name: "Garden Fresh Bowl",
      description: "Nutrient-packed seasonal vegetables",
      price: "₹549",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=100&w=2000",
      rating: 4.7,
      serves: 2
    }
  ];

  return (
    <section className="section-padding" id="meal-kits">
      <div className="container-width">
        <div className="flex justify-between items-end mb-12">
          <div className="animate-slide-in">
            <h2 className="text-4xl font-bold mb-4">Explore Our Meal Kits</h2>
            <p className="text-gray-600">Curated recipes with premium ingredients</p>
          </div>
          <Link to="/all-meals" className="btn-secondary flex items-center gap-2">
            View All <Plus className="w-5 h-5" />
          </Link>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {mealKits.map((kit) => (
            <div key={kit.id} className="glass-card overflow-hidden hover-scale animate-fade-scale">
              <div className="relative">
                <img 
                  src={kit.image} 
                  alt={kit.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 glass-card px-4 py-2 flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="font-medium">{kit.rating}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{kit.name}</h3>
                <p className="text-gray-600 mb-4">{kit.description}</p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-2xl font-bold text-green-600">{kit.price}</p>
                    <p className="text-sm text-gray-500">Serves {kit.serves}</p>
                  </div>
                  <Link to={`/meal/${kit.id}`} className="btn-primary flex items-center gap-2">
                    Order Now <ShoppingBag className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MealKits;