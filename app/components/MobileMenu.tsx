'use client';
import { useState } from 'react';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2"
        aria-label="Toggle menu"
      >
        <div className={`w-6 h-0.5 bg-gray-800 transition-all ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
        <div className={`w-6 h-0.5 bg-gray-800 mt-1.5 ${isOpen ? 'opacity-0' : ''}`} />
        <div className={`w-6 h-0.5 bg-gray-800 mt-1.5 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-lg p-4">
          <div className="flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('research')}
              className="text-gray-700 hover:text-primary px-4 py-2 text-left"
            >
              Research
            </button>
            <button 
              onClick={() => scrollToSection('dataset')}
              className="text-gray-700 hover:text-primary px-4 py-2 text-left"
            >
              Dataset
            </button>
            <button 
              onClick={() => scrollToSection('technology')}
              className="text-gray-700 hover:text-primary px-4 py-2 text-left"
            >
              Technology
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-primary px-4 py-2 text-left"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-primary text-white px-4 py-2 rounded-full hover:bg-opacity-90 transition text-center"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 