import React from 'react';
import { Search } from 'lucide-react';

const PropertySearch = () => {
  return (
    <div className="w-[400px] bg-white p-6 rounded-2xl shadow-lg h-fit">
      <div className="flex gap-8 mb-6">
        <button className="text-indigo-700 border-b-2 border-indigo-700 pb-2 font-medium">
          For Sale
        </button>
        <button className="text-gray-400 pb-2">
          For Rent
        </button>
      </div>
      
      <div className="space-y-4">
        <input
          type="text"
          placeholder="New York, San Francisco, etc"
          className="w-full p-4 bg-gray-50 rounded-lg"
        />
        
        <select className="w-full p-4 bg-gray-50 rounded-lg text-gray-400">
          <option value="">Select Property Type</option>
          <option value="house">House</option>
          <option value="apartment">Apartment</option>
          <option value="condo">Condo</option>
        </select>
        
        <select className="w-full p-4 bg-gray-50 rounded-lg text-gray-400">
          <option value="">Select Rooms</option>
          <option value="1">1 Room</option>
          <option value="2">2 Rooms</option>
          <option value="3">3 Rooms</option>
          <option value="4">4+ Rooms</option>
        </select>
        
        <button className="text-indigo-700 flex items-center gap-2 mb-4">
          <span>Advance Search</span>
        </button>
        
        <button className="w-full bg-indigo-700 text-white py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-indigo-800">
          <Search size={20} />
          Search
        </button>
      </div>
    </div>
  );
};

export default PropertySearch;