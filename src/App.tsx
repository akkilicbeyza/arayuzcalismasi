import React from 'react';
import Header from './components/layout/Header';
import HeroSection from './components/home/HeroSection';
import AboutSection from './components/home/AboutSection';
import PropertyList from './components/properties/PropertyList';
import BlogList from './components/blog/BlogList';
import TestimonialList from './components/testimonials/TestimonialList';
import EndOfPage from './components/endofpage/EndOfPage';
import Footer from './components/endofpage/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <PropertyList />
        <BlogList />
        <TestimonialList />
        <EndOfPage />
        <Footer />
      </main>
    </div>
  );
}

export default App;