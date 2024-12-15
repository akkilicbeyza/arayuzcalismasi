import React from 'react';
import { Users } from 'lucide-react';

const Stats = () => {
  return (
    <div className="flex gap-8 mt-12">
      <div className="flex items-center gap-2">
        <div className="flex -space-x-2">
          {[...Array(5)].map((_, i) => (
            <img
              key={i}
              src={`https://i.pravatar.cc/40?img=${i + 1}`}
              alt="Customer"
              className="w-8 h-8 rounded-full border-2 border-white"
            />
          ))}
        </div>
        <div>
          <p className="font-semibold">72k+ Happy</p>
          <p className="text-gray-600">Customers</p>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
          <Users className="text-indigo-700" size={20} />
        </div>
        <div>
          <p className="font-semibold">200+ New</p>
          <p className="text-gray-600">Listings Everyday!</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;