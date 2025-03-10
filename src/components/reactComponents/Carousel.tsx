'use client';

import { useState, useEffect, useCallback } from 'react';
import images from '../../constants/products/images';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = images.length;
  const [touchStartX, setTouchStartX] = useState(0);

  const updateSlide = useCallback((newSlide: number) => {
    setCurrentSlide(newSlide);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const previousSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > 50) {
      diff > 0 ? nextSlide() : previousSlide();
    }
  };

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') previousSlide();
  }, [nextSlide, previousSlide]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className="relative group flex flex-col justify-center gap-4 mt-8 md:min-w-88 md:max-w-102 lg:w-9/12 md:w-11/12">
      {/* Carousel Container */}
      <div
        id="carousel"
        className="relative overflow-hidden aspect-square md:aspect-square md:w-full md:rounded-xl"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={images[currentSlide]}
          alt={`Product view ${currentSlide + 1}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Navigation Controls */}
      <div className="absolute inset-0 flex items-center justify-between p-4 md:hidden">
        <button
          type="button"
          onClick={previousSlide}
          className="h-8 w-8 rounded-full bg-white/80 shadow-md hover:bg-white transition-colors flex items-center justify-center cursor-pointer z-10"
          aria-label="Previous image"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          type="button"
          onClick={nextSlide}
          className="h-8 w-8 rounded-full bg-white/80 shadow-md hover:bg-white transition-colors flex items-center justify-center cursor-pointer z-10"
          aria-label="Next image"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 md:hidden">
        {images.map((_, index) => (
          <button
            key={`indicator-${index}`}
            onClick={() => updateSlide(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              index === currentSlide ? "bg-white scale-125" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Thumbnail Grid for MD and above */}
      <div className="hidden md:grid md:grid-cols-4 md:gap-8 md:mt-4">
        {images.map((image, index) => (
          <div
            key={`thumbnail-${index}`}
            className="cursor-pointer overflow-hidden rounded-xl aspect-square relative"
            onClick={() => updateSlide(index)}
          >
            <img
              src={image}
              alt={`Product view ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
