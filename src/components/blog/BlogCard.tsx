import React from 'react';

interface BlogCardProps {
  image: string;
  date: {
    day: number;
    month: string;
  };
  title: string;
  description: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ image, date, title, description }) => {
  return (
    <div className="group">
      <div className="relative rounded-2xl overflow-hidden mb-4">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4 bg-white rounded-lg px-3 py-1 text-sm">
          <span className="font-bold">{date.day}</span>
          <span className="text-gray-500"> {date.month}</span>
        </div>
      </div>
      
      <h3 className="font-semibold text-lg mb-2 group-hover:text-indigo-700 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default BlogCard;