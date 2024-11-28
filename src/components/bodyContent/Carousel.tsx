import React, { useState, useEffect } from "react";
import "./Carousel.css";

interface CarouselProps {
  items: React.ReactNode[];
}

export const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideWidth = 100 / 3; // Percentage width for 3 slides per view
  const totalItems = items.length;

  // Navigate to the next slide, ensuring the last view is partial if needed
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < totalItems - 3 ? prevIndex + 1 : prevIndex
    );
  };

  // Navigate to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="carousel">
      {/* Navigation Buttons */}
      <button
        className="carousel-button left"
        onClick={prevSlide}
        disabled={currentIndex === 0}
      >
        &#8249;
      </button>
      <button
        className="carousel-button right"
        onClick={nextSlide}
        disabled={currentIndex === totalItems - 3}
      >
        &#8250;
      </button>

      {/* Carousel Track */}
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${currentIndex * slideWidth}%)` }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              flex: `0 0 ${slideWidth}%`,
              marginRight: 10,
              padding: 4,
            }}
            className="border border-gray-400 p-4 rounded-lg"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
