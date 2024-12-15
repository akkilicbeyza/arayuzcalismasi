import React, { useState } from 'react';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';
import PropertySearch from './PropertySearch';
import Stats from './Stats';

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Fotoğraf index'ini tutacak state

  // Fotoğrafların listesi
  const images = [
    "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
    "https://i.hizliresim.com/cyvzq2i.jpg?_gl=1*1op50r0*_ga*MjEyNTkwMTE0MC4xNzM0Mjc0Nzg5*_ga_M9ZRXYS2YN*MTczNDI3NDc4OS4xLjEuMTczNDI3NDg3MS40NS4wLjA.",
    "https://i.hizliresim.com/kc6fr6i.jpg?_gl=1*zeoz2x*_ga*MjEyNTkwMTE0MC4xNzM0Mjc0Nzg5*_ga_M9ZRXYS2YN*MTczNDI3NDc4OS4xLjEuMTczNDI3NTA4Ny41Mi4wLjA.",
  ];

  // Fotoğrafı bir sonraki resme kaydırma
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); // index'i artır ve eğer son fotoğrafa gelindiyse başa dön
  };

  // Fotoğrafı bir önceki resme kaydırma
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length); // index'i azalt ve eğer ilk fotoğrafa gelindiyse son fotoğrafa dön
  };

  return (
    <div className="container mx-auto px-4 py-12 flex gap-12">
      <div className="flex-1">
        <span className="text-indigo-700 font-medium">REAL ESTATE</span>
        <h1 className="text-5xl font-bold mt-4 mb-6">
          Find a perfect<br />home you love..!
        </h1>
        <p className="text-gray-600 mb-8">
          Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
        </p>
        
        <div className="relative rounded-2xl overflow-hidden">
          <img 
            src={images[currentImageIndex]}  // Şu anki fotoğrafı göster
            alt="Luxury bedroom"
            className="w-full h-[400px] object-cover rounded-2xl"
          />
          <div className="absolute bottom-6 left-6 flex gap-2">
            {images.map((_, index) => (
              <button 
                key={index} 
                className={`w-3 h-3 ${currentImageIndex === index ? 'bg-indigo-700' : 'bg-white/50'} rounded-full`} 
              />
            ))}
          </div>
          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
            onClick={prevImage}  // Sol ok tuşu
          >
            <ChevronLeft className="text-gray-600" size={20} />
          </button>
          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
            onClick={nextImage}  // Sağ ok tuşu
          >
            <ChevronRight className="text-gray-600" size={20} />
          </button>
        </div>
        
        <Stats />
      </div>
      
      <PropertySearch />
    </div>
  );
};

export default HeroSection;
