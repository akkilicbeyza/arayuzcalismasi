import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Left Section */}
        <div className="text-gray-400 text-sm">
          <p>&copy; Company – All rights reserved</p>
        </div>
        {/* Right Section */}
        <div className="text-gray-400 text-sm space-x-4">
          <a href="#" className="hover:text-indigo-700">
            Terms and Conditions
          </a>
          <a href="#" className="hover:text-indigo-700">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-indigo-700">
            Disclaimer
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
