import React, { useState } from 'react';
import TestimonialCard from './TestimonialCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialList = () => {
  const testimonials = [
    {
      content: "Lorem ipsum has been the industry's standard dummy text since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
      author: {
        name: 'Barbara D. Smith',
        avatar: 'https://i.pravatar.cc/150?img=1'
      },
      rating: 4
    },
    {
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu.",
      author: {
        name: 'John Doe',
        avatar: 'https://i.pravatar.cc/150?img=2'
      },
      rating: 5
    },
    {
      content: "Vestibulum ullamcorper magna ut elit efficitur, in malesuada metus gravida.",
      author: {
        name: 'Jane Doe',
        avatar: 'https://i.pravatar.cc/150?img=3'
      },
      rating: 3
    },
    {
      content: "Curabitur venenatis lectus nec turpis facilisis, at tristique leo tempor.",
      author: {
        name: 'Samuel Adams',
        avatar: 'https://i.pravatar.cc/150?img=4'
      },
      rating: 4
    },
    {
      content: "Fusce sollicitudin leo non lacus volutpat, eu iaculis sapien varius.",
      author: {
        name: 'Emily White',
        avatar: 'https://i.pravatar.cc/150?img=5'
      },
      rating: 5
    }
  ];

  // State for managing the current testimonial index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Get the current testimonial to display
  const getVisibleTestimonial = () => {
    return testimonials[currentIndex];
  };

  // Handle next button click
  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  // Handle previous button click
  const prevSlide = () => {
    setCurrentIndex(
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
    );
  };

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex justify-between items-start">
        <div className="max-w-md">
          <span className="text-indigo-700">TESTIMONIALS</span>
          <h2 className="text-3xl font-bold mt-2 mb-4">
            Look What Our Customers Say!
          </h2>
          <p className="text-gray-600">
            Fusce venenatis tellus a felis scelerisque, non pulvinar est pellentesque.
          </p>
        </div>
        
        <div className="flex gap-2">
          <button
            className="p-2 rounded-full border border-gray-200 hover:bg-gray-50"
            onClick={prevSlide}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="p-2 rounded-full border border-gray-200 hover:bg-gray-50"
            onClick={nextSlide}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
      
      <div className="mt-12 flex items-center justify-end gap-8">
        {/* Testimonial Card */}
        <div className="max-w-lg">
          <TestimonialCard {...getVisibleTestimonial()} />
        </div>
        
        {/* Vertical Lines */}
        <div className="flex flex-col justify-center gap-2">
          {Array.from({ length: testimonials.length }).map((_, index) => (
            <div
              key={index}
              className={`w-1 h-10 ${index === currentIndex ? 'bg-indigo-700' : 'bg-gray-300'}`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialList;
