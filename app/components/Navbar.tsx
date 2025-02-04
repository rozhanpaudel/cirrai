'use client';
import Link from 'next/link';
import Image from 'next/image';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <button onClick={() => scrollToSection('hero')} className="flex items-center">
              <span className="text-2xl font-bold gradient-text">CirrAI</span>
            </button>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('research')}
              className="text-gray-700 hover:text-primary"
            >
              Research
            </button>
            <button 
              onClick={() => scrollToSection('dataset')}
              className="text-gray-700 hover:text-primary"
            >
              Dataset
            </button>
            <button 
              onClick={() => scrollToSection('technology')}
              className="text-gray-700 hover:text-primary"
            >
              Technology
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-primary"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-primary text-white px-4 py-2 rounded-full hover:bg-opacity-90 transition"
            >
              Contact Us
            </button>
          </div>
          
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
} 