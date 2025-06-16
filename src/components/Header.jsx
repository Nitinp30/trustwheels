import React from 'react';

const Header = () => (
  <header className="bg-white shadow-sm border-b">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center space-x-8">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            TRUSTWHEELS
          </h1>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900">How it works</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Locations</a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-gray-900">Log in</button>
        </div>
      </div>
    </div>
  </header>
);

export default Header;