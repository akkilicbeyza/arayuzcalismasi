import React, { useState, useEffect } from 'react';
import BlogCard from './BlogCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BlogList = () => {
  const blogs = [
    {
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      date: { day: 28, month: 'Mar' },
      title: 'Top 10 Home Buying Mistakes to Avoid',
      description: 'Etiam eget elementum elit. Aenean dignissim dapibus vestibulum'
    },
    {
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      date: { day: 8, month: 'Apr' },
      title: 'How to Stage Your Home for a Quick Sale',
      description: 'Nullam odio lacus, dictum quis pretium congue, vehicula venenatis nunc'
    },
    {
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      date: { day: 26, month: 'Mar' },
      title: '5 Tips for First-Time Home Sellers',
      description: 'In hac habitasse platea dictumst. Phasellus vel velit vel augue maximus.'
    },
    {
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      date: { day: 15, month: 'May' },
      title: 'How to Negotiate Your Home Purchase Price',
      description: 'Quisque vitae orci ac felis tempor mollis.'
    },
    {
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      date: { day: 22, month: 'Jun' },
      title: 'Understanding Home Inspection Reports',
      description: 'Praesent aliquet leo ut libero scelerisque tincidunt.'
    },
    {
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      date: { day: 2, month: 'Jul' },
      title: 'The Importance of Curb Appeal in Selling Your Home',
      description: 'Aliquam erat volutpat. Proin sit amet libero vitae purus iaculis.'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Get visible blogs based on the current index
  const getVisibleBlogs = () => {
    const startIndex = currentIndex * 3;
    return blogs.slice(startIndex, startIndex + 3);
  };

  // Move to next set of blogs
  const nextSlide = () => {
    if ((currentIndex + 1) * 3 < blogs.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Loop back to the first set
    }
  };

  // Move to previous set of blogs
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(Math.floor(blogs.length / 3) - 1); // Loop to the last set
    }
  };

  // Get the index of active line
  const getLineIndex = () => {
    return currentIndex % Math.ceil(blogs.length / 3);
  };

  return (
    <section className="bg-indigo-700 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-indigo-200">WHAT'S TRENDING</span>
          <h2 className="text-3xl font-bold mt-2">Latest Blogs & Posts</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {getVisibleBlogs().map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>
        
        <div className="flex justify-center gap-4 mt-8">
          {Array.from({ length: Math.ceil(blogs.length / 3) }).map((_, index) => (
            <div
              key={index}
              className={`w-12 h-1 bg-white ${getLineIndex() === index ? 'opacity-100' : 'opacity-30'}`}
            ></div>
          ))}
        </div>
        
        <div className="flex justify-center gap-4 mt-8">
          <button
            className="p-2 rounded-full bg-white/10 hover:bg-white/20"
            onClick={prevSlide}
          >
            <ChevronLeft className="text-white" size={24} />
          </button>
          <button
            className="p-2 rounded-full bg-white/10 hover:bg-white/20"
            onClick={nextSlide}
          >
            <ChevronRight className="text-white" size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogList;
