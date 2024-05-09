import React from 'react';
import { FaSearch, FaBell } from 'react-icons/fa'; // Assuming you're using react-icons for icons

export default function Header() {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Header</h1>
        <div className="flex items-center">
          <div className="relative">
            <input type="text" className="bg-gray-700 text-white px-3 py-1 rounded-md focus:outline-none" placeholder="Search..." />
            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <div className="ml-4">
            <img src="/Camera Roll/WIN_20240429_12_48_11_Pro.jpg" className="w-8 h-8 rounded-full" />
          </div>
          <div className="ml-4">
            <FaBell className="text-2xl text-gray-400" />
          </div>
        </div>
      </div>
    </header>
  );
}
