

import React from 'react';
import KitchenetteLogo from '../../assets/images/Kitchenette.jpg';

interface FoodTruck {
  name: string;
  logo: string;
  description?: string;
}

const FOOD_TRUCKS: FoodTruck[] = [
  {
    name: 'Kitchenette',
    logo: KitchenetteLogo,
    description: 'Enjoy a variety of delicious eats from Kitchenette! From classic comfort food to unique culinary creations, there’s something for everyone.'
  }
  // Add more food trucks here as needed
];

const FoodTruckSection: React.FC = () => {
  return (
    <section className="my-12">
      <div className="max-w-2xl mx-auto bg-white/10 rounded-2xl shadow-lg p-8 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-6 text-tart-purple">Featured Food Trucks</h2>
        <div className="flex flex-col gap-8 w-full items-center">
          {FOOD_TRUCKS.map((truck, idx) => (
            <div key={truck.name + idx} className="flex flex-col items-center w-full">
              <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center mb-4 border-4 border-dashed border-tart-mint overflow-hidden">
                <img
                  src={truck.logo}
                  alt={truck.name + ' logo'}
                  className="object-cover w-full h-full rounded-full"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-tart-mint mb-1">{truck.name}</h3>
                <p className="text-gray-100 mb-2">
                  {truck.description || 'Enjoy a variety of delicious eats from our festival food trucks!'}
                </p>
              </div>
            </div>
          ))}
        </div>
        <span className="text-tart-mint font-medium mt-6">Stay tuned for our 2025 food truck lineup!</span>
      </div>
    </section>
  );
};

export default FoodTruckSection;
