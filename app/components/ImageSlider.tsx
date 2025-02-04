'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface ImageSliderProps {
  images: {
    src: string;
    alt: string;
    caption: string;
  }[];
}

export default function ImageSlider({ images }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-[400px] bg-white rounded-xl shadow-sm overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-500 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="relative w-full h-[350px]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-contain"
            />
          </div>
          <p className="text-center text-gray-600 mt-2">{image.caption}</p>
        </div>
      ))}
      
      {/* Navigation dots */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-primary w-4' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
} 