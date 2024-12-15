import React from 'react';
import PropertyCard from './PropertyCard';

const PropertyList = () => {
  const properties = [
    {
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9',
      price: 5970,
      title: 'Tranquil Haven in the Woods',
      location: '123 Wright Columbian, WA 98683',
      beds: 4,
      baths: 3,
      tag: { text: 'Popular', type: 'popular' as const }
    },
    {
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
      price: 1970,
      title: 'Serene Retreat by the Lake',
      location: '1234 Sandston Drive, VA 22408',
      beds: 3,
      baths: 2,
      tag: { text: 'New Listing', type: 'new' as const }
    },
    {
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3',
      price: 3450,
      title: 'Charming Cottage in the Meadow',
      location: '1523 Centennial Farm Roadvision, 08837',
      beds: 4,
      baths: 4,
      tag: { text: 'Discounted Price', type: 'discounted' as const }
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-8">
        <div>
          <span className="text-indigo-700">CHECKOUT OUR NEW</span>
          <h2 className="text-3xl font-bold mt-2">Latest Listed Properties</h2>
          <p className="text-gray-600 mt-2">
            Donec porttitor euismod dignissim. Nullam a lacinia ipsum
          </p>
        </div>
        
        <div className="flex gap-2">
          <button className="px-4 py-2 rounded-full bg-indigo-700 text-white">
            All
          </button>
          <button className="px-4 py-2 rounded-full text-gray-600 hover:bg-gray-100">
            Sell
          </button>
          <button className="px-4 py-2 rounded-full text-gray-600 hover:bg-gray-100">
            Rent
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property, index) => (
          <PropertyCard key={index} {...property} />
        ))}
      </div>
    </section>
  );
};

export default PropertyList;