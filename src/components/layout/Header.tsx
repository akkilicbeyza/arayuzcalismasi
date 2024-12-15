import React from 'react';
import { Mail, Phone, Home, MapPin, CircleUser } from 'lucide-react';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header>
      <div className="bg-indigo-700 text-white py-2 px-4">
      <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <p>Lorem ipsum has been the industry's standard dummy</p>
          </div>
          <div className="flex items-center gap-6">
            <a href="tel:+90123456789" className="flex items-center gap-2">
              <Phone size={16} />
              +90123 45 67
            </a>
            <a href="mailto:mail@mail.com" className="flex items-center gap-2">
              <Mail size={16} />
              mail@mail.com
            </a>
          </div>
        </div>
      </div>
      
      <nav className="container mx-auto py-4 px-4">
        <div className="flex items-center justify-between">
          <Navigation />
          
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-700 text-white">
              <Home size={24} />
            </div>
            <span className="text-xl font-bold">Logo</span>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="text-gray-700 hover:text-indigo-700">
              <div className="flex items-center gap-2">
                <CircleUser/>
                <p>Login/Register</p>
              </div>
            </button>
            <button className="bg-indigo-700 text-white px-4 py-2 rounded-full hover:bg-indigo-800">
              <div className="flex items-center gap-2">
                <Home/>
                <p>Add Listing</p>
              </div>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;