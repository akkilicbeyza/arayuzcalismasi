import React from 'react';
import { Bed, Bath, Flame } from 'lucide-react';

interface PropertyCardProps {
  image: string;
  price: number;
  title: string;
  location: string;
  beds: number;
  baths: number;
  tag?: {
    text: string;
    type: 'popular' | 'new' | 'discounted';
  };
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  image,
  price,
  title,
  location,
  beds,
  baths,
  tag
}) => {
  const tagColors = {
    popular: 'bg-red-100 text-red-600',
    new: 'bg-blue-100 text-blue-600',
    discounted: 'bg-green-100 text-green-600'
  };

  const TagIcon = tag?.type === 'popular' ? Flame : null;

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover"
        />
        {tag && (
          <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm ${tagColors[tag.type]} flex items-center gap-1`}>
            {TagIcon && <TagIcon size={16} />}
            {tag.text}
          </span>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-2xl font-bold">${price.toLocaleString()}</span>
          {price > 5000 && <span className="text-gray-500">/month</span>}
        </div>
        
        <h3 className="font-semibold mb-1 hover:text-indigo-700 transition-colors duration-200">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-4">{location}</p>
        
        <div className="flex items-center gap-4 text-gray-600">
          <div className="flex items-center gap-1">
            <Bed size={18} />
            <span>{beds} Beds</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath size={18} />
            <span>{baths} Bath</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;