import React from 'react';

interface TestimonialCardProps {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ content, author, rating }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <div className="mb-4">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={`text-${i < rating ? 'yellow' : 'gray'}-400`}>★</span>
        ))}
      </div>
      
      <blockquote className="text-gray-600 mb-6">"{content}"</blockquote>
      
      <div className="flex items-center gap-3">
        <img 
          src={author.avatar} 
          alt={author.name}
          className="w-10 h-10 rounded-full"
        />
        <span className="font-medium">{author.name}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;