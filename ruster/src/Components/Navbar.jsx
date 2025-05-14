import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-bold">Portfolio</a>
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        <div className={`md:flex ${isOpen ? 'block' : 'hidden'} absolute md:static top-16 left-0 right-0 bg-blue-600 md:bg-transparent p-4 md:p-0`}>
          <a href="#home" className="block md:inline-block mx-2 py-2 hover:text-blue-200">Home</a>
          <a href="#about" className="block md:inline-block mx-2 py-2 hover:text-blue-200">About</a>
          <a href="#projects" className="block md:inline-block mx-2 py-2 hover:text-blue-200">Projects</a>
          <a href="#skills" className="block md:inline-block mx-2 py-2 hover:text-blue-200">Skills</a>
          <a href="#contact" className="block md:inline-block mx-2 py-2 hover:text-blue-200">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;