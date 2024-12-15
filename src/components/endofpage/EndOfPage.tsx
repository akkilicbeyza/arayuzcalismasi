import React from 'react';
import { Mail, Phone, ArrowRight, Instagram, Linkedin, Facebook, Home } from 'lucide-react';

const EndOfPage = () => {
  return (
    <footer className="bg-indigo-100 pt-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-700">
          {/* Rezilla Section */}
          <div>
            <h3 className="text-xl font-bold flex items-center gap-2 mb-4">
              <span className="bg-indigo-700 text-white p-2 rounded-full">
                <Home></Home>
              </span>
              Rezilla
            </h3>
            <p className="text-sm mb-4">
              Lorem ipsum has been the industry standard dummy text
            </p>
            <div className="flex items-center gap-2 mb-2">
              <Phone size={16} />
              <span>+90123 45 67</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>mail@mail.com</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1">
              <li>Home</li>
              <li>About</li>
              <li>Listings</li>
              <li>Services</li>
              <li>Blogs</li>
              <li>Become a Agent</li>
            </ul>
          </div>

          {/* Discovery */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Discovery</h4>
            <ul className="space-y-1">
              <li>Canada</li>
              <li>United States</li>
              <li>Germany</li>
              <li>Africa</li>
              <li>India</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              Subscribe to our Newsletter!
            </h4>
            <div className="relative mb-6">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 rounded-full bg-white border border-gray-300 focus:outline-none"
              />
              <button className="absolute top-1/2 right-1 -translate-y-1/2 bg-indigo-700 text-white rounded-full p-3 hover:bg-indigo-600">
                <ArrowRight size={16} />
              </button>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Follow Us on</h4>
              <div className="flex gap-2 text-indigo-700 text-xl">
                <a href="#">
                  <Linkedin></Linkedin>
                </a>
                <a href="#">
                  <Facebook></Facebook>
                </a>
                <a href="#">
                  <Instagram></Instagram>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-gray-300 text-center py-4 text-gray-600 text-sm">
        </div>
      </div>
    </footer>
  );
};

export default EndOfPage;
