import React from 'react';

const Navigation = () => {
  const navItems = ['Home', 'About', 'Listings', 'Services', 'Blogs'];
  
  return (
    <ul className="flex gap-6">
      {navItems.map((item) => (
        <li key={item}>
          <a
            href={`#${item.toLowerCase()}`}
            className={`${
              item === 'Home' 
                ? 'bg-indigo-100 text-indigo-700' 
                : 'text-gray-600 hover:text-indigo-700'
            } px-4 py-2 rounded-full`}
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;