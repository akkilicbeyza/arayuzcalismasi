import React from 'react';
import { Home, Users } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <span className="text-indigo-700">WHO ARE WE</span>
      <h2 className="text-3xl font-bold mt-2 mb-4">
        Assisting individuals in locating the appropriate real estate.
      </h2>
      <p className="text-gray-600 max-w-2xl mb-8">
        Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it
      </p>
      
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-8">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center shrink-0">
              <Home className="text-indigo-700" />
            </div>
            <div>
              <h3 className="font-semibold mb-2">Lorem ipsum has been the</h3>
              <p className="text-gray-600">when an unknown printer took a gallery</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center shrink-0">
              <Users className="text-indigo-700" />
            </div>
            <div>
              <h3 className="font-semibold mb-2">Lorem ipsum has been the</h3>
              <p className="text-gray-600">when an unknown printer took a gallery</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <img 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            alt="Modern home exterior"
            className="rounded-2xl h-48 object-cover"
          />
          <img 
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            alt="Cozy bedroom"
            className="rounded-2xl h-48 object-cover"
          />
          <img 
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            alt="Modern pool"
            className="rounded-2xl h-48 object-cover"
          />
          <img 
            src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            alt="Living room"
            className="rounded-2xl h-48 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;